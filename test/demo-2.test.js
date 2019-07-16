/* const chai = require("chai");
const expect = chai.expect;
var Add = require("../src/add.js"); */

//ES6写法
import Add from '../src/add.js';
import chai from 'chai';
let expect = chai.expect;


describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(Add(1, 1)).to.be.equal(2);
    });
});

//运行命令：./node_modules/mocha / bin / mocha--require babel - core / register
