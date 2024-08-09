import Swal from "sweetalert2";

type ValidateMSG = [ validate:boolean, msg: string[] ]

export const validateForm = ( { name, email, phone, message }: FormTypes ): ValidateMSG => {

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneRegex = /\d{10}$/
    let validate = false;
    let msg = []
    
    if( name.length < 3 )
        msg.push('* En el campo "Nombre" debes colocar más de 3 caracteres')
    if( !emailRegex.test(email) )
        msg.push('* Debes colocar un email válido - Ej: email@example.com')
    if( !phoneRegex.test(phone) || phone.length > 10 )
        msg.push('* Debes colocar un número de teléfono válido de 10 caracteres - Ej: 1234456789')
    if( message.length < 30 )
        msg.push('* El mensaje debe contener al menos 30 caracteres')
    if( msg.length === 0 ) 
        validate = true
    return [ validate, msg ]
}


export const saveSessionStorage = (element: string, name = 'session') => {
    const dataSave = typeof element === 'string' ? element : JSON.stringify(element)
    sessionStorage.setItem(name, dataSave)
}

export const useSweetAlert = (msg: any) => {

    const swalCustom = Swal.mixin({
        customClass: {
          confirmButton: 'btn-confirm-swal',
          title: 'title-swal',
          popup: 'popup-swal',
          icon: 'icon-swal'
        },
        buttonsStyling: false
      })

    swalCustom.fire({
        title: msg.title,
        text: msg.body,
        icon: msg.icon,
      })
}

