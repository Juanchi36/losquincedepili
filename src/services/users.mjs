import { getDocs, collection, doc, updateDoc, query, where, addDoc } from 'firebase/firestore';
import { getDb } from './db.mjs';

const collection_name = 'users';

export const getUsers = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  doc_refs.forEach((user) => {
    res.push({
      id: user.id,
      ...user.data(),
    });
  });

  return res;
};

export const getUser = async (userName) => {
  const collection_ref = collection(getDb(), collection_name);
  const q = query(collection_ref, where('userName', '==', userName));
  const doc_refs = await getDocs(q);

  const res = [];

  doc_refs.forEach((user) => {
    res.push({
      id: user.id,
      ...user.data(),
    });
  });

  return res;
};

export const updateUser = async (id, body) => {
  const docRef = doc(getDb(), collection_name, id);

  await updateDoc(docRef, body).catch((err) => console.log('ERR', err));

  return true;
};

export const createUser = async (body) => {
  await addDoc(collection(getDb(), collection_name), body);

  return true;
};
