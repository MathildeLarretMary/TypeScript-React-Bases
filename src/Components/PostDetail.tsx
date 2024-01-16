// pour créer un lien vers une autre route
// viens de ---> npm i react-router-dom@latest
import { Link } from "react-router-dom";
import PostsData from "../Interfaces/PostsData";

// on crée une interface pour référencer tout l'object props sinon on a une erreur
interface PostDatumProps {
    onePost : PostsData | null
}


// React.FC ---> Functionnal Component
// <PostDatumProps> ---> on type les props
const PostDetail : React.FC<PostDatumProps> = ({onePost}) => {

    return (
        <div className="Post">
            <h2>{onePost?.title}</h2>
            <p>{onePost?.body}</p>
            {/* équivalent d'un a href pour retourner au path '/' */}
            <Link to={'/'}>Retour à l'accueil</Link>
        </div>
    )
}

export default PostDetail;