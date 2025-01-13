import { useNavigate } from "react-router-dom";
import { PrymaryButton } from "src/presentation/shared/global/button";
import { FormInput } from "src/presentation/shared/global/inputForm";
import { UserDTO, UserDtoSchema } from "../../../core/dto/user.dto";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export const LoginForm = () => {
  const redirect = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(UserDtoSchema),
  });

  const onSubmit = (data: UserDTO) => {
    redirect("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full p-8 "
    >
      <FormInput
        control={control}
        name="name"
        error={errors.name?.message}
        label="Usuario"
      />
      <FormInput
        control={control}
        name="password"
        error={errors.password?.message}
        label="Contraseña"
        type="password"
      />
      <PrymaryButton classButton="mt-2" type="submit">
        Iniciar seción
      </PrymaryButton>
      <label className=" text-center  text-sm ">Olvidaste tu contraseña</label>
    </form>
  );
};
