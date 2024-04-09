import styles from './styles.module.css'

interface MessageProps {
  mensagem: string
  data: string
}

const Message = ({ mensagem, data }: MessageProps) => {
  return (
    <div className={styles.messageWrapper}>
      <h1 className={styles.messageText}>{mensagem}</h1>
      <p className={styles.messageDate}>{data}</p>
    </div>
  )
}

export default Message
