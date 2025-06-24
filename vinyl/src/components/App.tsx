import Header from "../components/Header.tsx";
import Shelf from "../components/Shelf.tsx";
import AutoScrollHandler from "../components/AutoScrollHander.tsx";
import BeautyBox from "../components/BeautyBox.tsx";
import Cart from "../components/Cart.tsx";
import ThemeSwitch from "../components/ThemeSwitch.tsx";
import useCart from "../utils/useCart.ts";
import getVinyls from "../utils/getVinyls.ts";

// This is the main body of the application. All (or most) components should assemble here.

function App() {
  const { items, addItem, clearCart } = useCart();
  const { shelves } = getVinyls();
  return (
    <>
      <ThemeSwitch />
      <Header />
      <AutoScrollHandler />
      <BeautyBox />
      <Shelf addItem={addItem} shelves={shelves} />
      <Cart items={items} clearCart={clearCart} />
    </>
  );
}

export default App;
