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
    game.splash("Press A (Z) to jump")
    game.splash("If playing with 2 players,")
    game.splash("P1: wasd + q = A e = B")
    game.splash("P2: ijkl + i = A o = B")
}
let Player_2: Sprite = null
let Player_1: Sprite = null
let Homescreen = true
scene.setBackgroundImage(assets.image`Home Menu`)
if (Homescreen == true) {
    if (controller.A.isPressed()) {
        let Mode_Select = 0
        if (Mode_Select == 0) {
            tiles.setTilemap(tilemap`Night Fight Tutorial`)
            Players()
            Tutorial()
        }
        if (Mode_Select == 1) {
        	
        }
        if (Mode_Select == 2) {
        	
        }
    }
}
