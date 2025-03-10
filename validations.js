import { body } from "express-validator";

export const loginValidation = [
    body('email', ' Неверный формат почты ').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5}),
]

export const registerValidation = [
    body('email', ' Неверный формат почты ').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5}),
    body('fullName', 'Имя должно быть минимум 3 символов').isLength({ min: 3}),
    body('avatarUrl', 'неверная ссылка на аватарку').optional().isURL(),
]

export const postCreateValidation = [
    body('title', 'Заголовок должно быть минимум 3 символов').isLength({ min: 3}).isString(),
    body('text', 'Текст статьи должно быть минимум 10 символов').isLength({ min: 10}).isString(),
    body('tags', 'Неверный формат тэгов (укажите массив)').optional().isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString(),
]

