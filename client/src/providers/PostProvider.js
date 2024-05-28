import { createContext, useContext, useState } from "react"

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const createPost = (title, text, image) => {
        setPosts( (existing) => [{ title, text, image }, ...existing] );
    }

    return (
        <PostContext.Provider value={{ posts, createPost }}>
            {children}
        </PostContext.Provider>
    )
}

export const usePosts = () => useContext(PostContext);