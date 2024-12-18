"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar-wrap">
        <div className="search-wrap sidebar-widget">
          <form className="search-form">
            <input
              className="form-control"
              name="search"
              placeholder="SEARCH"
              type="text"
            />
            <button className="search-button" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        <div className="popular-post-wrap sidebar-widget">
          <h3>Popular Post</h3>
          <ul>
            <li>
              <Link href="/blog/details">
                <Image
                  src="/img/blog-details/popular-img-1.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Tattoo life</h3>
                <span>June 27, 2023</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                <Image
                  src="/img/blog-details/popular-img-2.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Human faith</h3>
                <span>June 26, 2023</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/details">
                <Image
                  src="/img/blog-details/popular-img-3.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Alone journey</h3>
                <span>June 26, 2023</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="categories-wrap sidebar-widget">
          <h3>Categories</h3>

          <ul>
            <li>
              <Link href="/blog">Upcoming movies</Link>
            </li>
            <li>
              <Link href="/blog">Blockbusters</Link>
            </li>
            <li>
              <Link href="/blog">Awarded</Link>
            </li>
            <li>
              <Link href="/blog">Festival</Link>
            </li>
            <li>
              <Link href="/blog">Trailer</Link>
            </li>
            <li>
              <Link href="/blog">Actors</Link>
            </li>
            <li>
              <Link href="/blog">Film</Link>
            </li>
            <li>
              <Link href="/blog">Video</Link>
            </li>
          </ul>
        </div>

        <div className="about-wrap sidebar-widget">
          <h3>About</h3>
          <Image
            src="/img/about-img2.jpg"
            alt="Image"
            width={360}
            height={200}
          />
          <p>
            We are a London based video production comp-any that aims to inspire
            you through stories about people who defy the times we live.
          </p>
        </div>

        <div className="tags-wrap sidebar-widget">
          <h3>Tags</h3>

          <ul>
            <li>
              <Link href="/blog">Actor</Link>
            </li>
            <li>
              <Link href="/blog">Film Production</Link>
            </li>
            <li>
              <Link href="/blog">Cinema</Link>
            </li>
            <li>
              <Link href="/blog">Movie</Link>
            </li>
            <li>
              <Link href="/blog">Director</Link>
            </li>
            <li>
              <Link href="/blog">Entertainment</Link>
            </li>
            <li>
              <Link href="/blog">Awarded</Link>
            </li>
            <li>
              <Link href="/blog">Production</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
