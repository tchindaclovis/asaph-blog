import { useHistory, useParams } from "react-router-dom";
import useRecup from "./useRecup";

const BlogDetail = () => {
    //pour récupérer l'id dans "App.js"
  const {id } =  useParams();
  const {data:blog, isLoading, error} = useRecup('http://localhost:8000/blogs/'+id);
    const history = useHistory();

const HandleDelete = () =>{
    fetch('http://localhost:8000/blogs/'+id, {
        method: "DELETE"
    }).then( () =>{    //".then()" est callback function
        history.push('/');
        console.log('Supprimer avec succès'); 
    })
}
    return ( 
        <div className="">
            {isLoading && <div>En cours de traitement...</div> }
            {error && <div style={{'color': 'red'}}>{error}</div>}
            {blog && (
                <div className="blog">
                    <h2 className="blog-titre">{blog.title} </h2>
                    <small className="blog-publication-date">{`Publier le: ${blog.date}`} </small>
                    <p className="blog-body">{blog.body} </p>
                    <p className="blog-author">{`Publier par: ${blog.author}`} </p>
                    <button onClick={HandleDelete}>Supprimer</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetail;