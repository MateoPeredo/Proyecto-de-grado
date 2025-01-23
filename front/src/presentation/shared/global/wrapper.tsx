import { ReactNode } from "react";
interface PropWrapper {
  title: string;
  children: ReactNode;
}
export const Wrapper: React.FC<PropWrapper> = ({ title, children }) => {
  return (
    <section className="w-full flex flex-col p-8 gap-4 bg-[#EBECF4]">
      <h1 className=" text-3xl font-bold uppercase my-4 ">{title}</h1>

      {children}
    </section>
  );
};
