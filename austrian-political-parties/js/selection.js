let Selection = {};
Selection.p1character = 1;
Selection.p2character = 1;

document.getElementById("Basti").addEventListener("click", function()
{
  p1character = 4;
  //id.innerText = "Selected";
  //document.body.style.text = green;
}
);

document.getElementById("Rendi").addEventListener("click", function()
{
  p2character = 3;
  //id.innerText = "Selected";
  //document.body.style.text = green;
}
);

export {Selection.p1character, Selection.p2character};

//module.exports = Selection;
