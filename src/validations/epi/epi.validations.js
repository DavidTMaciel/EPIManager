import * as yup from "yup";

export const epiValidation = yup.object({

        name: yup.string().required(),
})