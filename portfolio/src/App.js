import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Component/Navbar/NavBar';
import Main from './Component/Main/Main';
import Bio from "./Component/Bio/Bio"
function App() {
  return (
    <div className="App">
<NavBar/>

<Main/>
<Bio/>
{/* <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80" alt="" width="500" height="1600"/> */}
    </div>
  );
}

export default App;
