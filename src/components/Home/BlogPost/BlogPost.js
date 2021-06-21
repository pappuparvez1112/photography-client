import React from 'react';

const BlogPost = (props) => {
    const {title, description, author, authorImg , date} = props.blog;
    return (
        <div className="card shadow-sm d-flex col-md-4 text-center mb-5">
            <div className=" d-flex  align-items-center">
                <img style={{height:"300px"}} src={authorImg} alt=""/>
                
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;