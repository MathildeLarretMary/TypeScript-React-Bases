import { useEffect, useState } from 'react'
import PostsList from '../Components/PostsLists';
import './Posts.css'
import fetchURL from '../Functions/fecthUrl';
import PostsData from '../Interfaces/PostsData';


// React.FC ---> Functionnal Component
const Posts : React.FC = () => {

    // typer usestate useState<PostsData[] | null> qu'on initialise à null
    const [allPosts, setAllPosts] = useState<PostsData[] | null>(null)
    const [numberOfPosts, setNumberOfPosts] = useState<number>(20)

    useEffect(() => {
    // Define an asynchronous function inside useEffect to handle the async behavior
    const fetchData = async () => {
        try {
          const data : PostsData[] = await fetchURL(`https://jsonplaceholder.typicode.com/posts?_limit=${localStorage.getItem('number') || numberOfPosts}`); // Wait for the fetchURL function to resolve
          console.log(data); // Log the data
          setAllPosts(data); // set the data to allPosts
        } catch (error : any) {
          console.log('Error:', error.message);
        }
      };
  
      fetchData(); // Invoke the asynchronous function
    }, [numberOfPosts]) // rerender if numberOfPosts changes

    // get the event onChange on our input 
    const onChangeInput= (e : React.ChangeEvent<HTMLInputElement>) => {
      // takes the value to number and re fetch on fetchURL(`https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`);
      // to get good numberOfPosts
      setNumberOfPosts(Number(e.target.value));
      //pour stocker/sauvegarder en dur dans le navigateur on utilise localStorage.setItem('nom-du-contenu', contenu)
      localStorage.setItem('number', e.target.value)
    }

    return (
        <div className="posts">
        <h1>POSTS</h1>
        <div className='container'>
          {/* si il y a quelque chose avec une clef 'number' dans le localStorage on l'utilise, sinon numberOfPosts */}
            <label htmlFor="posts">Nombre de publications {localStorage.getItem('number') || numberOfPosts}</label>
            {/* on attribue la valeur de l'input par défaut soit avec le localStorage soit avec numberOfPosts */}
            <input type="range" name="posts" id="posts" min={1} max={20} onChange={onChangeInput} defaultValue={localStorage.getItem('number') || numberOfPosts}/>
            {/* PostsList des Components */}
            <PostsList allPosts={allPosts}/>
        </div>
        </div>
    )
}

export default Posts;