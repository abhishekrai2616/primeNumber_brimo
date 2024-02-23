const express=require('express');
const app=express();
const bodyParser =require('body-parser');
const cors=require("cors");


app.use(cors({
    origin:"http://127.0.0.1:5173",
    credentials:true
}));
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))

function isPrime(num) {
    for (var i = 2; i < Math.sqrt(num) + 1; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getNextPrime(prime) {
    let count = prime+1;
    console.log(count);
    for (;count<1000 ;count++) {
       if (isPrime(count)) {
           break;
       }
    }
    console.log(count);
    return count;
}
app.post("/prime",(req,res)=>{
    const num=req.body.num;
    console.log(num);
    let ans=getNextPrime(num);
    res.json({
        ans
    });
})
app.listen(3000,()=>{
    console.log("server is running at port no 3000");
})