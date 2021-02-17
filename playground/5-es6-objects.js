const name = 'Zhangfan'
const userAge = 31

const user = {
    name,
    age: userAge,
    location: 'Beijing City'
}

//object destructuring

const product = {
    label: 'Redmi Notebook',
    price: 3000,
    stock: 310000,
    netPrice: 4900,
    rating: 8
}

//TypeError: Cannot destructure property 'label' of 'undefined' as it is undefined.
// 如果没有传入第二个参数会报错，不能destructure
// 给第二个参数一个默认值，空对象：{ label, netPrice }={}
const transaction = (type, { label, netPrice = 4500 } = {}) => {
    console.log(type, label, netPrice)
}

transaction('PO', product)