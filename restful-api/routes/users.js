const express=require('express')
const router= express.Router();

router.get('/', (req, res, next)=>{
res.status(200).json({
    message:"Get Method Users"
    })
})


router.post('/', (req, res, next)=>{
    const users={
        name: req.body.name,
        password: req.body.password
    }
    res.status(200).json({
        message:"Post Method Users",
        data: users,
        balance:'Rp.2.000.000',
        nationality: 'WNI'
        
    })
})

router.get('/:name', (req, res, next)=>{
    const name=req.params.name;
    if(name==='yusuf'){
        res.status(200).json({
            message:"Nama betul"
        })
    }else{
            res.status(200).json({
                message:"Nama lain"
            })
        }
   
    res.status(200).json({
        message:"Get Method Users"
        })
    })

    router.put('/', (req, res, next)=>{
        res.status(200).json({
            message:"Put Method Users"
        })
    })  

    router.delete('/', (req, res, next)=>{
        res.status(200).json({
            message:"Delete Method Users"
        })
    })

module.exports=router;