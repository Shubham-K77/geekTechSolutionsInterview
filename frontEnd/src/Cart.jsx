import CartItemInfoCard from "./components/custom/CartItemInfoCard";
import useCartFetchItem from "../hooks/useCartFetchItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sumCart } from "../store/cartData";
import DisplayTotalCard from "./components/custom/DisplayTotalCard";
const Cart = () => {
  const dispatch = useDispatch();
  const { cardData } = useCartFetchItem();
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  useEffect(() => {
    if (!cardData || cardData.length == 0) {
      return;
    }
    dispatch(sumCart());
  }, [cardData, dispatch]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center lg:items-start bg-gray-100">
      {/* Title Of The Page */}
      <div className="text-[2rem] mt-[2rem] ml-[2rem] mb-[2rem] font-semibold text-blue-700">
        Purchase Summary
      </div>
      {/* Rendering Cart Data */}
      <div className="lg:ml-[2rem] mb-[2rem] flex flex-col justify-start items-center w-full lg:w-[95%] bg-transparent">
        {cardData &&
          cardData.map((item) => (
            <CartItemInfoCard data={item} key={item.id} />
          ))}
      </div>
      {/* Rendering The Sum Cart Data */}
      {cardData.length > 0 && (
        <div className="w-full flex justify-center items-center">
          <DisplayTotalCard totalPrice={grandTotal} />
        </div>
      )}
    </div>
  );
};

export default Cart;
