var count = 0;
var grid9 = false;

function doSomething() {
  openSearch("cell1");
}
function doSomething2() {
  openSearch("cell2");
}
function doSomething3() {
  openSearch("cell3");
}
function doSomething4() {
  openSearch("cell4");
}
function doSomething5() {
  openSearch("cell5");
}
function doSomething6() {
  openSearch("cell6");
}
function doSomething7() {
  openSearch("cell7");
}
function doSomething8() {
  openSearch("cell8");
}
function doSomething9() {
  openSearch("cell9");

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
function searchName(playerName, id) {
  updateGuesses()
  closeSearch()
  fetch('new_df.json')
    .then(response => response.json())
    .then(jsonData => {
      const playerData = jsonData.find(player => player.PlayerName === playerName);
      const teamList = playerData.TeamList;
      const nationalities = playerData.Nationality;
      const yearsActive = playerData.YearsActive;
      const position = playerData.Positions;
      if (id == document.getElementById("cell1")) {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell2")) {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell3")) {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell4")) {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell5")) {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell6")) {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell7")) {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell8")) {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
      if (id == document.getElementById("cell9")) {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, id)
        }
      }
    })
}

function correctGuess(playerName,id) {
  id.innerHTML = playerName
  id.style.backgroundColor = "green"
}


function closeSearch() {
  document.getElementById("search-popup").style.display = "none";
  const wrapper = document.querySelector(".popup-container");
  searchInp = wrapper.querySelector("input");
  options = wrapper.querySelector(".options");
  searchInp.value = ""; // Reset the search input value
  options.innerHTML = ""; // Clear the options list
  searchInp.removeEventListener("keyup", handleAutofill); // Remove the keyup event listener
}

function handleAutofill(player_id) {
  fetch('new_df.json')
    .then(response => response.json())
    .then(jsonData => {
      const playerNames = jsonData.map(player => player.PlayerName);
      const wrapper = document.querySelector(".popup-container");
      options = wrapper.querySelector(".options");
      let arr = [];
      let searchedVal = searchInp.value.toLowerCase();
      arr = playerNames.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
      }).map(data => '<li onclick="searchName(this.innerHTML, ' + player_id + ')">' + data + '</li>').join("");
      options.innerHTML = arr ? arr : '<p>Player not found!</p>';
    })
}
function openSearch(id) {
  document.getElementById("search-popup").style.display = "block";
  const wrapper = document.querySelector(".popup-container");
  searchInp = wrapper.querySelector("input");
  options = wrapper.querySelector(".options");
  searchInp.value = ""; // Reset the search input value
  options.innerHTML = ""; // Clear the options list
  searchInp.addEventListener("keyup", () => handleAutofill(id)); // Add the keyup event listener
}

