import { IMessage } from '@interface/message'
import { database } from '@service/firebase'
import { formatDate } from '@utils/forDate'
import {
  CollectionReference,
  DocumentData,
  Query,
  addDoc,
  collection,
  getDocs,
} from 'firebase/firestore'

export class MessageService {
  messageRef: CollectionReference<DocumentData, DocumentData>

  constructor() {
    this.messageRef = collection(database, 'messages')
  }
  async getMessages(query: Query<DocumentData, DocumentData>) {
    try {
      const data = await getDocs(query)

      return data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IMessage[]
    } catch (err) {
      throw new Error(`${err}`)
    }
  }
  async createMessage(message: string) {
    try {
      await addDoc(this.messageRef, {
        message,
        data: formatDate(new Date()),
      })
    } catch (err) {
      console.error(err)
    }
  }
}
