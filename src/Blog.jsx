import { React, useState, useEffect } from 'react'
import { supabase } from './supabaseClient';

function Blog() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({title: "", content: ""});
    const {title, content} = post;
    useEffect(() => {
        fetchPosts()
    },  []);

    async function fetchPosts() {
        const { date } = await supabase
        .from('Blog Posts')
        .select()
        setPosts(data);
        console.log("data: ", data);
    }
    async function createPost() {
        await supabase
        .from('Blog Posts')
        .insert([
            { title, content}
        ])
        .single()
        setPosts({ title: "", content: ""})
        fetchPosts()
    };
  
    return (
        <div className="blog-container">
            <input
            placeholder="Title"
            value={title}
            onChange={ e => setPost({ ...post, title: e.target.value})}/>
            <input
            placeholder="Content"
            value={title}
            onChange={ e => setPost({ ...post, content: e.target.value})}/>
            <button onClick={createPost}>Create Post</button>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        </div>
                ))
            }
        </div>
    )
}

export default Blog