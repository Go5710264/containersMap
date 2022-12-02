import ErrorsRepository from '../ErrorRepository';

const errorThrow = new ErrorsRepository();

test.each([
  [404, 'Ошибка по вине пользователя'],
  [401, 'Необходима авторизация'],
  [503, 'Ошибка по вине сервера'],
])('testing the release of a bug under the number %d', (errorNumber, errorMassage) => {
  expect(errorThrow.translate(errorNumber)).toBe(errorMassage);
});

test('throwing an unknown error', () => {
  expect(errorThrow.translate(400)).toBe('Unknown error');
});
