import { Collection, MongoClient } from 'mongodb'
import env from '../../../../main/config/env'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(env.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }

}
