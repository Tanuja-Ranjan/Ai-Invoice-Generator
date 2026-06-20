import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://ranjantanuja08_db_user:qNB3sTXpHXsngemo@cluster0.bilifva.mongodb.net/InvoiceAI").then(() => {
    console.log("Connected to MongoDB");
  })
}