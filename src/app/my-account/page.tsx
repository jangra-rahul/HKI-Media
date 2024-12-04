import PageBanner from "../../components/Common/PageBanner";
import MyAccountForm from "../../components/MyAccount/MyAccountForm";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="My Account"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Account"
        bgImg="/img/page-banner/page-banner15.jpg"
      />

      <MyAccountForm />
    </>
  );
}
