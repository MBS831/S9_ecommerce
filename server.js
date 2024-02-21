//pk_live_51OmIfJL2M4tcUfgC3b8xHGUCjLxxqMJ9Wcs82CJ7jgNlGaBjTbkeWs1CmZHkz6CO8qiCL9e5ujNqN8wz2jqTuezl00FyOSPqrJ
//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
//Mungo id product 
//price_1OmIqtL2M4tcUfgCqHLFlG4f

//Wave
//price_1OmIsrL2M4tcUfgC0uEEYoFb

//The ocean
//price_1OmItaL2M4tcUfgC6GE97nLU

//Perfect sky
//price_1OmIuBL2M4tcUfgCxEBuIW0g

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('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');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));