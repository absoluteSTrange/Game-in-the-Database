/* 1. read/get the playerCount --> getCount()
2. update the playerCount --> updateCount(count)
3. update the name of the player --> update(name)
*/
class Player{
 constructor(){

 }   
 
 getCount(){
    var playerCountRef = datebase.ref('playerCount');
    playerCountRef.on("value", function (data){
       playerCount = data.val();
    });

    
 }

 updateCount(count){       //updating the playerCount
   database.ref('/').update({
      playerCount: count
   });

 }

 updateName(name){           //updating the player's name
    var playerIndex = "player" + playerCount;

    database.ref(playerIndex).set({
       username: name,
      

    })
 }
 

}