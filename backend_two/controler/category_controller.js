const { json } = require("body-parser");
const category_schema = require("../model/category_model");
const create_schema = require('../model/create')
exports.create_category = (req, res) => {

    // category_schema.findOne({ name: req.body.name }, (err, cat) => {
    //     if (err) {
    //         return new category_schema(req.body).save((error, cat_val) => {
    //             if (error) {
    //                 return res.status(400).json({ error: "not save caytegory" });
    //             } else {
    //                 res.status(200).json({ cat_val });
    //             }
    //         })

    //     } else {
    //         return res.status(400).json({ error: "category already exists" });
    //     }
    // })
    new category_schema(req.body).save((error, cat_val) => {
        if (error) {
            return res.status(400).json({ error: "category is already exists" });
        } else {
            res.status(200).json({ cat_val });
        }
    })


}

exports.Create = (req, res) => {
    const body_data=req.body
    console.log("log -->",body_data);
    // {
    //     name:body_data.name,
    //     description:body_data.description,
    //     size:body_data.size,
    //     file:"image"
    // }
    new create_schema(req.body).save((err,data)=>{
        if(err){
            console.log("error",err);
            res.status(205).json(err);
        }else{
            console.log("save",data);
            res.status(200).json(data);
        }
    })
}

// {
//     const fetch = (...args) =>
//     import('node-fetch').then(({ default: fetch }) => fetch(...args));
// setInterval(() => {
//     fetch('http://143.198.116.255:7000/match-list?token=sangram456789plijnyhbfvrdcsdfghj').then(async (data) => {
//         await data.json().then((json_data) => {
//             const string_data = json_data
//             const new_data = string_data.result.result.filter((data) => {
//                 return data.sportId == 4
//             })
//             new_data.map((it) => {
//                 new create_schema({
//                     EventName: it.eventId,
//                     EventId: it.eventName,
//                     MarketId: it.marketId
//                 }).save((error, cat_val) => {
//                     if (error) {
//                         console.log("error", error);
//                     } else {
//                         console.log("data is save is data base", cat_val);
//                     }
//                 })
//             })
//         })
//     })
// }, 1 * 60 * 60)
// }

exports.Delete_data = (req, res) => {

    const _id = req.body.id;
    create_schema.deleteOne({ _id }).then((success) => {

        res.status(200).json({
            sucess: `data is delted succesfully`,
            data: success
        })

    }).catch((error) => {
        console.log(error);
        res.status(300).send(error);
    })
}

exports.list = (req, res) => {
    create_schema.find((error, data) => {
        if (error) {
            res.status(300).json(error);
        } else {
            res.status(200).json(data);
        }
    })
}