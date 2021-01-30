input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    tijd = randint(2, 8)
    oefeining = oefeningenlijst[randint(0, oefeningenlijst.length - 1)]
    opdracht = "" + tijd + "k" + oefeining
    basic.clearScreen()
    basic.showString(opdracht)
    basic.showNumber(tijd)
    for (let index = 0; index < tijd; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
    }
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("prima!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let opdracht = ""
let oefeining = ""
let tijd = 0
let oefeningenlijst: string[] = []
oefeningenlijst = ["koprol", "flik", "salto", "draaien"]
basic.showIcon(IconNames.Heart)
