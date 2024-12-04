import CheckoutForm from "@/components/Checkout/CheckoutForm";
import PageBanner from "../../components/Common/PageBanner";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        bgImg="/img/page-banner/page-banner11.jpg"
      />

      <CheckoutForm />
    </>
  );
}
