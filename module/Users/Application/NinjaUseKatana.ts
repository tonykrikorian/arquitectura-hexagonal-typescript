import { injectable, inject } from "inversify"
import "reflect-metadata"
import { TYPES } from "../Shared/Domain/types";
import { UseCase } from "../Domain/UseCase"
import { Warrior } from "../Domain/Warrior"

@injectable()
export class NinjaUseCase implements UseCase {

    private _warrior: Warrior;

    constructor(@inject(TYPES.Warrior) warrior: Warrior) {
        this._warrior = warrior;

    }

    ExecuteUseCase(): string {
        return this._warrior.fight();
    }
}