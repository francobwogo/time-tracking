function myFunction(value='weekly') {
  // set active li
  let ul = document.getElementsByClassName("ul");
  let li = document.getElementsByClassName("li");
  for(let i= 0; i < li.length ; i++){
    li[i].addEventListener("click", function() {
      let currentlyActive = document.getElementsByClassName("active");
      currentlyActive[0].className = currentlyActive[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // Fetch data
  fetch("./data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    const cards = document.querySelector(".cards");
    while (cards.hasChildNodes()){
        cards.removeChild(cards.firstChild);
    }

    jsondata.forEach((element) => {
      // Create div
      const card = document.createElement("div");
      const wrapper = document.createElement("div");
      const activity = document.createElement("div");
      const title = document.createElement("div");
      const icon_ellipses = document.createElement("div");
      const img = document.createElement("img");
      const timeframes = document.createElement("div");
      const current = document.createElement("div");
      const previous = document.createElement("div");

      // set time
      let time = value;
      let _title = element.title;
      let _current = element.timeframes[time].current;
      let _previous = element.timeframes[time].previous;

      // Set attributes
      const play = "play";
      const work = "work";
      const study = "study";
      const exercise = "exercise";
      const self_care = "self-care";
      const social = "social";
      if (_title == "Work") {
        card.setAttribute("class", `card ${work}`);
      }
      if (_title == "Play") {
        card.setAttribute("class", `card ${play}`);
      }
      if (_title == "Exercise") {
        card.setAttribute("class", `card ${exercise}`);
      }
      if (_title == "Social") {
        card.setAttribute("class", `card ${social}`);
      }
      if (_title == "Self Care") {
        card.setAttribute("class", `card ${self_care}`);
      }
      if (_title == "Study") {
        card.setAttribute("class", `card ${study}`);
      }
      wrapper.setAttribute("class", "wrapper");
      activity.setAttribute("class", "activity");
      title.setAttribute("class", "title");
      icon_ellipses.setAttribute("class", "icon-ellipses");
      timeframes.setAttribute("class", "timeframes");
      current.setAttribute("class", "current");
      previous.setAttribute("class", "previous");
      img.setAttribute("class", "icons");
      img.src = "./images/icon-ellipsis.svg";
      img.alt = "icon-ellipses";

      // Set html data
      title.textContent = `${_title}`;
      current.textContent = `${_current}hrs`;
      previous.textContent = `Last Week - ${_previous}hrs`;

      // Append elements
      icon_ellipses.appendChild(img);
      timeframes.appendChild(current);
      timeframes.appendChild(previous);
      activity.appendChild(title);
      activity.appendChild(icon_ellipses);
      wrapper.appendChild(activity);
      wrapper.appendChild(timeframes);
      card.appendChild(wrapper);
      cards.appendChild(card);
    });
  });
}

myFunction()