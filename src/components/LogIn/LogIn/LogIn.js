import React, { useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';


import { useContext } from 'react';
import { UserContext } from '../../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {


    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);



    // const {from}=location.state || {from:{pathname: "/"} };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');
    const { from } = location.state || { from: { pathname: "/" } };




    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                        console.log(user);
                        const signInUser={name:user.displayName,email:user.email,img:user.photoURL};
        
        
        
                        setLoggedInUser(signInUser);
                        localStorage.setItem('user',JSON.stringify(signInUser));
                        history.replace(from);
               
            }).catch((error) => {
                    const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
                
            });
        
        //        firebase.auth()
        //          .signInWithPopup(googleProvider)
        //          .then((result) => {

        //         const user = result.user;
        //         // console.log(user);
        //         const signInUser={name:user.displayName,email:user.email,img:user.photoURL};



        //         setLoggedInUser(signInUser);
        //         localStorage.setItem('user',JSON.stringify(signInUser));
        //         history.replace(from);


        //   }).catch((error) => {


        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     setError(errorMessage);

        //   });

            }
        return (
            <div className="container">
                <div className="text-center mt-5">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">continue with google</button>
                    <p>{error}</p>
                </div>

            </div>
        );
    };

    export default LogIn;