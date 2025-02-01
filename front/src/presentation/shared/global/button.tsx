import { ICON_CLEAR_FILTER } from "./icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classButton?: string;
}

export const PrymaryButton: React.FC<ButtonProps> = ({
  children,
  classButton,
  ...props
}) => {
  return (
    <button
      className={`bg-primary text-white/90 p-2 rounded-md w-full hover:bg-primary/70 transition-all duration-700 ease-in-out ${classButton}`}
      {...props}
    >
      {children}
    </button>
  );
};
los dos hacemos la misma interacción hagamos clases condicionales 

export const FilterButton: React.FC<ButtonProps> = ({
  children,
  classButton,
  ...props
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border-2 border-primary text-primary p-2 px-4 rounded-md ${classButton}`}
      {...props}
    >
      {ICON_CLEAR_FILTER}
      {children}
    </button>
  );
};
