import { Form, Formik } from "formik";
import { createCandidate } from "../../../lib/candidates";
import Button from "../../Button";
import Input from "./Input";

export type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  image_url: string;
};

const NewCandidateForm = () => {
  const randomCatImage = `https://placekitten.com/300/300?image=${Math.floor(
    Math.random() * 20
  )}`;

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "",
    image_url: randomCatImage,
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    setSubmitting(true);

    await createCandidate(values);

    setSubmitting(false);
  };
  return (
    <div className="bg-white w-full p-4">
      <h1>My Example</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 gap-2">
            <Input
              name="position"
              label="For job position"
              className="col-span-2"
            />
            <Input
              name="first_name"
              label="First name"
              className="col-span-2 md:col-span-1"
            />
            <Input
              name="last_name"
              label="Last name"
              className="col-span-2 md:col-span-1"
            />
            <Input
              type="email"
              name="email"
              label="Email"
              className="col-span-2 md:col-span-1"
            />
            <Input
              type="phone"
              name="phone"
              label="Phone"
              className="col-span-2 md:col-span-1"
            />
            <p className="py-2 text-sm col-span-2 md:col-span-1">
              You don't get to choose a profile image,
              <br />I just assume you're a fluffy cat. 😺
            </p>
            <Button
              type="submit"
              className="my-4 col-span-2 md:col-span-1"
              disabled={isSubmitting}
            >
              {<p>{isSubmitting ? "Saving..." : "Save"}</p>}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewCandidateForm;
