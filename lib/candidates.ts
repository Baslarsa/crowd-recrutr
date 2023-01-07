import { FormValues } from "../components/layout/form";

const getCandidates = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/candidates`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not fetch candidates");
  }
};

const createCandidate = async (formValues: FormValues) => {
  try {
    const res = await fetch(`http://localhost:3000/api/candidates/new`, {
      body: JSON.stringify({ ...formValues }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not create candidate");
  }
};

const advanceCandidate = async (email: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/candidates/update`, {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not update candidate");
  }
};

const deleteCandidate = async (email: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/candidates/delete`, {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not delete candidate");
  }
};

export { getCandidates, createCandidate, advanceCandidate, deleteCandidate };
