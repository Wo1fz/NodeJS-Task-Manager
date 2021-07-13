const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://wo1fz:123Qweasd@wo1fz-nodejs.quldp.mongodb.net/nodeJS-Task-Manager?retryWrites=true&w=majority'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to the db...'))
  .catch((err) => console.log(err))
