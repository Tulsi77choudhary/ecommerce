import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function CheckOut() {
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);

    
    const stepFromQuery = (parseInt(querySearch.get("step")) || 1) - 1;
    const [activeStep, setActiveStep] = useState(stepFromQuery);

    useEffect(() => {
        setActiveStep(stepFromQuery);
    }, [stepFromQuery]);

    const handleNext = () => setActiveStep(prev => prev + 1);
    const handleBack = () => setActiveStep(prev => prev - 1);

    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activeStep >= steps.length ? (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you're finished
                    </Typography>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mb: 4 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                        </Box>

                        {activeStep === 1 && <DeliveryAddressForm onNext={handleNext} />}
                        {activeStep === 2 && <OrderSummary />}
                    </>
                )}
            </Box>
        </div>
    );
}
