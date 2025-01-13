import BackgroundSVG from "../../../../application/modules/login/backgraund";
import { Company } from "../../../../application/modules/login/components/company";
import { LoginForm } from "../../../../application/modules/login/components/form";

export const Login = () => {
  return (
    <div className="h-screen w-full bg-secondary flex justify-center items-center p-8  ">
      <BackgroundSVG />
      <Company />
      <section className=" bg-white backdrop-blur-md border border-secondary z-50 w-2/6 h-[32rem] shadow-sm flex justify-center items-center flex-col rounded-xl gap-2">
        <h1 className="text-4xl font-bold  mb-4">Inicio de seción</h1>
        <LoginForm />
      </section>
    </div>
  );
};
