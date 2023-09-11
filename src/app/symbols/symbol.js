"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Symbol = /** @class */ (function () {
    function Symbol(uuid, name, constellation_uuid, author, date_created, date_modified, points) {
        this.uuid = uuid;
        this.name = name;
        this.constellation_uuid = constellation_uuid;
        this.author = author;
        this.date_created = date_created;
        this.date_modified = date_modified;
        this.points = points;
    }
    return Symbol;
}());
exports.Symbol = Symbol;
