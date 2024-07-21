

import Table from "../Table/Table";
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
];


const BrandTable = ({data}:any) => {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default BrandTable;
