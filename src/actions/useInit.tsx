
import { fetchData } from '../services/fetchdata'
import { saveSessionStorage, useSweetAlert } from '../helpers/functions';
import { useEffect, useState } from 'react';

export const useInit = () => {
    
        const [isLoading, setIsLoading] = useState(true)

        useEffect( () => {
            fetchData("GET", "control", {} , '')
            .then(resp =>{
                saveSessionStorage(resp.data["_sng"], "sng");
                saveSessionStorage(resp.data["token"], "ct");
                console.log('todo en orden con la api')
            })
            .catch( () => {
                useSweetAlert('Error de comunicación. Contacte con soporte.')
            })
            .finally( () => setIsLoading(false))
        },[])

    return { isLoading }
}
