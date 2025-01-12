import BackgroundSVG from "./components/backgraund";
import { Company } from "./components/company";
import { LoginForm } from "./components/form";

export const Login = () => {
  return (
    <div className="h-screen w-full bg-gray-950 flex justify-center items-center p-8  ">
      <BackgroundSVG />

      <Company />
      <section className=" bg-white/10 backdrop-blur-md border border-secondary/20 z-50 w-2/5 h-[32rem] shadow-sm flex justify-center items-center flex-col rounded-xl gap-2">
        <h1 className="text-4xl font-bold  mb-4 text-secondary/80">Inicio de seción</h1>
        <LoginForm />
      </section>
    </div>
  );
};
