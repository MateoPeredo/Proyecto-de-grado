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
