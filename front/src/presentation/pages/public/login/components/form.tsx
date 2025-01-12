import { PrymaryButton } from "../../../../shared/global/button";
import { Input } from "../../../../shared/global/input";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2 w-[55%]">
      <Input label="Usuario"></Input>
      <Input label="Contraseña"></Input>
      <PrymaryButton>Iniciar seción</PrymaryButton>
    </form>
  );
};
