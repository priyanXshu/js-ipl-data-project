# IPL Data Project I

**Download the data from:** [https://www.kaggle.com/manasgarg/ipl](https://www.kaggle.com/manasgarg/ipl)

There should be 2 files:

- deliveries.csv
- matches.csv

In this data assignment you will transform the raw data of IPL to calculate the following stats:

1. The number of matches played per year for all the years in IPL.
2. The number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015
5. Find the number of times each team won the toss and also won the match
6. Find a player who has won the highest number of *Player of the Match* awards for each season
7. Find the strike rate of a batsman for each season
8. Find the highest number of times one player has been dismissed by another player
9. Find the bowler with the best economy in super overs

Implement the functions, **one for each task**.
Use the results of the functions to dump JSON files in the output folder

## Instructions

- Create a new repo with the name js-ipl-data-project in Gitlab subgroup, before starting the implementation of the solution
- Make sure to follow proper Git practices
- Before submission, make sure that all the points in the below checklist are covered:
  - Git commits
  - Directory structure
  - package.json - dependencies, devDependencies
  - .gitignore file
  - Proper/Intuitive Variable names
  - Separate module for functions

### Directory structure

- src/
  - server/
    - 1-matches-per-year.cjs
    - 2-matches-won-per-team-per-year.cjs
    - ...
  - public/
    - output
      - 1-matches-per-year.json
      - 2-matches-won-per-team-per-year.json
      - ...
  - data/
    - matches.csv
    - deliveries.csv
- package.json
- package-lock.json
- .gitignore

