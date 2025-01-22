import { ReactNode } from "react";
interface PropWrapper {
  title: string;
  children: ReactNode;
}
export const Wrapper: React.FC<PropWrapper> = ({ title, children }) => {
  return (
    <section className="w-full flex flex-col p-4 gap-4 bg-secondary">
      <h1 className=" text-2xl font-bold">{title}</h1>
      {/* podemos customizar y manejar en que lugar estamos  */}
      {children}
    </section>
  );
};
