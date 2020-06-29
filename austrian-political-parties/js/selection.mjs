let player = 3;

document.getElementById("P1").addEventListener("click", function()
{
  player = 1;
}
);

document.getElementById("P2").addEventListener("click", function()
{
  player = 2;
}
);

document.getElementById("Basti").addEventListener("click", function()
{
  document.cookie = "p"+player+"character="+"1"+ ";Path=/";
}
);

document.getElementById("Rendi").addEventListener("click", function()
{
  document.cookie = "p"+player+"character="+"2"+ ";Path=/";
}
);
