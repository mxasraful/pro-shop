import './App.css';
import './responsive.css';
import Footer from './components/Reusable/Footer/Footer';
import Header from './components/Reusable/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ProductScreen from './components/ProductScreen/ProductScreen';
import CartScreen from './components/CartScreen/CartScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/cart/:id">
              <CartScreen />
            </Route>
            <Route path="/cart">
              <CartScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route path="*">
              <h2>Error</h2>
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
