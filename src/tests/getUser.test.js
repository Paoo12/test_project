const { getUserFromDatabase } = require('../functions/getUser.js')

//mocking the entire database module
jest.fn('../src/database');

//test suite
test('fetch user from database', () => {
    jest.fn().mockReturnValue({ id: 1, name: 'Chupapi' });
    const user = getUserFromDatabase(1);
    expect(user.name).toBe('Chupapi');
});