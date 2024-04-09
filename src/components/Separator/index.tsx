interface SeparatorProps {
  height: number
}

const Separator = ({ height }: SeparatorProps) => {
  return <div style={{ height: height || '20px' }} />
}

export default Separator
