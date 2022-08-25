import React, {useEffect, useState} from 'react';

function useLogtime(user_id:number){
    const [logtime, setLogtime] = useState<UserLogTime>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
    }, []);
}