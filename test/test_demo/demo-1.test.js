//demo-1.test.js
const chai = require("chai");
const expect = chai.expect;

var Demo = require("../../lib/demo-1");
var demo = new Demo();
describe("Demo",()=>{
    it("单价10块钱的3件商品小计金额应该是30块",function(){
        var subtotal = demo.subtotal(10,3);
        expect(subtotal).to.equal(30);
    })

    //异步操作测试
    //mocha不会等到异步执行结束以后进行测试，而是直接运行得到测试结果

    //skip方法，表示跳过指定的测试套件或测试用例。
    it.skip("一段时间以后返回数据",function(done){
        demo.waitTwoSecond("hello",function(data){
            expect(data).to.equal("hello")
            done(); //只有调用done方法才能等待调用结束以后测试
            //mocha默认的等待时间是2秒，上述操作超过两秒，报错
            //运行命令mocha demo-5.js -t 5000重置等待时间解决
        })
    })

    it("加载豆瓣api，返回的数据，应该包含subjects属性",function(done){
        demo.fetchData("top250",function(data){
            expect(data).to.have.property("subjects");
            done();
        })
    })

    it("加载豆瓣api，返回的数据，subjects应为数组类型", function (done) {
        demo.fetchData("top250", function (data) {
            var subjects = data.subjects;
            expect(subjects).to.be.a("array");
            done();
        })
    })

    it("加载豆瓣api，返回的数据，subjects长度应为20", function (done) {
        demo.fetchData("top250", function (data) {
            var subjects = data.subjects;
            expect(subjects).to.have.length(20);
            done();
        })
    })

    it("加载豆瓣api，返回的数据，title属性应该是字符串类型的", function (done) {
        demo.fetchData("top250", function (data) {
            var title = data.subjects[0].title
            expect(title).to.be.a("string");
            expect(title).to.equal("肖申克的救赎")
            done();
        })
    })

    //定义一个异常
    it("给汽车引擎加水是不能接受的事情",function(){
        expect(function(){
            demo.engine("water");
        }).to.throw("not accept")
    })

    //另外一种写法
    it("给汽车引擎加水是不能接受的事情",function(){
        expect(demo.engine.bind(demo,"water")).to.throw("not accept")
    })

})