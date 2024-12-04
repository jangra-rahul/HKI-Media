import PageBanner from "../../components/Common/PageBanner";
import ShopContent from "../../components/Shop/ShopContent";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        bgImg="/img/page-banner/page-banner9.jpg"
      />

      <ShopContent />
    </>
  );
}
 
