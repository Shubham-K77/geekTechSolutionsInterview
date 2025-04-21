/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/cartData";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const DisplayTotalCard = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const clearCartDetails = () => {
    dispatch(clearCart());
    enqueueSnackbar("Cart Info was cleared!", { variant: "success" });
    navigate("/");
  };
  return (
    <div className="mt-[2rem] w-[85%] h-[24vh] rounded-sm bg-white mb-[2rem] flex flex-col justify-center items-center">
      {/* Displaying The Total Price */}
      <div className="mb-4 w-[85%] flex justify-around items-center border-b-1 border-gray">
        <div className="text-[1.15rem] font-semibold">Checkout Total : </div>
        <div className="text-[1.05rem] font-semibold text-amber-800">
          NPR {totalPrice}
        </div>
      </div>
      {/* Displaying The CTA Buttons */}
      <div className="mb-2 w-[85%] flex justify-center items-center mt-2">
        {/* Purchase Button */}
        <div className="w-[45%] lg:w-[15%] h-[7vh] mr-4 bg-teal-600 rounded-sm flex justify-center items-center hover:cursor-pointer hover:bg-teal-700 transition-all ease-in-out duration-150 hover:scale-105">
          <div className="text-[1.15rem] font-semibold text-white">
            Purchase
          </div>
        </div>
        {/* Clear Button */}
        <div
          className="w-[45%] lg:w-[15%] h-[7vh] bg-red-600 rounded-sm flex justify-center items-center hover:cursor-pointer hover:bg-red-700 transition-all ease-in-out duration-150 hover:scale-105"
          onClick={() => clearCartDetails()}
        >
          <div className="text-[1.15rem] font-semibold text-white">Clear</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTotalCard;
