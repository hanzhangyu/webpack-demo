console.log(this === module.exports);
console.log(this === window);
this.alert('Hmmm, this probably isn\'t a great idea...'); // 没有使用 import-loader 时 this 为 module.exports