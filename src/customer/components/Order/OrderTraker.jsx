import React from 'react'
import { Stepper, Step, StepLabel } from "@mui/material";

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
export const OrderTraker = ({activeStep}) => {
  return (
    <div className=' mt-15 h-[7rem]  ml-5  justify-item-center'>
        <Stepper 
           activeStep={activeStep} 
           alternativeLabel
        >
        {steps.map((label)=>
            <Step>
                <StepLabel sx={{colors:"#560be0ff", fontSize:"44px"}}>
                   {label}
                </StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}
export default OrderTraker;