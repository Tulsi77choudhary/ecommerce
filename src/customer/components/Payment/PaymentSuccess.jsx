import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import OrderTraker from '../Order/OrderTraker';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Grid } from '@mui/material';

function PaymentSuccess() {
  const [paymentId, setPaymentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const { orderId } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);


  useEffect(() => {
    const paymentIdParam = searchParams.get('razorpay_payment_id');
    const paymentStatusParam = searchParams.get('razorpay_payment_link_status');

    setPaymentId(paymentIdParam);
    setPaymentStatus(paymentStatusParam);
  }, [searchParams]);


  useEffect(() => {
    if (orderId && paymentId && paymentStatus) {
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(paymentId, paymentStatus));
    }
  }, [dispatch, orderId, paymentId, paymentStatus]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert severity="success" variant="filled" sx={{ mb: 6, width: 'fit-content' }}>
          <AlertTitle>Payment Success</AlertTitle>
          🎉 Congratulations! Your order has been placed successfully.
        </Alert>
      </div>
      <OrderTraker activeStep={1} />

      <Grid container className='space-y-5 py-5 pt-20'>
        {order?.orderItems?.map((item) => <Grid container item className='shadow-xl rounded-md p-5'
          xs={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Grid item xs={6}>
            <div className='flex items-center'>
              <img
                className='w-[5rem] h-[5rem] object-cover object-top'
                src={item.product.imageUrl}
                alt=""
              />

              <div className='ml-5 space-y-2'>
                <p>{item.product.title}</p>
                <div className='opacity-50 text-xs front-semibold space-x-5'>
                  <span>Color: {item.color}</span>
                  <span>Size: {item.size}</span>
                </div>
                <p>Seller : {item.product.brand}</p>
                <p>₹ {item.price}</p>
              </div>
            </div>
          </Grid>
            <Grid item>
              <Address address={''}/>
            </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
}

export default PaymentSuccess;
