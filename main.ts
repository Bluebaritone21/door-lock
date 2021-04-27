input.onButtonPressed(Button.A, function () {
    if (Inputs == "") {
        Inputs = "A"
        basic.showString(Inputs)
        basic.clearScreen()
    } else {
        Inputs = "" + Inputs + "A"
        basic.showString(Inputs)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Inputs == "BAABA") {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . # . .
            # . # . .
            . . # # #
            . . # # #
            `)
    } else {
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Inputs == "") {
        Inputs = "B"
        basic.showString(Inputs)
        basic.clearScreen()
    } else {
        Inputs = "" + Inputs + "B"
        basic.showString(Inputs)
    }
})
let Inputs = ""
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # # # .
    . # # # .
    `)
basic.clearScreen()
