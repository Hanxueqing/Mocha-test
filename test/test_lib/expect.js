const chai = require("chai");
const expect = chai.expect;

describe("Demo", () => {
    it("使用 expect风格的断言测试", function () {
        var number = 3;
        //判断number是否在3~5之间的数
        expect(number).to.be.at.most(5);
        expect(number).to.be.at.least(3);
        //判断number是否在1~3之间的数
        expect(number).to.be.within(1, 3);

        /* var value = "hello";
        //value应该存在
        expect(value).to.exist;
        //value的数字类型应该是一个字符串
        expect(value).to.be.a("string");
        //value值应该等于"hello"
        expect(value).to.equal("hello");
        //value值不等于"你好"
        expect(value).to.not.equal("你好");
        //value的长度应该为5
        expect(value).to.have.length(5); */
    })
})