const chai = require("chai");
const should = chai.should();

describe("Demo", () => {
    it("使用 should风格的断言测试", function () {
        var value = "hello";
        /* //value应该存在
        value.should.exist
        //value的数字类型应该是一个字符串
        value.should.be.a("string");
        //value值应该等于"hello"
        value.should.equal("hello");
        //value值不等于"你好"
        value.should.not.equal("你好");
        //value的长度应该为5
		value.should.have.length(5); */
        value.should.exist
            .and.be.a("string")
            .and.equal("hello")
            .and.have.length(5)

    })
})