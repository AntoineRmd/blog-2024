class ApiError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }

    // 500
    static internal(message: string = "Something unexpectedly went wrong on our side. Please report your issue") {
        return new ApiError(500, message);
    }

    static JWTGenerationFail(message: string = "JWT generation failed") {
        return new ApiError(500, message);
    }

    // 503
    static unavailable(message: string = "Service temporarily unavailable") {
        return new ApiError(503, message);
    }
}

export default ApiError;