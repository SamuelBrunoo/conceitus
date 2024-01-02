import * as S from "../styles"
import * as Icons from "../../../utils/imports/icons"
import Button from "../../Button"
import Input from "../../Input"
import { useState } from "react"
import Select from "../../Select"
import Quill from "react-quill"
import "react-quill/dist/quill.snow.css"

type Props = {
  closeFn: () => void
}

const NewEntry = ({ closeFn }: Props) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [apportionment, setApportionment] = useState("")
  const [frequency, setFrequency] = useState("")
  const [date, setDate] = useState(new Date())
  const [details, setDetails] = useState("")
  const [reporter, setReporter] = useState("")

  return (
    <S.Bg>
      <S.Box>
        <S.Container>
          <S.ModalTitle>Nova entrada</S.ModalTitle>
          <S.ButtonsArea>
            <Button type="tertiary" title="Cancelar" action={closeFn} />
            <Button type="primary" title="Salvar" action={closeFn} />
          </S.ButtonsArea>
        </S.Container>
        <S.Container submenu>
          <Select.ModalBread options={[]} value={""} onChange={() => {}} />
          <Icons.Arrow width={24} />
          <Select.ModalBread options={[]} value={""} onChange={() => {}} />
          <Icons.Arrow width={24} />
          <Select.ModalBread options={[]} value={""} onChange={() => {}} />
          <Icons.Arrow width={24} />
          <Select.ModalBread options={[]} value={""} onChange={() => {}} />
        </S.Container>
        <S.FormArea>
          <S.FormRow>
            <Input.Modal
              placeholder="Venda"
              label="Título da entrada"
              value={title}
              onChange={setTitle}
            />
            <Input.Modal
              placeholder="0,00"
              label="Valor total"
              value={value}
              onChange={setValue}
              isMonetary={true}
            />
          </S.FormRow>
          <S.FormRow>
            <Input.Modal
              placeholder="Vendedor X"
              label="Fabricante"
              value={manufacturer}
              onChange={setManufacturer}
            />
          </S.FormRow>
          <S.FormRow>
            <Select.Modal
              label="Rateio"
              value={apportionment}
              onChange={setApportionment}
            />
            <Select.Modal
              label="Periodicidade"
              value={frequency}
              onChange={setFrequency}
            />
            <Input.Modal
              label="Competência"
              value={date}
              onChange={setDate}
              isDate={true}
            />
          </S.FormRow>
          <S.FormRow>
            <Quill
              theme={"snow"}
              placeholder="Detalhes"
              value={details}
              onChange={setDetails}
              modules={{
                toolbar: [
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { indent: "-1" }, { indent: "+1" }],
                ],
              }}
              formats={["bold", "italic", "underline", "indent", "list"]}
            />
          </S.FormRow>
          <S.FormRow>
            <Input.Modal
              label="Reporter"
              value={reporter}
              onChange={setReporter}
              placeholder="Especifique a origem"
            />
          </S.FormRow>
          <S.NowBox>
            <span>Atividades</span>
            <span>Criado em 15 de maio de 2023 - 15:00</span>
          </S.NowBox>
        </S.FormArea>
      </S.Box>
    </S.Bg>
  )
}

export default NewEntry
