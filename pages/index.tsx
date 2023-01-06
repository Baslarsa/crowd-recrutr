import { candidates, status } from "@prisma/client";
import { useEffect, useState } from "react";
import CandidateList from "../components/candidates/CandidateList";
import Header from "../components/layout/header/Header";
import PageContainer from "../components/layout/PageContainer";
import TabNavigation from "../components/TabNavigation";
import getCandidates from "../lib/candidates";

const filterCandidates = (candidates: candidates[], activeTab: status) => {
  return candidates.filter((c) => c.current_status === activeTab);
};

export default function Home({ candidates }: { candidates: candidates[] }) {
  const [activeTab, setActiveTab] = useState<status>(status.contact);
  let filteredCandidates = filterCandidates(candidates, activeTab);

  useEffect(() => {
    filteredCandidates = filterCandidates(candidates, activeTab);
  }, [activeTab]);

  return (
    <PageContainer>
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <CandidateList candidates={filteredCandidates} />
    </PageContainer>
  );
}

export const getStaticProps = async () => {
  const { candidates } = await getCandidates();

  return {
    props: {
      candidates,
    },
  };
};
