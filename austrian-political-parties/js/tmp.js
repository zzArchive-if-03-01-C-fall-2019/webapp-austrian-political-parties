let maxFrames = 4;
let player1Sprites = new Array(maxFrames);

for(let i = 0; i <= maxFrames; i++){
  player1Sprites[i] = new Image();
  player1Sprites[i].src = "../../assets/RendiWagner(" + i + ").png";
  if(i == maxFrames){
    anim = function(){
      if(player1.dead == false){
        if(keys[65] && !player.jumping){
          ctx.drawImage(player1Sprites[1],player1.x,player1.y);
        }
        else if(keys[68] && !player1.jumping){
          ctx.drawImage(player1Sprites[2],player1.x,player1.y);
        }
        else if(player1.player1.jumping == true){
          if (player1.lastDir == "l") {
            ctx.drawImage(player1Sprites[1],player1.x,player1.y);
          } else {
            ctx.drawImage(player1Sprites[2],player1.x,player1.y);
          }
        }
        else if(keys[81]){
          if(player1.lastDir == "l"){
              ctx.drawImage(player1Sprites[3],(player1.x - player1.width / 2),player1.y);
              if ((player1.x - player1.range) <= (player2.x + player2.width) &&
                (player1.x - player1.range) >= player2.x  - (player2.width / 2) &&
                player1.y >= player2.y &&
                player1.y <= player2.y + player2.height) {
                  hurt(player2, player1, healthP2);
                      displayDamage(player2.health, "p2-damage");
                      player2.velX -= player2.health;
                      player2.lastDir = "l";
              }
          }
          else{
            ctx.drawImage(player1Sprites[4],(player1.x - player1.width / 2),player1.y);
            if ((player1.x + player1.width) + player1.range >= player2.x &&
              (player1.x + player1.width) + player1.range <= (player2.x + (player2.width * 1.5)) &&
              player1.y >= player2.y &&
              player1.y <= player2.y + player2.height) {
                hurt(player2, player1, healthP2);
                displayDamage(player2.health, "p2-damage");
                player2.velX += player2.health;
                player2.lastDir = "r";
            }
          }
        }
      }
      else{
        ctx.drawImage(player1Sprites[0],player1.x,player1.y);
      }
    }
  }
}

//----------------------------------------------------------------------------------
let player2Sprite = new Array(maxFrame);
let anime2;

for(let i = 0; i<= maxFrame; i++){
  player2Sprite[i] = new Image();
  player2Sprite[i].src = "../../assets/SebastianKurz(" + i + ").png";

  if(i == maxFrame){
    anime2 = function(){
      if(player2.dead == false){
        if(keys[74] && !player2.jumping){
          ctx.drawImage(player2Sprite[1], player2.x, player2.y);
        }
        else if(keys[76] && !player1.jumping){
          ctx.drawImage(player2Sprite[2], player2.x, player2.y);
        }
        else if(player2.jumping == true){
          if (player2.lastDir == "l") {
            ctx.drawImage(player2Sprites[1],player2.x,player2.y);
          }
          else {
            ctx.drawImage(player2Sprites[2],player2.x,player2.y);
          }
        }
        else if(keys[79]){
          if(player1.lastDir == "l"){
            ctx.drawImage(player2Sprites[1],(player2.x - player2.width / 2),player2.y);
            if ((player2.x - player2.range) <= (player1.x + player1.width) &&
              (player2.x - player2.range) >= player1.x  - (player1.width / 2) &&
              player2.y >= player1.y &&
              player2.y <= player1.y + player2.height) {
                hurt(player1, player2, healthP1);
                    displayDamage(player1.health, "p1-damage");
                    player1.velX -= player1.health;
                    player1.lastDir = "l";
            }
            else{
              ctx.drawImage(player2Sprites[2],player2.x,player2.y);
              if((player2.x + player2.width) + player2.range >= player1.x &&
                (player2.x + player2.width) + player2.range <= (player1.x + (player1.width * 1.5)) &&
                player2.y >= player1.y &&
                player2.y <= player1.y + player1.height) {
                  hurt(player1, player2, healthP1);
                  displayDamage(player1.health, "p1-damage");
                  player1.velX += player1.health;
                  player1.lastDir = "r";
              }
            }
          }
        }
        else{
          ctx.drawImage(player2Sprites[0],player2.x,player2.y);
        }
      }
    }
  }
}
