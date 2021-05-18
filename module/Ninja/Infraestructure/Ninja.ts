import { injectable, inject } from 'inversify'
import "reflect-metadata"
import { TYPES } from '../Shared/Domain/types'
import { Warrior } from '../Domain/Warrior'
import { Weapon } from '../Domain/Weapon'

@injectable()
export class Ninja implements Warrior {

    private _katana: Weapon

    constructor(@inject(TYPES.Weapon) katana: Weapon) {
        this._katana = katana
    }
    fight(): string {
        return this._katana.hit();
    }
    sneak(): string {
        return this._katana.hit();
    }

}