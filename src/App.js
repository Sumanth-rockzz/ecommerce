import CartProvider from "./components/Context/cartProvider";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import StorePage from "./components/Store";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Header />
      <StorePage />
    </CartProvider>
  );
}

export default App;
