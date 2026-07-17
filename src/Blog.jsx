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
            <a>Blog coming soon...</a>
        </div>
    )
}

export default Blog