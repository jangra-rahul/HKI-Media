import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import BlogSidebar from "../../../components/Blog/BlogSidebar";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/img/page-banner/page-banner5.jpg"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* BlogDetailsContent */}
              <BlogDetailsContent />
            </div>

            <div className="col-lg-4">
              {/* Blog Sidebar */}
              <div className="blog-right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
