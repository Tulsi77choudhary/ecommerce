import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItemToCart,updateItemToCart } from '../../../State/Cart/Action';

export const CartItems = ({ item }) => {

  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const handlUpdateCartItem = (newQuantity) => {
    const userId = localStorage.getItem("userId");

    dispatch(updateItemToCart({
      cartItemId: item?.id,
      userId: userId,
      quantity: newQuantity
    }));
  };


  const handleRemoveCartItem = () => {
    dispatch(removeItemToCart(item?.id, userId));
  }

  return (
    <div className='p-5 shadow-lg  rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full object-cover object-top'
            src={item?.product?.imageUrl}
            alt="" />
        </div>

        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>{item?.product?.title}</p>
          <p className='opacity-70'>Size: {item?.size}, White</p>
          <p className='opacity-70 mt-2'>Seller: {item?.product?.brand}</p>

          <div className="pt-6 flex space-x-5 items-center text-gray-900">
            <p>₹{item?.price}</p>
            <p className="text-gray-400 line-through">₹{item?.DiscountedPrice}</p>
            <p className="text-green-600 text-sm lg:text-base">₹{item?.DiscountPersent}% off</p>
          </div>
        </div>
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          <IconButton
            onClick={() => handlUpdateCartItem(item?.quantity - 1)}
            disabled={item?.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
          <IconButton
            sx={{ color: "rgb(145, 34, 53)" }}
            onClick={() => handlUpdateCartItem(item?.quantity + 1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253)" }} >remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
