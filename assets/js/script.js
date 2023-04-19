import data from "../../data.json" assert { type: "json" };
const score = document.querySelector(".score-container");
const parent = document.querySelector(".summary-categories");

let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i].score;
}
let avgScore = document.createElement("p");
avgScore.textContent = parseInt(sum / data.length);
score.prepend(avgScore);

for (let i = 0; i < data.length; i++) {
  let div = document.createElement("div");
  let categoryName = data[i].category.toLowerCase();
  div.classList.add("category", categoryName);

  let img = document.createElement("img");
  img.setAttribute("src", data[i].icon);
  img.setAttribute("alt", "");
  div.appendChild(img);

  let p = document.createElement("p");
  p.textContent = data[i].category;
  div.appendChild(p);

  let num = document.createElement("p");
  num.classList.add("score");
  let boldScore = document.createElement("STRONG");
  boldScore.textContent = data[i].score;
  num.appendChild(boldScore);
  num.insertAdjacentText("beforeend", " / 100");
  div.appendChild(num);

  parent.appendChild(div);
}
