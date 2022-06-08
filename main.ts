let Asteroid: Sprite = null
game.splash("LA NAU DE LA MEVA TIETA", "\"A\"TO START &\"B\"TO SHOOT")
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    .......ff.......
    ......f22f......
    .....f2222f.....
    .....f222b9f....
    ....f222b999f...
    ....f222199bf...
    ....f22211b4f...
    ...ff2221124ff..
    ..f22222912222f.
    .f2222229b22222f
    .f2222222222222f
    .f222c222222222f
    .22fff422222ff22
    .22ff44c2222ff22
    .2f.f422c222f.f2
    .f..f222c222f..f
    ....f222c22cf...
    ....f22cc22cf...
    ...ffffffffff...
    ..f2225555f2f...
    ...f244555422f..
    ..f2424444422f..
    ...f242f2f2242f.
    ....fff.f.ffff..
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    Asteroid = sprites.createProjectileFromSprite(img`
        . . . . d d d d d d d d b . . . 
        . . . d d d d d d d 5 d d d d . 
        . . d d d d d d d b c d d d d . 
        . . d d d d b b b b b b d d d d 
        . . d d d b b 5 5 5 5 5 b d d d 
        . . d d b b 5 d 1 f 5 5 d f d d 
        . . d d b 5 5 1 f f 5 d 4 c d d 
        . . d d d 5 5 5 f b d d 4 4 d d 
        b d d d d d d d 5 5 4 4 4 4 4 d 
        b b d 5 5 5 b d d d d d d d d d 
        b d c 5 5 5 5 d d d d d d d d d 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, mySprite, 50, 50)
})
