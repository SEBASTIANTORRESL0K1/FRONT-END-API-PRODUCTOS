const router=require("express").Router();

const producto=require("./productosrutas");
router.use("/producto", producto)

module.exports=router;
// localhost:3000/api