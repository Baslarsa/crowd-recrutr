import Input from "./Input";

const Fields = ({ errors, touched }: { errors: any; touched: any }) => {
  return (
    <>
      <Input
        name="position"
        label="For job position"
        className="col-span-2"
        errors={errors}
        touched={touched}
      />
      <Input
        name="first_name"
        label="First name"
        className="col-span-2 md:col-span-1"
        errors={errors}
        touched={touched}
      />
      <Input
        name="last_name"
        label="Last name"
        className="col-span-2 md:col-span-1"
        errors={errors}
        touched={touched}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        className="col-span-2 md:col-span-1"
        errors={errors}
        touched={touched}
      />
      <Input
        type="phone"
        name="phone"
        label="Phone"
        className="col-span-2 md:col-span-1"
        errors={errors}
        touched={touched}
      />
    </>
  );
};

export default Fields;
