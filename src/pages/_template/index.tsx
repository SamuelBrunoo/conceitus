import React from "react"
import { TPages } from "../../utils/@types/routes"
import Dash from "../Dash"
import Header from "../../components/Header"

type Props = {
  page: TPages
}

const Template = ({ page }: Props) => {
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dash />
    }
  }

  return (
    <>
      <Header userLevel={3} />
      {renderPage()}
    </>
  )
}

export default Template
