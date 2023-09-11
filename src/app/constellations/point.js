"use strict";
/*
 * Point Object
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(uuid, constellation_uuid, x, y, z, name) {
        this.uuid = uuid;
        this.constellation_uuid = constellation_uuid;
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
    }
    return Point;
}());
exports.Point = Point;
