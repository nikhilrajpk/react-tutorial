import { Client, Databases, Storage, ID, Query } from "appwrite";
import conf from '../conf/conf'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log('Appwrite :: getPost() ::', error)
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log('Appwrite :: getPosts() ::', error)
            return false
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log('Appwrite :: createPost() ::', error)
            return false
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log('Appwrite :: updatePost() ::', error)
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log('Appwrite :: deletePost() ::', error)
            return false
        }
    }


    // Storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log('Appwrite :: uploadFile() ::', error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (error) {
            console.log('Appwrite :: deleteFile() ::', error)
            return false
        }
    }

    getFilePreview(fieldId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fieldId).href
    }
}



const service = new Service()

export default service