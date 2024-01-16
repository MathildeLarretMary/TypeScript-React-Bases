// permet l'utilisation du paramètre de la route
// viens de ---> npm i react-router-dom@latest
import { useParams } from 'react-router-dom';
import './Post.css'
import { useEffect, useState } from 'react';
import PostsData from '../Interfaces/PostsData';
import fetchURL from '../Functions/fecthUrl';
import PostDetail from '../Components/PostDetail';

// pour pouvoir typer le useParams
export type PostParams = {
    id : string
}


const Post = () => {
    // const pathParams = useParams<PostParams>();
    // console.log(pathParams); // {id: '1'} ---> Route path='/:id' dans App
    const { id } = useParams<PostParams>();

    const [onePost, setOnePost] =  useState<PostsData | null>(null);

    useEffect(() => {
            // Define an asynchronous function inside useEffect to handle the async behavior
    const fetchData = async () => {
        try {
          const data : PostsData = await fetchURL(`https://jsonplaceholder.typicode.com/posts/${id}`); // Wait for the fetchURL function to resolve
          console.log(data); // Log the data
          setOnePost(data); // set the data to onePost
        } catch (error : any) {
          console.log('Error:', error.message);
        }
      };
  
      fetchData(); // Invoke the asynchronous function
    }, [ id ])


    return (
        <div className="post-container">
            <h1>Détails de la publication</h1>
            <PostDetail onePost={onePost} />
        </div>
    )
}

export default Post;