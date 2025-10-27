import React from 'react';
import { Grid } from '@mui/material';
import { OrderCard } from './OrderCard';

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="px-5 lg:px-29">
      <Grid container spacing={5}>
        
        {/* Sidebar filter */}
        <Grid size={{ xs: 12, md: 3 }}>
          <div className="h-auto w-[10rem] shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option, idx) => (
                <div className="flex items-center" key={idx}>
                  <input
                    id={option.value}
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-700"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Order cards */}
        <Grid size={{ xs: 12, md: 9 }}>
          <div className="space-y-2">
            {[1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
              <OrderCard key={idx} />
            ))}
          </div>
        </Grid>

      </Grid>
    </div>
  );
};

export default Order;
