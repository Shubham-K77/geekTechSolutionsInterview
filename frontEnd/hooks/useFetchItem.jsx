import { useSelector } from "react-redux";
const useFetchItem = () => {
  const itemInfo = useSelector((state) => state.items.itemInfo);
  return { items: itemInfo };
};

export default useFetchItem;
