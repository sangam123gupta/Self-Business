const category_schema = require("../model/category_model");
const create_schema=require('../model/create')
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

exports.Create=(req,res)=>{
    new create_schema(req.body).save((error,data)=>{
        if(error){
            res.status(300).json({error:error});
        }else{
            res.status(300).json({
                data,data
            })
        }
    })
}

exports.Delete_data=(req,res)=>{

    const id=req.body.id;
    create_schema.deleteOne({id}).then((success)=>{

            res.status(200).json({
                sucess: `data is delted succesfully`,
                data:success
        })
        
    }).catch((error)=>{
        res.status(300).send(error);
    })
}

exports.list=(req,res)=>{

    create_schema.find((error,data)=>{
        if(error){
            res.status(300).json(error);
        }else{
            res.status(200).json(data);
        }
    })
}