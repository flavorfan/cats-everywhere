// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cats-everywhere" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cats-everywhere.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Cats Everywhere!');
		vscode.window.registerFileDecorationProvider({
			provideFileDecoration: (uri, token) => {
				const cat = '🐱';
				return new vscode.FileDecoration(cat,'cats everywhere');
			},
		});
		// status
		const status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
		status.name = 'cats everywhere';
		status.text = '🐱'
		status.show();
		status.command = 'cats-everywhere.helloStatus';

	});
	context.subscriptions.push(disposable);

	// register status bar command
	disposable = vscode.commands.registerCommand('cats-everywhere.helloStatus', async() => {
		const s = await vscode.window.showInformationMessage('Hello Status', 'OK');
		console.log(s);
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
