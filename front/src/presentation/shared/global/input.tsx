export interface propsInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input: React.FC<propsInput> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full text-gray-800">
      {label && <label className="text-sm">{label}</label>}
      <input
        {...props}
        className={`rounded-md p-2 bg-transparent border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
          error && "border-red-700"
        }`}
        placeholder={label}
      />
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
};
