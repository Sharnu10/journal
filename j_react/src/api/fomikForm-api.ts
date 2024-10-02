import { IFormikExample } from "../types/form";
import { post } from "./post";

export const postForm = (formikData: IFormikExample) => {
  const apiUrl = "http://localhost:3003/api/formik";

  post(apiUrl, formikData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
