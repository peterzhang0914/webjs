const express = require('express')
const conf = require('../conf/conf')
const hbs = require('hbs')
const app = express()
const {responseOK} = require('../utils/response')
const getGeoCode = require('../utils/geocode')
const getWeather = require('../utils/weather')
// 1. 模板引擎设置
// 设置模板引擎hbs, hbs默认使用项目根目录中的views文件夹存储模板
// Error: Failed to lookup view "help" in views directory "/Users/zhangfan/WebstormProjects/webjs/views"
app.set('view engine', 'hbs')
app.set('views', conf.views_path)
//公共组件注册通过hbs.registerPartials注册
hbs.registerPartials(conf.partial_path)

// 2. 映射url到静态文件夹
//映射 route 到 public 文件夹
// app.use('/public', express.static(conf.public_path))
// 映射 默认 / 到 public 文件夹
app.use(express.static(conf.public_path))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Index Page',
        admin: 'peter.zhang@znet.online',
        name: 'Page name is Index'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me page',
        tip: 'You can contact site admin at peter.zhang@znet.online for any issue.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me title'
    })
})

app.get('/auth', (req, res) => {
    res.send('Authenticate Page')
})
//example.com
//example.com/auth
//example.com/about

//获取请求参数

app.get('/Weather', (req, res) => {
    //req.query  { name: '' } 获取name的值
    if (!req.query.address) {
        const ret = responseOK(1, 'you must provide address params\' value')
        return res.send(ret)
    }

    getGeoCode(req.query.address, (err, {lon, lat, loc} = {}) => {
        if (err) {
            return res.send(responseOK(1, err, undefined))
        }
        getWeather(lon, lat, (err, resp) => {
            if (err) {
                return res.send(responseOK(1, err, undefined))
            }
            resp['loc'] = loc
            return res.send(responseOK(0, '', resp))
        })
    })
})


//404

app.get('*', (req, res) => {
    res.render('404', {
        error: 'page not found'
    })
})

app.listen(conf.port, () => {
    console.log('Server is up on port : ' + conf.port)
})