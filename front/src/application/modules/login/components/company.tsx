import logo from "src/assets/logo.png";
export const Company = () => {
  return (
    <section className="absolute left-8 top-8 p-4 rounded-xl bg-primary/10 backdrop-blur-md border border-primary/20 flex justify-end items-center gap-2">
      <img src={logo} alt="Logo" />
      <div className="flex flex-col">
        <h1 className="text-md text-primary font-bold">
          Sistema de detección de intrusiones
        </h1>
        <span className=" text-xs">Conseso</span>
      </div>
    </section>
  );
};
