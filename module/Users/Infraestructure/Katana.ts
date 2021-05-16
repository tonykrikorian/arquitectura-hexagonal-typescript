import { injectable } from 'inversify'
import "reflect-metadata"
import { Weapon } from '../Domain/Weapon';

@injectable()
export class Katana implements Weapon {
    hit(): string {
        return "Cut!!"
    }

}