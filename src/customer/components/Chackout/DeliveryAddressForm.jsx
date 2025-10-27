import React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AddressCard } from '../AddressCard/AddressCard';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

export const DeliveryAddressForm = ({ onNext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("Submitting address:", address);

    dispatch(createOrder({ address, navigate }))
      .then(() => {
        onNext();
      })
      .catch((error) => console.error("Order creation failed:", error));
  };

  return (
    <Box className="p-4">
      <Grid container spacing={7} justifyContent="center">
        {/* Left Side */}
        <Grid item xs={12} md={6} className="border rounded shadow-md overflow-y-scroll">
          <Box className="p-5">
            <div className="flex justify-center">
              <AddressCard />
            </div>
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145, 85, 253)" }}
              size="large"
              variant="contained"
              fullWidth
            >
              Deliver Here
            </Button>
          </Box>
        </Grid>

        {/* Right Side Form */}
        <Grid item xs={12} md={5} className="border rounded shadow-md">
          <Box className="p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField required id="firstName" name="firstName" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="lastName" name="lastName" label="Last Name" fullWidth />
                </Grid>
              </Grid>

              <Box className="mt-4">
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Street Address"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Box>

              <Grid container spacing={2} className="mt-4">
                <Grid item xs={12} sm={6}>
                  <TextField required id="city" name="city" label="City" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="state" name="state" label="State" fullWidth />
                </Grid>
              </Grid>

              <Grid container spacing={2} className="mt-4">
                <Grid item xs={12} sm={6}>
                  <TextField required id="zip" name="zip" label="Zip Code" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth />
                </Grid>
              </Grid>

              <Button
                sx={{ mt: 4, bgcolor: "rgb(145, 85, 253)" }}
                size="large"
                variant="contained"
                type="submit"
                fullWidth
              >
                DELIVER HERE
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryAddressForm;
