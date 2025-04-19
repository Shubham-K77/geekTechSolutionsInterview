/* eslint-disable react/prop-types */
//Import Icon:
import { ImCross } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
//Import Global State:
import { useDispatch } from "react-redux";
//Import UseState Hook:
import { useState } from "react";
import { updateCartData } from "../../../store/cartData";
//NotiStack
import { useSnackbar } from "notistack";
const CartItemInfoCard = ({ data }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  //State For Quantity
  const [purchaseQuantity, setPurchaseQuantity] = useState(
    data.purchasedQuantity
  );
  //Function To Increase The Quantity
  const increaseQuantity = () => {
    if (purchaseQuantity < data.quantity) {
      setPurchaseQuantity(purchaseQuantity + 1);
    }
  };
  //Function To Decrement The Quantity
  const decreaseQuantity = () => {
    if (purchaseQuantity > 0) {
      setPurchaseQuantity(purchaseQuantity - 1);
    }
  };
  //Save The Updated Quantity
  const updateNewData = (id, quantity) => {
    dispatch(updateCartData({ id, quantity }));
    enqueueSnackbar("Successfully Updated!", { variant: "success" });
  };
  return (
    <div className="w-[95%] h-[60vh] rounded-sm flex flex-col justify-start items-center mt-[2rem] mb-[2rem] bg-white shadow-sm">
      {/* Displaying Cancel Button  */}
      <div className="w-full flex justify-end items-center mb-2">
        {/* Cancel Button */}
        <div className="w-[4%] h-[7vh] bg-amber-800 shadow-sm mr-[2rem] mt-[2rem] transition-all ease-in-out duration-150 hover:cursor-pointer hover:scale-105 flex justify-center items-center rounded-sm">
          <ImCross className="text-[1.5rem] font-semibold text-white" />
        </div>
      </div>
      {/* Displaying The Product In Cart */}
      <div className="w-full flex justify-around items-center">
        {/* Displaying The Image */}
        <div
          className="w-[20%] h-[40vh] bg-gray-400 rounded-sm"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Displaying The Information */}
        <div className="w-[50%] h-[40vh] flex flex-col justify-start items-center bg-transparent">
          {/* Product Title */}
          <div className="mt-4 text-[1.5rem] font-semibold mb-4">
            {data.name}
          </div>
          {/* Price, Category And Quantity Left */}
          <div className="w-full flex justify-center items-center">
            <div className="mr-4 text-[1.05rem] font-semibold mb-4 text-amber-900">
              {data.category}
            </div>
            <div className="mr-4 text-[1.05rem] font-semibold mb-4 text-amber-900">
              NPR {data.price}
            </div>
            <div className="text-[1rem] font-semibold mb-4">
              {data.quantity} Quantity left
            </div>
          </div>
          {/* Total Quantity Purchased */}
          <div className="w-full flex justify-center items-center mb-4">
            <div className="mr-4 text-[1rem] font-semibold">
              Total Quantity Purchased:
            </div>
            <div className="w-[45%] flex justify-center items-center">
              {/* Add Button */}
              <div
                className="w-[10%] h-[4vh] bg-white rounded-sm mr-2 flex justify-center items-center hover:cursor-pointer"
                onClick={() => increaseQuantity()}
              >
                <IoMdAdd className="text-[1.05rem] font-semibold text-black" />
              </div>
              {/* Display Field */}
              <input
                type="number"
                readOnly
                className="text-[1rem] font-semibold bg-white w-[35%] h-[6vh] rounded-sm text-center mr-2 border-1 border-gray-300"
                value={purchaseQuantity}
              />
              {/* Remove Button */}
              <div
                className="w-[10%] h-[4vh] bg-white rounded-sm mr-2 flex justify-center items-center hover:cursor-pointer"
                onClick={() => decreaseQuantity()}
              >
                <RiSubtractFill className="text-[1.05rem] font-semibold text-black" />
              </div>
            </div>
          </div>
          {/* Update Button */}
          <div
            className="w-[55%] h-[8vh] mb-4 rounded-sm bg-amber-800 mt-2 flex justify-center items-center transition-all ease-in-out duration-150 hover:cursor-pointer hover:scale-110"
            onClick={() => updateNewData(data.id, purchaseQuantity)}
          >
            <div className="text-[1.25rem] font-semibold text-white">
              Update Cart Info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemInfoCard;
