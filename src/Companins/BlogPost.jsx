import React from 'react';
import './index.css'

const BlogPost = ({title,content}) => {
    return(
        <article className='blog-Post'>
            <h2 className="h2-01">{title}</h2>
            <p>{content}</p>
        </article>
    );
};

export default BlogPost;