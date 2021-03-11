input.onButtonPressed(Button.A, function () {
    // Coin flip animation
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    // Picks heads or tails
    coin_1 = Math.randomBoolean()
    if (coin_1 == true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    }
})
// Shows the score an announces the winner
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + (Player_1_points))
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + (Player_2_points))
    basic.pause(500)
    basic.clearScreen()
    if (Player_1_points > Player_2_points) {
        basic.showString("Winner")
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (Player_1_points < Player_2_points) {
        basic.showString("Winner")
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else {
        basic.showString("Tie")
    }
})
input.onButtonPressed(Button.B, function () {
    // Coin flip animation
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    // Picks heads or tails
    coin_2 = Math.randomBoolean()
    if (coin_2 == true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    }
    // Determines which player won and keeps score
    if (coin_1 == coin_2) {
        Player_1_points += 1
    } else {
        Player_2_points += 1
    }
})
// Reset
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Player_1_points = 0
    Player_2_points = 0
})
// Starts the game
let coin_2 = false
let coin_1 = false
let Player_2_points = 0
let Player_1_points = 0
basic.showString("Coin Toss")
Player_1_points = 0
Player_2_points = 0
