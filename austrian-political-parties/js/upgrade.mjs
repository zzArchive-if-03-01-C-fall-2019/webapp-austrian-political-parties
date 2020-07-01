let player = 1;
let upcount = 4;
let p1upgrade = 1;
let p2upgrade = 1;

document.getElementById("P1").style.backgroundColor = '#ffffff';
document.getElementById("P1").style.color = '#444343';
document.getElementById("up"+p1upgrade).style.backgroundColor = '#ffffff';
document.getElementById("up"+p1upgrade).style.color = '#444343';
document.cookie = "p1upgrade="+"0"+ ";Path=/";
document.cookie = "p2upgrade="+"0"+ ";Path=/";

document.getElementById("P1").addEventListener("click", function()
{
  player = 1;
  document.getElementById("P1").style.backgroundColor = '#ffffff';
  document.getElementById("P1").style.color = '#444343';
  document.getElementById("P2").style.backgroundColor = '#444343';
  document.getElementById("P2").style.color = '#ffffff';
  for (let i = 1; i <= upcount; i++) {
    if (i == p1upgrade){
      document.getElementById("up"+i).style.backgroundColor = '#ffffff';
      document.getElementById("up"+i).style.color = '#444343';
    }
    else{
      document.getElementById("up"+i).style.backgroundColor = '#444343';
      document.getElementById("up"+i).style.color = '#ffffff';
    }
  }
}
);

document.getElementById("P2").addEventListener("click", function()
{
  player = 2;
  document.getElementById("P2").style.backgroundColor = '#ffffff';
  document.getElementById("P2").style.color = '#444343';
  document.getElementById("P1").style.backgroundColor = '#444343';
  document.getElementById("P1").style.color = '#ffffff';
  for (let i = 1; i <= upcount; i++) {
    if (i == p2upgrade){
      document.getElementById("up"+i).style.backgroundColor = '#ffffff';
      document.getElementById("up"+i).style.color = '#444343';
    }
    else{
      document.getElementById("up"+i).style.backgroundColor = '#444343';
      document.getElementById("up"+i).style.color = '#ffffff';
    }
  }
}
);

document.getElementById("up1").addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=1;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2upgrade=1;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"1"+ ";Path=/";
}
);

document.getElementById("up2").addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=2;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2upgrade=2;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"2"+ ";Path=/";
}
);

document.getElementById("up3").addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=3;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2upgrade=3;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"3"+ ";Path=/";
}
);

document.getElementById("up4").addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=4;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2upgrade=4;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.backgroundColor = '#ffffff';
          document.getElementById("up"+i).style.color = '#444343';
        }
        else{
          document.getElementById("up"+i).style.backgroundColor = '#444343';
          document.getElementById("up"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"4"+ ";Path=/";
}
);
