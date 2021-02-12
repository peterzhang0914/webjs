const express = require('express')
const conf = require('../conf/conf')
const app = express()

// 1. 模板引擎设置
// 设置模板引擎hbs, hbs默认使用项目根目录中的views文件夹存储模板
// Error: Failed to lookup view "help" in views directory "/Users/zhangfan/WebstormProjects/webjs/views"
app.set('view engine', 'hbs')
app.set('views', conf.views_path)
//
// 2. 映射url到静态文件夹
//映射 route 到 public 文件夹
// app.use('/public', express.static(conf.public_path))
// 映射 默认 / 到 public 文件夹
app.use(express.static(conf.public_path))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Index Page',
        admin: 'peter.zhang@znet.online'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me page',
        tip: 'You can contact site admin at peter.zhang@znet.online for any issue.'
    })
})

app.get('/auth', (req, res) => {
    res.send('Authenticate Page')
})
//example.com
//example.com/auth
//example.com/about

app.listen(3000, () => {
    console.log('Server is up on port : 3000.')
})