const fs = require("fs");
const pathM = "../data/matches.csv";
const pathD = "../data/deliveries.csv";
const csv = require("csvtojson");
Promise.all([
    csv().fromFile(pathM), 
    csv().fromFile(pathD)
])
  // csv()
  //   .fromFile(pathM,pathD)
  .then(([data_match, data_deliveries]) => {
    const extras = {};
    for (let i = 0; i < data_match.length; i++) {
      if (data_match[i].season == 2016) {
        const id = data_match[i].id;
        for (let j = 0; j < data_deliveries.length; j++) {
          if (id === data_deliveries[j].match_id) {
            if (!extras[data_deliveries[j].bowling_team]) {
              extras[data_deliveries[j].bowling_team] = 0;
            }
            extras[data_deliveries[j].bowling_team] += Number(
              data_deliveries[j].extra_runs
            );
          }
        }
      }
    }
    fs.writeFile(
      "../public/output/3-extraRunsConcededByTeamIn2016.json",
      JSON.stringify(extras),
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
