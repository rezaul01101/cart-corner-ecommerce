import DataTable from "react-data-table-component";

const Table = ({columns,data}:any) => {
  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
};

export default Table;
