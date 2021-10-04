
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './componenet/About/About';
import Footer from './componenet/Footer/Footer';
import Header from './componenet/Header/Header';
import Home from './componenet/Home/Home';
import NotFound from './componenet/NotFound/NotFound';
import Payment from './componenet/Payment/Payment';
import Services from './componenet/Services/Services';
import SignUp from './componenet/SignUp/SignUp';
import Works from './componenet/Works/Works';

//This is the Route components
function App() {
  return (
    <div className="antialiased bg-gradient-to-r from-blue-500 via-green-300 t antialiased bg-gradient-to-r from-blue-200 via-red-300to-green-800">
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
           <Route path="/payment">
              <Payment></Payment>
           </Route>
           <Route path="/signup">
             <SignUp></SignUp>
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
