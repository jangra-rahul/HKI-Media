import PageBanner from "../../components/Common/PageBanner";
import TestimonialsCaed from "../../components/Testimonials/TestimonialsCaed";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImg="/img/page-banner/page-banner22.jpg"
      />

      <TestimonialsCaed />
    </>
  );
}
