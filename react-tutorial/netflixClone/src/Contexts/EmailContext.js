import { createContext, useContext } from "react";


export const EmailContext = createContext({
    email : '',
    emailHandler : ()=>{},
})

export const EmailProvider = EmailContext.Provider;

export default function useEmail(){
    return useContext(EmailContext)
}