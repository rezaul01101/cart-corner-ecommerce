
import { brands } from "@/src/constants/constants";
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


const BrandTable = () => {
  return (
    <>
      <Table columns={columns} data={brands} />
    </>
  );
};

export default BrandTable;
