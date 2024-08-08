import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Homeban from "./Components/Homeban";
import Shopban from "./Components/Shopban";
import Exclusive from "./Components/Exclusive";
import Productdet from "./Components/Productdet";
import Tranding from "./Components/Tranding";
import Featured from "./Components/Featured";
import Reviews from "./Components/Reviews";
import Services from "./Components/Services";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="App">
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homeban />
              <Shopban />
              <Exclusive addToCart={addToCart} />
              <Tranding />
              <Featured addToCart={addToCart} />
              <Reviews />
              <Services />
            </>
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} updateQuantity={updateQuantity} />}
        />
        <Route
          path="/exclusive/:id"
          element={<Productdet cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />}
        />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;