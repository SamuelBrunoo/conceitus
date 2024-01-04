export type TStore = {
  user: TUserShelf
}

type TUserShelf = {
  isAuth: boolean
  setAuth: (state: boolean) => void
}
