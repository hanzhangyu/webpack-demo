// import _ from "lodash";
// import "./print";
import { file, parse } from './globals.js'

function component() {
    let element = document.createElement('div');

    // element.innerHTML = join(['Hello', 'webpack'], ' ');
    console.log('file', file);
    parse();

    return element;
}

document.body.appendChild(component());
