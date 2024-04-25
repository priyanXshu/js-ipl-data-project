const fs = require("fs");
const path = "../data/matches.csv";
const csv = require("csvtojson");
csv()
  .fromFile(path)
  .then((data) => {
    const players = {};
    for (let i = 0; i < data.length; i++) {
      if (!players[data[i].season]) {
        players[data[i].season] = {};
      }
      const season = players[data[i].season];
      const player = data[i].player_of_match;

      if (season[player]) {
        season[player] += 1;
      } else {
        season[player] = 1;
      }
    }
    // console.log(players)
    for (let i in players) {
      let season = players[i];
      let maxPlayer
      let count = 0;
      for (let j in season) {
        if (season[j] > count) {
          count = season[j];
          maxPlayer = j;
        }
      }
      players[i] = {maxPlayer,count};
    }

    fs.writeFile(
      "../public/output/6-highestPlayerOfTheSeasonAward.json",
      JSON.stringify(players),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Data updated successfully.");
        }
      }
    );
  })
  .catch((err) => {
    console.error("Error:", err);
  });
