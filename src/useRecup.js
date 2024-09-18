//importation d'un react hock "useState" chargé du réaffichage
import { useState, useEffect } from "react";

const useRecup = (url) => {
  //variable "blog" avec un tableau de deux éléments et la methode "setBlog"
    const [data, setData] = useState(null); 
	
    const [isLoading, setIsLoading] = useState(true); 

    const [error, setError] = useState(null);

  	  //:a fonction "useEffect" qui prend deux arguments (le premier une fonction et le deuxième une array de dépendance : s’exécute seulement au premier affichage et après non) est toujours appelé à chaque fois qu'il ya mouvement sur la page    
    useEffect(() => {
        const abortCont = new AbortController();
		//simulation de retard de 2000 ms dans le 'setTimeout' 
		setTimeout(() => {
            //va chercher les données dans le server à travers l'url
            //lier la fonction fetch avec abortCont
			fetch(url, {signal: abortCont.signal})
				.then((response) => {
					//l'erreur est considérée ici mais affiché plus bas
					if(!response.ok){
						throw Error('Desole une erreur est survenue...');
					}
					return response.json(); 
				})

				.then((data) => {
					setData(data);
					setIsLoading(false);  
					setError(null);
				})
					//l'erreur s'affiche ici
				.catch( err => {
                    if(err.name === "AbortError"){
                        console.log('fetch a été stoppé');
                    }else{
                        setError(err.message);
                        setIsLoading(false); 
                    }
				})
		},2000);   

        return () => abortCont.abort();

	  }, [url]);
      // on utilise les crochets d'objet{} et non les crochets de tableau[] parceque l'ordre n'importe pas
      return {data, isLoading, error};
}
 
export default useRecup;