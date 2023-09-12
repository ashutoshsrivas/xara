import { useContext,createContext,useState,useEffect } from "react";
import { signInWithPopup,signOut, onAuthStateChanged, GoogleAuthProvider, User, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import axios from "axios";
const AuthContext = createContext({})

export const AuthContextProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [user,setUser] = useState<User | null | String | object>(null)
    const apiurl = "http://localhost:8080/api/";

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            console.log("msg",result);
            axios.post(`${apiurl}user/create`,{
                email:result.user.email,
                name:result.user.displayName,
              }).then((res)=>{
                // console.log(res);
              }).catch((err)=>{
                console.log(err);
            });
        });
    }
    // setUser("asd")
    const logOut = () => {
        signOut(auth)
    }

    const credentialSignIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
    };
    
    const createuser = (email: string, password: string) => {
        
        createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return ()=> unsubscribe();
    },[user])
    
    return(<AuthContext.Provider value={{user,googleSignIn,logOut,credentialSignIn,createuser,apiurl}}>{children}</AuthContext.Provider>)
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}