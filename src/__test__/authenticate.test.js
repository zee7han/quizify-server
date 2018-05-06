'use strict';


import mockKnex from 'mock-knex';

const tracker = mockKnex.getTracker();

const req = {
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ6ZWU3aGFuIiwiaWF0IjoxNTE4MDg3NTg1fQ.AzbFd8CnXUGV8snqML8XqsYMyBP7VWoT2MedOfXNwyk"
  }
}

const invalidReq = {
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5MDg3NTg1fQ.AzbFd8CnXUGV8BP7VWoT2MedOfXNwyk"
  }
}

const emptyReq = {
  headers: {
    authorization: null
  }
}

const fakeReq = {
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJwb29uYW0xLmNoYXVoYW4iLCJpYXQiOjE1MjA2MDAwMjd9.sUeT7M9R6bdj_FX6g2oV7GO0GPKlj78dI1bsPvoGeCs"
  }
}


let resp = () => {

};



var res = {
  statusCode: null,
  body: "",
  json: function(obj) {
    this.body = obj.error
    return this;
  },
  status: function(code) {
    this.statusCode = code;
    return this;
  }
}



const next = () => {};


import authenticate from '../middlewares/authenticate';

describe('Check authentication', () => {
  tracker.install();

  describe('Check for the valid authentication', () => {
    beforeAll(() => {
      tracker.on('query', (query) => {
        const results = [{
          id: 1,
          name: 'Mohammad Zeeshan',
          username: 'mohammad.zeeshan',
          email: 'mohammad.zeeshan@mail.com',
          role: 'Admin'
        }];
        query.response(results);
      });
    });
    test('Check for the correct user', () => {
      authenticate(req, res, next).then(() => {
        expect(req.currentUser.attributes.name).toBe('Mohammad Zeeshan');
        expect(req.currentUser.attributes).toHaveProperty('length', 1);
        expect(req.currentUser.attributes).toHaveProperty('role');
        expect(req.currentUser.attributes.email).toBe('mohammad.zeeshan@mail.com');
        expect(req.currentUser.attributes).toHaveProperty('username', 'mohammad.zeeshan');
      })
    });

    test('Check for the invalid token', () => {
      authenticate(invalidReq, res, next).catch((err) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toBe('Failed to authenticate');
      })
    });

    test('Check for no token provided', () => {
      authenticate(emptyReq, res, next).catch((err) => {
        expect(res.statusCode).toBe(403);
        expect(res.body).toBe('No token provided');
      })
    });

  });

  describe('Check for the no such user authentication', () => {
    beforeAll(() => {
      tracker.on('query', (query) => {
        const results = [];
        query.response(results);
      });
    });
    test('Check for no such user', () => {
      authenticate(fakeReq, res, next).catch((err) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toBe('No such user');
      })
    });


  });
});
