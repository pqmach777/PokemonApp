function matrix(){
    let playerLose = document.createElement("canvas")
    playerLose.setAttribute("id","player1Lost")
    let leftTop = document.getElementById("battleContainer")
    leftTop.appendChild(playerLose)
    let theCanvas = document.getElementById("player1Lost");
    let ctx = theCanvas.getContext("2d");

    //making the canvas full screen
    theCanvas.height = window.innerHeight;
    theCanvas.width = window.innerWidth;

    //binaryNo characters - taken from the unicode charset
    let binaryNo = "YOULOSE!YOULOSE!YOULOSE!YOULOSE!YOULOSE!YOULOSE!YOULOSE!YOULOSE!YOULOSE!";
    //converting the string into an array of single characters
    binaryNo = binaryNo.split("");

    let font_size = 15;
    let columns = theCanvas.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    let drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(let x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, theCanvas.width, theCanvas.height);
        
        ctx.fillStyle = "#FF0000"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(let i = 0; i < drops.length; i++)
        {
            //a random binaryNo character to print
            let text = binaryNo[Math.floor(Math.random()*binaryNo.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);
            
            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > theCanvas.height && Math.random() > 0.975)
                drops[i] = 0;
            
            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}
