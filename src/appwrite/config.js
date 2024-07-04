

import { Databases, Client, Storage, ID, Query } from "appwrite";
import conf from "../conf/conf"

export class ConfigService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        // this.storage = new Storage(this.client)
    }

  
    
    async createPost( todo, email ) {
        try {
        //   console.log('Data passed to createPost:', { todo, email }); // Log the data
          return await this.databases.createDocument(conf.appwriteDatabaseId, "66862309000663eded8e", ID.unique(), {
            todo,
            email,
          });
        } catch (error) {
          console.log('Error in createPost:', error);
        }
      }

    async updatePost(ID, { content }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, "66862309000663eded8e", ID, {
                content,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, "66862309000663eded8e", id)
            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getPost(id) {
        try {
            return this.databases.getDocument(conf.appwriteDatabaseId, "66862309000663eded8e", id)

        } catch (error) {
            console.log(error)
        }

    }

    async getPosts(userEmail) {
        try {
             return await this.databases.listDocuments(conf.appwriteDatabaseId, "66862309000663eded8e", [
                Query.equal('email', userEmail)
              ]);

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