import "./Header.css";
import { useCart } from "../context/CartContext";
export default function Header() {
  const { amount } = useCart();
  return (
    <header>
      <h2>Shopping Application</h2>
      <h3>สินค้าในตะกร้า : {amount}</h3>
    </header>
  );
}
