import PageBanner from "../../components/Common/PageBanner";
import FaqContent from "../../components/Faq/FaqContent";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Faq"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImg="/img/page-banner/page-banner3.jpg"
      />

      <FaqContent />
    </>
  );
}
