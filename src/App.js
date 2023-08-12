import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProvider from "./components/Context/cartProvider";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MainNavigationRoutes from "./components/Layout/MainNavigationRoutes";
import NavBar from "./components/Layout/Navbar";
import Notification from "./components/Layout/Notification";
import { uiActions } from "./reduxstore/ui-slice";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Sending",
          title: "Sending...",
          message: "sending data",
        })
      );
      const response = await fetch(
        "https://ecommerce-34a85-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart Data");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "sent data successfully",
        })
      );
      const data = await response.json();
    };
    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed...",
          message: "Failed to send data",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <CartProvider>
      <div style={{ paddingBottom: "50px" }}>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <NavBar />
        <Header />
        <MainNavigationRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
