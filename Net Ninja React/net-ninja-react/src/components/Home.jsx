import { useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },
  ]);

  return (
    <div className="Home">
          <h2>Home Page</h2>
          
        {blogs.map((blog, index)=>{
            return <div key={blog.id} className="blog-preview">
                <h2>{blog.title}</h2>
                <p>Wriiten by {blog.author}</p></div>
        })}

    </div>
  );
}

export default Home;
