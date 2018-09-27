let express = require('express');
let app = express();
app.get('/api/user',function(req,res){
    res.send({name:'zfpx'})
})
app.get('/user', function (req, res) {
    res.send({ name: 'cgp' })
})
app.listen(3000)