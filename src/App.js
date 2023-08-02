import CartProvider from "./components/Context/cartProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainNavigationRoutes from "./components/MainNavigationRoutes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <div style={{ paddingBottom: "50px" }}>
        <NavBar />
        <Header />
        <MainNavigationRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
