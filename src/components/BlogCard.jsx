import React from 'react'
import Tag from './Tag';
import Fade from 'react-reveal/Fade';

const BlogCard = ({ title, image, link, tags, pubDate, toggle }) => {

    const blogTags = tags.map((tag, index) => {
        return (
            <Tag 
            key={index}
            tag={tag}
            />
        )
    })

    return (
    <Fade bottom duration={1000} delay={200}>
      <div className={toggle ? 'blog-card darkmode' : 'blog-card'}>
            <a href={link} target="_blank" rel="noreferrer">
                <div className="blog-img">
                    <img src={image} className="img" alt="blog post"/>
                </div>
            </a>
            <div className="content">
                <div className="blogdate">
                    <span>{pubDate}</span>
                </div>
                <h2>{title}</h2>
                <div className="blogtags">
                    <span className="blogtags">{blogTags}</span>
                </div>
                    <a href={link} target="_blank" rel="noreferrer" className="blog-btn">Read More</a>
            </div>
      </div>
    </Fade>
  )
}

export default BlogCard;