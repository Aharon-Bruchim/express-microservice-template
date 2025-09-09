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
    body: z.object({}),
    query: z
        .object({
            step: z.coerce.number().min(0).default(0),
            limit: z.coerce.number().optional(),
        })
        .extend(requiredFields.partial().shape),
    params: z.object({}),
});

// GET /api/template/count
export const getCountRequestSchema = z.object({
    body: z.object({}),
    query: requiredFields.partial(),
    params: z.object({}),
});

// GET /api/template/:id
export const getByIdRequestSchema = z.object({
    body: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
    query: z.object({}),
});

// POST /api/template
export const createOneRequestSchema = z.object({
    body: requiredFields,
    params: z.object({}),
    query: z.object({}),
});

// PUT /api/template/:id
export const updateOneRequestSchema = z.object({
    body: requiredFields.partial(),
    params: z.object({
        id: zodMongoObjectId,
    }),
    query: z.object({}),
});

// DELETE /api/template/:id
export const deleteOneRequestSchema = z.object({
    body: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
    query: z.object({}),
});
