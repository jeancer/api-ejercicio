module.exports = {
    PORT : process.env.PORT || 3000,
    DB : process.env.DB || 'mongodb+srv://<username>:<password>@cluster0.cbhr2.mongodb.net/<dbname>?retryWrites=true&w=majority'
}