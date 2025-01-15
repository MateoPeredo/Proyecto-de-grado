import { ReactNode } from "react";
interface CardProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  icon?: ReactNode;
}
export const Card: React.FC<CardProp> = ({
  children,
  name,
  icon,
  ...props
}) => {
  return (
    <button
      className="w-full bg-primary/20 flex justify-center items-center min-h-16 hover:bg-primary/50 rounded-md"
      {...props}
    >
      {icon && <p>{icon}</p>}
      {children}
      {name && <p>{name}</p>}
    </button>
  );
};
