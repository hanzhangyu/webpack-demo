// 这是一个老旧的模块，里面使用全局变量来导出值，通过添加 export 转化为一个module
var file = 'blah.txt';
var helpers = {
    test: function() { console.log('test something'); },
    parse: function() { console.log('parse something'); }
};