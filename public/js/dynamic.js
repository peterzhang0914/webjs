fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})


//选择dom
const weatherForm = document.querySelector('form')
const inputElement = document.querySelector('input')
const tempElement = document.querySelector('#temp')
const windElement = document.querySelector('#wind')
const locElement = document.querySelector('#loc')


//添加事件监听
weatherForm.addEventListener('submit', (e) => {
    //禁止浏览器刷新
    e.preventDefault();
    //获取input中的值
    const address = inputElement.value
    if (!address) {
        console.log('Address are required')
    } else {
        tempElement.textContent = 'Loading...'
        locElement.textContent = ''
        windElement.textContent = ''
        // 访问本机URL (http://localhost:3000/) 可以被缩写成 /
        const requestURL = '/weather?address=' + encodeURIComponent(address)
        fetch(requestURL).then((res) => {
            res.json().then((res) => {
                if (res.errno !== 0) {
                    tempElement.textContent = 'Unable to load result, try again later. ' + res.msg
                    console.log(res.msg)
                } else {
                    console.log(res)
                    tempElement.textContent = res.data.temperature
                    locElement.textContent = res.data.loc
                    windElement.textContent = res.data.wind_speed
                }

            })
        })
    }

})
