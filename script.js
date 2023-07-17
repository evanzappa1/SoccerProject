var count = 0;
var grid9 = false;


const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  openSearch("cell1");
});
const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  openSearch("cell2");
});
const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
  openSearch("cell3");
});
const button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
  openSearch("cell4");
});
const button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
  openSearch("cell5");
});
const button6 = document.getElementById('button6');
button6.addEventListener('click', () => {
  openSearch("cell6");
});
const button7 = document.getElementById('button7');
button7.addEventListener('click', () => {
  openSearch("cell7");
});
const button8 = document.getElementById('button8');
button8.addEventListener('click', () => {
  openSearch("cell8");
});
const button9 = document.getElementById('button9');
button9.addEventListener('click', () => {
  openSearch("cell9");
});
const howToButton = document.getElementById('how-to-button');
howToButton.addEventListener('click', () => {
  openPopup();
});
const statistics = document.getElementById("stats");
statistics.addEventListener('click', () => {
  openStatistics();
})
const closeStatsButton = document.getElementById('closeStatisticsButton');
closeStatsButton.addEventListener('click', () => {
  closeStatistics();
});
const closeSearchButton = document.getElementById('closeSearchButton');
closeSearchButton.addEventListener('click', () => {
  closeSearch();
});
const closeRulesButton = document.getElementById('closeRulesButton');
closeRulesButton.addEventListener('click', () => {
  closePopup();
});

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
  /*
  var params = {
    TableName: "allPlayers",
    ProjectionExpression: "PlayerName, TeamList",
    KeyConditionExpression: "PlayerName = :name",
    ExpressionAttributeValues: {
      ":name": playerName
    }
  };
  var AWS = require('aws-sdk');
  let awsConfig = {
    "region" : "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId" : "AKIAUSFHKJDTCHVCHAPW", "secretAccessKey" : "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"
  };
  AWS.config.update(awsConfig)
  let docClient = new AWS.DynamoDB.DocumentClient();
  docClient.query(params, function (err, data) {
    if (err) {
      console.error("Error fetching players:", err);
    } else {

      playerNames =  data.Items.map(item => item.PlayerName);
      playerNames = playerNames.join(',')
      teamList =  data.Items.map(item => item.TeamList);
      teamList = teamList.join(',')
      console.log(id)
        if (id == "cell1") {
          team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell1"))
          }
        }
        if (id == "cell2") {
          team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell2"))
          }
        }
        if (id == "cell3") {
          team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell3"))
          }
        }
        if (id == "cell4") {
          team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell4"))
          }
        }
        if (id == "cell5") {
          team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell5"))
          }
        }
        if (id == "cell6") {
          team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) || teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell6"))
          }
        }
        if (id == "cell7") {
          team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell7"))
          }
        }
        if (id == "cell8") {
          team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell8"))
          }
        }
        if (id == "cell9") {
          team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
          team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
          if (teamList.includes(team1) && teamList.includes(team2)) {
            correctGuess(playerName, document.getElementById("cell9"))
          }
        }
    }
    })

   */
  fetch('all_prem.json')
    .then(response => response.json())
    .then(data => {
      // The data variable now contains the parsed JSON data
      playerData = data.find(player => player.PlayerName === playerName);
      const teamList = playerData.TeamList;
      const nationalities = playerData.Nationalities;
      const positions = playerData.Positions;
      const YearsActive = playerData.TeamList;
      console.log(playerData)
      if (id == "cell1") {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell1"))
        }
      }
      if (id == "cell2") {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell2"))
        }
      }
      if (id == "cell3") {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell3"))
        }
      }
      if (id == "cell4") {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell4"))
        }
      }
      if (id == "cell5") {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell5"))
        }
      }
      if (id == "cell6") {
        team1 = document.getElementById("row-2").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) || teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell6"))
        }
      }
      if (id == "cell7") {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-1").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell7"))
        }
      }
      if (id == "cell8") {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-2").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell8"))
        }
      }
      if (id == "cell9") {
        team1 = document.getElementById("row-3").querySelector('img').getAttribute('alt')
        team2 = document.getElementById("column-3").querySelector('img').getAttribute('alt')
        if (teamList.includes(team1) && teamList.includes(team2)) {
          correctGuess(playerName, document.getElementById("cell9"))
        }
      }
    })
  updateGuesses()
  closeSearch()
}

function correctGuess(playerName,id) {
  id.innerHTML = playerName
  id.style.backgroundColor = "green"
  console.log(playerName,id)
}


let closeSearch = function () {
  document.getElementById("search-popup").style.display = "none";
  const wrapper = document.querySelector(".popup-container");
  searchInp = wrapper.querySelector("input");
  options = wrapper.querySelector(".options");
  searchInp.value = ""; // Reset the search input value
  options.innerHTML = ""; // Clear the options list
  searchInp.removeEventListener("keyup", handleAutofill); // Remove the keyup event listener
}

function handleAutofill(player_id) {
  /*
  const wrapper = document.querySelector(".popup-container");
  const searchInp = wrapper.querySelector("input");
  const options = wrapper.querySelector(".options");
  var params = {
    TableName: "allPlayers",
    ProjectionExpression: "PlayerName"
  };
  var AWS = require('aws-sdk');
  let awsConfig = {
    "region" : "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId" : "AKIAUSFHKJDTCHVCHAPW", "secretAccessKey" : "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"
  };
  AWS.config.update(awsConfig)
  let docClient = new AWS.DynamoDB.DocumentClient();
  docClient.scan(params, function (err, data) {
    if (err) {
      console.error("Error fetching players:", err);
    } else {
      playerNames =  data.Items.map(item => item.PlayerName);
      let arr = [];
      let searchedVal = searchInp.value.toLowerCase();
      arr = playerNames
        .filter(data => data.toLowerCase().startsWith(searchedVal))
        .map(data => `<li>${data}</li>`)
        .join("");
      options.innerHTML = arr ? arr : '<p>Player not found!</p>';
      const liItems = options.querySelectorAll("li");
      liItems.forEach((li) => {
        li.addEventListener("click", () => searchName(li.innerHTML, player_id));
      });
    }
    })

   */
  const wrapper = document.querySelector(".popup-container");
  const searchInp = wrapper.querySelector("input");
  const options = wrapper.querySelector(".options");
  fetch('all_prem.json')
    .then(response => response.json())
    .then(data => {
      // The data variable now contains the parsed JSON data
      const playerNames = data.map(player => player.PlayerName);
      let arr = [];
      let searchedVal = searchInp.value.toLowerCase();
      arr = playerNames
        .filter(data => data.toLowerCase().startsWith(searchedVal))
        .map(data => `<li>${data}</li>`)
        .join("");
      options.innerHTML = arr ? arr : '<p>Player not found!</p>';
      const liItems = options.querySelectorAll("li");
      liItems.forEach((li) => {
        li.addEventListener("click", () => searchName(li.innerHTML, player_id));
      });
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

function openStatistics() {
  console.log("YES")
  document.getElementById("statistics-popup").style.display = "block";
};
function closeStatistics() {
  document.getElementById("statistics-popup").style.display = "none";
}

