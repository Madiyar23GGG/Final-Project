import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Posts() {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    },[]);

    return(
        <div>
            <h1>Барлық посттар</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <Link to={`/posts/${id}`}>Толығырақ оқу</Link>
                </div>
            ))}
        </div>
    )
}


export default Posts