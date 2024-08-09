import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchdata";
import { useSweetAlert } from "../helpers/functions";

const comid = import.meta.env.VITE_COMMERCE_ID

type MsgStatus = {isLoading:boolean, cleanForm: boolean}

export const dataSend = (values:any): MsgStatus => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cleanForm, setCleanForm] = useState<boolean>(false)
    useEffect(() => {
        fetchData("POST", "contact/", values, comid)
        .then( () => { 
            useSweetAlert('Mensaje enviado correctamente.')
            setCleanForm(true)
        })
        .catch( () => {
            useSweetAlert(
                "Por el momento no podemos enviar el mensaje, intente nuevamente mas tarde"
            )
        }).finally(() => setIsLoading(false))
    }, [])

    return { isLoading, cleanForm }
  };
  