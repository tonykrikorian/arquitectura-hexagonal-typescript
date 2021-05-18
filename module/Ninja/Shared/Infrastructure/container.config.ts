import {Container} from 'inversify'
import { Weapon } from '../../Domain/Weapon'
import { TYPES } from '../Domain/types'
import { Katana } from '../../Infraestructure/Katana';
import { Warrior } from '../../Domain/Warrior';
import { Ninja } from '../../Infraestructure/Ninja';
import { UseCase } from '../../Domain/UseCase';
import { NinjaUseCase } from '../../Application/NinjaUseKatana';

const myContainer=new Container()

myContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<UseCase>(TYPES.UseCase).to(NinjaUseCase)

export {myContainer}