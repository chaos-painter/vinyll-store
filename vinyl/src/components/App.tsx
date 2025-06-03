import Header from "../components/Header.tsx";
import Shelf from "../components/Shelf.tsx";
import AutoScrollHandler from "../components/AutoScrollHander.tsx";
import BeautyBox from "../components/BeautyBox.tsx";
import Cart from "../components/Cart.tsx";
import useCart from "../utils/useCart.ts";
import getVinyls from "../utils/getVinyls.ts";
import Footer from '../components/Footer.tsx';

// This is the main body of the application. All (or most) components should assemble here.

function App() {
  const { items, addItem, clearCart } = useCart();
  const { shelves } = getVinyls();
  return (
    <>
      <Header />
      <AutoScrollHandler />
      <BeautyBox />
      <Shelf addItem={addItem} shelves={shelves} />
      // can you fix the cart it pmo 💔
      <Cart items={items} clearCart={clearCart} />
      <Footer />
    </>
  );
}

export default App;
