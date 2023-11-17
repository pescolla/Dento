import Footer from './components/Footer/Footer';
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
			<Footer></Footer>
		</div>
	);
}

export default App;
