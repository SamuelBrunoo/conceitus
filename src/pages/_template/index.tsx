import Header from "../../components/Header"
import * as S from "./styles"

type Props = {
  children: any
}

const Template = ({ children }: Props) => {
  return (
    <S.Page>
      <Header userLevel={3} />
      <S.Wrapper>
        <S.Container>{children}</S.Container>
      </S.Wrapper>
    </S.Page>
  )
}

export default Template
