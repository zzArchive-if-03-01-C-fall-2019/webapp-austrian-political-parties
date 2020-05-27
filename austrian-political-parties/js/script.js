(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

class player{
  constructor(_x, _y, _lastDir) {
    this.x = _x;
    this.y = _y;
    this.lastDir = _lastDir;
    this.width = 50;
    this.height = 100;
    this.speed = 7;
    this.health = 0;
    this.regen = 1;
    this.attack = 1;
    this.range = 50;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.lastDir = "r";
    this.dead = false;
    this.kills = 0;
  }
}

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 500,
    player1 = new player((width / 4), height - 100, "r"),
    player2 = new player((width * 0.75 - 50), height - 100, "l"),
    keys = [],
    friction = 0.8, //Rutschweite
    gravity = 0.66;
    canvas.width = width;
    canvas.height = height;


setInterval(regenhealth, 3000);


function regenhealth() {
  player1.heatlh -= player1.regen;
  player2.heatlh -= player2.regen;
}

var frameRP1 = 1,
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

// load player 1 sprites
for (var i = 0; i <= maxFrames; ++i) {
    player1Sprites[i] = new Image();
    player1Sprites[i].src = "../../pictures/RendiWagnerRight().png";
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

// load player 2 sprites
for (var j = 0; j <= maxFrames; ++j) {
    player2Sprites[j] = new Image();
    player2Sprites[j].src = "../../pictures/SebastianKurzLeft().png";
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

function update() {
  // jump
  // player 1
  if (keys[87]) {
    if (!player1.jumping){
      player1.jumping = true;
      player1.velY = -player2.speed * 2;
    }
    if (!player1.jumping && player1.grounded) {
      player1.jumping = true;
      player1.grounded = false;
      player1.velY = -player1.speed * 2;
    }
  }
  // player 2
  if (keys[73]) {
    if (!player2.jumping){
      player2.jumping = true;
      player2.velY = -player2.speed * 2;
    }
    if (!player2.jumping && player2.grounded) {
      player2.jumping = true;
      player2.grounded = false;
      player2.velY = -player2.speed * 2;
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

  for (var k = 0; k < platforms.length; k++) {
    ctx.rect(platforms[k].x, platforms[k].y, platforms[k].width, platforms[k].height);

    var dir1 = colCheck(player1, platforms[k]);
    var dir2 = colCheck(player2, platforms[k]);

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
  anim1();
  anim2();

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
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      // figures out on which side we are colliding (top, bottom, left, or right)
      var oX = hWidths - Math.abs(vX), oY = hHeights - Math.abs(vY);
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

window.addEventListener("load", function(){
  update();
});
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

//var platforms = []
var platforms = [];
//-------------
var platThickness = 10;

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
