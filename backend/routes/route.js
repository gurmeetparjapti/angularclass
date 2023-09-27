const express = require("express");
const users = require("../schema/schemaone");
const router = express.Router();


/*get all data api */
router.get("/getdata",async(req,res)=>{
    const allusers = await users.find();
    res.json(allusers);
    console.log(allusers);
});


// post api
router.post("/create",async(req,res)=>{
    const {username,email,phone,age,password} = req.body;
    const adduser = new users({
        username,email,age,phone,password
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});

router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});

// delete api
router.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await users.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

// update api
router.post("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await users.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});
//update single data api
router.get("/singledatas/:id",async(req,res)=>{
    const {id} = req.params;
    const allusers = await users.find({_id:id});
    res.json(allusers);
    console.log(allusers);
}); 




module.exports = router;



