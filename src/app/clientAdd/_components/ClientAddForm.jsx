"use client"
import React, { useEffect, useState } from 'react'

function ClientAddForm() {
  const [loading, setLoading] = useState(false)
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [address,setAddress] = useState("")
  const [valid,setValid] = useState(false)


  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedCus = JSON.parse(selectedCustomer);
    console.log(selectedCus)
    const formData = {
        customer_id: selectedCus?.id,
        amount,
        note
    }

    setLoading(true)
    try {
        const result = await CollectPaymentAdd(formData);

        if (result?.status === "ok") {
            addCollection(result?.data)
            toast.success("Collection successfully");
            window.location.reload();
        }
    } catch (err) {
        console.error(err.message);
        toast.error(err.message);
    } finally {
        setLoading(false); // Reset loading state here to ensure it's always reset
        setName("")
        setMobile("")
        setAddress("")
    }
};


// felids validation
useEffect(() => {

  const isValidField = (field) => field !== "" && field !== null && field !== undefined;

  const isFormValid =
      isValidField(name) &&
      isValidField(mobile)
      isValidField(address) 

  if (isFormValid) {
      setValid(true);
  } else {
      setValid(false);
  }
  
}, [name,mobile, address]);


  return (
    <div>
      <div className="form-container">
      <h2>Client Information Form</h2>
      <form action="#" method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" required placeholder="Enter your mobile number" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" required placeholder="Enter your address"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ClientAddForm

