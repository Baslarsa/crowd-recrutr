import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import NewCandidateForm from "../components/form";

const NewCandidatePage = () => {
  const router = useRouter();

  const backClick = () => {
    router.back();
  };

  return (
    <div className="w-full">
      <div
        className="inline-flex items-center mb-4 cursor-pointer"
        onClick={backClick}
      >
        <ArrowLeftIcon className="h-6 w-6 stroke-2 stroke-black mr-4" />
        Back
      </div>
      <div className="rounded-sm shadow w-full max-w-xl mx-auto">
        <NewCandidateForm />
      </div>
    </div>
  );
};

export default NewCandidatePage;
