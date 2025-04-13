import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCZRahQ8fHnCXDp39QvLaaBhvMxtA6w-Kg",
    authDomain: "datos-formulario-b97e0.firebaseapp.com",
    projectId: "datos-formulario-b97e0",
    storageBucket: "datos-formulario-b97e0.firebasestorage.app",
    messagingSenderId: "614243828686",
    appId: "1:614243828686:web:98a3b8824f202722da219f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.getElementById('formulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    //Validar nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
       errorNombre.textContent = 'Por favor, introduce tu nombre';
       errorNombre.classList.add('error-message'); 
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    //Validar email
    let entradaEmail = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Expresión regular para validar email

    if(!emailRegex.test(entradaEmail.value)){
        errorEmail.textContent = 'Por favor, introduce un email válido';
        errorEmail.classList.add('error-message');
    }
    else{
        errorEmail.textContent = '';
        errorEmail.classList.remove('error-message');
    }

    //Validar contraseña
    let entradaPassword = document.getElementById('password');
    let errorPassword = document.getElementById('passwordError');
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/; //Expresión regular para validar contraseña

    if(!passwordRegex.test(entradaPassword.value)){
        errorPassword.textContent = 'La contraseña debe tener una mayúscula, un número y tener entre 8 y 15 caracteres';
        errorPassword.classList.add('error-message');
    }else{
        errorPassword.textContent = '';
        errorPassword.classList.remove('error-message');
    }

    //Si todos los campos son válidos, enviar el formulario
    if(!errorNombre.textContent && !errorEmail.textContent && !errorPassword.textContent){
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: entradaNombre.value,
                email: entradaEmail.value,
                password: entradaPassword.value
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Formulario enviado correctamente');
            document.getElementById('formulario').reset();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
});