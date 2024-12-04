import PageBanner from "../../components/Common/PageBanner";
import TeamMemberCard from "../../components/Team/TeamMemberCard";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImg="/img/page-banner/page-banner21.jpg"
      />

      <TeamMemberCard />
    </>
  );
}
