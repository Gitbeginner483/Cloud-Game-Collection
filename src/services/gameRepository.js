import { starterGames } from '../data/starterGames';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';
/*
  MODULE 9 TODO FILE
  ------------------
  This is the main file students complete.

  The app starts in DEMO MODE with starterGames so the UI works first.
  Replace each TODO section with Firestore code from the lesson.
*/

export async function getGames() {
  // TODO 1 — READ
  // Read the "games" collection from Firestore.
  const querySnapshot = await getDocs(collection(db, 'games'));

  // Convert each Firestore document into: { id: doc.id, ...doc.data() }
  const games = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Return the final array.
  return games;
}

  return starterGames;


export async function addGame(game) {
  // TODO 2 — CREATE
  // Add the supplied game object to the "games" collection.
  const docRef = await addDoc(collection(db, 'games'), game);

  // Return the new game with its Firestore document id.
  return {
    id: docRef.id,
    ...game,
  };
}

export async function updateGame(id, changes) {
  // TODO 3 — UPDATE
  // Use the document id to update only the supplied fields.

  return {
    id,
    ...changes,
  };
}

export async function deleteGame(id) {
  // TODO 4 — DELETE
  // Delete the Firestore document that matches this id.

  return id;
}
