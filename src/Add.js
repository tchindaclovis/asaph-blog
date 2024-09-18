    import { useState } from "react";
    import { useHistory } from "react-router-dom";

const Add = () => {
    //créer un array destructuré
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[body, setBody] = useState('');
    let [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const HandleBlogAdding = (e) => {
        e.preventDefault();  //pour empêcher le submit par defaut
        const tmp_date = new Date().toISOString().split('T'); // le style de date
        const date = `${tmp_date[0]} ${tmp_date[1]}`;
        const blog = {title, author, body, date};
        setIsLoading (true);
        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }
        ).then(() => {
            console.log('Article ajouté avec succes');
            setIsLoading (false);
            history.push('/');
            // history.go(-1);
        }) 
    }  

    return ( 
        <div className="create-blog">
            {/* <h2>Ajouter un nouvel article</h2> */}
            <form onSubmit={HandleBlogAdding} className="form">
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Selectionez un auteur</label>
                    <select 
                        required 
                        className="form-control"
                        id="author"
                        value = {author}
                        onChange={(e) => setAuthor(e.target.value)}>
                        <option value=""></option>
                        <option value="Clovis TCHINDA">Clovis TCHINDA</option>
                        <option value="Christiane">Christiane</option>
                        <option value="Tony">Tony</option>
                        <option value="Duplex">Duplex</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Contenu de l'article</label>
                    <textarea 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="form-control textarea"
                        id="body" rows="10">
                    </textarea>
                </div>
                <div className="form-group">
                    {!isLoading && <button type="submit" className="btn-create">Creer Article</button> }   
                    {isLoading && <button type="submit" className="btn-create" disabled>En cours de traitement...</button> }       
                </div>
            </form>

        </div>
     );
}
 
export default Add;