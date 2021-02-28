let sicaklik = 24
basic.forever(function () {
    if (input.temperature() == sicaklik) {
        basic.showString("o")
    }
    if (input.temperature() < sicaklik) {
        basic.showString("i")
    }
    if (input.temperature() > sicaklik) {
        basic.showString("s")
    }
})
