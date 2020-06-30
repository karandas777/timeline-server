var express = require ('express');
var router = express.Router();
var post = require ('../controller/post.controller');
var user = require('../controller/user.controller');
var jwt = require('jsonwebtoken');


router.post('/insert-post',post.insert);
router.get('/select-post',post.select);
router.post('/edit-post',verification,post.edit);
router.post('/remove-post',verification,post.remove);
router.post('/sort-post',verification,post.sort);

router.post('/insert-user',user.insertUser);
router.post('/find-user',user.findUser);

function verification(req,res,next){

    var bearerToken = req.headers['auth'];
    if(typeof (bearerToken) !== undefined ){
        jwt.verify(bearerToken ,"1234",(err,data)=>{
            if(err){
                res.json({
                    status:'NOK',
                    message:err
                })
            }
            else{
                next();
            }
        } )
    }

}

module.exports=router;