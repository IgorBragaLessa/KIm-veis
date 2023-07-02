import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

const propertiSerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
  address: yup
    .object()
    .shape({
      district: yup.string().required(),
      zipCode: yup.string().required(),
      number: yup.string(),
      city: yup.string().required(),
      state: yup.string().required(),
    })
    .required(),
  categoryId: yup.string().required(),
  size: yup.number().required(),
  value: yup.number().required(),
});

export { propertiSerializer };
