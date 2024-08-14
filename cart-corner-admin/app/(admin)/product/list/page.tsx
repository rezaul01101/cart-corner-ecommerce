"use client";
import Table from "@/src/components/Table/Table";
import DeleteModal from "@/src/components/ui/DeleteModal";
import {
  useProductDeleteMutation,
  useProductListQuery,
} from "@/src/redux/api/productApi";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const ProductList = () => {
  const { data: productList, refetch } = useProductListQuery({});
  const [productDelete] = useProductDeleteMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTempId, setTempId] = useState<number>(0);
  const columns = [
    {
      name: "Title",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row: any) => (
        <span className="text-orange-500">{row.category?.name}</span>
      ),
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row: any) => (
        <span className="text-green-500">{row.brand?.name}</span>
      ),
      sortable: true,
    },
    {
      name: "Actions",
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
  const editRow = (data: string) => {
    alert(data);
  };
  //need to optimize more, delete functionality
  const DeleteRow = async () => {
    if (isTempId > 0) {
      const res = await productDelete(isTempId);
      if (res) {
        refetch();
      }
    }
  };
  const handleDelete = (id: number) => {
    setTempId(id);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h3 className="my-3">Product List</h3>
      <hr />
      <Table columns={columns} data={productList} />
      <DeleteModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onDelete={DeleteRow}
      />
    </div>
  );
};

export default ProductList;
