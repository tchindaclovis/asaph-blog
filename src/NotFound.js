import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="404">
            <h2>Ooooops!!!...</h2>
            <p>La page que vous essayez d'accéder n'existe pas</p>
            <Link to='/'>Allez à la page d'accueil...</Link>
        </div>
     );
}
 
export default NotFound;