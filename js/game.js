class Game{
constructor(){}
readGameState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })
}
updateGameState(state){
    database.ref('/').update({gameState:state})
} 
startGame(){
    if(gameState===0){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
        
    }
    car1=createSprite(100,200)
    car1.addImage(car1Image)
    car2=createSprite(300,200)
    car2.addImage(car2Image)
    cars=[car1,car2]
    
}

play(){
    form.hide()
   Player.getPlayerInfo()
   if(allPlayers!==undefined){

       background("black")
       image (pathImage,0,-displayHeight*3,displayWidth,displayHeight*4)
       
       var index=0//indexing of the cars array
       var x=200,y
       for (var plr in allPlayers) {
        index=index+1
           x=x+200 
           y=displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y
           if(index===player.index){
            camera .position.x=displayWidth/2
            camera.position.y=cars[index -1 ].y
           }
           
               
          
       }
   }
   if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance+=10
    player.update()
}
if (player.distance >3360)
{gameState=2}
drawSprites()
}

}