import PageBanner from "../../components/Common/PageBanner";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPasswordForm";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Forgot Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Forgot Password"
        bgImg="/img/page-banner/page-banner16.jpg"
      />

      <ForgotPasswordForm />
    </>
  );
}
