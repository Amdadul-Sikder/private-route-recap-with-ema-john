import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;




/* Steps for authentication
----------------------------
Step-1:Initial Setup

1.firebase:create app
2.create web app
3.get configeration
4.initialize firebase
5.enable auth method;

Step-2: setup component
1.create login component
2.create register component
3.create route for login and register

Step-3:set auth system
1.setup sign in method
2.setup sign out method
3.user state
4.special observer
5.return necessary methods and states from firebase

Step-4:create contex hook (useAuth)
1.create a auth contex
2.create context provider
3.set context provider context value
4.use Auth provider
5.Create useAuth Hook

Step-5:create private route
1.create private route
2.set private route


*/