import BackgroundSVG from "./components/backgraund";
import { Company } from "./components/company";
import { LoginForm } from "./components/form";

export const Login = () => {
  return (
    <div className="h-screen w-full bg-secondary flex justify-center items-center p-4 ">
      <section className="w-1/2 inset-0  h-full ">
        <BackgroundSVG />
      </section>
      <Company />
      <section className=" bg-white/70 z-50 w-1/2 h-full shadow-sm flex justify-center items-center flex-col rounded-xl gap-2">
        <h1 className="text-3xl font-bold text-primary">Inicio de seción</h1>
        <LoginForm />
      </section>
    </div>
  );
};
