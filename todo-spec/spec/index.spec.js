let request = require('supertest');

request = request('http://localhost:5000');

describe('Todos Fetching', () => {
	it('should return all todos', done => {
		request.get('/todo/api/v1.0/tasks').end((err, res) => {
			expect(res.statusCode).toBe(200);
			expect(err).toBeNull();
			// Should contain the default todos
			expect(res.body.tasks.length).toBe(2);
			done();
		});
	});
});
