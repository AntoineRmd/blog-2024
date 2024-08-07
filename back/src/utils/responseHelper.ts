import { Response } from "express";

class ResponseHelper {

    // 200
    static success(res: Response, data?: any, message: string = "OK"){
        res.status(200).json({
            success: true,
            message,
            data
        });
    }

    static successLogin(res: Response, data?: any, sessionTokenCookie?: any, message: string = "Logged in successfully"){
        res.status(200).cookie("sessionToken", sessionTokenCookie).json({
            success: true,
            message,
            data
        });
    }

    static successLogout(res: Response, data?: any, message: string = "Logged out successfully"){
        res.status(200).clearCookie("sessionToken").json({
            success: true,
            message,
            data
        });
    }

    // 201
    static successRegister(res: Response, data?: any, message: string = "Registered successful"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successPostCreated(res: Response, data?: any, message: string = "Post created successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successPostEdited(res: Response, data?: any, message: string = "Post edited successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successProfileEdited(res: Response, data?: any, message: string = "Profile edited successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }
}

export default ResponseHelper;