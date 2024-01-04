import { TSet } from "../../utils/@types/store"
import userControls from "./userControls"

const controls = (set: TSet) => ({
  user: userControls(set),
})

export default controls
