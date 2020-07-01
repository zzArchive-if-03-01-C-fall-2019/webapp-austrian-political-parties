let player = 1;
let charcount = 4;
let p1char = 1;
let p2char = 2;

document.getElementById("P1").style.backgroundColor = '#ffffff';
document.getElementById("P1").style.color = '#444343';
document.getElementById("b1").style.backgroundColor = '#ffffff';
document.getElementById("b1").style.color = '#444343';
document.getElementById("char"+p1char).style.backgroundColor = '#ffffff';
document.getElementById("char"+p1char).style.color = '#444343';
document.cookie = "map="+"1"+ ";Path=/";
document.cookie = "p1character="+"1"+ ";Path=/";
document.cookie = "p2character="+"2"+ ";Path=/";

document.getElementById("b1").addEventListener("click", function()
{
  document.getElementById("b1").style.backgroundColor = '#ffffff';
  document.getElementById("b1").style.color = '#444343';
  document.getElementById("b2").style.backgroundColor = '#444343';
  document.getElementById("b2").style.color = '#ffffff';
  document.getElementById("b3").style.backgroundColor = '#444343';
  document.getElementById("b3").style.color = '#ffffff';
  document.cookie = "map=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "map="+"1"+ ";Path=/";
}
);

document.getElementById("b2").addEventListener("click", function()
{
  document.getElementById("b2").style.backgroundColor = '#ffffff';
  document.getElementById("b2").style.color = '#444343';
  document.getElementById("b1").style.backgroundColor = '#444343';
  document.getElementById("b1").style.color = '#ffffff';
  document.getElementById("b3").style.backgroundColor = '#444343';
  document.getElementById("b3").style.color = '#ffffff';
  document.cookie = "map=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "map="+"2"+ ";Path=/";
}
);

document.getElementById("b3").addEventListener("click", function()
{
  document.getElementById("b3").style.backgroundColor = '#ffffff';
  document.getElementById("b3").style.color = '#444343';
  document.getElementById("b1").style.backgroundColor = '#444343';
  document.getElementById("b1").style.color = '#ffffff';
  document.getElementById("b2").style.backgroundColor = '#444343';
  document.getElementById("b2").style.color = '#ffffff';
  document.cookie = "map=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "map="+"3"+ ";Path=/";
}
);

document.getElementById("P1").addEventListener("click", function()
{
  player = 1;
  document.getElementById("P1").style.backgroundColor = '#ffffff';
  document.getElementById("P1").style.color = '#444343';
  document.getElementById("P2").style.backgroundColor = '#444343';
  document.getElementById("P2").style.color = '#ffffff';
  for (let i = 1; i <= charcount; i++) {
    if (i == p1char){
      document.getElementById("char"+i).style.backgroundColor = '#ffffff';
      document.getElementById("char"+i).style.color = '#444343';
    }
    else{
      document.getElementById("char"+i).style.backgroundColor = '#444343';
      document.getElementById("char"+i).style.color = '#ffffff';
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
  for (let i = 1; i <= charcount; i++) {
    if (i == p2char){
      document.getElementById("char"+i).style.backgroundColor = '#ffffff';
      document.getElementById("char"+i).style.color = '#444343';
    }
    else{
      document.getElementById("char"+i).style.backgroundColor = '#444343';
      document.getElementById("char"+i).style.color = '#ffffff';
    }
  }
}
);

document.getElementById("char1").addEventListener("click", function()
{
  if (p1char != 1 && p2char != 1) {
    if (player == 1){
      p1char=1;
      for (let i = 1; i <= charcount; i++) {
        if (i == p1char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2char=1;
      for (let i = 1; i <= charcount; i++) {
        if (i == p2char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"character=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"character="+"1"+ ";Path=/";
  }
}
);

document.getElementById("char2").addEventListener("click", function()
{
  if(p1char != 2 && p2char != 2){
    if (player == 1){
      p1char=2;
      for (let i = 1; i <= charcount; i++) {
        if (i == p1char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2char=2;
      for (let i = 1; i <= charcount; i++) {
        if (i == p2char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"character=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"character="+"2"+ ";Path=/";
  }
}
);

document.getElementById("char3").addEventListener("click", function()
{
  if(p1char != 3 && p2char != 3){
    if (player == 1){
      p1char=3;
      for (let i = 1; i <= charcount; i++) {
        if (i == p1char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2char=3;
      for (let i = 1; i <= charcount; i++) {
        if (i == p2char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"character=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"character="+"3"+ ";Path=/";
  }
}
);

document.getElementById("char4").addEventListener("click", function()
{
  if(p1char != 4 && p2char != 4){
    if (player == 1){
      p1char=4;
      for (let i = 1; i <= charcount; i++) {
        if (i == p1char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    else{
      p2char=4;
      for (let i = 1; i <= charcount; i++) {
        if (i == p2char){
          document.getElementById("char"+i).style.backgroundColor = '#ffffff';
          document.getElementById("char"+i).style.color = '#444343';
        }
        else{
          document.getElementById("char"+i).style.backgroundColor = '#444343';
          document.getElementById("char"+i).style.color = '#ffffff';
        }
      }
    }
    document.cookie = "p"+player+"character=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"character="+"4"+ ";Path=/";
  }
}
);
