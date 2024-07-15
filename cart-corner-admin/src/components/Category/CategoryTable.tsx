
import { categories } from "@/src/constants/constants";
import Table from "../Table/Table";
const columns = [
  {
    name: "Title",
    selector: (row:any) => row.title,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row:any) => row.description,
    sortable: true,
  },
];

const CategoryTable = () => {
  return (
    <>
      <Table columns={columns} data={categories} />
    </>
  );
};

export default CategoryTable;
