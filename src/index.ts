import { PythonShell } from 'python-shell';
import { config } from './config';

const input = {
    message: 'hello world',
    number: 4
}

let options = {
    mode: 'json' as 'json',
    // pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: config.python.path,
    args: [JSON.stringify(input)]
};

PythonShell.run(config.python.filename, options, function (err, results) {
    if (err) {
        console.log(`error = ${err}`);
        throw err;
    }
    else {
        // do something with the result        
        console.log(results);
    }
})



