import CartItemInfoCard from "./components/custom/CartItemInfoCard";
import useCartFetchItem from "../hooks/useCartFetchItem";
const Cart = () => {
  const { cardData } = useCartFetchItem();
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-start bg-gray-100">
      <div className="text-[2rem] mt-[2rem] ml-[2rem] mb-[2rem] font-semibold text-blue-700">
        Purchase Summary
      </div>
      <div className="ml-[2rem] mb-[2rem] flex flex-col justify-start items-center w-[95%] bg-transparent">
        {cardData &&
          cardData.map((item) => (
            <CartItemInfoCard data={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Cart;
