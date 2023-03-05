import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDzxt_TuE-DakiqeAOLmq5Ea3aD9Aiv1sM",
  authDomain: "rar-webapp.firebaseapp.com",
  projectId: "rar-webapp",
  storageBucket: "rar-webapp.appspot.com",
  messagingSenderId: "290060195961",
  appId: "1:290060195961:web:2d95e05dcaf5f29f949ca8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export async function getRecipe(db) {
  const recipeCollection = collection(db, 'addrecipe');
  const recipeSnapshot = await getDocs(recipeCollection);
  const recipe = recipeSnapshot.docs.map(doc => doc.data());
  return recipe;
}
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
