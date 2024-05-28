import { useEffect, useState } from "react"
import { usePosts } from "../../providers/PostProvider";

export const CreatePostForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const { posts, createPost } = usePosts();

    // useEffect( () => {
    //     console.log(`Title: ${title} \nText: ${text} \nImage: ${image}`)
    // }, [title, text, image])

    const onSubmit = (e) => { 
        e.preventDefault();
        createPost(title, text, image);
        e.target.reset();
    }

    return (
        <form onSubmit={ onSubmit }>
            <div className='my-3'>
                <label htmlFor='title' className='form-label'>Titre</label>
                <input className='form-control' type='text' id='title' name='title' 
                onChange={(e) => { setTitle(e.target.value) }} required></input>
            </div>

            <div className='my-3'>
                <label htmlFor='text' className='form-label'>Texte</label>
                <textarea className='form-control' id='text' name='text'
                onChange={(e) => { setText(e.target.value) }} required></textarea>
            </div>

            <div className='my-3'>
                <label htmlFor='image' className='form-label'>Image</label>
                <input className='form-control' type='file' id='image' name='image'
                onChange={(e) => { setImage(e.target.value) }}></input>
            </div>

            <button type='submit' className='btn btn-success my-3'>Créer</button>
        </form>
    )
}