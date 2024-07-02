
const conf = {
    appwriteUrl: String(process.env.APPWRITE_PROJECT_URL),
    appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.APPWRITE_COLLECTION_ID)

}

export default conf;