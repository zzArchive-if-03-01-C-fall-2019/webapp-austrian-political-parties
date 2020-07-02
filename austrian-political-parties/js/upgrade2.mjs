let player = 2;
let upcount = 4;
let p2upgrade = 1;
document.cookie = "p"+player+"upgrade="+"1"+ ";Path=/";
//document.getElementById("up1").style.borderColor = '#000000';

let up1 = document.getElementById("up1");
let up2 = document.getElementById("up2");
let up3 = document.getElementById("up3");
let up4 = document.getElementById("up4");


if (up1 !== null){
  up1.addEventListener("click", function()
  {
      if (player == 1){
        p1upgrade=1;
        for (let i = 1; i <= upcount; i++) {
          if (i == p1upgrade){
            document.getElementById("up"+i).style.borderColor = '#000000';
          }
          else{
            document.getElementById("up"+i).style.borderColor = 'grey';
          }
        }
      }
      else{
        p2upgrade=1;
        for (let i = 1; i <= upcount; i++) {
          if (i == p2upgrade){
            document.getElementById("up"+i).style.borderColor = '#000000';
          }
          else{
            document.getElementById("up"+i).style.borderColor = 'grey';
          }
        }
      }
      document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "p"+player+"upgrade="+"1"+ ";Path=/";
  }
  );
}


if (up2 !== null){
up2.addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=2;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    else{
      p2upgrade=2;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"2"+ ";Path=/";
}
);
}

if (up3 !== null){
up3.addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=3;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    else{
      p2upgrade=3;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"3"+ ";Path=/";
}
);
}

if (up4 !== null){
up4.addEventListener("click", function()
{
    if (player == 1){
      p1upgrade=4;
      for (let i = 1; i <= upcount; i++) {
        if (i == p1upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    else{
      p2upgrade=4;
      for (let i = 1; i <= upcount; i++) {
        if (i == p2upgrade){
          document.getElementById("up"+i).style.borderColor = '#000000';
        }
        else{
          document.getElementById("up"+i).style.borderColor = 'grey';
        }
      }
    }
    document.cookie = "p"+player+"upgrade=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "p"+player+"upgrade="+"4"+ ";Path=/";
}
);
}
