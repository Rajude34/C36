class Form{
    constructor(){}


display(){
    var title = createElement('h1')
    title.html("Sam is the best")
    title.position(250,100)

    var input = createInput("name")
    var button = createButton("press here")
    var greeting = createElement("h2")
    input.position(250,250);
    button.position(250,300);

button.mousePressed(function(){
    input.hide();
    button.hide();

var name = input.value();
playerCount+=1
player.update(name)
player.updateCount(playerCount)
greeting.html("WELCOME TO RACEATHON "+name)
greeting.position(250,250)

})
}
}