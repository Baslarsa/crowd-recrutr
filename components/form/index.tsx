import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { createCandidate } from "../../lib/requests";
import Button from "../Button";
import Input from "./Input";
import * as Yup from "yup";

export type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  image_url: string;
};

const FormSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Last name too Short!")
    .max(50, "Last name too Long!")
    .required("First name required"),
  last_name: Yup.string()
    .min(2, "Last name too Short!")
    .max(50, "Last name too Long!")
    .required("Last name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
});

const NewCandidateForm = () => {
  const router = useRouter();
  const [requestMessage, setRequestMessage] = useState("");
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
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (value: boolean) => void; resetForm: () => void }
  ) => {
    try {
      setSubmitting(true);
      const candidateCreated = await createCandidate(values);

      if (!candidateCreated) {
        throw new Error("Could not create candidate");
      }

      setRequestMessage("Candidate created");
      setSubmitting(false);
      resetForm();
      router.push("/");
    } catch (error) {
      setRequestMessage("Something went wrong");
      setSubmitting(false);
    }
  };
  return (
    <div className="bg-white w-full p-4">
      <h1 className="font-bold pb-4">Add new candidate</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="grid grid-cols-2 gap-2">
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
            <div className="text-center">
              <p className="text-right">{requestMessage}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewCandidateForm;
