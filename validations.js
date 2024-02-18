import {body} from "express-validator";

export const loginValidation=[
  body('email',"Невірний формат пошти").isEmail(),
  body('password', "Пароль має мати не менше 5 символів").isLength({min:5})

]

export const registerValidation=[
  body('email',"Невірний формат пошти").isEmail(),
  body('password', "Пароль має мати не менше 5 символів").isLength({min:5}),
  body('fullName',"Вкажіть ваше ім'я").isLength({min:3}),
  body('avatarUrl',"Невірне посилання на фото").optional().isURL(),

]

export const postCreateValidation=[
  body('title',"Введіть заголовок статті").isLength({min:3}).isString(),
  body('text', "Введіть текст статті").isLength({min:10}).isString(),
  body('tags',"Невірний формат тегів (вкажіть масив)").optional().isArray(),
  body('imageUrl',"Невірне посилання зображення").optional().isString(),

]
