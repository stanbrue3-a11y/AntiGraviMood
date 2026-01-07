import { z } from 'zod';

export const SignupSchema = z.object({
    name: z.string().min(2, "Le nom doit faire au moins 2 caractères"),
    email: z.string().email("Format d'email invalide"),
    password: z.string().min(6, "Le mot de passe doit faire au moins 6 caractères"),
});

export type SignupFormValues = z.infer<typeof SignupSchema>;
