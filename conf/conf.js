const path = require('path')

const root_path = path.dirname(__dirname)
const public_path = path.join(root_path, 'public')
const static_path = path.join(root_path, 'static')
const views_path = path.join(root_path, 'templates', 'views')
const widgets_path = path.join(root_path, 'templates', 'widgets')
module.exports = {
    root_path,
    public_path,
    static_path,
    views_path,
    widgets_path
}