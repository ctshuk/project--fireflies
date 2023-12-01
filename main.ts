input.onButtonPressed(Button.A, function () {
    radio.sendString("flash")
})
function flash () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 10; index++) {
        bright += -25
        led.setBrightness(bright)
        basic.pause(40)
    }
    basic.clearScreen()
    bright = 255
    led.setBrightness(bright)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "flash") {
        basic.pause(randint(50, 350))
        flash()
        if (randint(0, 9) == 0) {
            basic.pause(500)
            radio.sendString("flash")
        }
    }
})
let bright = 0
radio.setGroup(17)
bright = 255
