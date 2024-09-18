	import {Link} from "react-router-dom";
	const NavBar = () => {
		    //le style ici est un objet c'est pourquoi les éléments sont séparés par une virgule
		    const btnArticle = {
		        backgroundColor:'#028bfc',
		        padding:'0.5rem',
		        borderRadius:'0.5rem',
		        color:'#fff'
		    };
		    return ( 
		        <nav className="navbar">
		            <div>
		                <Link className="logo" to="/">JESUS Blog</Link> 
		            </div>
		            <ul className="liens">
		                <li>
		                    <Link to="/" className="lien">Accueil</Link>
		                </li>

		                <li>
						{/* le "Link" n'a pas d'attribut href mais plutot un "to" */}
		                    <Link to="/Ajouter" className="lien" style={btnArticle}>Créer Article</Link>
		                </li>
		            </ul>
		        </nav>
		     );
		}
		 
		export default NavBar;
	
    