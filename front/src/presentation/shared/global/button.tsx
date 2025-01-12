interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const PrymaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="bg-primary text-white rounded-md p-2 w-full hover:bg-primary/70"
      {...props}
    >
      {children}
    </button>
  );
};
