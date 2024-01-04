import { create } from "zustand"
import { persist } from "zustand/middleware"
import { userShelf } from "./shelfs"
import { TStore } from "../utils/@types/store"
import controllers from "./controllers"

const getStore = create<TStore>()(
  persist(
    (set) => ({
      user: userShelf(),
      controllers: controllers(set),
    }),
    {
      name: "global",
      partialize: store => {
        return {
          user: store.user
        }
      }
    }
  )
)

export default getStore
