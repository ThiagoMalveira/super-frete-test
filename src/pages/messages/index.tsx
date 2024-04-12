import Button from '../../components/Button'
import Input from '../../components/Input'
import Loading from '../../components/Loading'
import { Logo } from '../../components/Logo'
import Message from '../../components/Message'
import Separator from '../../components/Separator'
import style from './messages.module.css'
import useMessages from './useMessages'

function Messages() {
  const {
    allMessages,
    handleCreateNewMessage,
    disabled,
    handleChange,
    message,
  } = useMessages()

  return (
    <div className={style.Wrapper}>
      <div className={style.AppContainer}>
        <div className={style.UpperWrapper}>
          <div className={style.logoWrapper}>
            <Logo />
          </div>
          <div className={style.insertMessage}>
            <h1 className={style.typeBelow}>Digite um texto abaixo</h1>
          </div>
          <div className={style.inputWrapper}>
            <Input
              type="text"
              label="Mensagem*"
              onChange={handleChange}
              disabled={disabled}
              defaultValue={message}
            />
            <Button onClick={handleCreateNewMessage} disabled={!message} />
          </div>
        </div>

        <div className={style.sendMessages}>
          <div>
            <h1 className={style.sendedMessage}>Mensagens enviadas</h1>
          </div>
          {disabled ? (
            <div className={style.wrapperLoading}>
              <Loading />
            </div>
          ) : (
            <>
              {allMessages.length > 0 ? (
                <>
                  {allMessages.map((mensagem, index) => {
                    return (
                      <>
                        <Message
                          key={index}
                          mensagem={mensagem.message}
                          data={mensagem.data}
                        />
                        <Separator height={16} />
                      </>
                    )
                  })}
                </>
              ) : (
                <h1>Não há mensagens</h1>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messages
