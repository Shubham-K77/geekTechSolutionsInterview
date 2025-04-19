/* eslint-disable react/prop-types */
//Cart Icon
import { MdOutlineShoppingCart } from "react-icons/md";
//Routing
import { useNavigate } from "react-router-dom";
//Global State
import { addToCart } from "../../../store/cartData";
import { useDispatch } from "react-redux";
export const ItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateDataAndNavigate = () => {
    dispatch(addToCart({ itemData: data }));
    navigate("/cart");
  };
  return (
    <div className="flex flex-col justify-start items-center w-full h-[70vh] bg-white rounded-sm shadow-sm hover:cursor-pointer hover:shadow-md mb-[2rem]">
      {/* Product Image */}
      <div
        className="w-full h-[45vh] mb-2 shadow-sm rounded-t-sm"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Product Category and Price Info */}
      <div className="w-full flex justify-start items-center mb-[1.5rem] ml-[1.5rem] mt-[1rem]">
        {/* Items Info */}
        <div className="rounded-sm p-2 ml-2 mr-2 bg-amber-800 flex justify-center items-center">
          <div className="text-[0.95rem] font-semibold text-white">
            {data.category}
          </div>
        </div>
        {/* Product Price */}
        <div className="rounded-sm p-2 ml-2 mr-2 bg-green-800 flex justify-center items-center">
          <div className="text-[0.95rem] font-semibold text-white">
            NPR {data.price}
          </div>
        </div>
      </div>
      {/* Product Name */}
      <div className="w-full flex justify-center items-center mb-2">
        <div className="ml-4 text-[1.075rem] font-bold mb-2">{data.name}</div>
      </div>
      {/* Add To Cart */}
      <div
        className="w-[90%] h-[7.5vh] rounded-sm shadow-sm bg-amber-600 flex justify-center items-center mb-4 hover:cursor-pointer hover:bg-amber-500 transition-all ease-in-out duration-150 hover:scale-90"
        onClick={() => updateDataAndNavigate()}
      >
        <div className="text-[1.10rem] font-semibold text-white mr-2">
          Add to Cart
        </div>
        <MdOutlineShoppingCart className="text-[1.5rem] font-semibold text-white" />
      </div>
    </div>
  );
};
