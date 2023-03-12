
import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass,faHouse } from '@fortawesome/free-solid-svg-icons';


function App() {
  library.add( faMagnifyingGlass,faHouse);
  return (
    <>
       <Header></Header>
       <Body></Body>
    </>
  );
}

export default App;
