const express = require('express')
const fs = require('fs')
const app = express()

app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
})

app.get('/home/multidata', function (req, res) {
  fs.readFile('./data/homedata/multidata.json', function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/tabdata', function (req, res) {
  fs.readFile('./data/homedata/tabdata.json', function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/homedata', function (req, res) {
  console.log(req.query)
  //判断参数
  const path=`./data/homedata/${req.query.type}${req.query.page}.json`
  // console.log(path)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send((JSON).parse(data))
  })
})
app.get('/detail', function (req, res) {
  console.log(req.query)
  //判断参数
  const path=`./data/homedata/${req.query.iid}.json`
  // console.log(path)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send((JSON).parse(data))
  })
})

app.get('/category/categorydata', function (req, res) {
  fs.readFile('./data/categorydata/category.json', function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/category/subcategory', function (req, res) {
  // const path=`./data/categorydata/subcategory${req.query.maitKey}.json`
    const path=`./data/categorydata/subcategory582.json`

  console.log(req)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send(err)
    }
    console.log('分类')
    res.send(JSON.parse(data))

    // res.send(req.query)
  })
})


app.listen(8000,function () {
console.log('server is running...')
})
