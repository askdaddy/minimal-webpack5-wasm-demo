// import { _Z4facti } from '../bak/factorial.wasm';
//
// console.log('---- Sync Wasm Module');
// const factorial = _Z4facti;
// console.log(factorial); // [native code]
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));

import MIF from "./wasm-lua.js";
import mifModule from "./wasm-lua.wasm";
const module = MIF({
    locateFile(path) {
        if (path.endsWith(`.wasm`)) {
            return mifModule
        }
        return path
    }
})

const app = await module;
console.dir(app);
const ret = app.hello();
console.log(ret);

// module.onRuntimeInitialized = () => {
//     console.log(module._hello());
// };
// import('./wasm-lua.wasm').then(m => {
//     console.log('---- Async Wasm Module');
//     console.log(m); // [native code]
//     // console.log(AsyncFactorial(1));
//     // console.log(AsyncFactorial(2));
//     // console.log(AsyncFactorial(3));
// });
