import mongoose from 'mongoose'
import app from './app'
import serverConfig from './config'

mongoose.connect(serverConfig.mongoURL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(serverConfig.port, () => {
      console.log(`Server running at http://localhost:${serverConfig.port}`)
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err)
  })
