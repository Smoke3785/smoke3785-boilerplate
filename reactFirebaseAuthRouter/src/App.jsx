import './App.css';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Content from './Pages/Content/Content'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const App =()=> {
  return (
    <div className="App">
      <Router>
        <Header />
          <div className="mainDiv">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path='/content' component={Content} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
