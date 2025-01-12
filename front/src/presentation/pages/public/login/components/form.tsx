import { useNavigate } from "react-router-dom";
import { PrymaryButton } from "../../../../shared/global/button";
import { Input } from "../../../../shared/global/input";
import { toast } from "sonner";

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-8 ">
      <Input label="Usuario"></Input>
      <Input label="Contraseña"></Input>
      <PrymaryButton classButton="mt-4" type="submit">
        Iniciar seción
      </PrymaryButton>
    </form>
  );
};
