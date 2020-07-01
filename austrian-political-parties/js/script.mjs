(function() {
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

class player{
  constructor(_x, _y, _lastDir, _char) {
    this.x = _x;
    this.y = _y;
    this.lastDir = _lastDir;
    this.char = _char; //1 basti, 2 Renid, 3 HC, 4 Werna
    this.width = 50;
    this.height = 100;
    this.speed = 7;
    this.health = 0;
    this.regen = 1;
    this.attack = 2;
    this.range = 50;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.doublejumpready = true;
    this.jumptime = new Date();
    this.grounded = false;
    this.lastDir = "r";
    this.dead = false;
    this.kills = 0;
    switch (this.char) {
      case "1": 
        this.health = -10;
        break;
      case "2":
        this.attack = 1;
        break;
      case "1":
          this.health = -10;
          break;
      case "4":
        this.regen = 2;
        break;
    }
  }
}


/*
width = 1000;
height = 500;
keys = [];

class CanvasDisplay {
      constructor() {
         this.canvas = document.querySelector('canvas');
		   this.ctx = this.canvas.getContext('2d');
         this.stageConfig = {
		      width: window.innerWidth,
		      height: window.innerHeight
         };
         this.canvas.width = this.stageConfig.width;
         this.canvas.height = this.stageConfig.height;
         player1 = new player((width / 4), height - 100, "r");
         player2 = new player((width * 0.75 - 50), height - 100, "l");
         keys = [];
         friction = 0.8; //Rutschweite
         gravity = 0.66;
         canvas.width = width;
         canvas.height = height;
      }
   }

/*class canvas{
  ctx = canvas.getContext("2d");
  width = 1000;
  height = 500;
  player1 = new player((width / 4), height - 100, "r");
  player2 = new player((width * 0.75 - 50), height - 100, "l");
  keys = [];
  friction = 0.8; //Rutschweite
  gravity = 0.66;
  canvas.width = width;
  canvas.height = height;
}*/
let p1character = getCookie("p1character");
let p2character = getCookie("p2character");
console.log(p1character);
console.log(p2character);
let map = getCookie("map");

switch(map){
  case "1":
    document.body.style.backgroundImage = "url('../assets/background1.png')";
    break;
  case "2":
    document.body.style.backgroundImage = "url('../assets/background2.jpg')";
    break;
  case "3":
    document.body.style.backgroundImage = "url('../assets/background3.jpg')";
    break;
}

document.body.style.backgroundSize ="2000px 1000px"

let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 500,
    player1 = new player((width / 4), height - 100, "r", p1character),
    player2 = new player((width * 0.75 - 50), height - 100, "l", p2character),
    keys = [],
    friction = 0.8, //Rutschweite
    gravity = 0.66;
    canvas.width = width;
    canvas.height = height;
    displayDamage(player1.health, "p2-damage");
    displayDamage(player2.health, "p1-damage");
    console.log(player2);
    console.log(player1);

    setInterval(regenhealth, 3000);

    function regenhealth() {
      if (player1.health > 0){
        if (player1.regen >= player1.health){
          player1.health = 0;
        }
        else{
          player1.health -= player1.regen;
        }
        displayDamage(player1.health, "p1-damage");
      }
      if (player2.health > 0){
        if (player2.regen >= player2.health){
          player2.health = 0;
        }
        else{
          player2.health -= player2.regen;
        }

        displayDamage(player2.health, "p2-damage");
      }
    }

let frameRP1 = 1,
    frameRP2 = 1,
    frameLP1 = 11,
    frameLP2 = 11,
    frameLPunchP1 = 37,
    frameLPunchP2 = 37,
    frameRPunchP1 = 26,
    frameRPunchP2 = 26,
    maxFrames = 74,
    player1Sprites = new Array(maxFrames),
    player2Sprites = new Array(maxFrames),
    anim1,
    anim2,
    deathTime = 0,
    healthP1 = document.getElementById('p1-health'),
    healthP2 = document.getElementById('p2-health');

//------------------------------------------------------
let maxFrame = 4;
let player1Sprite = new Array(maxFrame);
let anime1;

for(let i = 0; i<= maxFrame; i++){
  player1Sprite[i] = new Image();
  player1Sprite[i].src = "../../assets/Character("+player1.char+")(" + i +").png";

  if(i == maxFrame){
    anime1 = function(){
      if(player1.dead == false){
        if(keys[65] && !player1.jumping){
          if(player1.lastDir == "l"){
            ctx.drawImage(player1Sprite[1], player1.x, player1.y);
          }
          else{
            ctx.drawImage(player1Sprite[2], player1.x, player1.y);
          }
        }
        else if(keys[68] && !player1.jumping){
          if(player1.lastDir == "r"){
            ctx.drawImage(player1Sprite[2], player1.x, player1.y);
          }
          else{
            ctx.drawImage(player1Sprite[1], player1.x, player1.y);
          }
        }
        else if(player1.jumping == true){
          if (player1.lastDir == "l") {
            ctx.drawImage(player1Sprite[1],player1.x,player1.y);
          }
          else {
            ctx.drawImage(player1Sprite[2],player1.x,player1.y);
          }
        }
        else if(keys[81]){
          if(player1.lastDir == "l"){
            ctx.drawImage(player1Sprite[3],(player1.x - player1.width / 2),player1.y);
            //ctx.drawImage(player1Sprite[3],player1.x,player1.y);
            if ((player1.x - player1.range) <= (player1.x + player2.width) &&
              (player1.x - player1.range) >= player2.x  - (player2.width / 2) &&
              player1.y >= player2.y &&
              player1.y <= player2.y + player1.height) {
                hurt(player2, player1, healthP2);
                displayDamage(player2.health, "p2-damage");
                player2.velX -= player2.health;
                player2.lastDir = "l";
            }
          }
          else{
            ctx.drawImage(player1Sprite[4],(player1.x + player1.width / 2),player1.y);
            //ctx.drawImage(player1Sprite[4],player1.x,player1.y);
            if((player1.x + player1.width) + player1.range >= player2.x &&
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
        else{
          if(player1.lastDir == "l"){
            ctx.drawImage(player1Sprite[1],player1.x,player1.y);
          }
          else{
            ctx.drawImage(player1Sprite[2],player1.x,player1.y);
          }
        }
      }
    }
  }
}
//------------------------------------------------------

let player2Sprite = new Array(maxFrame);
let anime2;

for(let i = 0; i<= maxFrame; i++){
  player2Sprite[i] = new Image();
  player2Sprite[i].src = "../../assets/Character("+player2.char+")(" + i + ").png";

  if(i == maxFrame){
    anime2 = function(){
      if(player2.dead == false){
        if(keys[74] && !player2.jumping){
          if(player2.lastDir == "l"){
            ctx.drawImage(player2Sprite[1], player2.x, player2.y);
          }
          else{
            ctx.drawImage(player2Sprite[2], player2.x, player2.y);
          }
        }
        else if(keys[76] && !player1.jumping){
          if(player2.lastDir == "r"){
            ctx.drawImage(player2Sprite[2], player2.x, player2.y);
          }
          else{
            ctx.drawImage(player2Sprite[1], player2.x, player2.y);
          }
        }
        else if(player2.jumping == true){
          if (player2.lastDir == "l") {
            ctx.drawImage(player2Sprite[1],player2.x,player2.y);
          }
          else {
            ctx.drawImage(player2Sprite[2],player2.x,player2.y);
          }
        }
        else if(keys[79]){
          if(player2.lastDir == "l"){
            ctx.drawImage(player2Sprite[3],(player2.x - player2.width / 2),player2.y);
            //ctx.drawImage(player2Sprite[3],player2.x,player2.y);
            if ((player2.x - player2.range) <= (player1.x + player1.width) &&
              (player2.x - player2.range) >= player1.x  - (player1.width / 2) &&
              player2.y >= player1.y &&
              player2.y <= player1.y + player2.height) {
                hurt(player1, player2, healthP1);
                    displayDamage(player1.health, "p1-damage");
                    player1.velX -= player1.health;
                    player1.lastDir = "l";
            }
          }
          else{
            ctx.drawImage(player2Sprite[4],(player2.x + player2.width / 2),player2.y);
            //ctx.drawImage(player2Sprite[4],player2.x,player2.y);
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
        else{
          if(player2.lastDir == "l"){
            ctx.drawImage(player2Sprite[1],player2.x,player2.y);
          }
          else{
            ctx.drawImage(player2Sprite[2],player2.x,player2.y);
          }
        }
      }
    }
  }
}
//-------------------------------------------------------------------------------
/*
// load player 1 sprites
for (let i = 0; i <= maxFrames; ++i) {
    player1Sprites[i] = new Image();
      player1Sprites[i].src = "../../assets/RendiWagner(2).png";
    if (i == maxFrames) {
        anim1 = function(){
          if (player1.dead == false) {
            if (keys[65] && !player1.jumping) {
              // move left
              ctx.drawImage(player1Sprites[frameLP1],player1.x,player1.y);
              ++frameLP1;
              if (frameLP1 == 22) {
                  frameLP1 = 11;
              }
            } else if (keys[68] && !player1.jumping) {
             // move right
              ctx.drawImage(player1Sprites[frameRP1],player1.x,player1.y);
              ++frameRP1;
              if (frameRP1 == 11) {
                  frameRP1 = 1;
              }
            } else if (player1.jumping == true) {
              // jump
              if (player1.lastDir == "l") {
                ctx.drawImage(player1Sprites[24],player1.x,player1.y);
              } else {
                ctx.drawImage(player1Sprites[23],player1.x,player1.y);
              }
            } else if (keys[81]) {
              // attack
              if (player1.lastDir == "l") {
                ctx.drawImage(player1Sprites[frameLPunchP1],(player1.x - player1.width / 2),player1.y);
                if (frameLPunchP1 != 36) {
                  ++frameLPunchP1;
                  // dealing damage from right
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
                if (frameLPunchP1 == 46) {
                  frameLPunchP1 = 36;
                }
              } else {
                ctx.drawImage(player1Sprites[frameRPunchP1],player1.x,player1.y);
                if (frameRPunchP1 != 25) {
                  ++frameRPunchP1;
                  // dealing damage from left
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
                if (frameRPunchP1 == 35) {
                  frameRPunchP1 = 25;
                }
              }
            } else {
              ctx.drawImage(player1Sprites[0],player1.x,player1.y);
              frameLPunchP1 = 37;
              frameRPunchP1 = 26;
            }
          }
        };
    }
}

/*
// load player 2 sprites
for (let j = 0; j <= maxFrames; ++j) {
    player2Sprites[j] = new Image();
    player2Sprites[j].src = "../../assets/SebastianKurz(2).png";
    if (j == maxFrames) {
        anim2 = function(){
          if (player2.dead == false) {
            if (keys[74] && !player2.jumping) {
              // move left
              ctx.drawImage(player2Sprites[frameLP2],player2.x,player2.y);
              ++frameLP2;
              if (frameLP2 == 22) {
                  frameLP2 = 11;
              }
            } else if (keys[76] && !player2.jumping) {
              // move right
              ctx.drawImage(player2Sprites[frameRP2],player2.x,player2.y);
              ++frameRP2;
              if (frameRP2 == 11) {
                  frameRP2 = 1;
              }
            } else if (player2.jumping == true) {
              // jump
              if (player2.lastDir == "l") {
                ctx.drawImage(player2Sprites[24],player2.x,player2.y);
              } else {
                ctx.drawImage(player2Sprites[23],player2.x,player2.y);
              }
            } else if (keys[79]) {
              // attack
              if (player2.lastDir == "l") {
                ctx.drawImage(player2Sprites[frameLPunchP2],(player2.x - player2.width / 2),player2.y);
                if (frameLPunchP2 != 36) {
                  ++frameLPunchP2;
                  // dealing damage from right
                  if ((player2.x - player2.range) <= (player1.x + player1.width) &&
                    (player2.x - player2.range) >= player1.x - (player1.width / 2) &&
                    player2.y >= player1.y &&
                    player2.y <= player1.y + player1.height) {
                      hurt(player1, player2, healthP1);
                      displayDamage(player1.health, "p1-damage");
                      player1.velX -= player1.health;
                      player1.lastDir = "l";
                  }
                }
                if (frameLPunchP2 == 46) {
                  frameLPunchP2 = 36;
                }
              } else {
                ctx.drawImage(player2Sprites[frameRPunchP2],player2.x,player2.y);
                if (frameRPunchP2 != 25) {
                  ++frameRPunchP2;
                  // dealing damage from left
                  if ((player2.x + player2.width) + player2.range >= player1.x &&
                    (player2.x + player2.width) + player2.range <= (player1.x + (player1.width * 1.5)) &&
                    player2.y >= player1.y &&
                    player2.y <= player1.y + player1.height) {
                      hurt(player1, player2, healthP1);
                      displayDamage(player1.health, "p1-damage");
                      player1.velX += player1.health;
                      player1.lastDir = "r";
                  }
                }
                if (frameRPunchP2 == 35) {
                  frameRPunchP2 = 25;
                }
              }
            } else {
              ctx.drawImage(player2Sprites[0],player2.x,player2.y);
              frameLPunchP2 = 37;
              frameRPunchP2 = 26;
            }
          }
        };
    }
}
*/
function update() {
  // jump
  if (player1.grounded && !player1.doublejumpready){
    player1.doublejumpready = true;
  }
  // player 1
  if (keys[87]) {
    if (!player1.jumping && player1.grounded) {
      player1.jumping = true;
      player1.grounded = false;
      player1.velY = -player1.speed * 2;
      player1.startjumptime = new Date();
    }
    else if(player1.jumping && !player1.grounded && player1.doublejumpready){
      let endjumptime = new Date();
      if (endjumptime - player1.startjumptime > 500){
        player1.velY = -player1.speed * 2;
        player1.doublejumpready = false;
      }
    }
  }
  // player 2
  if (player2.grounded && !player2.doublejumpready){
   player2.doublejumpready = true;
 }
   if (keys[73]) {
     if (!player2.jumping && player2.grounded) {
       player2.jumping = true;
       player2.grounded = false;
       player2.velY = -player2.speed * 2;
       player2.startjumptime = new Date();
     }
     else if(player2.jumping && !player2.grounded && player2.doublejumpready){
       let endjumptime = new Date();
       if (endjumptime - player2.startjumptime > 500){
         player2.velY = -player2.speed * 2;
         player2.doublejumpready = false;
       }
     }
 }
  // move left
  // player 1
  if (keys[65]) {
   if (player1.velX > -player1.speed) {
      player1.velX--;
      player1.lastDir = "l";
   }
  }
  // player 2
  if (keys[74]) {
   if (player2.velX > -player2.speed) {
      player2.velX--;
      player2.lastDir = "l";
   }
  }
  // move right
  // player 1
  if (keys[68]) {
    if (player1.velX < player1.speed) {
        player1.velX++;
        player1.lastDir = "r";
    }
  }
  // player 2
  if (keys[76]) {
    if (player2.velX < player2.speed) {
        player2.velX++;
        player2.lastDir = "r";
    }
  }

  // render stage
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = "#000";
  ctx.beginPath();

  player1.grounded = false;
  player2.grounded = false;

  for (let k = 0; k < platforms.length; k++) {
    ctx.rect(platforms[k].x, platforms[k].y, platforms[k].width, platforms[k].height);

    let dir1 = colCheck(player1, platforms[k]);
    let dir2 = colCheck(player2, platforms[k]);

    if (dir1 === "l" || dir1 === "r") {
      player1.velX = 0;
      player1.jumping = false;
    } else if (dir1 === "b") {
      player1.grounded = true;
      player1.jumping = false;
    } else if (dir1 === "t") {
      player1.velY *= -1;
    }

    if (dir2 === "l" || dir2 === "r") {
      player2.velX = 0;
      player2.jumping = false;
    } else if (dir2 === "b") {
      player2.grounded = true;
      player2.jumping = false;
    } else if (dir2 === "t") {
      player2.velY *= -1;
    }
  }

  if (player1.grounded) {
    player1.velY = 0;
  }
  if (player2.grounded) {
    player2.velY = 0;
  }

  player1.x += player1.velX;
  player1.y += player1.velY;
  player1.velX *= friction;
  player1.velY += gravity;

  player2.x += player2.velX;
  player2.y += player2.velY;
  player2.velX *= friction;
  player2.velY += gravity;

  ctx.closePath();
  ctx.fill();

  // render and animate characters
  anime1();
  anime2();

  // death animations
  if (deathTime != 0 && deathTime < 14) {
    ++deathTime;
    if (player1.dead == true) {
      if (player1.lastDir == "l") {
        ctx.drawImage(player1Sprites[46 + deathTime],player1.x,player1.y);
      } else {
        ctx.drawImage(player1Sprites[60 + deathTime],player1.x,player1.y);
      }
      if (deathTime == 13) {
        incKO(player2, "p2-kills");
      }
    } else if (player2.dead == true) {
      if (player2.lastDir == "l") {
        ctx.drawImage(player2Sprites[46 + deathTime],player2.x,player2.y);
      } else {
        ctx.drawImage(player2Sprites[60 + deathTime],player2.x,player2.y);
      }
      if (deathTime == 13) {
        incKO(player1, "p1-kills");
      }
    }
  }
  if (deathTime == 14) {
    deathTime = 14;
  }

  requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    let vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      // figures out on which side we are colliding (top, bottom, left, or right)
      let oX = hWidths - Math.abs(vX), oY = hHeights - Math.abs(vY);
      if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

// when opponent is hit
function hurt(victim, attacker) {
  victim.health += attacker.attack;
  // dead
  if (false) { //on death
    victim.dead = true;
    deathTime = 1;
    setTimeout(function(){respawn(victim, victimHealth)},400);
  }
}

// increment winner’s KO count when he defeated opponent
function incKO(winner, winnerCounter) {
  ++winner.kills;
  document.getElementById(winnerCounter).innerHTML = winner.kills;
}

function displayDamage(damage, damageCounter) {
  document.getElementById(damageCounter).innerHTML = damage;
}

// respawn defeated player
function respawn(newLife) {
  deathTime = 0;
  newLife.dead = false;
  newLife.x = (newLife == player1 ? (width / 4) : (width * 0.75 - 50));
  newLife.y = height - 100;
  newLife.health = 0;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.addEventListener("load", function(){
  update();
});
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

//let platforms = []
let platforms = [];
//-------------
let platThickness = 10;

// floor
platforms.push({
    x: 100,
    y: height - 10,
    width: width - 200,
    height: platThickness
});
// platforms
platforms.push({
    x: (width / 4) - 70,
    y: height - 160,
    width: 180,
    height: platThickness
});
platforms.push({
    x: width - 360,
    y: height - 160,
    width: 180,
    height: platThickness
});
platforms.push({
    x: 310,
    y: height - 340,
    width: 360,
    height: platThickness
});
