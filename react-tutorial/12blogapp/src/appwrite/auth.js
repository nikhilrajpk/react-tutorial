import conf from '../conf/conf'
import {Client, Account, ID} from 'appwrite'


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount ({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            
            if(userAccount){
                return this.login({email, password})
            }else{
                console.log('no user')
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw new Error(error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getcurrentUser() :: ", error)
            return false
        }
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }catch(error){
            console.log("Appwrite service :: getcurrentUser() :: ", error)
            return false
        }
    }
}



const authService = new AuthService()

export default authService