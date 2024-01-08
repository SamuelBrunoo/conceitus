export const collapseOpeneds = () => {
  const anotherOpened = document.querySelectorAll(".opened")

  for (let i = 0; i < anotherOpened.length; i++) {
    const a = anotherOpened[i]
    a.classList.remove("opened")
  }
}
