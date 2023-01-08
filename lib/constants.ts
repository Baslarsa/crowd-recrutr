//API Endpoints
export const endpoints = {
  allCandidates: "http://localhost:3000/api/candidates",
  createCandidate: "http://localhost:3000/api/candidates/new",
  updateStatus: "http://localhost:3000/api/candidates/update",
  deleteCandidate: "http://localhost:3000/api/candidates/delete",
};

//Animation
export const springAnimation = {
  type: "spring",
  damping: 30,
  stiffness: 1,
  when: "afterChildren",
  duration: 5,
};

export const containerAnimation = {
  hidden: { x: 100 },
  show: { x: 0 },
};

export const listContainerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
