import { initializeApp, FirebaseError } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  sendPasswordResetEmail,
} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAGYX6AGvw1ONgjmT-Q-dvyGWFJd-YHi30",
  authDomain: "fitness-app-a99fb.firebaseapp.com",
  projectId: "fitness-app-a99fb",
  storageBucket: "fitness-app-a99fb.appspot.com",
  messagingSenderId: "232305164803",
  appId: "1:232305164803:web:169913cffbbdbf40220436",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export const createUserWithEmail = async (
  email: string,
  password: string,
  repeatPassword: string
) => {
  if (!email || !password) return
  if (password !== repeatPassword) alert("Passwords do not match!")

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    const token = await user.getIdToken(true)
    return token
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.")
      } else {
        console.log("User creation error", error.message)
      }
    } else {
      alert("Unexpected error")
    }
  }
}

export const signInUserWithEmail = async (email: string, password: string) => {
  if (!email || !password) return
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const token = await user.getIdToken(true)
    return token
  } catch (error) {
    if (error instanceof Error) {
      alert("Sign in error!")
    } else {
      alert("Unknown error occurred")
    }
  }
}

export const signOutUser = async () => {
  await signOut(auth)
}

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert("We sent you an email. Check your inbox!")
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "auth/missing-email") {
        alert("Provide us with your email first.")
      } else {
        alert(error.message)
      }
    } else {
      alert("Unexpected error")
    }
  }
}

export const onAuthStateChangedListener = (
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  onAuthStateChanged(auth, async (currentUser) => setUser(currentUser))
}
