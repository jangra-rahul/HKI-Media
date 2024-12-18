import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="error-content-wrap">
              <h1>
                <span className="a">4</span>
                <span className="red">0</span>
                <span className="b">4</span>
              </h1>
              <h3>Oops! Page Not Found</h3>
              <p>The page you were looking for could not be found.</p>

              <Link href="/" className="default-btn two">
                Return To Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
