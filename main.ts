input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showIcon(IconNames.Angry)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
    } else {
        basic.clearScreen()
    }
})
