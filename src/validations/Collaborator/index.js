import * as yup from "yup";

export const collaboratorValidation = yup.object({
    
    name: yup.string().required(),
    function: yup.string().required,
    admission_Date: yup.string().required(),
    constructions: yup.string().required(),
    
})