const { exec } = require('child_process');

function executeCommand(command) {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error executing command: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Command error: ${stderr}`);
			return;
		}
		console.log(`Command Output: \n${stdout}`);
	});
}

executeCommand('dir');

executeCommand('echo "Hello, Node.js!"');