/**
 * klein tempo duurt lang, groot tempo is koort.
 */
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    music.setTempo(120)
    music.playTone(1000, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
music.setTempo(60)
basic.forever(function () {
	
})
