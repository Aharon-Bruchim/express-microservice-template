import { NextFunction, Request, Response } from 'express';
import { ReqSchema, TypedRequest, SchemaOutput } from '../zod';

export const wrapMiddleware = (func: (req: Request, res?: Response) => Promise<void>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res).then(next).catch(next);
    };
};

export const wrapController = <T extends ReqSchema>(fn: (req: TypedRequest<T>, res: Response, next?: NextFunction) => Promise<void>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req as unknown as TypedRequest<T>, res, next).catch(next);
    };
};

export const validateRequest = <T extends ReqSchema>(schema: T) => {
    return wrapMiddleware(async (req: Request) => {
        const parsed: SchemaOutput<T> = await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        const r = req as unknown as TypedRequest<T>;
        r.body = parsed.body as typeof r.body;
        r.query = parsed.query as typeof r.query;
        r.params = parsed.params as typeof r.params;
    });
};
