import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import miscellaneousServer from '../api/miscellaneous/index';
import userServer from '../api/users/index';
import {
  loginUser, wrongAccessToken
} from './mocks/mockUsers';
import {
  patchObject, imageUrl, invalidImageUrl
} from './mocks/mockMiscellaneous';

chai.use(chaiHttp);

let token;
describe('Tests for miscellaneous', () => {
  before(async () => {
    const { body: { accessToken } } = await chai.request(userServer)
      .post('/users/login')
      .send(loginUser);
    token = accessToken;
  });

  describe('Tests for json Patch Object', () => {
    it('should Patch Object successfully if request is correct', async () => {
      const res = await chai.request(miscellaneousServer)
        .patch('/jsonpatch')
        .set('Authorization', `${token}`)
        .send(patchObject);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an.instanceof(Object)
        .and.to.have.property('patchedObject')
        .that.includes.all.keys('firstName', 'contactDetails');
    });

    it('should return error if token is invalid', async () => {
      const res = await chai.request(miscellaneousServer)
        .patch('/jsonpatch')
        .set('Authorization', `${wrongAccessToken}`)
        .send(patchObject);
      expect(res).to.have.status(403);
      expect(res.body).to.be.an.instanceof(Object)
        .that.includes.all.keys([
          'auth', 'message'
        ]);
      expect(res.body.auth).to.equal('false');
      expect(res.body.message).to.equal('Failed to authenticate token');
    });

    it('should return error if no token is provided', async () => {
      const res = await chai.request(miscellaneousServer)
        .patch('/jsonpatch')
        .send(patchObject);
      expect(res).to.have.status(403);
      expect(res.body).to.be.an.instanceof(Object)
        .that.includes.all.keys([
          'auth', 'message'
        ]);
      expect(res.body.auth).to.equal('false');
      expect(res.body.message).to.equal('No token provided');
    });
  });

  describe('Tests for creating thumbnail', () => {
    it('should create thumbnail successfully if request is correct', async () => {
      const res = await chai.request(miscellaneousServer)
        .post('/thumbnail')
        .set('Authorization', `${token}`)
        .send(imageUrl);
      expect(res).to.have.status(200);
    });

    it('should return an error if image url is correct', async () => {
      const res = await chai.request(miscellaneousServer)
        .post('/thumbnail')
        .set('Authorization', `${token}`)
        .send(invalidImageUrl);
      expect(res).to.have.status(400);
    });

    it('should return error if token is invalid', async () => {
      const res = await chai.request(miscellaneousServer)
        .post('/thumbnail')
        .set('Authorization', `${wrongAccessToken}`)
        .send(imageUrl);
      expect(res).to.have.status(403);
      expect(res.body).to.be.an.instanceof(Object)
        .that.includes.all.keys([
          'auth', 'message'
        ]);
      expect(res.body.auth).to.equal('false');
      expect(res.body.message).to.equal('Failed to authenticate token');
    });

    it('should return error if no token is provided', async () => {
      const res = await chai.request(miscellaneousServer)
        .post('/thumbnail')
        .send(imageUrl);
      expect(res).to.have.status(403);
      expect(res.body).to.be.an.instanceof(Object)
        .that.includes.all.keys([
          'auth', 'message'
        ]);
      expect(res.body.auth).to.equal('false');
      expect(res.body.message).to.equal('No token provided');
    });
  });
});
