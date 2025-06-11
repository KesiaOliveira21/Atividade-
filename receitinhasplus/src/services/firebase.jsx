// Importações necessárias
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwAGjkMM-44hgRirzGwI5PJJANxm6WLpU",
  authDomain: "receitinha-plus.firebaseapp.com",
  projectId: "receitinha-plus",
  storageBucket: "receitinha-plus.firebasestorage.app",
  messagingSenderId: "734099684502",
  appId: "1:734099684502:web:00e87909bec483a3d796b7",
  measurementId: "G-XLEDJMQRWJ"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Exportando a autenticação para usar no app
export const auth = getAuth(app);
