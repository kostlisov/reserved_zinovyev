controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
function location () {
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite.setPosition(10, 102)
}
sprites.onCreated(SpriteKind.Player, function (sprite) {
	
})
let mySprite: Sprite = null
location()
mySprite = sprites.create(assets.image`main sprite`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`player`,
200,
true
)
