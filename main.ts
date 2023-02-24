function blink () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
blink()
strip.setBrightness(10)
basic.forever(function () {
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    blink()
})
