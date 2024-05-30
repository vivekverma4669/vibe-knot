import './App.css';
import AllPages from './Components/AllPages';
import Footer from './Components/Footer/Footer';
// import NavigationMain from './Components/Navbar/NavigationMain';
import Nav from './Components/Navbar/Nav';
function App() {
  
  return (
    <div className="App" >
    <Nav/>
     <AllPages/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
