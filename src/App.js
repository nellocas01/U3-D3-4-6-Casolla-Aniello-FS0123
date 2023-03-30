import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import SingleBook from './components/SingleBook';
import horror from './data/horror.json'
import BookList from './components/BookList';




function App() {
  return (
    <>
      <MyNav brand="EpiBooks" claim="Scegli il libro che fa per te!" />
      <Welcome/>
      {/* <AllTheBooks /> */}
      <SingleBook book={horror}/>
      <BookList books={horror}/>
      <MyFooter/>
    </>
  );
}

export default App;
