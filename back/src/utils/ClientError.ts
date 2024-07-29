class ClientError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }

    // 400
    static badRequest(message: string = "Bad Request") {
        return new ClientError(400, message);
    }

    static usernameInvalid(message: string = "Invalid username") {
        return new ClientError(400, message);
    }

    static usernameTaken(message: string = "Username already taken") {
        return new ClientError(400, message);
    }

    static passwordInvalid(message: string = "Invalid password, it must contain at least 8 characters") {
        return new ClientError(400, message);
    }

    static userNotFound(message: string = "Username doesn’t exist") {
        return new ClientError(400, message);
    }

    static passwordMatch(message: string = "Password doesn’t match") {
        return new ClientError(400, message);
    }

    static postIDInvalid(message: string = "Invalid post ID") {
        return new ClientError(400, message);
    }

    static fileTooLarge(message: string = "File is too large") {
        return new ClientError(400, message);
    }

    static genericInvalid(message: string = "Invalid field") {
        return new ClientError(400, message);
    }

    // 401
    static alreadyConnected(message: string = "Already logged in") {
        return new ClientError(401, message);
    }

    static disconnected(message: string = "Please log in to access this resource") {
        return new ClientError(401, message);
    }

    static unauthorized(message: string = "Access unauthorized") {
        return new ClientError(401, message);
    }

    // 403
    static forbidden(message: string = "This resource is hidden because you are not authorized to access it") {
        return new ClientError(403, message);
    }

    // 404
    static postNotFound(message: string = "Post not found") {
        return new ClientError(404, message);
    }

    static notFound(message: string = "Not found") {
        return new ClientError(404, message);
    }

    // 418
    static teapot(message: string = "I’m a teapot") {
        return new ClientError(418, message);
    }
}

export default ClientError;