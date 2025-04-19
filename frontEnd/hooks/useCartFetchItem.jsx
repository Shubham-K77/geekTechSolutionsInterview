//Global State
import { useSelector } from "react-redux";
const useCartFetchItem = () => {
  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const totalPrice = useSelector((state) => state.cart.grandTotal);
  return { cardData: cartInfo, totalPrice };
};

export default useCartFetchItem;
