import { Instance } from "mobx-state-tree";
import { SneakersStore$ } from "./stores/Sneakers.store";
import { SneakersModel } from "./models/Sneakers.model";
import { SneakersInfoModel } from "./models/SneakersInfo.model";

export interface ISneakersStore$ extends Instance<typeof SneakersStore$> {}

export interface ISneakersModel$ extends Instance<typeof SneakersModel> {}
export interface ISneakersInfoModel$ extends Instance<typeof SneakersInfoModel> {}