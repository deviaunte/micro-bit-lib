function blink () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB_RGB)
blink()
strip.showRainbow(0, 360)
basic.forever(function () {
    strip.clear()
    strip.setPixelColor(0, neopixel.rgb(0, 255, 255))
})
