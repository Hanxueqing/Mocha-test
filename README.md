## Mocha测试框架和项目实例



### 一、什么是Mocha

Mocha（发音"摩卡"）诞生于2011年，是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。所谓"测试框架"，就是运行测试的工具。通过它，可以为JavaScript应用添加测试，从而保证代码的质量。



### 二、Mocha安装和准备

前期准备：安装vue-cli脚手架、安装node、安装Git



（1）先用vue-cli创建一个vue-test项目

```
vue create vue-test
```

（2）全局安装mocha

```
npm i mocha -g
```

将mocha安装到本地目录

```
npm i mocha -D
```

（3）修改package.json中的test路径为我们本地的mocha路径

```
"test": "./node_modules/mocha/bin/mocha"
```

![](http://ww4.sinaimg.cn/large/006tNc79ly1g51gl5z4ejj30sw0gg0uz.jpg)



### 三、测试框架

#### 1、创建test文件夹

测试脚本都存放在test文件夹中



#### 2、编写测试框架

创建test/demo.js

```js
describe("Demo", function(){
	describe("方法 1", function(){
		context("情境 1", function(){
			before(function(){
				console.log("-----测试之前------");
			});
			after(function(){
				console.log("-----测试之后------");
			});
			beforeEach(function(){
				console.log("-------每条测试之前---------");
			})
			afterEach(function(){
				console.log("-------每条测试之后---------");
			})
			it("测试 1", function(){

			})
			it("测试 2", function(){
				
			})
		})
	})
})
```

上面这段代码，就是测试脚本，它可以独立执行。测试脚本里面应该包括一个或多个`describe`块，每个`describe`块应该包括一个或多个`it`块。

**describe**

`describe`块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"Demo"），第二个参数是一个实际执行的函数。

**it**

`it`块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"测试1"），第二个参数是一个实际执行的函数。



**测试用例的钩子**

Mocha在`describe`块之中，提供测试用例的四个钩子：`before()`、`after()`、`beforeEach()`和`afterEach()`。它们会在指定时间执行。



befor：定义测试之前进行的操作

after：定义测试之后进行的操作

beforeEach：定义每条测试之前进行的操作

afterEach：定义每条测试之后进行的操作



#### 3、进行测试

执行`mocha `命令使用全局安装的mocha进行测试或者执行`npm test`命令使用本地安装的mocha进行测试

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51h0z6lhcj30n00c6wfr.jpg)



### 四、断言库chai

所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。

#### 1、全局安装chai模块

```
npm i chai -g
```



#### 2、本地安装chai模块

```
npm i chai -D
```



#### 3、断言风格

断言库有很多种，Mocha并不限制使用哪一种。



##### assert风格的断言

在test文件夹下新建test_lib文件夹，创建assert.js编写测试脚本。

```js
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
```



进入test_lib文件夹下，执行`mocha assert.js`运行测试脚本，因为我们这三个断言都是真的，所以测试通过。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51hu8pvh6j30y20u079j.jpg)



##### should风格断言

创建should.js编写测试脚本。

```js
const chai = require("chai");
const should = chai.should();

describe("Demo", () => {
    it("使用 should风格的断言测试", function () {
        var value = "hello";
        //value应该存在
        value.should.exist
        //value的数字类型应该是一个字符串
        value.should.be.a("string");
        //value值应该等于"hello"
        value.should.equal("hello");
        //value值不等于"你好"
        value.should.not.equal("你好");
        //value的长度应该为5
				value.should.have.length(5);
        

    })
})

```

我们也可以换成另一种更简洁的写法，使用and连接断言

```js
value.should.exist
            .and.be.a("string")
            .and.equal("hello")
            .and.have.length(5)

```



进入test_lib文件夹下，执行`mocha should.js`运行测试脚本，因为我们这五个断言都是真的，所以测试通过。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51np7iz9zj30qk0asjsj.jpg)



##### expect风格断言

`expect`断言的优点是很接近自然语言



创建expect.js编写测试脚本。

```js
const chai = require("chai");
const expect = chai.expect;

describe("Demo", () => {
    it("使用 expect风格的断言测试", function () {
        var value = "hello";
        //value应该存在
        expect(value).to.exist;
        //value的数字类型应该是一个字符串
        expect(value).to.be.a("string");
        //value值应该等于"hello"
        expect(value).to.equal("hello");
        //value值不等于"你好"
        expect(value).to.not.equal("你好");
        //value的长度应该为5
        expect(value).to.have.length(5);
    })
})

```

进入test_lib文件夹下，执行`mocha expect.js`运行测试脚本，因为我们这五个断言都是真的，所以测试通过。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51iaao8ujj30s60bgmyc.jpg)

同样我们也可以定义一个数字，使用expect断言来判断数字的区间

```js
var number = 3;
        //判断number是否在3~5之间的数
        expect(number).to.be.at.most(5);
        expect(number).to.be.at.least(3);
        //判断number是否在1~3之间的数
        expect(number).to.be.within(1, 3);

```



### 五、编写测试脚本

Mocha的作用是运行测试脚本，首先必须学会写测试脚本。所谓"测试脚本"，就是用来测试源码的脚本。



#### 1、测试返回结果是否正确

（1）创建被测试的项目lib/demo-1.js

```js
class Demo {
    subtotal(unitPrice, quantity) {
        return unitPrice * quantity;
    }
}
module.exports = Demo;

```

（2）创建测试脚本test/demo-1.test.js

通常，测试脚本与所要测试的源码脚本同名，但是后缀名为`.test.js`（表示测试）或者`.spec.js`（表示规格）。比如，`demo-1.js`的测试脚本名字就是`demo-1.test.js`。

```js
//demo-1.test.js
const chai = require("chai");
const expect = chai.expect;

var Demo = require("../lib/demo-1");
var demo = new Demo();
describe("Demo",()=>{
    it("单价10块钱的3件商品小计金额应该是30块",function(){
        var subtotal = demo.subtotal(10,3);
        expect(subtotal).to.equal(30);
    })
})

```



#### 2、异步操作测试setTimeout

（1）Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用`-t`或`--timeout`参数指定超时门槛。

进入lib/demo-1.js，编写异步等待方法，规定2秒之后返回结果

```js
waitTwoSecond(data,callback){
        setTimeout(function(){
            callback(data);
        },2000);
    }

```

（2）进入test/demo-1.test.js，编写测试脚本

```js
//异步操作测试
    //mocha不会等到异步执行结束以后进行测试，而是直接运行得到测试结果
    it("一段时间以后返回数据",function(done){
        demo.waitTwoSecond("hello",function(data){
            expect(data).to.equal("hello")
            done(); //只有调用done方法才能等待调用结束以后测试
            //mocha默认的等待时间是2秒，上述操作超过两秒，报错
            //运行命令mocha demo-1.test.js -t 5000重置等待时间解决
        })
    })

```

另外，上面的测试用例里面，有一个`done`函数。`it`块执行的时候，传入一个`done`参数，当测试结束的时候，必须显式调用这个函数，告诉Mocha测试结束了。否则，Mocha就无法知道，测试是否结束，会一直等到超时报错。如果把这行删除，则mocha不会等到异步执行结束以后进行测试，而是直接运行得到测试结果，返回的断言结果始终为真。

（3）虽然测试用例中规定2秒返回结果，但是实际运行时间肯定超过2秒，所以，需要用`-t`或`--timeout`参数，改变默认的超时设置。

```
mocha demo-1.test.js -t 5000

```

上面命令将测试的超时时限指定为5000毫秒。



#### 3、测试接口数据https

接口地址https://douban.uieee.com/v2/movie/top250

![](http://ww4.sinaimg.cn/large/006tNc79ly1g51m8scdd2j31a50u00zd.jpg)



（1）lib/demo-1.js

引入https模块

```
var https = require("https");

```

定义fetchData方法

```js
fetchData(api,callback){
        var requestUrl = `https://douban.uieee.com/v2/movie/${api}`;
        https.get(requestUrl,function(res){
            var responseData = ""
            res.setEncoding("utf8")

            res.on("data",function(chunk){
                responseData += chunk
            })

            res.on("end",function(){
                callback(JSON.parse(responseData))
            })
        })
    }

```

（2）test/demo-1.test.js

```js
it("加载豆瓣api，返回的数据，应该包含subjects属性",function(done){
        demo.fetchData("top250",function(data){
            expect(data).to.have.property("subjects");
            done();
        })
    })

    it("加载豆瓣api，返回的数据，subjects应为对象类型", function (done) {
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

```

（3）运行结果

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51m9o7bv9j30uy0bmtbc.jpg)



#### 4、测试异常

（1）lib/demo-1.js

```js
engine(fuel){
        if(fuel !== "gas"){
            throw new Error("not accept")
        }
    }

```



（2）test/demo-1.test.js

```js
//定义一个异常
    it("给汽车引擎加水是不能接受的事情",function(){
        expect(function(){
            demo.engine("water");
        }).to.throw("not accept")
    })

```

```js
//另外一种写法
    it("给汽车引擎加水是不能接受的事情",function(){
        expect(demo.engine.bind(demo,"water")).to.throw("not accept")
    })

```

（3）测试结果

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51mjg4wbaj30n006e74w.jpg)



### 六、运行多个测试

#### 1、直接使用mocha命令运行test子目录中的测试脚本

Mocha默认运行`test`子目录里面的测试脚本。所以，一般都会把测试脚本放在`test`目录里面，然后执行`mocha`就不需要参数了。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51mo3a6jhj30be08ejs0.jpg)

所以在控制台中输入`mocha`，只会执行test子目录里的测试脚本demo-1.test.js和demo.js，而test_lib中的assert.js、expect.js、should.js则不会执行。

运行结果：

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51mo4rvwxj30nc0ls411.jpg)

#### 2、执行test子目录下面所有的测试用例

这时可以看到，`test`子目录里面的测试脚本执行了。但是，你打开`test`子目录，会发现下面还有一个`test/test_lib`子目录，里面还有三个测试脚本`assert.js、expect.js、should.js`，并没有得到执行。Mocha默认只执行`test`子目录下面第一层的测试用例，不会执行更下层的用例。

为了改变这种行为，就必须加上`--recursive`参数，这时`test`子目录下面所有的测试用例，不管在哪一层，都会执行。

```
mocha --recursive

```

运行结果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51mvkddl2j30t40tin0w.jpg)

#### 3、执行多个测试脚本

`mocha`命令后面紧跟测试脚本的路径和文件名，可以指定多个测试脚本。

进入tets_lib目录下，运行assert.js和should.js两个测试脚本

```
mocha assert.js should.js

```

运行结果

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51mqo2himj30tw0dywfz.jpg)





### 七、测试用例管理

#### 1、only表示只运行某个测试套件或测试用例。

大型项目有很多测试用例。有时，我们希望只运行其中的几个，这时可以用`only`方法。`describe`块和`it`块都允许调用`only`方法，表示只运行某个测试套件或测试用例。

```js
it.only("单价10块钱的3件商品小计金额应该是30块",function(){
        var subtotal = demo.subtotal(10,3);
        expect(subtotal).to.equal(30);
    })

```

运行结果：只运行了添加only方法的测试脚本

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51pm5amvdj30pe08qab2.jpg)



#### 2、skip表示跳过指定的测试套件或测试用例。

```js
it.skip("一段时间以后返回数据",function(done){
        demo.waitTwoSecond("hello",function(data){
            expect(data).to.equal("hello")
            done(); //只有调用done方法才能等待调用结束以后测试
            //mocha默认的等待时间是2秒，上述操作超过两秒，报错
            //运行命令mocha demo-5.js -t 5000重置等待时间解决
        })
    })

```

运行结果：跳过了添加skip方法的测试脚本

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51plxaqyzj31160o2wj9.jpg)

### 八、ES6测试



#### 1、ES5写法

src/add.js

```
function add(x, y) {
    return x + y;
}

module.exports = add;

```

test/demo-2.test.js

```
const chai = require("chai");
const expect = chai.expect;
var Add = require("../src/add.js");

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(Add(1, 1)).to.be.equal(2);
    });
});


```

运行命令

```
mocha

```

运行结果

![](http://ww4.sinaimg.cn/large/006tNc79ly1g51qdj89qjj30mg07g74x.jpg)



#### 2、ES6写法

test/demo-2.test.js

```
const chai = require("chai");
const expect = chai.expect;
var Add = require("../src/add.js");

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(Add(1, 1)).to.be.equal(2);
    });
});


```



如果测试脚本是用ES6写的，那么运行测试之前，需要先用Babel转码。

（1）安装Babel

```
npm install babel-core babel-preset-es2015 --save-dev

```

（2）在项目目录下面，新建一个.babelrc文件：

```
{
  "presets": [ "es2015" ]
}

```



运行命令

```
./node_modules/mocha/bin/mocha --require babel-core/register

```

运行结果

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51qekxsk9j315w07gq3v.jpg)



### 九、测试报告

运行` mocha --reporters`可以显示所有内置的报告格式。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51oh5io22j30w80cs770.jpg)



#### 1、spec格式

`--reporter`参数用来指定测试报告的格式，默认是`spec`格式。

```
mocha
等同于
mocha --reporter spec

```

运行结果：

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51of6t01nj311c0k242n.jpg)

#### 2、tap格式

```
mocha --reporter tap

```

运行结果：

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51ogaki8gj30y00cs0v7.jpg)



#### 3、HTML格式

使用`mochawesome`模块，可以生成漂亮的HTML格式的报告。

（1）安装`mochawesome`模块

```
npm install --save-dev mochawesome

```

（2）执行测试命令

```
./node_modules/.bin/mocha --reporter mochawesome

```

上面代码中，`mocha`命令使用了项目内安装的版本，而不是全局安装的版本，因为`mochawesome`模块是安装在项目内的。

（3）运行结果：

![](http://ww4.sinaimg.cn/large/006tNc79ly1g51nj311r7j31es0r2dmg.jpg)

（4）测试结果报告在`mochaawesome-reports`子目录生成。

![](http://ww1.sinaimg.cn/large/006tNc79ly1g51nff8449j30h0058dgc.jpg)

（5）在浏览器中浏览html格式的测试报告

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51nk2x8imj314c0u07ce.jpg)



### 十、生成测试文件

Mocha支持从测试用例生成规格文件。



#### 1、Markdown格式

```
mocha demo-1.test.js --recursive -R markdown > spec.md

```

上面命令根据`test`目录的demo-1.test.js测试脚本，生成一个规格文件[`spec.md`](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fruanyf%2Fmocha-demos%2Fblob%2Fmaster%2Fdemo09%2Fspec.md)。`-R markdown`参数指定规格报告是markdown格式。

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51qn4i5lrj30u010k1cq.jpg)

#### 2、HTML格式

```
mocha demo-1.test.js --recursive -R doc > spec.html

```

上面命令根据`test`目录的demo-1.test.js测试脚本，生成一个规格文件`spec.html`.

![](http://ww3.sinaimg.cn/large/006tNc79ly1g51qpfmmipj30u017ddmx.jpg)



### 十一、在浏览器中测试

除了在命令行运行，Mocha还可以在浏览器运行。

1、首先，使用`mocha init`命令在指定目录生成初始化文件。

```
mocha init vue-test

```

运行上面命令，就会在vue-test目录下生成`index.html`文件，以及配套的脚本和样式表。

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Mocha</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mocha.css">
  </head>
  <body>
    <div id="mocha"></div>
    <script src="mocha.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="tests.js"></script>
    <script>
      mocha.run();
    </script>
  </body>
</html>

```

2、新建一个源码文件add.js

```js
function add(x, y) {
    return x + y;
}

module.exports = add;

```

3、新建一个测试脚本tests.js

```js
var expect = chai.expect;

describe('加法函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0等于自身', function () {
        expect(add(1, 0)).to.be.equal(1);
        expect(add(0, 0)).to.be.equal(0);
    });
});

```

4、然后，把这个文件，以及断言库`chai.js`，加入`index.html`。

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Mocha</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mocha.css">
  </head>
  <body>
    <div id="mocha"></div>
    <script src="mocha.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="add.js"></script>
    <script src="http://chaijs.com/chai.js"></script>
    <script src="tests.js"></script>
    <script>
      mocha.run();
    </script>
  </body>
</html>

```



5、现在，在浏览器里面打开`index.html`，就可以看到测试脚本的运行结果。

![](http://ww2.sinaimg.cn/large/006tNc79ly1g51r426kc1j313k0fi762.jpg)



### 参考文档

mocha官网

https://mochajs.org/



测试框架 Mocha 实例教程 by 阮一峰

https://juejin.im/entry/5941ea698d6d810058bff709



【前端单元测试入门01】Mocha与chai

https://www.jianshu.com/p/aa53ac34e4c0



vue项目中添加单元测试

https://blog.csdn.net/weixin_33739523/article/details/92436029



vue官网-单元测试模块

https://cn.vuejs.org/v2/guide/unit-testing.html#ad




