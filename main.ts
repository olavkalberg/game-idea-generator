controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CategoryIndex < 4) {
        if (CategoryIndex == 0) {
            rouletteSprite = textsprite.create(genreList[genreIndex], 15, 1)
            rouletteSprite.y = 50
            rouletteSprite.x = 75
        } else if (CategoryIndex == 1) {
            rouletteSprite = textsprite.create(adjectiveList[adjectiveIndex], 15, 1)
            rouletteSprite.y = 60
            rouletteSprite.x = 75
        } else if (CategoryIndex == 2) {
            rouletteSprite = textsprite.create(EnviormentList[envirormentIndex], 15, 1)
            rouletteSprite.y = 70
            rouletteSprite.x = 75
        } else {
            rouletteSprite = textsprite.create(WildCardList[wildcardIndex], 15, 1)
            rouletteSprite.y = 80
            rouletteSprite.x = 75
        }
        CategoryIndex += 1
    }
})
function createRouletteSprite (text: string, Y: number) {
    rouletteSprite = textsprite.create(text, 15, 1)
    rouletteSprite.setKind(SpriteKind.Text)
    rouletteSprite.y = Y
    rouletteSprite.right = 0
    rouletteSprite.setVelocity(500, 0)
}
let rouletteSprite: TextSprite = null
let WildCardList: string[] = []
let EnviormentList: string[] = []
let adjectiveList: string[] = []
let genreList: string[] = []
let CategoryIndex = 0
let wildcardIndex = 0
let envirormentIndex = 0
let adjectiveIndex = 0
let genreIndex = 0
genreIndex = 0
adjectiveIndex = 0
envirormentIndex = 0
wildcardIndex = 0
CategoryIndex = 0
genreList = [
"PLATFORMER",
"RPG",
"ADVENTURE",
"RACING",
"SHOOTER",
"PUZZLE"
]
adjectiveList = [
"FAST",
"HAUNTED",
"RELAXING",
"COLORFUL",
"PERPLEXING",
"SURREAL"
]
EnviormentList = [
"UNDERWATER",
"SCHOOL",
"SPACE",
"CITY",
"CASTLE",
"FOREST",
"JUNGLE",
"RUINS",
"TUNDRA",
"HOME"
]
WildCardList = [
"TIME LIMIT",
"MUST INCLUDE MONKEYS",
"BREAK THINGS",
"BUILD THINGS",
"MORAL DILEMMA",
"COLLECT THINGS",
"DEFEND",
"CUSTOMIZABLE",
"SINGLE-BUTTON",
"MULTIPLAYER"
]
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.left > scene.screenWidth()) {
            value.destroy()
        }
    }
})
game.onUpdateInterval(200, function () {
    if (CategoryIndex < 1) {
        genreIndex = (genreIndex + 1) % genreList.length
        createRouletteSprite(genreList[genreIndex], 50)
    }
    if (CategoryIndex < 2) {
        adjectiveIndex = (adjectiveIndex + 1) % adjectiveList.length
        createRouletteSprite(adjectiveList[CategoryIndex], 60)
    }
    if (CategoryIndex < 3) {
        envirormentIndex = (envirormentIndex + 1) % EnviormentList.length
        createRouletteSprite(EnviormentList[CategoryIndex], 70)
    }
    if (CategoryIndex < 4) {
        wildcardIndex = (wildcardIndex + 1) % WildCardList.length
        createRouletteSprite(WildCardList[wildcardIndex], 80)
    }
})
