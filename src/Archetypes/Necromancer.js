"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energy = 'mana';
    }
    get energyType() {
        return this._energy;
    }
    static createdArchetypeInstances() {
        this._necromancerInstances += 1;
        return this._necromancerInstances;
    }
}
Necromancer._necromancerInstances = 0;
exports.default = Necromancer;
