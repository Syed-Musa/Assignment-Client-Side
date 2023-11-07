import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/Firebase.config";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const ExtraLogin = () => {

    const [user, setUser] = useState([]);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.error(error);
        })
    };

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <div>
            <h2 className='text-2xl text-white font-bold my-5 text-center'>Continue With</h2>
                
            <button onClick={handleGoogleSignIn} className='btn btn-outline text-white w-full text-[15px] font-bold my-2'>
            <FaGoogle className='text-xl text-white'></FaGoogle>Google Login
            </button>
            
            <button onClick={handleGithubSignIn} className='btn btn-outline text-white w-full text-[15px] font-bold'>
            <FaGithub className='text-xl text-white'></FaGithub>Github Login
            </button>
        </div>
        
    );
};

export default ExtraLogin;