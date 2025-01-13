import * as yup from "yup";

export const UserDtoSchema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export type UserDTO = yup.InferType<typeof UserDtoSchema>;
