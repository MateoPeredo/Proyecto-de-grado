import { Control, Controller } from "react-hook-form";
import { Input, propsInput } from "./input";

interface propsFormInput extends propsInput {
  control: Control<any, any>;
  name: string;
}

export const FormInput = ({ control, name, ...props }: propsFormInput) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChange={(value) => onChange(value)}
          value={value}
          {...props}
        />
      )}
      name={name}
    />
  );
};

