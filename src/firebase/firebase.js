import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBH0ws-WyC4saSPkP8VQefkuzJ2LeAvPHc",
  authDomain: "in-season-stanley-cup-tracker.firebaseapp.com",
  projectId: "in-season-stanley-cup-tracker",
  storageBucket: "in-season-stanley-cup-tracker.appspot.com",
  messagingSenderId: "161960590444",
  appId: "1:161960590444:web:5696919b41049a8668ec49",
  measurementId: "G-B875G21406"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const getUserTeam = async (uid) => {
  const res = await db.collection('users').where('uid', '==', uid).get();  
  return [res.docs[0]._delegate._document.data.value.mapValue.fields.team.integerValue, res.docs[0].id];  
};

const updateUserTeam = async (team, documentId) => {
    await db.collection('users').doc(documentId).update({ team: team });
};

const updateChampion = async (newChampion, documentId) => {
  await db.collection('current_champion').doc(documentId).update({ NHLId: newChampion })
}

const getCurrentChampion = async () => {
  const res = await db.collection('current_champion').get();
  return res.docs[0]._delegate._document.data.value.mapValue.fields.NHLId.integerValue;
}

const getCurrentChampionNHLId = async () => {
  const res = await db.collection('current_champion').get();
  return res.docs[0]._delegate._document.data.value.mapValue.fields.NHLId.integerValue;
}

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithRedirect(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        team: 0
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
    auth.signOut();
}

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  getUserTeam,
  updateUserTeam,
  getCurrentChampion,
  getCurrentChampionNHLId,
  updateChampion
};