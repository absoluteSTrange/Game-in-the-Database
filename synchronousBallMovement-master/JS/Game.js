/* 1. read/get the gameState --> getState()
2. update the gameState --> update(state)
3. start the game acc to the gameState --> waitState()
*/
class Game{
    constructor(){
        
    }   

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }


    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    
    start(){
//what if the gameState is 0?
if (gameState = 0){
    
        //a new player (object) is created 
        player = new Player();

        //read the playerCount
        player.getCount();

        //a new form (object) is created to the other players
        form = new Form();

        //the form is displayed
        form.display();

} 

}

    
   
   }