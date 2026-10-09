import { createUser } from "./user.controller.js"

export default (app) => {
    app.post('/create/user', createUser);
}