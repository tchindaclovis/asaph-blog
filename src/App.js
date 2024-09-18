	import './App.css';
	import NavBar from './NavBar';
	import Home from './Home';
	import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
	import Add from './Add';
	import BlogDetail from './BlogDetail';
	import NotFound from './NotFound';

	function App() {
	  
	// on peut aussi ecrire <NavBar/>
	  return (
		<Router>
			<div className="App">
	     		<NavBar />  
	      		<div className="contenu">
				{/* toutes les Routes doivent être dans la composante 'Switch' qui va permettre de naviguer d'une Route à l'autre en affichant une seule Route à la fois */}
	        		<Switch>
						{/* l'attribut 'path' specifie le chemin de notre composante. 'exact' renforce la précision */}
						<Route exact path='/'>
							<Home />
						</Route>

						<Route path='/Ajouter'>
							<Add />
						</Route>

						<Route path='/blogs/:id'>
							<BlogDetail />
						</Route>
						{/* se rassurer que ce soit la dernière route parceque '*' renvoi à nimporte quel lien */}
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
	      		</div>
	    	</div>
		</Router>
	   
	  );
	}
	
	export default App;

  