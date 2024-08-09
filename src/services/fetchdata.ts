import axios from "axios"

export const fetchData = async ( method: string, url:string, data: object | null, commerceId: string | null ) => {


    const axiosInstance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                ...(sessionStorage.getItem('sng') && { 'sng': sessionStorage.getItem('sng') } ),
                ...(sessionStorage.getItem('ct') && { 'csrf-token': sessionStorage.getItem('ct') } )
            },
            baseURL: import.meta.env.VITE_URL_BASE
    })
    
    const response = await axiosInstance({
        method,
        url: url + `${commerceId}`,
        ...( data && {data} )
    })
    
    return response
}


