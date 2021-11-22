function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 2,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

//   ===========================================================
//                     REFACTORED SOLUTION
//   ===========================================================

const homeTeam = gameObject().home
const awayTeam = gameObject().away
const allPlayers = {...homeTeam.players, ...awayTeam.players}

function numPointsScored(playerName) {
    for(const player in allPlayers){
        if(player === playerName) return allPlayers[playerName].points
    }
}

function shoeSize(playerName) {
    for(const player in allPlayers){
        if(player === playerName) return allPlayers[playerName].shoe
    }
}

function teamColors(teamInput) {
    return homeTeam.teamName === teamInput ? homeTeam.colors : awayTeam.colors
}

function teamNames() {
    return [homeTeam.teamName, awayTeam.teamName]
}

function playerNumbers(teamName) {
    let teamPlayers = selectTeam(teamName);
    let result = [];
    for (const player in teamPlayers){
        result.push(teamPlayers[player].number)
    }
    return result;
}

function bigShoeRebounds() {
    return allPlayers[bigShoe().player].rebounds
}

function playerStats(playerName) {
    return allPlayers[playerName]
}

function mostPointsScored() {
    let mostPoints = { points: 0, player: null}
    for(const player in allPlayers){
        if(allPlayers[player].points > mostPoints.points){
            mostPoints.points = allPlayers[player].points
            mostPoints.player = player
        }
    }
    return mostPoints.player
}

function winningTeam() {
    let teamPoints = { home: 0, away: 0 }
    for (const team in game) {
        const players = game[team].players
        for (const player in players) {
            teamPoints[team] += players[player].points
        }
    }
    return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName
}

function playerWithLongestName() {
    let longest = { nameLength: 0, name: null}
    for(const name in allPlayers){
        if(name.length > longest.nameLength){
            longest.nameLength = name.length
            longest.name = name
        }
    }
    return longest.name
}

function doesLongNameStealATon() {
    return playerWithLongestName() === mostSteals()
}




//   ===========================================================
//                           HELPER FUNCTIONS 
//   ===========================================================

function selectTeam(teamName) {
    return homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players
}
function mostSteals() {
    let player = { steals: 0, playerName: "" };
    for (let gameKey in game) {
        let teamObj = game[gameKey].players;
        for (let playerKey in teamObj) {
            if (teamObj[playerKey].steals > player.steals) {
                player.steals = teamObj[playerKey].steals
                player.playerName = playerKey
            }
        }
    }
    return player.playerName
}

function bigShoe(){
    let bigPlayer = { shoe: 0, player: null}
    for(const player in allPlayers){
        if(allPlayers[player].shoe > bigPlayer.shoe){
            bigPlayer.shoe = allPlayers[player].shoe
            bigPlayer.player = player
        }
    }
    return bigPlayer
}


//   ===========================================================
//                     NOT REFACTORED SOLUTION
//   ===========================================================



// // Build a function, numPointsScored that takes in an argument 
// // of a player's name and returns the number of points scored for 
// // that player.

// // Think about where in the object you will find a player's points. 
// // How can you iterate down into that level? Think about the return 
// // value of your function.

// // numPointsScored("Ben Gordon")
// // => 33
// function numPointsScored(playerInput) {
//     const game = gameObject();
//       for (const gameKey in game) {
//       const teamObj = game[gameKey];
//       const playerObj = teamObj.players;
//         for (const playerKey in playerObj) {
//           if (playerKey === playerInput) {
//           return playerObj[playerKey].points
//         }
//       }
//     }
//   }
  
//   // Build a function, shoeSize, that takes in an argument of a 
//   // player's name and returns the shoe size for that player.
  
//   // Think about how you will find the shoe size of the correct 
//   // player. How can you check and see if a player's name matches 
//   // the name that has been passed into the function as an argument?
  
//   // shoeSize("Ben Gordon")
//   // => 15
//   function shoeSize(playerInput) {
//     const game = gameObject();
//     for (const gameKey in game) {
//       const teamObj = game[gameKey];
//       const playerObj = teamObj.players;
//       for (const playerKey in playerObj) {
//         if (playerKey === playerInput) {
//           return playerObj[playerKey].shoe
//         }
//       }
//     }
//   }
  
//   // Build a function, teamColors, that takes in an argument 
//   // of the team name and returns an array of that teams 
//   // colors.
  
//   // teamColors('Charlotte Hornets')
//   // => ['turquoise', 'purple']
  
//   function teamColors(teamInput) {
//     const game = gameObject();
//     for (const gameKey in game) {
//       const teamObj = game[gameKey];
//       if (teamObj.teamName === teamInput) {
//         return teamObj.colors;
//       }
//     }
//   }
  
//   // Build a function, teamNames, that operates on the game 
//   // object to return an array of the team names.
  
//   // teamNames()
//   // => ['Brooklyn Nets', 'Charlotte Hornets']
  
//   function teamNames() {
//     const game = gameObject();
//     const names = [];
//     for (const gameKey in game) {
//       const teamObj = game[gameKey];
//        names.push(teamObj.teamName);
//       }
//       return names
//     }
  
//   // Build a function, playerNumbers, that takes in an argument 
//   //  of a team name and returns an array of the jersey number's 
//   // for that team.
  
//   // playerNumbers('Charlotte Hornets')
//   // => [4, 0, 2, 8, 33]
  
//   function playerNumbers(teamName) {
//     newArray = [];
//     const game = gameObject();
//     for (const gameKey in game) {
//       const teamObj = game[gameKey];
//       const playerObj = teamObj.players;
//       for (const playerKey in playerObj) {
//         if (teamObj.teamName === teamName) {
//           newArray.push(playerObj[playerKey].number);
//         }
//       }
//     }
//     return newArray;
//   }
  
//   // Build a function, bigShoeRebounds, that will return the number 
//   // of rebounds associated with the player that has the largest 
//   // shoe size. Break this one down into steps:
  
//   // * First, find the player with the largest shoe size
//   // * Then, return that player's number of rebounds
  
//   // Remember to think about return values here. Use debugger to 
//   // drop into your function and understand what it is returning 
//   // and why.
  
//   // bigShoeRebounds()
//   // => 12
//   function bigShoeRebounds(){
//       let playerBigShoe = {shoe: 0, player: null, playerName: ''};
//       let game = gameObject();
//       for (let gameKey in game){
//           let teamObj = game[gameKey].players;
//            for (let playerKey in teamObj){
//                if (teamObj[playerKey].shoe > playerBigShoe.shoe){
//                    playerBigShoe.shoe = teamObj[playerKey].shoe
//                    playerBigShoe.player = teamObj[playerKey]
//                    playerBigShoe.playerName = playerKey
//                } 
//            }
//       }
//       return playerBigShoe.player.rebounds
//   }
  
//   //   Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
//   // playerStats("Alan Anderson")
//   // returns:
//   // {
//   //   number: 0,
//   //   shoe: 16,
//   //   points: 22,
//   //   rebounds: 12,
//   //   assists: 12,
//   //   steals: 3,
//   //   blocks: 1,
//   //   slamDunks: 1
//   // }
  
  
//   function playerStats(playerName){
//   const game = gameObject();
//     for ( let teamKey in game){
//       for ( let player in game[teamKey].players){
//         if(player === playerName){
//           return game[teamKey].players[player]
//         }
//       }
//     }
//   }
   
  
//   // Which player has the most points?
//   // mostPointsScored()
//   // => "Ben Gordon"
  
//   function mostPointsScored(){
//       let playerMostPoints = {"points": 0, "playerName": ""};
//       let game = gameObject();
//       for (let gameKey in game){
//           let teamObj = game[gameKey].players;
//           for (let playerKey in teamObj){
//               if (teamObj[playerKey].points > playerMostPoints.points){
//                   playerMostPoints.points = teamObj[playerKey].points
//                   playerMostPoints.playerName = playerKey
//               }
//           }
//       }
//       return playerMostPoints.playerName
//   }
  
  
//   // Which team has the most points? Call the function winningTeam.
  
//   // winningTeam()
//   // => "Brooklyn Nets"
  
//   function winningTeam(){
//     let teamPoints = {home: 0, away: 0}
//     const game = gameObject()
//     for (const team in game){
//       const players = game[team].players
//       for(const player in players){
//         teamPoints[team] += players[player].points
//       }
//     }
//     return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName
//   }
  
//   // playerWithLongestName()
//   // => 'Brendan Haywood'
  
//   function playerWithLongestName(){
//     const player ={name: "", length: 0}
//     const game = gameObject()
//     for (const team in game){
//       const players = game[team].players
//       for(const playerName in players){
//        if (playerName.length > player.length){
//          player.name = playerName;
//          player.length = playerName.length
//        }
//       }
//     }
//     return player.name
//   }
  
//   // Write a function that returns true if the player with the 
//   // longest name had the most steals. Call the function 
//   // doesLongNameStealATon.
  
//   function doesLongNameStealATon(){
//      return playerWithLongestName() === mostSteals()
//   }
  
//   // helper 
//   function mostSteals(){
//       let player = {steals: 0, playerName: ""};
//       let game = gameObject();
//       for (let gameKey in game){
//           let teamObj = game[gameKey].players;
//           for (let playerKey in teamObj){
//               if (teamObj[playerKey].steals > player.steals){
//                   player.steals = teamObj[playerKey].steals
//                   player.playerName = playerKey
//               }
//           }
//       }
//       return player.playerName
//   }