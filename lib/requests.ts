import { FormValues } from "../components/form";

const getCandidates = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/candidates`);

    if (!res) {
      throw new Error("No response from request");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not fetch candidates");
  }
};

const createCandidate = async (formValues: FormValues) => {
  if (!formValues) throw new Error("No email provided");

  try {
    const res = await fetch(`http://localhost:3000/api/candidates/new`, {
      body: JSON.stringify({ ...formValues }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status >= 400) {
      return false;
    }

    const data = await res.json();

    return true;
  } catch (err) {
    return false;
  }
};

const advanceCandidate = async (email: string) => {
  if (!email) throw new Error("No email provided");

  try {
    const res = await fetch(`http://localhost:3000/api/candidates/update`, {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res) {
      throw new Error("No response from request");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not update candidate");
  }
};

const deleteCandidate = async (email: string) => {
  if (!email) throw new Error("No email provided");

  try {
    const res = await fetch(`http://localhost:3000/api/candidates/delete`, {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res) {
      throw new Error("No response from request");
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    throw new Error("Could not delete candidate");
  }
};

export { getCandidates, createCandidate, advanceCandidate, deleteCandidate };
