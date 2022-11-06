import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function Payment () {
  const [product, setProduct] = useState({
    name: 'payment',
    price: 10,
    productBy: 'facebook'
  })
  const stripe_public = 'pk_test_51Ll4OnSIDHFvVr3lsHRM481MqH5LS0Htua0WNjUWxdIIbmuvnPvznan1kehfrLqYfVnIZOCCL7i4WuSX7VHsaY8400gvRyV8mV'
  const payment_token = (token) => {
    const body = {
      token,
    product}
    const headers = {
      'Content-Type': 'application/json'
    }
    fetch('http://localhost:3000/stripe', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }).then((respo) => {
      console.log('response', respo)
    }).catch((error) => {
      console.log('error', error)
    })
  }
  return (
    <div>
      <StripeCheckout stripeKey={stripe_public} token={payment_token} amount={product.price * 100} />
    </div>
  )
}
