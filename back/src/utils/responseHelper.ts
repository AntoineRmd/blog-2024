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

    static successLogin(res: Response, data?: any, message: string = "Logged in successfully"){
        res.status(200).json({
            success: true,
            message,
            data
        });
    }

    static successLogout(res: Response, data?: any, message: string = "Logged out successfully"){
        res.status(200).json({
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

    static successPostCreate(res: Response, data?: any, message: string = "Post created successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successPostEdit(res: Response, data?: any, message: string = "Post edited successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successProfileEdit(res: Response, data?: any, message: string = "Profile edited successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }

    static successProfileDelete(res: Response, data?: any, message: string = "Profile deleted successfully"){
        res.status(201).json({
            success: true,
            message,
            data
        });
    }
}

export default ResponseHelper;