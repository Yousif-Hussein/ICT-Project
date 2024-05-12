import * as yup from "yup"
export const ReservationValidation= yup.object().shape({
    date: yup.string().required("⚠ Please enter your reservation date"),
    diners: yup.string().required("⚠ Please enter number of dinners "),
    occasion: yup.string().required("⚠ Please enter the occasion"),
    times: yup.string().required("⚠ Please enter your reseration time"),
});