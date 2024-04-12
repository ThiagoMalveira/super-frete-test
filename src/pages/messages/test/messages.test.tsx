import { fireEvent, render, screen } from '@testing-library/react'
import Messages from '..'

test('Should render the page', () => {
  render(<Messages />)
  const element = screen.getByText(/Digite um texto abaixo/i)
  expect(element).toBeInTheDocument()
})

test('should display message input label above input when input is empty and input is focused', () => {
  render(<Messages />)

  const input = screen.getByLabelText('Insira sua mensagem*')
  fireEvent.focus(input)

  expect(screen.getByText('Mensagem*')).toBeInTheDocument()
})

test('should render the input and button', () => {
  render(<Messages />)
  expect(screen.getByText('Insira sua mensagem*')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument()
})

test('should display loading spinner while sending message', () => {
  render(<Messages />)
  const input = screen.getByLabelText('Insira sua mensagem*')
  const button = screen.getByRole('button', { name: 'Enviar' })

  fireEvent.change(input, { target: { value: 'Test message' } })
  fireEvent.click(button)

  expect(screen.getAllByTestId('loading-spinner')).toHaveLength(1)
})

test('should display loading spinner when there are no messages and loading is not complete', () => {
  const { getByTestId } = render(<Messages />)

  expect(getByTestId('loading-spinner')).toBeInTheDocument()
})
