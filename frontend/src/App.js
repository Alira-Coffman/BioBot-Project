import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructions from './components/Instructions/Instructions';
function App() {
  return (
    <div className="App">
     <Header />
     <div className=" container">
      <div className="my-5">
        <Instructions />
      </div>
      <SearchBar />
     </div>
    </div>
  );
}

export default App;
