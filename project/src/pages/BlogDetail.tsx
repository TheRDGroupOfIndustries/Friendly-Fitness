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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await secureClient.create({
        _type: "comment",
        name: form.name,
        email: form.email,
        message: form.message,
        website: form.website || "",
        post: {
          _type: "reference",
          _ref: post?._id,
        },
        createdAt: new Date().toISOString(),
      });

      setSubmitted(true);
      await fetchPostAndComments();
    } catch (err) {
      console.log("ERror Adding Comment", err);
    }
  };

  const [comments, setComments] = useState([]);

  const fetchPostAndComments = async () => {
    try {
      // 1️⃣ Fetch post by slug
      const postData = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
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

      // 2️⃣ Then fetch comments based on post._id
      const commentsData = await client.fetch(
        `*[_type == "comment" && post._ref == $postId] | order(createdAt asc)`,
        { postId: postData._id }
      );

      setComments(commentsData);
    } catch (err) {
      console.error("Error loading blog post or comments", err);
    }
  };
  useEffect(() => {
    fetchPostAndComments();
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
                            <span>
                              {" "}
                              <i className="fa fa-comments"></i>
                              <a href="#">
                                Comments {post.comments?.length || 0}
                              </a>
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

                  {/* Post sharing meta  */}

                  <div className="tag-social-box clearfix">
                    <div className="social-box pull-right">
                      <ul>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-facebook"></i>{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-twitter"></i>{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-google-plus"></i>{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-linkedin"></i>
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-instagram"></i>{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#!">
                            {" "}
                            <i className="fa fa-pinterest"></i>{" "}
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Author box */}

                  <div className="admin-info-box">
                    <div className="img-box">
                      {" "}
                      <img
                        alt=""
                        src="http://1.gravatar.com/avatar/dce646958295aaa431788890e32fbb7f?s=114&amp;d=mm&amp;r=g"
                        // srcset="http://1.gravatar.com/avatar/dce646958295aaa431788890e32fbb7f?s=228&amp;d=mm&amp;r=g 2x"
                        className="avatar avatar-114 photo"
                        height="114"
                        width="114"
                      />{" "}
                    </div>
                    <div className="text-box">
                      <h3>templatation</h3>
                      <p className="text_detail">
                        {" "}
                        People think focus means saying yes to the thing you’ve
                        got to focus on. But that’s not what it means at all. It
                        means saying no to the hundred other good ideas that
                        there are. You have to pick carefully.
                      </p>
                      <p>
                        <a
                          className="author-link"
                          href="http://blthemedemos.wpengine.com/fitnesspro/author/dinesh/"
                          rel="author"
                        >
                          View all posts by templatation
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Comments nav */}
                  <div className="comment-part">
                    <div className="comments-box">
                      <h3 className="title">
                        <span>Comments </span>
                      </h3>

                      {/* You can start editing here.  */}

                      <div id="comments">
                        {comments.length > 0 ? (
                          comments.map((comment, index) => (
                            <div key={index} className="single-comment">
                              <p>
                                <strong>{comment.name}</strong> on{" "}
                                {new Date(
                                  comment.createdAt
                                ).toLocaleDateString()}
                              </p>
                              <p>{comment.message}</p>
                            </div>
                          ))
                        ) : (
                          <h5 className="nocomments">No comments yet.</h5>
                        )}
                      </div>

                      <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title">
                          Leave a Reply{" "}
                          <small>
                            <a
                              rel="nofollow"
                              id="cancel-comment-reply-link"
                              href="/fitnesspro/2016/11/06/many-desktop-publishing-packages-and-web-page-editors-2/#respond"
                              style={{ display: "none" }}
                            >
                              Click here to cancel reply.
                            </a>
                          </small>
                        </h3>
                        {/* <form
                          action="http://blthemedemos.wpengine.com/fitnesspro/wp-comments-post.php?wpe-comment-post=blthemedemos"
                          method="post"
                          id="commentform"
                          className="comment-form"
                          // novalidate
                        >
                          <p className="comment-form-comment">
                            <textarea
                              id="comment"
                              name="comment"
                              aria-required="true"
                              placeholder="Comment"
                            ></textarea>
                          </p>
                          <p className="comment-form-author">
                            <input
                              id="author"
                              placeholder="Name*"
                              className="txt"
                              name="author"
                              type="text"
                              value=""
                              // size="30"
                              aria-required="true"
                            />
                          </p>
                          <p className="comment-form-email">
                            <input
                              id="email"
                              className="txt"
                              name="email"
                              placeholder="Email*"
                              type="text"
                              value=""
                              // size="30"
                              aria-required="true"
                            />
                          </p>
                          <p className="comment-form-url">
                            <input
                              id="url"
                              className="txt"
                              name="url"
                              placeholder="Website"
                              type="text"
                              value=""
                              // size="30"
                            />
                          </p>
                          <p className="form-submit">
                            <input
                              name="submit"
                              type="submit"
                              id="submit"
                              className="submit"
                              value="Submit Comment"
                            />
                            <input
                              type="hidden"
                              name="comment_post_ID"
                              value="2245"
                              id="comment_post_ID"
                            />
                            <input
                              type="hidden"
                              name="comment_parent"
                              id="comment_parent"
                              value="0"
                            />
                          </p>
                        </form> */}

                        {submitted ? (
                          <p className="text-success">
                            Thanks for your comment!
                          </p>
                        ) : (
                          <form
                            onSubmit={handleSubmit}
                            className="comment-form"
                          >
                            <p className="comment-form-comment">
                              <textarea
                                name="message"
                                required
                                placeholder="Comment"
                                value={form.message}
                                onChange={handleChange}
                              />
                            </p>
                            <p className="comment-form-author">
                              <input
                                name="name"
                                type="text"
                                placeholder="Name*"
                                value={form.name}
                                onChange={handleChange}
                                required
                              />
                            </p>
                            <p className="comment-form-email">
                              <input
                                name="email"
                                type="email"
                                placeholder="Email*"
                                value={form.email}
                                onChange={handleChange}
                                required
                              />
                            </p>
                            <p className="comment-form-url">
                              <input
                                name="website"
                                type="text"
                                placeholder="Website"
                                value={form.website}
                                onChange={handleChange}
                              />
                            </p>
                            <p className="form-submit">
                              <input
                                type="submit"
                                className="submit"
                                value="Submit Comment"
                              />
                            </p>
                          </form>
                        )}
                      </div>
                      {/* #respond  */}
                      <div className="fix"></div>
                    </div>
                    {/* /.comments-box  */}
                    {/* Yes there is intentional extra div on this page/ see line 24  */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-xs-12 blog_right">
              <div className="search_blog">
                <form className="input-group col-md-12 col-sm-12 col-xs-12">
                  <input
                    type="text"
                    className="form-control input-lg"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <button className="btn" type="button">
                      {" "}
                      <i className="fa fa-search" aria-hidden="true"></i>{" "}
                    </button>
                  </span>
                </form>
              </div>
              <article className="Categories_blog">
                <h3 className="blog_title"> Categories </h3>
                <ul className="Categories">
                  <li className="cat_list ">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Lorem ipsum dolor sit...
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Tur adipiscing elites...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Egestas orci, vitae ulla...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Consectetur id onec at...
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Lum rutrum massa quis...
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Donec et ultricies ipsum...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Aliquam non est a fac...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      {" "}
                      <span className="cat_name">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Erisque eu sed lectus...
                      </span>
                    </a>{" "}
                  </li>
                  <li className="cat_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Ibus nunc quis ex tr...
                      </span>
                    </a>{" "}
                  </li>
                </ul>
              </article>
              <article className="articles_blog">
                <h3 className="blog_title"> Recent Articles </h3>
                <ul>
                  <li className="art_list ">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Lorem ipsum dolor sit...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="art_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Tur adipiscing elites...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="art_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Egestas orci, vitae ull...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="art_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Consectetur id onec at...{" "}
                      </span>
                    </a>{" "}
                  </li>
                  <li className="art_list">
                    <a href="#">
                      <span className="cat_name">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Lum rutrum massa quis p...
                      </span>
                    </a>{" "}
                  </li>
                </ul>
              </article>
              <article className="Schedule_blog col-sm-12 col-xs-12 colmd-12">
                <h3 className="blog_title"> Today’s Schedule </h3>
                <div className="panel-group" id="accordion">
                  <div className="steps-container">
                    <input type="radio" name="steps" id="step01" checked />
                    <label

                    // htnlFor="step01"
                    >
                      <span>21,November,2016</span>
                    </label>
                    <div className="description">
                      <div className="panel-body">
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt1.png" alt="" />{" "}
                          Intermediate -{" "}
                          <span className="orange_text">
                            08:00Am to 09:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt2.png" alt="" /> TRX -{" "}
                          <span className="orange_text">
                            09:00Am to 10:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt3.png" alt="" /> Begginer -{" "}
                          <span className="orange_text">
                            10:00Am to 11:00Am
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt4.png" alt="" /> Boot Camp -{" "}
                          <span className="orange_text">
                            11:00Am to 12:00Am
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="steps-container">
                    <input type="radio" name="steps" id="step02" checked />
                    <label
                    // htnlFor="step02"
                    >
                      <span>25,Dec,2017</span>
                    </label>
                    <div className="description">
                      <div className="panel-body">
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt1.png" alt="" />{" "}
                          Intermediate -{" "}
                          <span className="orange_text">
                            08:00Am to 09:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt2.png" alt="" /> TRX -{" "}
                          <span className="orange_text">
                            09:00Am to 10:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt3.png" alt="" /> Begginer -{" "}
                          <span className="orange_text">
                            10:00Am to 11:00Am
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt4.png" alt="" /> Boot Camp -{" "}
                          <span className="orange_text">
                            11:00Am to 12:00Am
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="steps-container ">
                    <input type="radio" name="steps" id="step03" checked />
                    <label
                    // htnlFor="step03"
                    >
                      <span>05,Jun,2018</span>
                    </label>
                    <div className="description">
                      <div className="panel-body">
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt1.png" alt="" />{" "}
                          Intermediate -{" "}
                          <span className="orange_text">
                            08:00Am to 09:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt2.png" alt="" /> TRX -{" "}
                          <span className="orange_text">
                            09:00Am to 10:00Am{" "}
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt3.png" alt="" /> Begginer -{" "}
                          <span className="orange_text">
                            10:00Am to 11:00Am
                          </span>{" "}
                        </div>
                        <div className="timedetail">
                          {" "}
                          <img src="assets/images/tt4.png" alt="" /> Boot Camp -{" "}
                          <span className="orange_text">
                            11:00Am to 12:00Am
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tags_blog col-sm-12 col-xs-12 colmd-12">
                <h3 className="blog_title"> Popular tags </h3>
                <ul className="tag_list">
                  <li className="tags">
                    {" "}
                    <a href="#">Yoga Center </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Tranning </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Fat Loss </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Weight Gain </a>{" "}
                  </li>
                  <li className="tags ">
                    {" "}
                    <a href="#">Fitness </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Running </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Gym </a>
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Cardio </a>{" "}
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">stretching </a>{" "}
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Workout </a>{" "}
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Bodybulding </a>{" "}
                  </li>
                  <li className="tags">
                    {" "}
                    <a href="#">Bicep </a>{" "}
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* blog end */}
    </>
  );
};

export default BlogDetail;
