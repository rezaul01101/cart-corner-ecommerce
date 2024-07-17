
import Table from "../Table/Table";
import { useCategoryListQuery } from "@/src/redux/api/categoryApi";
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



const CategoryTable = ({data}:any) => {

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default CategoryTable;
