const { AVERAGING_FACTOR } = require("./constants");



let rankedPlayer=new Array();





function rankedPlayerCalculation(playerSelectedOptionArray){
    var sum=0;
    playerSelectedOptionArray.forEach(element => {
        sum+= element.numeralPicked

    });
    averageForScoring=Math.round(sum/playerSelectedOptionArray.length*AVERAGING_FACTOR)
    
    playerSelectedOptionArray.forEach(element=>{
            var diff=difference(averageForScoring,element)
            element.differenceFromAverage=diff
    })

    playerSelectedOptionArray.sort(comparator)
    return playerSelectedOptionArray

}

function comparator(a,b){
    if ( a.differenceFromAverage < b.differenceFromAverage ){
        return -1;
      }
      if ( a.differenceFromAverage > b.differenceFromAverage ){
        return 1;
      }
      return 0;
}

function difference(avg,player){
    return Math.abs(player.numeralPicked-avg)
}



module.exports=rankedPlayerCalculation