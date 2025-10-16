"use strict";
/*
    Необходимо сделать тип для результата валидации
    формы, основываясь на типе формы
*/
const form = {
    name: 'Вася',
    password: '123',
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длинее 5 символов' },
};
