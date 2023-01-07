import { writable } from 'svelte/store';
import type { DataInterface } from './types';
let defaultData: DataInterface = {
    strength: 0,
    fortitude: 0,
    agility: 0,
    intelligence: 0,
    willpower: 0,
    charisma: 0,
    light: 0,
    med: 0,
    heavy: 0,
    hasFlame: false,
    hasFrost: false,
    hasThunder: false,
    hasGale: false,
    hasShadow: false,
    flameStat: 0,
    frostStat: 0,
    thunderStat: 0,
    galeStat: 0,
    shadowStat: 0
}
export const dataStore = writable(defaultData);