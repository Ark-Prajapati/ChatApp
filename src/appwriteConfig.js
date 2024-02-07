import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '65bd2aa645a35eba1b06'
export const DATABASE_ID = '65bd2cb506a107b3df61'
export const COLLECTION_ID_MESSAGES = '65bd2cc75b28b63b248b'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65bd2aa645a35eba1b06');

export const databases = new Databases(client);
export const account = new Account(client);

export default client