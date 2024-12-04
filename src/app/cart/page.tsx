import CartTable from "@/components/Cart/CartTable";
import PageBanner from "../../components/Common/PageBanner";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        bgImg="/img/page-banner/page-banner10.jpg"
      />

      <CartTable />
    </>
  );
}
