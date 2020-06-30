const mongoose = require('mongoose');
var conn = mongoose.connect('mongodb+srv://karan:connectme@cluster0-lpopp.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true , useUnifiedTopology: true })

.then(()=>{
    console.log('mongo connected');
})
.catch(()=>{
    console.log('mongo failed');
})

module.exports=conn;
