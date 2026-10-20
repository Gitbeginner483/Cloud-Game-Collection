import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { db } from './firebaseConfig';

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
  // Convert each Firestore document into:
  // { id: doc.id, ...doc.data() }
  // Return the final array.

  const gamesCollection = collection(db, 'games');

  const snapshot = await getDocs(
    gamesCollection
  );

  return snapshot.docs.map((gameDoc) => ({
    id: gameDoc.id,
    ...gameDoc.data(),
  }));
}

export async function addGame(game) {
  // TODO 2 — CREATE
  // Add the supplied game object to the "games" collection.
  // Return the new game with its Firestore document id.

  const gamesCollection = collection(db, 'games');

  const docRef = await addDoc(
    gamesCollection,
    game
  );

  return {
    id: docRef.id,
    ...game,
  };
}

export async function updateGame(id, changes) {
  // TODO 3 — UPDATE
  // Use the document id to update only the supplied fields.

  const gameRef = doc(db, 'games', id);

  await updateDoc(
    gameRef,
    changes
  );

  return {
    id,
    ...changes,
  };
}

export async function deleteGame(id) {
  // TODO 4 — DELETE
  // Delete the Firestore document that matches this id.

  const gameRef = doc(db, 'games', id);

  await deleteDoc(gameRef);

  return id;
}
