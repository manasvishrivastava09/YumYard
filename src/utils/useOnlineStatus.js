import { useState, useEffect } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
          setOnlineStatus(false);
        });
    },[]);
    //boolean
    return onlineStatus;
}

export default useOnlineStatus;