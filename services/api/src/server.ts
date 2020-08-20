import { app } from "./app"
const port = 3000 || process.env.PORT

console.log(`Listening at port ${port}`)
app.listen(port)