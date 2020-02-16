console.log('hi');

import { PythonShell } from 'python-shell';

const input = {
    message: 'hello world',
    number: 3
}
let options = {
    // mode: "json",
    // pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'src/python',
    args: [JSON.stringify(input)]
  };
   
  PythonShell.run('script.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });