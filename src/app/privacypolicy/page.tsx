import Privacypolicy from "@/components/PrivacyPage/Privacypolicy";
import PageBanner from "../../components/Common/PageBanner";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPasswordForm";

export default function Page() {
  return (
    <>
      {/* <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
        bgImg="/img/page-banner/page-banner16.jpg"
      /> */}

      <div className="pt-5">
        <Privacypolicy />
      </div>
    </>
  );
}
