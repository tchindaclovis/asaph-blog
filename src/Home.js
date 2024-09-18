	import Bloglist from "./BlogList";
	import useRecup from "./useRecup";
	
	const Home = () => {
		//l'expression 'data:blogs' transfert les données de data vers blogs
	    const{data:blogs,isLoading,error} = useRecup('http://localhost:8000/blogs?_sort=id&_order=desc')  
	    
	    return ( 
	        <div className="home">
			   {error && <div style={{'color': 'red'}}>{error}</div>}
	           {/* encapsulation de la balise sous condition afin de gérer le retard du server */}
			   {isLoading &&  <div> en cour de traitement... </div>}
	           {blogs &&  <Bloglist blogs={blogs} title={'Liste des blogs'}/>}
	        </div>
	     );
	}
	 
	export default Home; 

