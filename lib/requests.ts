import { FormValues } from "../components/form";
import { endpoints } from "./constants";

const postHeaders = {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
};

const getCandidates = async () => {
  try {
    const res = await fetch(endpoints.allCandidates);

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
    const res = await fetch(endpoints.createCandidate, {
      body: JSON.stringify({ ...formValues }),
      ...postHeaders,
    });

    if (res.status >= 400) {
      return false;
    }

    await res.json();

    return true;
  } catch (err) {
    return false;
  }
};

const advanceCandidate = async (email: string) => {
  if (!email) throw new Error("No email provided");

  try {
    const res = await fetch(endpoints.updateStatus, {
      body: JSON.stringify({ email }),
      ...postHeaders,
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
    const res = await fetch(endpoints.deleteCandidate, {
      body: JSON.stringify({ email }),
      ...postHeaders,
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
