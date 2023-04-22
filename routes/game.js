const RequestStandadizer = require("../controllers/RequestStandadizer");
const home = require("../controllers/home")
const getRankOfPlayers=require('../controllers/gameController')
const express=require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("This is the game room")
})


router.post('/send-my-choice',(req,res)=>{
    
    console.log(getRankOfPlayers())
    
    res.send(`Your choice has been saved`)
})

router.get('/see-results',(req,res)=>{
    res.json({"Hi":"Hello"})
})

/*Will work on this in future
router.route("/send-my-choice").post(RequestStandadizer(home))
*/


module.exports=router