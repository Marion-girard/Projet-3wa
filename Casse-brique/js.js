let ball 

let game = {
    width : 800,
    height : 600,
    background: 'rgb(136, 136, 136)',
    canvasDom : null,
    ctx : null,
    gameover:false,
    start: false,
    pause: false
   
}
let carre 
let brique1
let brique2
let brique3
let brique4
document.addEventListener('DOMContentLoaded', function () {
    
    game.canvasDom = document.getElementById('canvas')
    
    game.canvasDom.width = game.width
    game.canvasDom.height = game.height
    
    game.ctx = game.canvasDom.getContext('2d');
    


    requestAnimationFrame(displayGame);
    initposition()
    
    document.addEventListener('keydown', moove);
    
})


    

function initposition(){
    
    carre = {
      color: "#FF0000",
      width : 50,
      height : 10,
      x: 400,
      y:500,
      carrespeed:20
  };
     ball = {
        positionX:  carre.x+carre.width/2,
        positionY: carre.y - carre.height,
        color: 'red',
        radius: 10,
        directionY:-1,
        directionX:1,
        ballspeed: 2

    }

    brique1 = {

        color: "blue",
        width : 100,
        height : 10,
        x: 100,
        y:100,
        visible: true
    }
    brique2= {
        color: "green",
        width : 100,
        height : 10,
        x: 300,
        y:100,
        visible: true
    }
    brique3= {
        color: "yellow",
        width : 100,
        height : 10,
        x: 500,
        y:100,
        visible: true
    }

    brique4= {
        color: "yellow",
        width : 100,
        height : 10,
        x: 700,
        y:100,
        visible: true
    }

}


    
    function moove(e){
        if(game.start===false && game.pause === false){
            switch(e.key)
            {
                case' ':
                {
                    console.log('bouh')
                    game.start = true
                }
                break

                case'ArrowLeft':
                if(carre.x + carre.width < game.canvasDom.width) 
                {
                    carre.x-=carre.carrespeed 
                    console.log()
                    ball.positionX = carre.x+carre.width/2
                    ball.positionY = carre.y - carre.height
                }
                break
       case'ArrowRight':
        if(carre.x + carre.width < game.canvasDom.width)
        {   
          carre.x+=carre.carrespeed
          ball.positionX = carre.x+carre.width/2
          ball.positionY = carre.y - carre.height
            
        }
      break
    
      default:
       console.log(e.key)
      break
    }
   
  }
  else if(game.start === true && game.pause === false){ 
    switch(e.key)
    {
        case' ':
        {
            
            game.start = false
        }
        break
    case'ArrowLeft':
        if(carre.x + carre.width < game.canvasDom.width) 
        {
            carre.x-=carre.carrespeed 
           
        } 
    break
    case'ArrowRight':
        if(carre.x + carre.width < game.canvasDom.width)
        {   
            carre.x+=carre.carrespeed
            
            
        }
    break
    
    default:
       console.log(e.key)
    break
    
    }
}
}

     function displayGame() {
        
                 
         if ( game.gameover == true)
         {
          game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);
          game.ctx.fillStyle = game.background;
          game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);
          game.ctx.fillStyle = ball.color;
          game.ctx.fillText("Game OVER", 100, 100, 700);
          
          
         }
        else if (game.gameover == false && game.start ==true && game.pause==false){
         /*to do remplace par dessin*/
            /*game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);
         
         game.ctx.fillStyle = game.background; // On rempli le Canvas de gris en fond ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
         game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);
         
         game.ctx.fillStyle = ball.color;
         game.ctx.fillRect(ball.positionX, ball.positionY, ball.radius, 0, 2 * Math.PI)
         
         game.ctx.beginPath(); 
         game.ctx.arc(ball.positionX, ball.positionY, ball.radius, 0, 2 * Math.PI); // on dessine sur le canvas en remplissant le tracé 
         game.ctx.fill(); // On aurait pu dessiner sur le Canvas seulement le contour ! 
         game.ctx.stroke(); 
         game.ctx.closePath();


         //desine paddle
         
         
         game.ctx.strokeStyle = carre.color;
         game.ctx.strokeRect(carre.x, carre.y, carre.width, carre.height);*/
         
        dessin()
        

         //déplacement ball
         ball.positionX +=ball.ballspeed *ball.directionX
         ball.positionY += ball.ballspeed *ball.directionY

      
           
        }     
        else if(game.gameover == false && game.start ==false && game.pause== true){
            game.ctx.fillText("Pause", 100, 100, 700);

        }

        else if (game.gameover == false && game.start == false && game.pause==false ){
            dessin()
        }
        requestAnimationFrame(displayGame);
        detectCollisions();
        
    }
    
    function dessinBrique(){

        if( brique1.visible=== true){ 
            game.ctx.fillStyle = brique1.color;
            game.ctx.fillRect(brique1.x, brique1.y, brique1.width, brique1.height);
            game.ctx.strokeStyle = brique1.color;
            game.ctx.strokeRect(brique1.x, brique1.y, brique1.width, brique1.height);
           
        }
        else if (brique1.visible == false)
        {
            game.ctx.clearRect(brique1.x, brique1.y, brique1.width, brique1.height)
            game.ctx.fillStyle = game.background;
            game.ctx.fillRect(brique1.x, brique1.y, brique1.width, brique1.height);
        }
        
        if( brique2.visible=== true){ 
            game.ctx.fillStyle = brique2.color;
            game.ctx.fillRect(brique2.x, brique2.y, brique2.width, brique2.height);
            game.ctx.strokeStyle = brique2.color;
            game.ctx.strokeRect(brique2.x, brique2.y, brique2.width, brique2.height);
           
        }
        else if (brique2.visible == false)
        {
            game.ctx.clearRect(brique2.x, brique2.y, brique2.width, brique2.height)
            game.ctx.fillStyle = game.background;
            game.ctx.fillRect(brique2.x, brique2.y, brique2.width, brique2.height);
        }
        
        if( brique3.visible=== true){ 
            game.ctx.fillStyle = brique3.color;
            game.ctx.fillRect(brique3.x, brique3.y, brique3.width, brique3.height);
            game.ctx.strokeStyle = brique2.color;
            game.ctx.strokeRect(brique3.x, brique3.y, brique3.width, brique3.height);
           
        }
        else if (brique3.visible == false)
        {
            game.ctx.clearRect(brique3.x, brique3.y, brique3.width, brique3.height)
            game.ctx.fillStyle = game.background;
            game.ctx.fillRect(brique3.x, brique3.y, brique3.width, brique3.height);
        }

        if( brique4.visible=== true){ 
            game.ctx.fillStyle = brique4.color;
            game.ctx.fillRect(brique4.x, brique4.y, brique4.width, brique4.height);
            game.ctx.strokeStyle = brique4.color;
            game.ctx.strokeRect(brique4.x, brique4.y, brique4.width, brique4.height);
           
        }
        else if (brique4.visible == false)
        {
            game.ctx.clearRect(brique4.x, brique4.y, brique4.width, brique4.height)
            game.ctx.fillStyle = game.background;
            game.ctx.fillRect(brique4.x, brique4.y, brique4.width, brique4.height);
        }

    }

    function dessin() {

        game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);
         
         game.ctx.fillStyle = game.background; // On rempli le Canvas de gris en fond ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
         game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);
         
         game.ctx.fillStyle = ball.color;
         game.ctx.fillRect(ball.positionX, ball.positionY, ball.radius, 0, 2 * Math.PI)
         
         game.ctx.beginPath(); 
         game.ctx.arc(ball.positionX, ball.positionY, ball.radius, 0, 2 * Math.PI); // on dessine sur le canvas en remplissant le tracé 
         game.ctx.fill(); // On aurait pu dessiner sur le Canvas seulement le contour ! 
         game.ctx.stroke(); 
         game.ctx.closePath();
         //desine paddle
         
         
         game.ctx.strokeStyle = carre.color;
         game.ctx.strokeRect(carre.x, carre.y, carre.width, carre.height);

         

         dessinBrique()
         

        
    }
    
    
    function detectCollisions() {
        
           if(ball.positionX <= 0 || ball.positionX >= game.width -ball.radius) {
            ball.directionX *= -1 
         
           }
           
           if(ball.positionY <= 0 )
           {
               ball.directionY *= -1
           }
            if(ball.positionY === carre.y  && ball.positionX >= (carre.x) && ball.positionX<=(carre.x + carre.width) )
            {
                ball.directionY *= -1 
            }
            if( ball.positionY >= game.height-ball.radius)
            {
              game.gameover = true
    
            } 
        
            if( ball.positionY ==  brique1.y+brique1.height && ball.positionX>= brique1.x && ball.positionX <= brique1.x + brique1.width && brique1.visible == true )
            {
                ball.directionY *= -1
                ball.directionX *= -1 
                brique1.visible = false
            }

            if( ball.positionY ==  brique2.y+brique2.height && ball.positionX>= brique2.x && ball.positionX <= brique2.x + brique2.width && brique2.visible == true )
            {
                ball.directionY *= -1
                ball.directionX *= -1 
                brique2.visible = false
            }

            if( ball.positionY ==  brique3.y+brique3.height && ball.positionX>= brique3.x && ball.positionX <= brique3.x + brique3.width && brique3.visible == true )
            {
                ball.directionY *= -1
                ball.directionX *= -1 
                brique3.visible = false
            }

            if( ball.positionY ==  brique4.y+brique4.height && ball.positionX>= brique4.x && ball.positionX <= brique4.x + brique4.width && brique4.visible == true )
            {
                ball.directionY *= -1
                ball.directionX *= -1 
                brique4.visible = false
            }
        }
