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
import { PrivateRoute } from './components/Reusable/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import Checkout from './components/Checkout/Checkout';
import AccountScreen from './components/AccountScreen/AccountScreen';
import Shipping from './components/Shipping/Shipping';

function App() {

  const { userInfo } = useSelector(state => state.userLogin)

  const path = window.location.pathname

  return (
    <div className="App">
      <Router>
        <Header />
        <main className={path === "/login" && "main-for-login"}>
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
            <PrivateRoute user={userInfo} path="/shipping">
              <Shipping />
            </PrivateRoute>
            <PrivateRoute user={userInfo} path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute user={userInfo} path="/user/account">
              <AccountScreen userInfo={userInfo} />
            </PrivateRoute>
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
