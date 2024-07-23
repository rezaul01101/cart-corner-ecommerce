"use client"
import Table from "@/src/components/Table/Table";

const ProductList = () => {
  const columns = [
    {
      name: "Title",
      selector: (row:any) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row:any) => row.category,
      sortable: true,
    },
    {
      name: "Attribute",
      selector: (row:any) => row.attr,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row:any) => row.attr,
      sortable: true,
    },
  ];
  const data=[
    {
      id: 1,
      title: "dfgfd",
      description: "Apple Inc.",
    },
  ];
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h3 className="my-3">Product List</h3>
      <hr />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ProductList;
