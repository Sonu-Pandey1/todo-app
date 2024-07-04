import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf"



export class AuthService {

    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createUser({ email, password, name }) {
        console.log('createUser called with:', { email, password, name });
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("account created", userAccount)


        } catch (error) {
            console.log("appwrite service :: createUserr :: error", error)
            alert(error)

        }

    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
            // console.log(user + "login successfully")

        } catch (error) {
            console.log("appwrite service :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error)
        }
        return null;

    }

    async logout() {
        try {
            return await this.account.deleteSessions()

        } catch (error) {
            console.log("appwrite service :: logout :: error", error)
        }
    }

}
const authService = new AuthService();
export default authService;

