import { z } from 'zod';
import { zodMongoObjectId } from '../../utils/zod';

const requiredFields = z
    .object({
        name: z.string(),
        email: z.email(),
    })
    .required();

// GET /api/template
export const getByQueryRequestSchema = z.object({
    query: z
        .object({
            step: z.coerce.number().min(0).default(0),
            limit: z.coerce.number().optional(),
        })
        .extend(requiredFields.partial().shape),
});

// GET /api/template/count
export const getCountRequestSchema = z.object({
    query: requiredFields.partial(),
});

// GET /api/template/:id
export const getByIdRequestSchema = z.object({
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// POST /api/template
export const createOneRequestSchema = z.object({
    body: requiredFields,
});

// PUT /api/template/:id
export const updateOneRequestSchema = z.object({
    body: requiredFields.partial(),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// DELETE /api/template/:id
export const deleteOneRequestSchema = z.object({
    params: z.object({
        id: zodMongoObjectId,
    }),
});
