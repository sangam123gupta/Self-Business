const Stripe = require("stripe");
const { v4  } =require ('uuid');
// 4242 4242 4242 4242
// 567
// 12 / 34
const stripe = new Stripe('sk_test_51Ll4OnSIDHFvVr3ltMaoyLrnJrMXpqr5Tl6rSNZqOqCzUJzVcr2dZkKvtY1n20725sE4Fn9DESxNGw4aPqNYeQ4f00OTMn1AUx')
exports.stripe = (req, res) => {
    console.log("body",req.body)
    const { token, product } = req.body
    stripe.customers.create({
        email: token.email,
        source: token.id
    }).then((customer) => {

        const idempotencyKey =v4();
        console.log("customer id",customer.id);
        stripe.paymentIntents.create({
            amount: product.price * 100,
            currency: 'inr',
            customer: customer.id,
            payment_method_types: ['card'],

        },{ idempotencyKey:idempotencyKey  }).then((response) => {
            console.log("intent -->", response)
            res.send(response);
        }).catch((er) => {
            console.log("intent error -->>", er);
            res.send(er);
        })
    })
}