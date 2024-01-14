function gameObject() {
    stats = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black' , 'White'],
            players: {
                'Alan Anderson': {
                    number: '0',
                    shoe: '16',
                    points: '22',
                    rebounds: '12',
                    assists: '12',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '1'
                },
                'Reggie Evans': {
                    number: '30',
                    shoe: '14',
                    points: '12',
                    rebounds: '12',
                    assists: '12',
                    steals: '12',
                    blocks: '12',
                    slamDunks: '7'
                },
                'Brook Lopez': {
                    number: '11',
                    shoe: '17',
                    points: '17',
                    rebounds: '19',
                    assists: '10',
                    steals: '3',
                    blocks: '1',
                    slamDunks: '15'
                },
                'Mason Plumlee': {
                    number: '1',
                    shoe: '19',
                    points: '26',
                    rebounds: '12',
                    assists: '6',
                    steals: '3',
                    blocks: '8',
                    slamDunks: '5'
                },
                'Jason Terry': {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4',
                    blocks: '11',
                    slamDunks: '1'
                }
            }

        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise' , 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2',
                    blocks: '7',
                    slamDunks: '2'
                },
                'Bismak Biyombo': {
                    number: '0',
                    shoe: '16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7',
                    blocks: '15',
                    slamDunks: '10'
                },
                'DeSagna Diop': {
                    number: '2',
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4',
                    blocks: '5',
                    slamDunks: '5'
                },
                'Ben Gordon': {
                    number: '8',
                    shoe: '15',
                    points: '33',
                    rebounds: '3',
                    assists: '2',
                    steals: '1',
                    blocks: '1',
                    slamDunks: '0'
                },
                'Brendan Haywood': {
                    number: '33',
                    shoe: '15',
                    points: '6',
                    rebounds: '12',
                    assists: '12',
                    steals: '22',
                    blocks: '5',
                    slamDunks: '12'
                }
            }
        }
    }
    return stats
}

function numPointsScored(playerName) {
    let game = gameObject()

    for (const key in game) {
        if (key === 'home' || key === 'away') {
            const players = game[key].players
            if (players.hasOwnProperty(playerName)) {
                return players[playerName].points
            }
        } else {
            return null
        }
    }
}

function shoeSize(playerName) {
    let game = gameObject()

    for (const key in game) {
        if (key === 'home' || key === 'away') {
            const players = game[key].players
            if (players.hasOwnProperty(playerName)) {
                return `${playerName}'s shoe size: ${players[playerName].shoe}`
            }
        } else {
            return null   
        }
    }
}

function teamColors(teamName) {
    let game = gameObject()

    for (const key in game) {
        if (game[key].teamName === teamName) {
            return game[key].colors
        }
    }
    return null
}

function teamNames() {
    const game = gameObject()
    const teamNames = []

    for (const key in game) {
        if (key === 'home' || key === 'away'){
        teamNames.push(game[key].teamName)
        }
    }
    return teamNames
}

function playerNumbers() {
    const game = gameObject()
    const jerseyNumbers = []

    for (const key in game) {
        if (key === 'home' || key === 'away'){
            const players = game[key].players

            for (const key in players) {
                jerseyNumbers.push(players[key].number)
            }
         }
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    const game = gameObject()
    let playerStatSpread

    for (const key in game) {
        if (key === 'home' || key ==='away') {
            const players = game[key].players

            for (const key in players) {
                if (key === playerName) {
                    playerStatSpread =  players[key]
                }
            }
        }
    } return playerStatSpread
}

function bigShoeRebounds() {
    const game = gameObject()
    let largestShoeSize = 0
    let playerWithBiggestShoe, playerWithBiggestShoeName

    for (const key in game) {
        if (key === 'home' || key ==='away') {
            const players = game[key].players

            for (const playerKey in players) {
                const currentShoeSize = players[playerKey].shoe

                if (currentShoeSize > largestShoeSize) {
                    largestShoeSize = currentShoeSize
                    playerWithBiggestShoe = players[playerKey]
                    playerWithBiggestShoeName = playerKey
                }
            }
        }
    } return `${playerWithBiggestShoeName} has ${playerWithBiggestShoe.rebounds} rebounds!`
}

function mostPointsScored() {
    const game = gameObject()
    let mostPoints = 0
    let mostValuablePlayer, mvpName

    for (const key in game) {
        if (key === 'home' || key === 'away') {
            const players = game[key].players

            for (const playerKey in players) {
                const currentPoints = parseInt(players[playerKey].points)

                if(currentPoints > mostPoints) {
                    mostPoints = currentPoints
                    mostValuablePlayer = players[playerKey]
                    mvpName = playerKey
                }
            }
        }
    } return `${mvpName} had ${mostValuablePlayer.points} points!`
}

function winningTeam() {
    const game = gameObject()
    let pointsAwayTeam = 0
    let pointsHomeTeam = 0
    let awayTeam, homeTeam

    for (const key in game) {

        if (key === 'home') {
            homeTeam = game[key].teamName
            const players = game[key].players

            for (const playerKey in players) {
                const pointsScored = parseInt(players[playerKey].points)
                pointsHomeTeam += pointsScored
            }
        }
        
        if (key === 'away') {
            awayTeam = game[key].teamName
            const players = game[key].players

            for (const playerKey in players) {
                const pointsScored = parseInt(players[playerKey].points)
                pointsAwayTeam += pointsScored
            }
        }
    }

    if (pointsHomeTeam > pointsAwayTeam) {
        console.log(`${homeTeam} won with a score of ${pointsHomeTeam} to ${pointsAwayTeam}!`)
    } else {
        console.log(`${awayTeam} won with a score of ${pointsAwayTeam} to ${pointsHomeTeam}!`)
    } // could add a case for a tie here too
}

function playerWithLongestName() {
    const game = gameObject()
    let longestName = 0
    let playerNameLongest

    for (const key in game) {
        if (key === 'home' || key === 'away') {
            const players = game[key].players

            for (const playerKey in players) {
                const currentNameLength = playerKey.length

                if (currentNameLength > longestName) {
                    longestName = currentNameLength
                    playerNameLongest = playerKey
                }
            }
        }
    } 
    return playerNameLongest
}

function doesLongNameStealATon() {
    const game = gameObject()
    let longestName = 0
    let playerNameLongest
    let mostSteals = 0
    let playerCrook

    for (const key in game) {
        if (key === 'home' || key === 'away') {
            const players = game[key].players

            for (const playerKey in players) {
                const currentNameLength = playerKey.length

                if (currentNameLength > longestName) {
                    longestName = currentNameLength
                    playerNameLongest = playerKey
                }

                const currentSteals = parseInt(players[playerKey].steals)
                if (currentSteals > mostSteals) {
                    mostSteals = currentSteals
                    playerCrook = playerKey
                }
            }
        }
    } 
    return playerNameLongest === playerCrook
}