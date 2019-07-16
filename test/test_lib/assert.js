const chai = require("chai");
//引入断言的风格
const assert = chai.assert;

describe("Demo", function () {
    it("使用 assert风格的断言测试", function () {
        var value = "hello";
        //断言value值的类型为字符串
        assert.typeOf(value, "string");
        //断言value值等于"hello"
        assert.equal(value, "hello");
        //断言value值的长度为5
        assert.lengthOf(value, 5);
    })
})