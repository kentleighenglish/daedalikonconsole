"use strict";
/*
 * Constellation Object
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Site = /** @class */ (function () {
    function Site(uuid, name, latitude, longitude) {
        this.uuid = uuid;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Site;
}());
exports.Site = Site;
