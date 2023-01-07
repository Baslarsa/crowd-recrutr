import { Field } from "formik";

const Input = ({
  name,
  label,
  type,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        type={type}
        name={name}
        className="border-black border py-2 my-2 px-2"
      />
    </div>
  );
};

export default Input;
