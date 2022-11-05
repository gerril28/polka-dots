input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(y, 1 - y)
        basic.pause(100)
        led.plot(y, 3 - y)
        basic.pause(100)
        led.plot(y, 5 - y)
        basic.pause(100)
        led.plot(y, 7 - y)
    }
})
