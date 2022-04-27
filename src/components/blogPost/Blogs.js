import React, { useState } from "react";
import {
  BlogsCard,
  StyledBlog,
  StyledBlogNav,
  StyledButton,
  StyledCard,
} from "./style";
import { BlogsDetails } from "./DetailsJson";
const Blogs = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBlog className="blogs-body">
      <StyledBlogNav className="blogs-nav">
        <h3 className="blogs-nav-heading">Blog Post</h3>
      </StyledBlogNav>
      <BlogsCard className="blogs-card-body">
        {BlogsDetails.map((post) => (
          <StyledCard className="card" key={post.id}>
            <img className="blog-img" src={post.Image} />
            <div className="card-details">
              <h5 className="card-detail-title">{post.Title}</h5>
              <div className="post-info">
                <img className="user" src={post.UserProfile} />
                <p className="user-name">{post.UserName}</p>
                <img className="time" src={post.Time} />
                <p className="post-time">{post.PostTime}</p>
                <img className="comment" src={post.UsersMessage} />
                <p className="coments">{post.UsersComments}</p>
              </div>
              <div className="description">
                <p>{post.Description}</p>
                {open ? <>{post.DescriptionSub}</> : null}
              </div>
              <StyledButton
                className="button"
                id={post.id}
                onClick={() => (post.id == "3" ? setOpen(!open) : null)}
              >
                Read More
              </StyledButton>
            </div>
          </StyledCard>
        ))}
      </BlogsCard>
    </StyledBlog>
  );
};

export default Blogs;
