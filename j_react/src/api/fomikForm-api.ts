import { IFormikExample } from "../types/form";
import { getApi } from "./middleware/get";
import { post } from "./middleware/post";

const apiUrl = "http://localhost:3003/api/formik";

export const postForm = (formikData: IFormikExample) => {
  post(apiUrl, formikData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getForms = () => {
  return getApi(apiUrl)
    .then((res) => {
      return res;
    })
    .catch((err: any) => {
      console.log(err);
    });
};
