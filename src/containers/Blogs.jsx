import React, {useEffect, useState} from 'react';
import Slide from 'react-reveal/Slide'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yushi95')
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
            setBlogs(blogs)
        })
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