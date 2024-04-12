import { IMessage } from '@interface/message'
import { database } from '@service/firebase'
import { MessageService } from '@service/messages'
import { collection, orderBy, query } from 'firebase/firestore'
import { ChangeEvent, useEffect, useState } from 'react'

const useMessages = () => {
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [allMessages, setAllMessages] = useState<IMessage[]>([])

  const messageService = new MessageService()
  const messageRef = collection(database, 'messages')

  const handleCreateNewMessage = async () => {
    try {
      setDisabled(true)
      messageService.createMessage(message)

      setMessage('')

      await handleGetMessages()
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleGetMessages = async () => {
    try {
      setDisabled(true)
      const queryData = query(messageRef, orderBy('data', 'desc'))

      const data = await messageService.getMessages(queryData)
      setAllMessages(data)
    } catch (err) {
      throw new Error(`${err}`)
    } finally {
      setDisabled(false)
    }
  }

  useEffect(() => {
    handleGetMessages()
  }, [])

  return {
    allMessages,
    handleCreateNewMessage,
    handleChange,
    disabled,
    message,
  }
}

export default useMessages
