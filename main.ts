scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    game.splash("find the magical star to win the game")
})
function pointsthing () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        thing4pts = sprites.create(img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, SpriteKind.Food)
        tiles.placeOnTile(thing4pts, value)
    }
}
function enemyspawning () {
    enemy1 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    e3 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    e2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    e4 = sprites.create(img`
        . . . . . . . . . . . . . c c f 
        . . . . . . . . . . . . c d d b 
        . . . . . . . . . . . c d d b b 
        . . . . . . . . . . f c c b b c 
        . . . . f f f f f f f c c c c c 
        . . f f b b b b b b b b b b b b 
        f f b b b b b b b b b c b c b b 
        f b c b b b b b f f b b c b c b 
        f b b b 1 1 1 1 f f 1 b c b c b 
        . f b 1 1 1 1 1 1 1 1 b b b b b 
        . . f c c c 3 3 c c 1 1 b b b b 
        . . . f c 1 3 1 c 1 1 1 b b b c 
        . . . . f 3 3 c 1 1 1 c b b b f 
        . . . . . f f 1 1 1 1 f b d b b 
        . . . . . . . c c c c c f b d b 
        . . . . . . . . . . . . . f f f 
        `, SpriteKind.Enemy)
    e5 = sprites.create(img`
        . . . . . . . . . . . c c . . . 
        . . c c . c c c c 3 c 6 3 c . . 
        . f f 5 c 6 c 5 f f 3 3 6 c . . 
        . f f 5 c 6 c 5 f f 3 3 3 3 c . 
        . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
        . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
        . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
        . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
        b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
        c 4 5 5 b 4 b 5 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(e2, tiles.getTileLocation(31, 21))
    tiles.placeOnTile(enemy1, tiles.getTileLocation(23, 5))
    tiles.placeOnTile(e3, tiles.getTileLocation(3, 21))
    tiles.placeOnTile(e4, tiles.getTileLocation(14, 3))
    tiles.placeOnTile(e5, tiles.getTileLocation(16, 11))
    enemy1.setVelocity(0, -70)
    e3.setVelocity(0, -70)
    e2.setVelocity(0, -70)
    e2.setVelocity(0, -70)
    e2.setVelocity(0, -70)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    sprite.setVelocity(0, 0)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.showLongText("Using Boyle's Law, solve this problem. Be sure to use sig figs.", DialogLayout.Top)
    game.showLongText("A gas has a pressure of 0.410 atm and a volume of 32L.", DialogLayout.Center)
    game.showLongText("What pressure would the volume of the gas change to 28L?", DialogLayout.Center)
    story.showPlayerChoices("0.4685", "0.46", "0.47", "0.469")
    pause(240000)
    if (story.checkLastAnswer("0.4685")) {
        game.showLongText("Try Again", DialogLayout.Full)
    } else if (story.checkLastAnswer("0.46")) {
        game.showLongText("Sorry, this answer is wrong, check your calculations.", DialogLayout.Full)
    } else if (story.checkLastAnswer("0.47")) {
        game.setGameOverMessage(true, "YOU WIN!!!! THANK YOU FOR PLAYING")
        tiles.loadMap(tiles.createMap(tilemap`level9`))
    } else if (story.checkLastAnswer("0.469")) {
        game.showLongText("Oops, incorrect answer, check your sig figs", DialogLayout.Full)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(4)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    setcurrentilemap += 1
    if (nexttilemap()) {
        game.splash("you can now go to the next tile map")
    }
    leveltile(setcurrentilemap)
})
function nexttilemap () {
    return setcurrentilemap == numberoftilemaps
}
function beginlevel (level: number) {
    tiles.placeOnTile(e2, tiles.getTileLocation(31, 21))
}
function leveltile (level: number) {
    if (level == 0) {
        tiles.setCurrentTilemap(list[0])
    } else if (level == 1) {
        tiles.setCurrentTilemap(list[1])
    } else if (level == 2) {
        tiles.setCurrentTilemap(list[2])
    }
    for (let index = 0; index < 4; index++) {
        e3.follow(P1, 100)
        enemy1.follow(P1)
    }
    beginlevel(level)
}
let e5: Sprite = null
let e4: Sprite = null
let e2: Sprite = null
let e3: Sprite = null
let enemy1: Sprite = null
let thing4pts: Sprite = null
let list: tiles.TileMapData[] = []
let setcurrentilemap = 0
let numberoftilemaps = 0
let P1: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
music.play(music.stringPlayable("C C D D E E F F ", 120), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("C E A E F G A F ", 120), music.PlaybackMode.LoopingInBackground)
P1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
P1.setPosition(28, 55)
controller.moveSprite(P1)
scene.cameraFollowSprite(P1)
numberoftilemaps = 3
setcurrentilemap = 0
list = [tilemap`level1`, tilemap`level2`, tilemap`level4`]
pointsthing()
enemyspawning()
leveltile(setcurrentilemap)
