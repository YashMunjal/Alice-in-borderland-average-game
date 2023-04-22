const basic=require('./basic')
const game=require('./game')

module.exports = function(app){
    app.use('/',basic)
    app.use('/game-room',game)
}