const request = require('supertest');
import {reloadPage} from "./index";
import "babel-polyfill"

describe('Post Endpoints', () => {
    it('should route to index.html', async () => {
        const res = await request(reloadPage)
            .get('/')
            .send('./dist/index.html')
        expect(res.statusCode).toEqual(200);
    })
})