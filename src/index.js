// import _ from "lodash";
// import "./print";
import { file, parse } from './globals.js'

function component() {
    let element = document.createElement('div');

    // element.innerHTML = join(['Hello', 'webpack'], ' ');
    console.log('file', file);
    parse();
    require('./script.exec.js');
    require('./script.test.js');


    // 不会重复运行
    require('./script.exec.js');
    require('./script.test.js');
    return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))