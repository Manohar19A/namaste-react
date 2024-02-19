import { useSelector,useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
const Cart = () => {
    const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items);
  const handleRemove =(item)=>{
    dispatch(removeItem(item))
  }
  return (
    <div  data-testid="cart-list"className="flex justify-center flex-col mx-80">
      {cartItems.map((cartItem,index) => (
        <div key={index} className="flex gap-5 justify-between items-center border border-black p-2 m-5">
          <div className="flex flex-col">
            <p>{cartItem.name}</p>
            <p>Rs.{(cartItem.price / 100).toFixed(0)}</p>
            <button className="bg-orange-700 text-white w-20 rounded-md" onClick={()=>{handleRemove(cartItem.id)}}>Remove</button>
          </div>
          <div>
            <img
              className="w-36"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                cartItem.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;
