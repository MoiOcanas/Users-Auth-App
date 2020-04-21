const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database conected'))
.catch(e => console.log(e));