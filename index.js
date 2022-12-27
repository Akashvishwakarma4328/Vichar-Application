const express = require('express');
const port = 8000;
const app =express();
app.listen(port,function(err){
    if(err){
        console.log(`ther is error in server side ${err}`)
    }
    console .log(`server is running well on port ${port}`)
})
