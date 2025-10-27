import React from 'react'

export const AddressCard = ({address}) => {
  return (
    <div>
      <div>
        <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
        <p >{address?.state + " " + address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>{address?.mobile}</p>
         </div>
      </div>
    </div>
  )
}

export default AddressCard;
