		import { Link } from "react-router-dom"; 
	//on écrit "sfc" pour générer la arrow function suivante
	 //on crée les variables "blogs" et "title" entre crochets pour porter la propriété
	const Bloglist = ({blogs, title}) => {
	   
	    return ( 
	        <div className="bloglist"> 
	            <h2>{title } </h2>
	        {
	           // la fonction "map" c'est pour rendre dinamyque. Elle retournera un blog à chaque itération
	           //"props" est un objet global qui inclu toutes les propriétés "blogs"
	           blogs.map( (blog) => (
	              //react a besoin du "key" pour pouvoir mettre à jour le DOM à chaque fois
	              <div className="blog" key={blog.id}>
	                 <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
	                 <small className="blog-publication-date">Publié le :  {blog.date}</small>
	                 <p className="blog-author">Publié par : {blog.author}</p>
	              </div>
	           ))
	        }
	     </div>
	     );
	}
	 
	export default Bloglist;
