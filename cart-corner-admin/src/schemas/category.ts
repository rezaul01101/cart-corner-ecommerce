import * as yup from "yup";

export const  categorySchemas = yup.object().shape({
    name:yup.string().required("Name is required"),
    description:yup.string()
});