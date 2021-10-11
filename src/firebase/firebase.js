import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

let app;
if(!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const getUserTeam = async (uid) => {
  setTimeout(5000);
  const res = await db.collection('users').where('uid', '==', uid).get();
  return [res.docs[0]._delegate._document.data.value.mapValue.fields.team.integerValue, res.docs[0].id];  
};

const updateUserTeam = async (team, documentId) => {
    await db.collection('users').doc(documentId).update({ team: team });
};

const updateChampion = async (newChampion, documentId) => {
  await db.collection('current_champion').doc(documentId).update({ NHLId: newChampion })
}

const addToHistory = async (awayTeamId, homeTeamId, awayTeamScore, homeTeamScore, championId, gameDate) => {
  await db.collection('history').add({
    awayTeamId,
    awayTeamScore,
    championId,
    gameDate,
    homeTeamId,
    homeTeamScore,
    index: Math.floor(Math.random() * 100000)
  })
}

const getCurrentChampion = async () => {
  const res = await db.collection('current_champion').get();
  return res.docs[0]._delegate._document.data.value.mapValue.fields.NHLId.integerValue;
}

const getCurrentChampionNHLId = async () => {
  const res = await db.collection('current_champion').get();
  return res.docs[0]._delegate._document.data.value.mapValue.fields.NHLId.integerValue;
}

const getHistory = async () => {
  const res = await db.collection('history').orderBy("gameDate").get();  
  return res.docs.reverse();
}

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
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
  logout,
  signInWithGoogle,
  getUserTeam,
  updateUserTeam,
  getCurrentChampion,
  getCurrentChampionNHLId,
  updateChampion,
  getHistory,
  addToHistory
};