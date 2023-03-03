const AppError = require("../utils/AppError");

class usersControllers {
    create(request, response) {
        const {name, email, password} = request.body;
        
        if (!name) {
            throw new AppError("Please provide a name")
        }

        response.status(201).json({name, email, password});
    }
}

module.exports = usersControllers



