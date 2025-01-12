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
      className={`bg-primary text-white/90 p-2 rounded-md w-full hover:bg-primary/50 ${classButton}`}
      {...props}
    >
      {children}
    </button>
  );
};
