export default class ErrorsRepository {
  constructor() {
    this.error = new Map([
      [404, 'Ошибка по вине пользователя'],
      [401, 'Необходима авторизация'],
      [503, 'Ошибка по вине сервера'],
    ]);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
