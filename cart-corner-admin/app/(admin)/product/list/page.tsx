"use client"
import Table from "@/src/components/Table/Table";
import { useProductListQuery } from "@/src/redux/api/productApi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const ProductList = () => {
  const { data:productList, refetch } = useProductListQuery({});
  const columns = [
    {
      name: "Title",
      selector: (row:any) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row:any) => <span className="text-orange-500">{row.category?.name}</span>,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row:any) => <span className="text-green-500">{row.brand?.name}</span>,
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
  const handleDelete = (id: number) => {
    // setIsModalOpen(true);
  };
  const editRow = (id: number) => {
    // setIsModalOpen(true);
  };
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h3 className="my-3">Product List</h3>
      <hr />
      <Table columns={columns} data={productList} />
    </div>
  );
};

export default ProductList;
