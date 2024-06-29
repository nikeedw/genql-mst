import { createContext, useContext } from "react";
import { ISneakersStore$ } from "./types";
import { SneakersStore$ } from "./stores/Sneakers.store";

export const SneakersContext = createContext<ISneakersStore$ | null>(null);
export const sneakersStore = SneakersStore$.create()

export const useSneakersStore = () => {
    const store = useContext(SneakersContext)

    if (!store) {
        throw new Error('useRootStore must be used within a RootStoreProvider.')
    }

    return store
}