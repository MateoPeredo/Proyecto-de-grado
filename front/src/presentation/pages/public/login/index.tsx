import BackgroundSVG from "./components/backgraund";
import { Company } from "./components/company";
import { LoginForm } from "./components/form";

export const Login = () => {
  return (
    <div className="h-screen w-full bg-gray-950 flex justify-center items-center p-8  ">
      <BackgroundSVG />

      <Company />
      <section className=" bg-white z-50 w-2/5 h-2/3 shadow-sm flex justify-center items-center flex-col rounded-xl gap-2">
        <h1 className="text-4xl font-bold  mb-8">
          Inicio de seción
        </h1>
        <LoginForm />
      </section>
    </div>
  );
};
