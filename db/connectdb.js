import mongoose from 'mongoose'

const connectdb=async(DATABASE_URL)=>{
   try {
    const DB_OPTION={
        dbName:'blogdb'
    }
    await mongoose.connect(DATABASE_URL,DB_OPTION)
    console.log("Connected Succesfully : !!! ");
   } catch (error) {
    console.log(`Error in Connection in MongoDB ::: ${error}`);
    
   }
    
}

export default connectdb