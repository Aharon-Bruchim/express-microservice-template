import { Router } from 'express';
import { validateRequest, wrapController } from '../../utils/express/wrappers';
import { TemplateController } from './controller';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getByIdRequestSchema,
    getByQueryRequestSchema,
    getCountRequestSchema,
    updateOneRequestSchema,
} from './validations';

export const templateRouter = Router();

templateRouter.get('/', validateRequest(getByQueryRequestSchema), wrapController(TemplateController.getByQuery));

templateRouter.get('/count', validateRequest(getCountRequestSchema), wrapController(TemplateController.getCount));

templateRouter.get('/:id', validateRequest(getByIdRequestSchema), wrapController(TemplateController.getById));

templateRouter.post('/', validateRequest(createOneRequestSchema), wrapController(TemplateController.createOne));

templateRouter.put('/:id', validateRequest(updateOneRequestSchema), wrapController(TemplateController.updateOne));

templateRouter.delete('/:id', validateRequest(deleteOneRequestSchema), wrapController(TemplateController.deleteOne));
