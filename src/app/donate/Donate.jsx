"use client";

import "./Donate.scss";
import {useState} from "react";
import TextAnimation from "../components/textAnimation/TextAnimation";
import {PiCurrencyInr} from "react-icons/pi";
import Script from "next/script";
import { useRouter } from "next/navigation";
import axios from "axios";

function Donate() {
   const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      amount: "",
      pin: "",
      state: "",
   });

   const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

   const handleChange = (e) => {
      const {name, value} = e.target;
      setUserData({...userData, [name]: value});
   };

   const makePayment = async e => {
    e.preventDefault()
    setIsLoading(true)
    console.log('Making payment')
    try {
      const response = await axios.post('/api/razorpay', {
        amount: userData.amount,
      })

      const data = response.data

      let options = {
        key: `${process.env.NEXT_PUBLIC_RAZORPAY_ID}`,
        amount: data.amount,
        currency: 'INR',
        name: 'Ek Nayi Soch',
        image:
          'https://img.freepik.com/premium-vector/charity-abstract-logo-healthy-lifestyle_660762-34.jpg?size=626&ext=jpg',
        description: 'Test Transaction',
        order_id: data.orderId,
        'theme.color': '#ec2e58',
        handler: async response => {
          try {
            await axios.post('/api/success', {
              amount: data.amount,
              currency: data.currency,
              orderId: data.orderId,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature
            })
            router.push('/success')
          } catch (error) {
            console.log(error)
          }
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()

      paymentObject.on('payment.failed', function (response) {
        console.log(response.error.code)
        console.log(response.error.description)
        console.log(response.error.source)
      })

      paymentObject.on('payment.success', function (response) {
        console.log(response)
      })
    } catch (error) {
      console.error('Error fetching Order ID:', error)
    }
    setIsLoading(false)
  }

   console.log(userData);

   return (
      <>
         <Script
            id="razorpay-checkout-js"
            src="https://checkout.razorpay.com/v1/checkout.js"
         />
         <div className="donate_page_container">
            <div className="left_section">
               <TextAnimation />
            </div>
            <div className="right_section">
               <div className="container">
                  <p className="title"> Donate Form </p>
                  <form
                     style={{
                        position: "relative",
                     }}
                  >
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                        }}
                     >
                        <span style={{width: "48%"}}>
                           <label htmlFor="first_name">First Name</label>
                           <input
                              onChange={handleChange}
                              type="text"
                              id="first_name"
                              name="firstName"
                              required
                           />
                        </span>

                        <span style={{width: "48%"}}>
                           <label htmlFor="last_name">Last Name</label>
                           <input
                              onChange={handleChange}
                              type="text"
                              id="last_name"
                              name="lastName"
                              required
                           />
                        </span>
                     </div>
                     <div>
                        <span style={{width: "48%"}}>
                           <label htmlFor="phone">Phone</label>
                           <input
                              onChange={handleChange}
                              type="text"
                              id="phone"
                              name="phone"
                              required
                           />
                        </span>
                        <span style={{width: "48%"}}>
                           <label htmlFor="email">Email</label>
                           <input
                              onChange={handleChange}
                              type="text"
                              id="email"
                              name="email"
                              required
                           />
                        </span>
                     </div>

                     <label htmlFor="amount">
                        How much would you like to donate?
                     </label>
                     <PiCurrencyInr className="icon" />

                     <input
                        onChange={handleChange}
                        type="text"
                        id="amount"
                        name="amount"
                        required
                     />
                     <p
                        style={{
                           fontSize: "12px",
                           color: "#8c8c8c",
                           marginBottom: "10px",
                        }}
                     >
                        Note*: Currently we are accepting only INR. We are
                        working on
                     </p>

                     <label htmlFor="pin">Enter your pin</label>
                     <input
                        onChange={handleChange}
                        type="text"
                        id="pin"
                        name="pin"
                        required
                     />

                     <label htmlFor="state">Enter your state</label>
                     <input
                        onChange={handleChange}
                        type="text"
                        id="state"
                        name="state"
                        required
                     />
                  </form>
                  <input onClick={makePayment} type="submit" value="Make Donation" />
               </div>
            </div>
         </div>
      </>
   );
}

export default Donate;
