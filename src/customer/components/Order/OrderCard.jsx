import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

export const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="shadow-md p-5 shadow-black hover:shadow-2xl cursor-pointer"
    >
      <Grid container alignItems="center" spacing={2}>
        
        {/* Left Section - Image + Details */}
        <Grid size={{ xs: 12, md: 6 }} className="flex items-center">
          <img
            className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
            src="https://images.meesho.com/images/products/356623856/lysvw_512.webp?width=512"
            alt="Men Slim Mid Rise Black Jeans"
          />
          <div className="ml-3">
            <p className="font-medium">Men Slim Mid Rise Black Jeans</p>
            <p className="opacity-60 text-xs font-semibold">Size: M</p>
            <p className="opacity-60 text-xs font-semibold">Color: Black</p>
          </div>
        </Grid>

        {/* Middle Section - Price */}
        <Grid size={{ xs: 6, md: 2 }}>
          <p className="font-semibold text-lg ml-[4.5rem]">₹1099</p>
        </Grid>

        {/* Right Section - Delivery Status */}
        <Grid size={{ xs: 12, md: 4 }}>
          {true && (
            <div>
              <p className="flex items-center text-green-600 text-sm font-medium ml-[4.5rem]">
                <AdjustIcon sx={{ width: "18px", height: "18px", mr: 1 }} />
                Delivered On March 03
              </p>
              <p className="text-xs text-gray-500 ml-[6.5rem]">
                Your Item Has Been Delivered
              </p>
            </div>
          )}

          {false && (
            <p className="text-gray-500 text-sm font-medium">
              Expected Delivery On Mar 03
            </p>
          )}
        </Grid>

      </Grid>
    </div>
  );
};
