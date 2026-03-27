import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB at ${process.env.MONGO_URI}`)

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB
