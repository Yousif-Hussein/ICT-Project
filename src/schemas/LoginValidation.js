import * as yup from "yup"
export const LoginValidation=yup.object().shape({
    email:yup.string().email("please enter your email").required("Required"),
    firstName:yup.string().required("Required"),
    lastName:yup.string().required("Required"),
    phoneNumber:yup.number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('Required')
    .typeError("That doesn't look like a phone number")
})