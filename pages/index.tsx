import { candidates, status } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CandidateList from "../components/candidates/CandidateList";
import TabNavigation from "../components/tab-navigation";
import { getCandidates } from "../lib/requests";

const filterCandidates = (candidates: candidates[], activeTab: status) => {
  return candidates.filter((c) => c.current_status === activeTab);
};

const Home = ({ candidates }: { candidates: candidates[] }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<status>(
    (router.query.tab as status) || (status.contact as status)
  );
  let filteredCandidates = filterCandidates(candidates, activeTab);

  const updateTabRoute = () => {
    router.push(`/?tab=${activeTab}`, undefined, { shallow: true });
  };

  useEffect(() => {
    updateTabRoute();
  }, [activeTab]);

  useEffect(() => {
    updateTabRoute();
  }, []);

  return (
    <>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <CandidateList candidates={filteredCandidates} />
    </>
  );
};

export const getServerSideProps = async () => {
  const { candidates } = await getCandidates();
  return {
    props: {
      candidates,
    },
  };
};

export default Home;
