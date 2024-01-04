import { TSet } from "../../utils/@types/store"

const userControls = (set: TSet) => {
  return {
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

export default userControls
