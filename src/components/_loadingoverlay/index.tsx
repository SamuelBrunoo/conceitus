import * as S from "./styles"
import { LogoDetailed } from "../../utils/imports/icons"

type Props = {
  visible: boolean
}

const LoadingOverlay = ({ visible }: Props) => {

  return (
    <S.Bg showing={visible}>
      <LogoDetailed width={360} height={360} />
    </S.Bg>
  )
}

export default LoadingOverlay
