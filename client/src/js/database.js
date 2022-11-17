import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  console.log('PUT database');
  const jateDatab = await openDB('jate', 1);
  const transaction = jateDatab.transaction('jate', 'readwrite');
  const store = txransaction.objectStore('jate');
  const request = store.put({content: content});
  const result = await request;
  console.log('Data Saved', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET database');
  const jateDatab = await openDB('jate', 1);
  const transaction = jateDatab.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.get('content');
  const result = await request;
  console.log('value', result);
  return result?.value;
};


initdb();
