const liveChart = document.querySelector("#live");
const src = "data.json";

let mainData = [];
fetch(src)
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      mainData.push(data[i]);
    }
    console.log(mainData);
    const datas = mainData.map(
      curData =>
        `<div class='chart-container'>
          <h5 class='cur-amount'>$${curData.amount}</h5>
          <h5 class='cur-day' style='cursor: arrow'>${curData.day}</h5>
      </div>`
    );

    liveChart.innerHTML = datas.join("");
    // join -> when changing array to string, we can use join method to join elements!

    const curData = document.querySelectorAll(".chart-container");
    const date = new Date();

    for (let i = 0; i < curData.length; i++) {
      curData[i].style.height = `${mainData[i].amount * 3}px`;
      curData[date.getDay()].style.backgroundColor = "#76B5BD";
    }

    // day - night

    const circle = document.querySelector(".circle");
    const dayCircle = document.querySelector(".day");
    const nightCircle = document.querySelector(".night");

    const body = document.querySelector("body");
    const header = document.querySelector("header");

    circle.addEventListener("click", () => {
      if (circle.classList.contains("active")) {
        nightCircle.style.backgroundColor = "black";
        nightCircle.style.zIndex = "1";
        dayCircle.style.zIndex = "0";
        dayCircle.style.backgroundColor = "#ec755d";
        dayCircle.style.border = "2px solid #fff";
        circle.classList.remove("active");
        // header

        for (let i = 0; i < curData.length; i++) {
          curData[i].style.backgroundColor = "#ec755d";
          curData[date.getDay()].style.backgroundColor = "#76B5BD";
        }
        body.style.backgroundColor = "#f7e9dc";
        header.style.backgroundColor = "#ec755d";
        // section
      } else {
        dayCircle.style.backgroundColor = "white";
        dayCircle.style.zIndex = "1";
        nightCircle.style.zIndex = "0";
        nightCircle.style.backgroundColor = "#ec755d";
        nightCircle.style.border = "2px solid black";
        circle.classList.add("active");
        // header

        for (let i = 0; i < curData.length; i++) {
          curData[i].style.backgroundColor = "#76B5BD";
          curData[date.getDay()].style.backgroundColor = "#ec755d";
        }
        body.style.backgroundColor = "#064663";
        header.style.backgroundColor = "#76B5BD";
        // section
      }
    });
  });
