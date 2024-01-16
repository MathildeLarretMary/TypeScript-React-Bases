// pour naviguer de route en route
// viens de ---> npm i react-router-dom@latest
import { useNavigate } from 'react-router-dom';

import PostsData from '../Interfaces/PostsData';
import './PostsLists.css';

// on crée une interface pour référencer tout l'object props sinon on a une erreur
interface PropsListsPosts {
    allPosts : PostsData[] | null
}

// React.FC ---> Functionnal Component
// <PropsListsPosts> ---> on type les props
const PostsList : React.FC<PropsListsPosts> = ({allPosts}) => {

    //on initialise la fonction de navigation
    const navigate = useNavigate();

    const hangleClickNavigate = (number : number) => {
        // onClick={() => hangleClickNavigate(post.id)} 
        // va naviguer vers le path '/:id' de App.tsx 
        navigate(`/${number}`)
    }

    return (
        <ul className="list-container">
            {allPosts?.map((post) => {                
                return <li key={`${post.id}-key`} className='post' 
                // ---> toujours les handleClick dans une fonction flechée au onClick sinon ça ne fonctionne pas
                onClick={() => hangleClickNavigate(post.id)}>

                    <h3>{post.title}</h3>
                    <p>lire l'article</p>
                    </li>
            })}
        </ul>
    )
}

export default PostsList;