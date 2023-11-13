import { NextResponse } from 'next/server'

import Razorpay from 'razorpay'
import shortid from 'shortid'

// Initialize razorpay object
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY
})

// export const GET = async () => {

//      return new NextResponse(
//           JSON.stringify({
//                message:"Hello it's working"
//           })
//      )
// }


export const POST = async (req, res) => {
  // TODO: Make sure to handle your payment here.
  // Create an order -> generate the OrderID -> Send it to the Front-end
  // Also, check the amount and currency on the backend (Security measure)
  // const payment_capture = 1
  const data = await req.json()

  // console.log(name)
  const amount = data.amount * 100 // amount in paisa. In our case, it's INR 1
  const currency = 'INR'
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    // payment_capture,
//     notes: {
//       // These notes will be added to your transaction. So you can search it within their dashboard.
//       // Also, it's included in webhooks as well. So you can automate it.
//       paymentFor: 'example_ebook',
//       userId: 'user_id_here',
//       productId: 'your_product_id'
//     },


    
  }

  try {
    const order = await razorpay.orders.create(options)
    // The 'order' object contains the OrderID that you should send to the front-end.
    // You can send it as a JSON response.

    console.log('Order created:', order)

    return new NextResponse(
      JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return new NextResponse(
      JSON.stringify({
        error: 'Error creating Razorpay order'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
