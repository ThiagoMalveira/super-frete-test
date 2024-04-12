import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore'
import { ChangeEvent, useEffect, useState } from 'react'
import { database } from '../../service/firebase'
import { formatDate } from '../../utils/forDate'

interface IMessage {
  id: string
  message: string
  data: string
}

const useMessages = () => {
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [allMessages, setAllMessages] = useState<IMessage[]>([])

  const messageRef = collection(database, 'messages')
  const handleCreateNewMessage = async () => {
    try {
      setDisabled(true)
      await addDoc(messageRef, {
        message,
        data: formatDate(new Date()),
      })

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
      const data = await getDocs(queryData)
      setAllMessages(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IMessage[],
      )
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
