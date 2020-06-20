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
