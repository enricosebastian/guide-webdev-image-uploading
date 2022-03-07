
const { initializeApp } = require('firebase/app');
const {getStorage, deleteObject, getDownloadURL, ref, uploadBytes, uploadString} = require('firebase/storage');

const firebaseConfig = {
  apiKey:               process.env.APIKEY,
  authDomain:           process.env.AUTHDOMAIN,
  projectId:            process.env.PROJECTID,
  storageBucket:        process.env.STORAGEBUCKET,
  messagingSenderId:    process.env.MESSAGINGSENDERID,
  appId:                process.env.APPID,
  measurementId:        process.env.MEASUREMENTID
};

const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage();
const storageRef = ref(storage);

module.exports = storage;