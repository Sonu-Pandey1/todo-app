import { Databases, Client, Storage, ID } from "appwrite";
import conf from "../conf/conf"

export class ConfigService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client().setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost({ content }) {
        try {
            await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(), {
                content,
            })

        } catch (error) {
            console.log(error)
        }

    }

    async updatePost(ID, { content }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID, {
                content,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id)
            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getPost(id) {
        try {
            return this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id)

        } catch (error) {
            console.log(error)
        }

    }

    async getPosts() {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                [
                    // Query.equal("email","sonupandey@gmail.com")
                ])

        } catch (error) {
            console.log(error)
            return false
        }
    }

    // file upload services

    // async uploadFile(file){
    //     try {
    //         return await this.storage.createFile(conf.appwriteStorageId,ID.unique(),file,)
            
    //     } catch (error) {
    //         console.log(error)
    //         return false
    //     }

    // }

    // async deleteFile(fileId){
    //     try {
    //         return await this.storage.deleteFile(conf.appwriteStorageId,conf.fileId)
    //         return true
            
    //     } catch (error) {
    //         console.log(error)
    //         return false
    //     }
    // }

    // getFilePreview(fileId){
    //     try {
    //         return this.storage.getFilePreview(conf.appwriteStorageId,fileId)
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}
const configService = new ConfigService()
export default configService;