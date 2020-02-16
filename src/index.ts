import { PythonShell } from 'python-shell';

const input = {
    message: 'hello world',
    number: 4
}

let options = {
    mode: 'json' as 'json',
    // pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'src/python',
    args: [JSON.stringify(input)]
};

PythonShell.run('script.py', options, function (err, results) {
    if (err) {
        console.log(`error = ${err}`);
        throw err;
    }
    else {
        // do something with the result        
        console.log(results);
    }
})



