interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full text-white/90">
      <label className="text-sm">{label}</label>
      <input className="rounded-md p-2 bg-transparent border border-white/30" {...props} placeholder={label} />
    </div>
  );
};
