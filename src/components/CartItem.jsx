
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex justify-center  ">

      <div className="  flex gap-7 p-5  mt-10 border-[2px] w-[800px] justify-center items-center">

        <div className=" w-[300px] h-[100%] ">
          <img src={item.image} width="300px" height="300px" className=" object-cover" />
        </div>
        <div className=" flex flex-col gap-3 w-[600px]">
          <h1 className=" text-[25px]">{item.title}</h1>
          <h1>{item.description}</h1>
          <div className=" flex gap-5 justify-center items-center">
            <p className=" text-[20px]">&#8377;{item.price}</p>
            <div
            onClick={removeFromCart}>
              <button className="w-[80px] h-[40px] bg-black text-white rounded-md">DELET</button>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
