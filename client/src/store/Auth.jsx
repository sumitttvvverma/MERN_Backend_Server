import {createContext, useContext, useEffect, useState} from 'react'
//1st work
export const AuthContext=createContext();


//2nd for to wrap main component by Provider 
export const AuthProvider=({children})=>{

    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [services,setServices]=useState([])
    //tackling the logout functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token")
    }

    const isLoggedIn=!!token
    console.log(isLoggedIn)

    const storeTokenInLS=(serverToken)=>{       //4th set the localStore
        setToken(serverToken);                  //lec 37 just this single line login-logout navbar problem 
        return localStorage.setItem("token",serverToken);   //key-value
    }

    //#30Lec JWT authentication - to get the currently loggedIn userData 
    const userAuthentication = async()=> {
        try {
            const response=await fetch("http://localhost:4004/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

            if(response.ok){
                const data= await response.json();
                // console.log("user data",data); //By this u will see userData inside data
                console.log("user data",data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data",error)
        }
    };

    const getServices=async()=>{
        try {
            const response=await fetch("http://localhost:4004/api/data/service",{
                method:"GET"
            });
        if(response.ok){
           const data = await response.json();
           console.log(data.msg); 
           setServices(data.msg);
        }
        
            
        } catch (error) {
            console.log("service frontend error",error)
        }
    }

    useEffect(()=>{
        userAuthentication();
        getServices();
    },[])


//exlint-disable-next-line react/prop-type
    return ( <AuthContext.Provider value={{isLoggedIn ,storeTokenInLS , LogoutUser, user , services}}>
        {children}
    </AuthContext.Provider> )  //Now import AuthProvider to main file and wrap it by its Provider
}


export const useAuth=()=>{                     //3rd using useContext
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}