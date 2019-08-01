import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../api/users/index';

import {
  loginUser, incorrectUserDetails,
} from './mocks/mockUsers';

chai.use(chaiHttp);


describe('Tests for login Customer', () => {
  it('should login customer if request is correct', async () => {
    const res = await chai.request(app)
      .post('/users/login')
      .send(loginUser);
    expect(res).to.have.status(200);
    expect(res.body).to.be.an.instanceof(Object)
      .that.includes.all.keys('username', 'accessToken', 'expires_in');
  });

  it('should return error if request to login customer is incorrect', async () => {
    const res = await chai.request(app)
      .post('/users/login')
      .send(incorrectUserDetails);
    expect(res).to.have.status(422);
    expect(res.body).to.be.an.instanceof(Object)
      .and.to.have.property('error')
      .that.includes.all.keys([
        'message', 'field'
      ]);
  });
});
