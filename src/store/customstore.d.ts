import "zustand"
import type {
  Mutate,
  StateCreator,
  StoreApi,
  StoreMutatorIdentifier,
} from "zustand/vanilla"

import mystore from "./index"

type ExtractState<S> = S extends {
  getState: () => infer T
}
  ? T
  : never
type ReadonlyStoreApi<T> = Pick<StoreApi<T>, "getState" | "subscribe">
type WithReact<S extends ReadonlyStoreApi<unknown>> = S & {
  getServerState?: () => ExtractState<S>
}

declare module "zustand" {
  export declare function useStore<S extends WithReact<StoreApi<unknown>>>(
    api: S
  ): ExtractState<S>
  export function useStore(mystore: S): ExtractState<S> {
    return mystore
  }
}
