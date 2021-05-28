import React, {useEffect, useState} from 'react';
import Slide from 'react-reveal/Slide'
import BlogCard from '../components/BlogCard';

const Blogs = ({ toggle }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yushi95')
        .then((r) => r.json())
        .then((blogs) => {
            setBlogs(blogs.items)
        })
    }, [])

    const blogItems = blogs.map((blog, index) => {
        return(
            <BlogCard 
            key={index}
            tags={blog.categories}
            title={blog.title}
            image={blog.thumbnail}
            link={blog.link}
            pubDate={blog.pubDate.split(' ')[0]}
            toggle={toggle}
            />
        )
    })

    return (
    <div id="blogs" className={toggle ? "blogspage darkmode" : "blogspage"}>
        <Slide left duration={800}>
            <h1>BLOGS</h1>
        </Slide>
        <div className="blogscontainer">
            {blogItems}
        </div>
    </div>
    )
}

export default Blogs;