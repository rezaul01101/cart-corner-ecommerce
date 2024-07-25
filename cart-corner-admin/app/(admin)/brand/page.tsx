"use client";
import BrandTable from "@/src/components/Brand/BrandTable";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import Table from "@/src/components/Table/Table";
import DeleteModal from "@/src/components/ui/DeleteModal";
import {
  useBrandCreateMutation,
  useBrandDeleteMutation,
  useBrandListQuery,
} from "@/src/redux/api/brandApi";
import { brandSchemas } from "@/src/schemas/brand";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
interface formValues {
  name: string;
  description: string;
  file: any;
}
const Brand = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTempId, setTempId] = useState<number>(0);

  const columns = [
    {
      name: "Name",
      selector: (row:any) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row:any) => row.description,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: any, index: any, column: any, id: any) => (
        <>
          <div className="text-blue-500 text-xl cursor-pointer" onClick={()=>editRow(row.id)}>
            <FaRegEdit />
          </div>
          &nbsp; | &nbsp;
          <div className="text-red-500 text-xl cursor-pointer" onClick={()=>handleDelete(row.id)}>
            <AiOutlineDelete />
          </div>
        </>
      ),
    },
  ];

  const { data, refetch } = useBrandListQuery({});
  const [brandCreate] = useBrandCreateMutation();
  const [brandDelete] = useBrandDeleteMutation();

  const onSubmit: SubmitHandler<formValues> = async (brandData) => {
    // const formData = new FormData();
    // formData.append("file", brandData["file"] as Blob);
    // formData.append("name", brandData["name"]);
    // formData.append("description", brandData["description"]);
    try {
      const res = await brandCreate(brandData);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const editRow=(data:string)=>{
    alert(data);
  }
   //need to optimize more, delete functionality
   const DeleteRow = async () => {
    if (isTempId > 0) {
      const res = await brandDelete(isTempId);
      if (res) {
        refetch();
      }
    }
  };
  const handleDelete = (brandId: number) => {
    setTempId(brandId);
    setIsModalOpen(true);
  };
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4">
      <div className="bg-white shadow-md rounded p-6 sm:mb-0 mb-4">
        <h3>Add new Brand</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit} resolver={yupResolver(brandSchemas)}>
          <FormInput name="name" type="text" placeholder="Name" label="Name" />
          <FormTextArea name="description" rows={7} label="Description" />
          <FormInput
            name="file"
            type="file"
            placeholder="Name"
            label="Brand Logo"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </Form>
      </div>
      <div className=" col-span-2 bg-white shadow-md rounded p-6">
        <h3>Brand List</h3>
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

export default Brand;
