import { ChangeEvent, FocusEvent, useState } from 'react'
import './styles.css'

interface InputProps {
  type: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  defaultValue: string
}

const Input = ({
  type,
  label,
  onChange,
  disabled,
  defaultValue,
}: InputProps) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFocused(false)
    }
  }

  return (
    <div className={`inputContainer ${focused ? 'inputFocused' : ''}`}>
      <input
        data-testid="input"
        id="message"
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        disabled={disabled}
        value={defaultValue}
      />
      <label htmlFor="message" className={'labelInput'}>
        {focused ? label : 'Insira sua mensagem*'}
      </label>
    </div>
  )
}

export default Input
