function blink () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
// Verify RGB pixels work.
function led_test () {
    basic.pause(500)
    strip.setBrightness(10)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    // track of red
    basic.showString("R")
    blink()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("")
    blink()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    blink()
}
// Two adafruit Neo pixels in parallel
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
    led_test()
})
