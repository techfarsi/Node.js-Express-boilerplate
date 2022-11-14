require('dotenv').config()

import Post from './models/Post'

const isDev = process.env.NODE_ENV === 'development'
const production = process.env.NODE_ENV !== 'production'

const dbInit = () => Promise.all([Post.sync({ alter: isDev || production })])

export default dbInit
