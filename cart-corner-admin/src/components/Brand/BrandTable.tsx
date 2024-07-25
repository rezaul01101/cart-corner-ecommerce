

import { FaRegEdit } from "react-icons/fa";
import Table from "../Table/Table";
import { AiOutlineDelete } from "react-icons/ai";



const BrandTable = ({data}:any) => {
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
          <div className="text-red-500 text-xl cursor-pointer" onClick={()=>deleteRow(row.id)}>
            <AiOutlineDelete />
          </div>
        </>
      ),
    },
  ];
  const editRow=(data:string)=>{
    alert(data);
  }
  const deleteRow=(data:string)=>{
    alert(data);
  }
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default BrandTable;
