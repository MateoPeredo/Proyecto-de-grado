interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full text-secondary">
      <label className="text-sm">{label}</label>
      <input className="rounded-md p-2 bg-transparent border border-secondary/30" {...props} placeholder={label} />
    </div>
  );
};
