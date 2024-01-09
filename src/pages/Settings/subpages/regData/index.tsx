import React, { useState } from "react"
import * as S from "./styles"

import { TSettRegData } from "../../../../utils/@types/forms/settings/regData"
import { SettRegOptions as options } from "../../../../utils/_sys/forms/settings/regData"

import Select from "../../../../components/Select"
import Input from "../../../../components/Input"

const RegDataScreen = () => {
  // values
  const [sex, setSex] = useState<TSettRegData["sex"]>({
    key: "ma",
    value: "Masculino",
  })
  const [civState, setCivState] = useState<TSettRegData["civState"]>({
    key: "00",
    value: "Solteiro",
  })
  const [nationality, setNationality] =
    useState<TSettRegData["nationality"]>("")
  const [date, setDate] = useState<TSettRegData["date"]>(new Date())
  const [cpf, setCPF] = useState<TSettRegData["cpf"]>("")
  const [rg, setRG] = useState<TSettRegData["rg"]>("")
  const [cep, setCEP] = useState<TSettRegData["cep"]>("")
  const [street, setStreet] = useState<TSettRegData["street"]>("")
  const [streetNumber, setStreetNumber] = useState<TSettRegData["number"]>("")
  const [complement, setComplement] = useState<TSettRegData["complement"]>("")
  const [district, setDistrict] = useState<TSettRegData["district"]>("")
  const [city, setCity] = useState<TSettRegData["city"]>("")
  const [state, setState] = useState<TSettRegData["state"]>({
    key: "sc",
    value: "Santa Catarina",
  })
  const [country, setCountry] = useState<TSettRegData["country"]>({
    key: "br",
    value: "Brasil",
  })
  const [email, setEmail] = useState<TSettRegData["email"]>("")
  const [phone1, setPhone1] = useState<TSettRegData["phone"]>("")
  const [phone2, setPhone2] = useState<TSettRegData["phone"]>("")

  return (
    <>
      <S.Form>
        <S.FBlock>
          <S.BlockTitle>Dados cadastrais</S.BlockTitle>
          <S.BlockRow>
            <Select.Default
              label="Sexo"
              value={sex}
              roOptions={options.sex}
              onChange={setSex}
            />
            <Select.Default
              label="Estado civil"
              value={civState}
              roOptions={options.civState}
              onChange={setCivState}
            />
            <Input.Default
              label="Nacionalidade"
              value={nationality}
              onChange={setNationality}
              placeholder="Brasileiro"
            />
            <Input.Default
              label="Data de nascimento"
              value={date}
              onChange={setDate}
              isDate
            />
          </S.BlockRow>
        </S.FBlock>

        <S.FBlock>
          <S.BlockTitle>Documentos</S.BlockTitle>
          <S.BlockRow>
            <Input.Default
              label="CPF"
              value={cpf}
              onChange={setCPF}
              placeholder="xxx.xxx.xxx-xx"
            />
            <Input.Default
              label="RG"
              value={rg}
              onChange={setRG}
              placeholder="xx.xxx.xxx-x"
            />
          </S.BlockRow>
        </S.FBlock>

        <S.FBlock>
          <S.BlockTitle>Endereço</S.BlockTitle>
          <S.BlockRow>
            <Input.Default
              label="CEP"
              value={cep}
              onChange={setCEP}
              placeholder="xx.xxx-xxx"
            />
          </S.BlockRow>
          <S.BlockRow>
            <Input.Default
              label="Rua"
              value={street}
              onChange={setStreet}
              placeholder="Av.Paulista"
            />
            <Input.Default
              label="Número"
              value={streetNumber}
              onChange={setStreetNumber}
              placeholder="000"
            />
            <Input.Default
              label="Complemento"
              value={complement}
              onChange={setComplement}
              placeholder="Bloco 2"
            />
          </S.BlockRow>
          <S.BlockRow>
            <Input.Default
              label="Bairro"
              value={district}
              onChange={setDistrict}
              placeholder="Centro"
            />
            <Input.Default
              label="Cidade"
              value={city}
              onChange={setCity}
              placeholder="Florianópolis"
            />
            <Select.Default
              label="Estado"
              value={state}
              roOptions={options.state}
              onChange={setState}
            />
          </S.BlockRow>
          <S.BlockRow>
            <Select.Default
              label="Brasil"
              value={country}
              roOptions={options.country}
              onChange={setCountry}
            />
          </S.BlockRow>
        </S.FBlock>

        <S.FBlock>
          <S.BlockTitle>Contato</S.BlockTitle>
          <S.BlockRow>
            <Input.Default
              placeholder="seu@email.com"
              label="E-mail"
              value={email}
              onChange={setEmail}
            />
            <Input.Default
              placeholder="(xx) xxxxx-xxxx"
              label="Celular 1"
              value={phone1}
              onChange={setPhone1}
            />
          </S.BlockRow>
          <S.BlockRow>
            <Input.Default
              placeholder="(xx) xxxxx-xxxx"
              label="Celular 2"
              value={phone2}
              onChange={setPhone2}
            />
          </S.BlockRow>
        </S.FBlock>
      </S.Form>
    </>
  )
}

export default RegDataScreen
