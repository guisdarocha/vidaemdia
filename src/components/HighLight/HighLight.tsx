import * as S from "./HighLight.style";

type HighProps = {
  text: string
}

const HighLight = ({text}: HighProps) => {
  return (
      <>
          <S.DivHighLight>
            <S.HighLight>{text}</S.HighLight>
          </S.DivHighLight>
      </>
  )
}

export default HighLight
