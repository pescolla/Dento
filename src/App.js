import Footer from './components/Footer/Footer';
import Maps from './components/Maps/Maps';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Maps></Maps>
			<Footer></Footer>
		</div>
	);
}

export default App;
