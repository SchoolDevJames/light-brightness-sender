input.onButtonPressed(Button.A, function () {
    Brightness += -1
})
input.onButtonPressed(Button.AB, function () {
    Brightness += 10
})
input.onButtonPressed(Button.B, function () {
    Brightness += 1
})
let Brightness = 0
radio.setGroup(175)
basic.forever(function () {
    radio.sendNumber(Brightness)
})
basic.forever(function () {
    basic.showString("" + (Brightness))
})
