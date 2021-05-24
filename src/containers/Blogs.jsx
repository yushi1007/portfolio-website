import React, {useEffect, useState} from 'react';
import Slide from 'react-reveal/Slide'
import BlogCard from '../components/BlogCard';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yushi95')
        .then((r) => r.json())
        .then((blogs) => {
            setBlogs(blogs.items)
        })
    }, [])
    console.log(blogs[0].title)
    const blogItems = blogs.map((blog, index) => {
        return(
            <BlogCard 
            key={index}
            name={blog.title}
            image={blog.thumbnail}
            link={blog.link}
            content={blog.content}
            pubDate={blog.pubDate.split(' ')[0]}
            />
        )
    })

    return (
    <div id="blogs" className="section blogspage">
        <Slide left duration={800}>
            <h1>BLOGS</h1>
        </Slide>
        <div className="blogscontainer">

        </div>
    </div>
    )
}

export default Blogs;