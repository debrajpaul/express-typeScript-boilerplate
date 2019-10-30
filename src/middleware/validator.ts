import Ajv from "ajv";
import { fail } from "../utils/response-helpers";
import { Request, Response, NextFunction } from "express";

export function body_validator(schema: any) {
    return function(req: Request, res: Response, next: NextFunction) {
        let { body } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, body);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
}

export function params_validator(schema: any) {
    return function(req: Request, res: Response, next: NextFunction) {
        let { params } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, params);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
}

export function query_validator(schema: any) {
    return function(req: Request, res: Response, next: NextFunction) {
        let { query } = req;
        let ajv = new Ajv();
        let valid = ajv.validate(schema, query);
        if (!valid) {
            let error = ajv.errorsText();
            res.status(400).json(fail("Request validation failed", { error }));
            return;
        }
        next();
    };
}
