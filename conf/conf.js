const path = require('path')

const root_path = path.dirname(__dirname)
const public_path = path.join(root_path, 'public')
const static_path = path.join(root_path, 'static')
const views_path = path.join(root_path,'templates')
module.exports = {
    root_path,
    public_path,
    static_path,
    views_path
}