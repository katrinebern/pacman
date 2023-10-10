let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . f f f f f f f f f f f f . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f f f f f f f f f f f f f f . 
    . 1 1 f . . f 1 1 f . . f 1 1 . 
    . f f f . . f f f f . . f f f . 
    . 1 1 f f f f 1 1 f f f f 1 1 . 
    . f f f f f f f f f f f f f f . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f f f f f f f f f f f f f f . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . f f f f f f f f f f f f f f . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.Player)
let politi1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 5 5 5 8 8 8 8 8 . 
    . . 8 8 8 8 8 5 5 5 8 8 8 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
politi1.follow(mySprite, 60)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorLockedNorth)
tiles.placeOnRandomTile(politi1, sprites.dungeon.doorOpenEast)
scene.cameraFollowSprite(mySprite)
