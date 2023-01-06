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

export default getCandidates;
