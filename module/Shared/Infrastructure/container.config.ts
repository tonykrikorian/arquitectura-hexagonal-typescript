import {Container} from 'inversify'
import { Weapon } from '../../Users/Domain/Weapon'
import { TYPES } from '../Domain/types'
import { Katana } from '../../Users/Infraestructure/Katana';
import { Warrior } from '../../Users/Domain/Warrior';
import { Ninja } from '../../Users/Infraestructure/Ninja';
import { UseCase } from '../../Users/Domain/UseCase';
import { NinjaUseCase } from '../../Users/Application/NinjaUseKatana';

const myContainer=new Container()

myContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<UseCase>(TYPES.UseCase).to(NinjaUseCase)

export {myContainer}