import { TStore } from "../../utils/@types/store"

type TSet = (
  partial:
    | TStore
    | Partial<TStore>
    | ((state: TStore) => TStore | Partial<TStore>),
  replace?: boolean | undefined
) => void

const userShelf = (set: TSet) => {
  return {
    isAuth: false,
    setAuth: (state: boolean) =>
      set((store) => {
        return {
          ...store,
          user: {
            ...store.user,
            isAuth: state,
          },
        }
      }),
  }
}

export default userShelf
