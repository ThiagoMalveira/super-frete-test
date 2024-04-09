export function formatDate(data: Date) {
  if (!data) return ''
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0')
  const ano = data.getFullYear()
  const horas = data.getHours().toString().padStart(2, '0')
  const minutos = data.getMinutes().toString().padStart(2, '0')
  return dia + '/' + mes + '/' + ano + ' - ' + horas + 'h' + minutos
}
