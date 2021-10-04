import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Scholarships from './components/Scholarships/Scholarships';
import Services from './components/Services/Services';


function App() {
  return (
  <div className="App"> 
  <Router>
   <Header></Header>
    
    
    <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route path="/about">
      <About></About>
    </Route>
    <Route path="/services">
      <Services></Services>
    </Route>
    <Route path="/scholarships">
      <Scholarships></Scholarships>
    </Route>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>

    </Switch>
    <Footer></Footer>
    </Router>  
     </div>   
  );
}

export default App;
