import style from './style.module.css'

interface ButtonProps {
  onClick: () => void
  disabled: boolean
}
const Button = ({ onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={style.buttonPrimary}
      onClick={onClick}
      disabled={disabled}
    >
      Enviar
    </button>
  )
}

export default Button
