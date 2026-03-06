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
import { client } from "../sanityClient";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  const fetchBlog = async () => {
    try {
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
      console.error("Error loading blog post", err);
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
      <div className="blog_main_sec">
        <div className="container">
          <div className="row">
            <div>
              <div className="ft-blog-post">
                <div className="main-content">
                  <div className="single-blog-post clearfix post-2245 post type-post status-publish format-standard has-post-thumbnail hentry category-cardio-fitness-course-offer category-gym-fitness">

                    {/* ✅ HERO IMAGE — Fixed & Responsive */}
                    <div 
                      className="image" 
                      style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        marginBottom: "30px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "600px", 
                          aspectRatio: "1 / 1", // Keeps the container square
                          overflow: "hidden",
                          borderRadius: "12px",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                          backgroundColor: "#f9f9f9", // Adds a light background in case the image doesn't fill the square perfectly
                          display: "flex", // Centers the image inside the square
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {post?.mainImage && (
                          <img
                            className="img-responsive wp-post-image"
                            src={post?.mainImage?.asset?.url}
                            alt={post.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain", 
                              display: "block",
                            }}
                          />
                        )}
                      </div>
                    </div>




                    {/* Post Meta */}
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
                            <span>
                              <i className="fa fa-user"></i> By:{" "}
                              <a
                                href="#"
                                title="Visit author's website"
                                rel="author external"
                              >
                                {post?.author?.name}
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Post Body Content */}
                    <div className="main-content-box" style={{ marginTop: "20px" }}>
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

                          // ✅ Inline body images also constrained
                          if (block._type === "image") {
                            return (
                              <img
                                key={index}
                                src={block.asset?.url}
                                alt={`blog-img-${index}`}
                                className="img-responsive"
                                style={{
                                  width: "100%",
                                  maxHeight: "400px",
                                  height: "auto",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                  margin: "20px 0",
                                }}
                              />
                            );
                          }

                          return null;
                        })}
                    </div>
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <span className="singletags">
                      Tags:{" "}
                      {post.tags.map((tag, i) => (
                        <span key={i}>
                          <a href={`#tag-${tag}`}>{tag}</a>
                          {i !== post.tags.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </span>
                  )}

                  <div className="clearfix mbottom30"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
