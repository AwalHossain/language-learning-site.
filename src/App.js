
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './componenet/About/About';
import Footer from './componenet/Footer/Footer';
import Header from './componenet/Header/Header';
import Home from './componenet/Home/Home';
import NotFound from './componenet/NotFound/NotFound';
import Services from './componenet/Services/Services';
import Works from './componenet/Works/Works';

// " antialiased bg-gradient-to-r from-pink-300 via-purple-300 t antialiased bg-gradient-to-r from-pink-300 via-purple-300to-indigo-400"
function App() {
  return (
    <div className="bg-green-200">
      {/* React Router */}
        <Router>
        <Header></Header>
          <Switch>
            <Route path="/services">
              <Services></Services>
            </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/about">
             <About></About>
           </Route>
           <Route path="/works">
             <Works></Works>
           </Route>
           <Route exact path="*">
             <NotFound></NotFound>
           </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        
    </div>
  );
}

export default App;
