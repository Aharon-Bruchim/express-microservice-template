import { Response } from 'express';
import { TypedRequest } from '../../utils/zod';
import { TemplateManager } from './manager';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getByIdRequestSchema,
    getByQueryRequestSchema,
    getCountRequestSchema,
    updateOneRequestSchema,
} from './validations';

export class TemplateController {
    static getByQuery = async (req: TypedRequest<typeof getByQueryRequestSchema>, res: Response) => {
        const { step, limit, ...query } = req.query;

        res.json(await TemplateManager.getByQuery(query, step, limit));
    };

    static getCount = async (req: TypedRequest<typeof getCountRequestSchema>, res: Response) => {
        res.json(await TemplateManager.getCount(req.query));
    };

    static getById = async (req: TypedRequest<typeof getByIdRequestSchema>, res: Response) => {
        res.json(await TemplateManager.getById(req.params.id));
    };

    static createOne = async (req: TypedRequest<typeof createOneRequestSchema>, res: Response) => {
        res.json(await TemplateManager.createOne(req.body));
    };

    static updateOne = async (req: TypedRequest<typeof updateOneRequestSchema>, res: Response) => {
        res.json(await TemplateManager.updateOne(req.params.id, req.body));
    };

    static deleteOne = async (req: TypedRequest<typeof deleteOneRequestSchema>, res: Response) => {
        res.json(await TemplateManager.deleteOne(req.params.id));
    };
}
