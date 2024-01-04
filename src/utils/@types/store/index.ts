export type TStore = {
  user: TUserShelf
  controllers: {
    user: TUserControls
  }
}

export type TUserShelf = {
  isAuth: boolean
}

export type TUserControls = {
  setAuth: (state: boolean) => void
}

export type TSet = (
  partial: (state: TStore) => TStore | Partial<TStore>,
  replace?: boolean | undefined
) => void
