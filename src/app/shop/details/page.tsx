
import PageBanner from "@/components/Common/PageBanner";
import ProductDetailsContent from "../../../components/ProductDetails/ProductDetailsContent";
import ProductsDetailsTab from "../../../components/ProductDetails/ProductsDetailsTab";
import RelatedProducts from "../../../components/ProductDetails/RelatedProducts";



export default function Page() {
  return (
    <>

      <PageBanner
        pageTitle="Product Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Product Details"
        bgImg="/img/page-banner/page-banner12.jpg"
      />

      <section className="product-details-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {/* Product Details Content */}
            <ProductDetailsContent />

            {/* Products Details Tab */}
            <ProductsDetailsTab />
          </div>
        </div>
      </section>

      <RelatedProducts />
 
    </>
  );
};
