import PageBanner from "../../components/Common/PageBanner";
import GoogleMap from "../../components/Contact/GoogleMap";
import ContactForm from "../../components/Contact/ContactForm";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
        bgImg="/img/page-banner/page-banner2.jpg"
      />

      <GoogleMap />

      <ContactForm />
    </>
  );
}
