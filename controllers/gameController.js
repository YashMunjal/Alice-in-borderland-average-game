const rankedPlayerCalculation = require("../utils/playerRankfromAverageCalculator");
const Player=require('../pojos/playerModel')




let player1= new Player("Yash","1")
player1.numeralPicked=20
let player2=new Player("Team-QA","2")
player2.numeralPicked=10

let player3=new Player("Team-DEV","3")
player3.numeralPicked=40

let rankedPlayerList=[player1,player2,player3]

module.exports= function getRankOfPlayers(){
    let UpdatedRankedPlayersList=rankedPlayerCalculation(rankedPlayerList)
    return UpdatedRankedPlayersList
}







