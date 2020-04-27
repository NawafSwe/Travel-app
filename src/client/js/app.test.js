import {getting_info} from "../client";
import "babel-polyfill"

describe('Test, the function getting_info() should exist', () => {
    test('must return true', async () => {
        expect(getting_info).toBeDefined();
    });
});
describe('Test, the function "getting_info()" should be a function', () => {
    test('It must be a function', async () => {
        expect(typeof getting_info).toBe("function");
    });
});