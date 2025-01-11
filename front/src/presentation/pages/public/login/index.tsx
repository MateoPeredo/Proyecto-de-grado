import { toast } from "sonner";
import BackgroundSVG from "../../../shared/public/backgroundSVG";

export const Login = () => {
  return (
    <div className="h-screen w-full bg-secondary flex justify-center items-center ">
      <section className="w-1/2 inset-0  h-full ">
        <BackgroundSVG />
      </section>
      <section className=" bg-secondary z-50 w-1/2 h-1/2 shadow-sm flex  justify-center items-center flex-col">
        <h1 className="text-2xl text-primary font-bold">
          Sistema de detección de intrusiones
        </h1>
        <span className="font-bold">Conseso</span>
        <form></form>
      </section>
    </div>
  );
};
