const fs = require("fs");
const path = "../data/matches.csv";
const csv = require("csvtojson");
csv()
  .fromFile(path)
  .then((data) => {
    const teams = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].toss_winner == data[i].winner) {
        if (!teams[data[i].winner]) {
          teams[data[i].winner] = 1;
        }
        teams[data[i].winner]++;
      }
    }
    fs.writeFile(
      "../public/output/5-wonTossWonMatch.json",
      JSON.stringify(teams),
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
