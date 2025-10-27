import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { OrderTraker } from './OrderTraker';
import { Grid, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const OrderDetails = () => {
    return (
        <div className=" rounded-md p-4 ">
            <div className=' ml-5'>
                <h1 className='font-semibold text-xl py-2 ' >Delivery Order</h1>
                <AddressCard />
            </div>

            <div>
                <OrderTraker />
            </div>

            <Grid className="space-x-5" container>

                {[1,1,1,1,1].map((item)=><Grid item xs={6} className="w-full shadow-xl rounded-md mt-5 p-5   flex border" >
                    <div className='flex items-center space-x-4'>
                        <img className='w-[7rem] h-[7rem] object-cover object-top'
                            src="https://images.meesho.com/images/products/356623856/lysvw_512.webp?width=512"
                            alt="" />

                        <div className='ml-6'>
                            <p className='font-semibold'>Men Rise Black Jeans</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink</span>
                            <span>Size: M</span> </p>
                            <p>Seller: linaria</p>
                            <p>₹1099</p>
                        </div>
                    </div>
                    <Grid >
                         <Box sx={{color:deepPurple[500]}} className="flex items-center space-x-2 ml-10">
                            <StarBorderIcon sx={{fontSize:"3rem"}} className='px-4'/>
                            <span>Rate & Review Product</span>
                         </Box>

                    </Grid>
                </Grid>)}


            </Grid>
        </div>
    )
}

export default OrderDetails;