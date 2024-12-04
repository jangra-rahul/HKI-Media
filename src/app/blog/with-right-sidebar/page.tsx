import PageBanner from "../../../components/Common/PageBanner";
import BlogTwoColumns from "../../../components/Blog/BlogTwoColumns";
import BlogSidebar from "../../../components/Blog/BlogSidebar";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
        bgImg="/img/page-banner/page-banner8.jpg"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* BlogTwoColumns */}
              <BlogTwoColumns />
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
