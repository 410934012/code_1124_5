for (let x = 0; x <= 4; x++) {
    basic.pause(200)
    led.plot(x, 2)
}
for (let y = 0; y <= 4; y++) {
    basic.pause(200)
    led.plot(2, y)
}
basic.forever(function () {
	
})
