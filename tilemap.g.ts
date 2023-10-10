// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0007000101010101020401020401020504010603010603010607030101010101010108010101020504010201020504010607030109010607030101010101060101010101020504010a`, img`
. . . . . 2 2 . 2 2 
. 2 2 2 . 2 2 . 2 2 
. 2 2 2 . . . . . . 
. . . . . 2 2 2 . 2 
. 2 2 2 . 2 2 2 . 2 
. 2 2 2 . . . . . 2 
. . . . . 2 2 2 . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.doorLockedNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.doorOpenEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
