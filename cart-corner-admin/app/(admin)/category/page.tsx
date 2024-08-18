"use client";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import {
  useCategoryCreateMutation,
  useCategoryDeleteMutation,
  useCategoryListQuery,
} from "@/src/redux/api/categoryApi";
import { categorySchemas } from "@/src/schemas/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Table from "@/src/components/Table/Table";
import { useState } from "react";
import DeleteModal from "@/src/components/ui/DeleteModal";
interface formValues {
  name: string;
  description: string;
}
const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTempId, setTempId] = useState<number>(0);

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
      width:'180px'
    },
    {
      name: "Description",
      selector: (row: any) => row.description,
      sortable: true,
      width:'200px'
    },
    {
      name: "Actions",
       width:'100px',
      cell: (row: any, index: any, column: any, id: any) => (
        <>
          <div
            className="text-blue-500 text-xl cursor-pointer"
            onClick={() => editRow(row.id)}
          >
            <FaRegEdit />
          </div>
          &nbsp; | &nbsp;
          <div
            className="text-red-500 text-xl cursor-pointer"
            onClick={() => handleDelete(row.id)}
          >
            <AiOutlineDelete />
          </div>
        </>
      ),
    },
  ];

  const { data, isLoading, refetch } = useCategoryListQuery({});

  const [categoryCreate] = useCategoryCreateMutation();
  const [categoryDelete] = useCategoryDeleteMutation();
  const onSubmit: SubmitHandler<formValues> = async (categoryData) => {
    try {
      const res = await categoryCreate(categoryData);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const editRow = (categoryId: string) => {
    alert(data);
  };

  //need to optimize more, delete functionality
  const DeleteRow = async () => {
    if (isTempId > 0) {
      const res = await categoryDelete(isTempId);
      if (res) {
        refetch();
      }
    }
  };
  const handleDelete = (categoryId: number) => {
    setTempId(categoryId);
    setIsModalOpen(true);
  };

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4">
      <div className="bg-white shadow-md rounded p-6 mb-4 sm:mb-0">
        <h3>Add new Category</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit} resolver={yupResolver(categorySchemas)}>
          <FormInput name="name" type="text" placeholder="Name" label="Name" />
          <FormTextArea name="description" rows={7} label="Description" />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </Form>
      </div>
      <div className=" col-span-2 bg-white shadow-md rounded p-6">
        <h3>Category List</h3>
        <hr className="my-2" />
        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onDelete={DeleteRow}
      />
    </div>
  );
};

export default Category;
