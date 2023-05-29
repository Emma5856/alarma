radio.onReceivedNumber(function (receivedNumber) {
    EstadoAlarma = receivedNumber
})
let EstadoAlarma = 0
radio.setGroup(123)
basic.forever(function () {
    radio.sendNumber(EstadoAlarma)
    if (input.magneticForce(Dimension.Strength) < 200) {
        EstadoAlarma = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        if (EstadoAlarma == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
        }
    } else if (input.magneticForce(Dimension.X) >= 199) {
        EstadoAlarma = 0
        basic.clearScreen()
        if (EstadoAlarma == 3) {
            basic.clearScreen()
        }
    }
})
