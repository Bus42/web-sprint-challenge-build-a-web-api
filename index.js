const app = require("./api/server")
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});
