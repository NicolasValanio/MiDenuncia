const modeloComment = require('../../models').comment

exports.createComment = async (req,res) => {

    try {
        
        

       // res.send(req.body.description)
       const {date,description,status}= req.body
       
        const comment = await modeloComment.create({date,description,status}).then(comment=>{
            res.status(201).json({comment})
        })

        //console.log(comment)

    } catch (error) {

        res.send(error)
    }
}