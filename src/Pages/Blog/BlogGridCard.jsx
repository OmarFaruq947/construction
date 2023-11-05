import React from "react";

const BlogGridCard = ({ blog }) => {
  const { blogTitle, blogContent } = blog;
  return (
    <>
      <div className="card1 border border-brand ">
        <h3 className="h3_blog text-heading">{blogTitle}</h3>
        <p className="small relative group text-textColure">
          {blogContent.length > 80
            ? blogContent.slice(0, 80) + "⇾"
            : blogContent}
        </p>
        <div className="go-corner overflow-hidden" href="#">
          <div className="go-arrow hover:translate-x-7">
            <span className=" hover:ml-32 ml-0 inline-block">→</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridCard;
