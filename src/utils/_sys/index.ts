import { entriesTable } from "./tables/entriestable"
import { membersTable } from "./tables/memberstable"
import * as menus from "./menu"

const tables = {
  entries: entriesTable,
  members: membersTable,
}

export { menus, tables }
