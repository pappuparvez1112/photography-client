import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blogs from '../../../images/blogs 1.jpg';
import './Blogs.css'


const blogData = [
    {
        title : 'We can provide also making video if you want  ',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Weeding',
        authorImg : blogs,
        
    },
    {
        title : 'we have a vast experience in this topic',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Birthday',
        authorImg : blogs,
    
    },
    {
        title : 'You can trust us cz we maintain privacy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Event',
        authorImg : blogs,
        
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="row card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;