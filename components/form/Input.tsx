import { Field } from "formik";

const Input = ({
  name,
  label,
  type,
  className,
  errors,
  touched,
}: {
  name: string;
  label: string;
  type?: string;
  className?: string;
  errors?: any;
  touched: any;
}) => {
  return (
    <div className={`flex flex-col text-gray-800 ${className}`}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        type={type}
        name={name}
        className={`border-black border py-2 my-2 px-2 ${
          errors[name] && "border-red-400"
        }`}
      />
      {errors[name] && (
        <p className="text-red-400 text-sm font-semibold">
          {errors[name] && touched[name] ? <div>{errors[name]}</div> : null}
        </p>
      )}
    </div>
  );
};

export default Input;
