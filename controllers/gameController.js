const rankedPlayerCalculation = require("../utils/playerRankfromAverageCalculator");
const Player=require('../pojos/playerModel')




let playerHuman= new Player()

let player2=new Player("Team-QA","2")
player2.numeralPicked=10

let player3=new Player("Team-DEV","3")
player3.numeralPicked=40

let rankedPlayerList=[player2,player3]

module.exports= function getRankOfPlayers(req){
    
    setRankedPlayersList(req);
    let UpdatedRankedPlayersList=rankedPlayerCalculation(rankedPlayerList)
    return UpdatedRankedPlayersList
}


const setRankedPlayersList = (req)=>{
        playerHuman.numeralPicked=req.body?.numeralPicked;
        if(rankedPlayerList.filter((x)=>{
                return x==playerHuman
        }).length<=0){
            rankedPlayerList.push(playerHuman)
        }
}






