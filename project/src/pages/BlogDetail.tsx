import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/animate.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, secureClient } from "../sanityClient";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  //   website: "",
  // });

  // const handleChange = (e) =>
  //   setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await secureClient.create({
  //       _type: "comment",
  //       name: form.name,
  //       email: form.email,
  //       message: form.message,
  //       website: form.website || "",
  //       post: {
  //         _type: "reference",
  //         _ref: post?._id,
  //       },
  //       createdAt: new Date().toISOString(),
  //     });

  //     setSubmitted(true);
  //     await fetchBlog();
  //   } catch (err) {
  //     console.log("ERror Adding Comment", err);
  //   }
  // };

  // const [comments, setComments] = useState([]);

  const fetchBlog = async () => {
    try {
      // 1️⃣ Fetch post by slug
      const postData = await client.fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        title,
        publishedAt,
        author->{name},
        mainImage{asset->{url}},
        body,
        tags
      }`,
        { slug }
      );

      setPost(postData);
    } catch (err) {
      console.error("Error loading blog post or comments", err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const publishedDate = new Date(post.publishedAt);
  const day = publishedDate.getDate();
  const month = publishedDate.toLocaleString("default", { month: "short" });

  return (
    <>
      {/* /blog start */}
      <div className="blog_main_sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-xs-12 blog_left">
              <div className="ft-blog-post">
                <div className="main-content">
                  <div className="single-blog-post clearfix post-2245 post type-post status-publish format-standard has-post-thumbnail hentry category-cardio-fitness-course-offer category-gym-fitness tag-donec tag-pretium tag-quam tag-ultricies">
                    {/* loop starts */}

                    {/* TT-BLOG */}
                    <div className="image">
                      {post?.mainImage && (
                        <img
                          width="750"
                          height="224"
                          className="img-responsive wp-post-image"
                          src={post?.mainImage?.asset?.url}
                          alt={post.title}
                          style={{ aspectRatio: "16/9" }}
                        />
                      )}
                    </div>
                    <div className="info">
                      <div className="date-wrapper">
                        <div className="date">
                          <p className="post-date">{day}</p>
                          <p className="post-month">{month}</p>
                        </div>
                      </div>
                      <div className="title-info">
                        <div className="title">
                          <h2 className="tittle">{post.title}</h2>
                        </div>
                        <div className="info">
                          <p>
                            {" "}
                            <span>
                              {" "}
                              <i className="fa fa-user"></i> By:{" "}
                              <a
                                href="#"
                                title="Visit templatation’s website"
                                rel="author external"
                              >
                                {post?.author?.name}
                              </a>{" "}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Post content */}
                    <div className="main-content-box">
                      {post.body &&
                        post.body.map((block, index) => {
                          if (block._type === "block") {
                            return (
                              <p key={index}>
                                {block.children
                                  .map((child) => child.text)
                                  .join(" ")}
                              </p>
                            );
                          }
                          if (block._type === "image") {
                            return <img key={index} alt="block-img" />;
                          }
                          return null;
                        })}
                    </div>
                  </div>

                  {/* Tags */}
                  <span className="singletags">
                    Tags:{" "}
                    {post.tags?.map((tag, i) => (
                      <span key={i}>
                        <a href={`#tag-${tag}`}>{tag}</a>
                        {i !== post.tags.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </span>
                  {/* Post nav  */}
                  <div className="clearfix mbottom30"></div>
                  <div className="clearfix"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog end */}
    </>
  );
};

export default BlogDetail;
