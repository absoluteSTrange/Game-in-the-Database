class Form{
    //DOM --> Document Object Modelling
    //input, button, element(title/greeting/createButton) 
    constructor(){

    }

    display(){
        var title  = createElement('h1');
        title.html("Racing Car Game");
        title.position(130, 0);
        
        var input = createInput("Enter your username idiot");
        input.position(130, 160);
        

        var button = createButton("Press this you brainless fool");
        button.position(250, 200);
         
        var greeting = createElement('h3');
        
     button.mousePressed(function(){
        //hide the input and button --> varName.hide()
        input.hide();
        button.hide();

        //create a variable called 'name' and store the name entered by the player in the input --> input.value()
        var username = input.value();
        
        //increase the playerCount 
        playerCount = playerCount + 1;

        //update the username of the player in the db
        player.updateName(name);

    
        //update the increased playerCount
        player.updateCount(playerCount);


        //greet the player with the word "hello" + username + "The biggest fool";
         greeting.html("Hello " + username + " The biggest FOOL");
         greeting.position(130, 160);
         
        

        
     });
     
     
    }
}


