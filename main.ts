namespace SpriteKind {
    export const Transition = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function Players () {
    Player_1 = sprites.create(assets.image`Name`, SpriteKind.Player)
    Player_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
function Tutorial () {
    game.splash("Welcome to the Night Fight Tutorial")
    game.splash("To move left and right, press left and right")
    game.splash("Player 2 uses A and D")
    game.splash("Press A (Z) to jump")
}
let Player_2: Sprite = null
let Player_1: Sprite = null
let mySprite: Sprite = null
let On_Homescreen = 0
if (On_Homescreen == 0) {
    if (controller.A.isPressed()) {
        let Mode_Select = 0
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Transition)
        if (Mode_Select == 0) {
        	
        }
        if (Mode_Select == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`Fade to black`,
            100,
            false
            )
            tiles.setTilemap(tilemap`Night Fight Tutorial`)
            Players()
            Tutorial()
        }
    }
}
