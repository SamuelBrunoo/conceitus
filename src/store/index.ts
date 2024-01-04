import { create } from "zustand"
import { persist } from "zustand/middleware"
import { userShelf } from "./shelfs"
import { TStore } from "../utils/@types/store"

const getStore = create<TStore>()(
  persist(
    (set) => ({
      user: userShelf(set),
    }),
    {
      name: "global",
    }
  )
)

export default getStore
