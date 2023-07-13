var params = {
  TableName: "playerData",
  ProjectionExpression: "PlayerName, TeamList",
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
      define_buttons(data)
  }
})
function define_buttons(data) {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', () => {
    openSearch("cell1", data);
  });
  const button2 = document.getElementById('button2');
  button2.addEventListener('click', () => {
    openSearch("cell2", data);
  });
  const button3 = document.getElementById('button3');
  button3.addEventListener('click', () => {
    openSearch("cell3", data);
  });
  const button4 = document.getElementById('button4');
  button4.addEventListener('click', () => {
    openSearch("cell4", data);
  });
  const button5 = document.getElementById('button5');
  button5.addEventListener('click', () => {
    openSearch("cell5", data);
  });
  const button6 = document.getElementById('button6');
  button6.addEventListener('click', () => {
    openSearch("cell6", data);
  });
  const button7 = document.getElementById('button7');
  button7.addEventListener('click', () => {
    openSearch("cell7", data);
  });
  const button8 = document.getElementById('button8');
  button8.addEventListener('click', () => {
    openSearch("cell8", data);
  });
  const button9 = document.getElementById('button9');
  button9.addEventListener('click', () => {
    openSearch("cell9", data);
  });
}

function openSearch(id, data) {
  document.getElementById("search-popup").style.display = "block";
  const wrapper = document.querySelector(".popup-container");
  searchInp = wrapper.querySelector("input");
  options = wrapper.querySelector(".options");
  searchInp.value = ""; // Reset the search input value
  options.innerHTML = ""; // Clear the options list
  searchInp.addEventListener("keyup", () => handleAutofill(id, data)); // Add the keyup event listener
}

function handleAutofill(id, data) {
  let playerNames =  data.Items.map(item => item.PlayerName);
  let arr = [];
  let searchedVal = searchInp.value.toLowerCase();
  arr = playerNames
    .filter(data => data.toLowerCase().startsWith(searchedVal))
    .map(data => `<li>${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : '<p>Player not found!</p>';
  const liItems = options.querySelectorAll("li");
  liItems.forEach((li) => {
    li.addEventListener("click", () => searchName(data, li.innerHTML, id));
  });
}

function searchName(data, playerName, id) {
  var params = {
    TableName: "playerData",
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
      if (id == "cell1") {
        team1 = document.getElementById("row-1").querySelector('img').getAttribute('alt')
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
        if (teamList.includes(team1) && teamList.includes(team2)) {
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
  updateGuesses()
  closeSearch()
}
function correctGuess(playerName,id) {
  id.innerHTML = playerName
  id.style.backgroundColor = "green"
}
var count = 0;
function updateGuesses() {
  count += 1;
  document.getElementById("num_guesses").innerHTML = count;
}
function closeSearch() {
  document.getElementById("search-popup").style.display = "none";
  const wrapper = document.querySelector(".popup-container");
  searchInp = wrapper.querySelector("input");
  options = wrapper.querySelector(".options");
  searchInp.value = ""; // Reset the search input value
  options.innerHTML = ""; // Clear the options list
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
const closeSearchButton = document.getElementById('closeSearchButton');
closeSearchButton.addEventListener('click', () => {
  closeSearch();
});
const closeRulesButton = document.getElementById('closeRulesButton');
closeRulesButton.addEventListener('click', () => {
  closePopup();
});
const howToButton = document.getElementById('how-to-button');
howToButton.addEventListener('click', () => {
  openPopup();
});
