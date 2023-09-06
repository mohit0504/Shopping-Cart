import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" w-[100vw] flex justify-center  ">
  {
    cart.length > 0  ? 
    (<div className=" w-[1180px] flex  gap-10 mt-6 overflow-x-hidden ">


      <div className="">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" w-[300px] h-[250px] mt-10 p-3  flex flex-col gap-5 border border-gray-300 rounded-sm fixed right-[120px] scroll-m-0">

        <div >
          <div className=" font-bold">Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p >Total Amount: <span className=" font-bold">&#8377;{totalAmount}</span> </p>
          <button className=" w-[220px] h-[60px] rounded-md bg-yellow-300 hover:text-white hover:bg-green-600">
            Check-Out Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className=" w-[100vw] h-[80vh] flex flex-col justify-center items-center gap-6 ">
      <h1 className=" text-[80px]">Cart Empty </h1>
      <Link to={"/"}>
        <button className="w-[260px] text-[30px] h-[100px] bg-yellow-300 hover:text-white hover:bg-green-600 rounded-md ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
