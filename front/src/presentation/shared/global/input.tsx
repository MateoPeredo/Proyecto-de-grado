interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm">{label}</label>
      <input className="rounded-md p-2 bg-transparent border border-black/30" {...props} placeholder={label} />
    </div>
  );
};
