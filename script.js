var count = 0;
var grid9 = false;

function doSomething() {
  document.getElementById("button1").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething2() {
  document.getElementById("button2").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething3() {
  document.getElementById("button3").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething4() {
  document.getElementById("button4").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething5() {
  document.getElementById("button5").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething6() {
  document.getElementById("button6").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething7() {
  document.getElementById("button7").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething8() {
  document.getElementById("button8").innerHTML = "Goodbye";
  updateGuesses();
  openSearch();
}
function doSomething9() {
  document.getElementById("button9").innerHTML = "This is 9";
  var button = document.getElementById("button9").parentNode;
  button.disabled = true;
  updateGuesses();
  openSearch();

}
function updateGuesses() {
  count += 1;
  document.getElementById("num_guesses").innerHTML = count;
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openSearch() {
  fetch('temp.json')
    .then(response => response.json())
    .then(jsonData => {
      const playerNames = jsonData.map(player => player.PlayerName);
      document.getElementById("search-popup").style.display = "block";
      const wrapper = document.querySelector(".popup-container")
      selectBtn = wrapper.querySelector(".select-btn")
      options = wrapper.querySelector(".options")
      playerNames.forEach(name => {
        let li = '<li>'+name+'</li>';
        options.insertAdjacentHTML("beforeend", li);
      })
    })
    .catch(err => {
      console.error(err);
    });

}
function closeSearch() {
  document.getElementById("search-popup").style.display = "none";
}
function autofill() {
  fetch('temp.json')
    .then(response => response.json())
    .then(jsonData => {
      const playerNames = jsonData.map(player => player.PlayerName);
      const wrapper = document.querySelector(".popup-container")
      searchInp = wrapper.querySelector("input")
      searchInp.addEventListener("keyup", () => {
        let arr = [];
        let searchedVal = searchInp.value.toLowerCase();
        arr = playerNames.filter(data => {
          return data.toLowerCase().startsWith(searchedVal);
        }).map(data => '<li>' + data + '</li>').join("")
        options.innerHTML = arr ? arr : '<p>Player not found!</p>';
      })
  })
}

autofill();
