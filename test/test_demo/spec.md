# TOC
   - [Demo](#demo)
<a name=""></a>
 
<a name="demo"></a>
# Demo
单价10块钱的3件商品小计金额应该是30块.

```js
var subtotal = demo.subtotal(10,3);
expect(subtotal).to.equal(30);
```

加载豆瓣api，返回的数据，应该包含subjects属性.

```js
demo.fetchData("top250",function(data){
    expect(data).to.have.property("subjects");
    done();
})
```

加载豆瓣api，返回的数据，subjects应为数组类型.

```js
demo.fetchData("top250", function (data) {
    var subjects = data.subjects;
    expect(subjects).to.be.a("array");
    done();
})
```

加载豆瓣api，返回的数据，subjects长度应为20.

```js
demo.fetchData("top250", function (data) {
    var subjects = data.subjects;
    expect(subjects).to.have.length(20);
    done();
})
```

加载豆瓣api，返回的数据，title属性应该是字符串类型的.

```js
demo.fetchData("top250", function (data) {
    var title = data.subjects[0].title
    expect(title).to.be.a("string");
    expect(title).to.equal("肖申克的救赎")
    done();
})
```

给汽车引擎加水是不能接受的事情.

```js
expect(function(){
    demo.engine("water");
}).to.throw("not accept")
```

给汽车引擎加水是不能接受的事情.

```js
expect(demo.engine.bind(demo,"water")).to.throw("not accept")
```

