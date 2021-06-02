import * as vscode from 'vscode';

const typeScriptExtensionId = 'vscode.typescript-language-features';
const pluginId = 'typescript-lit-html-plugin';

export async function activate(context: vscode.ExtensionContext) {
  const extension = vscode.extensions.getExtension(typeScriptExtensionId);
  if (!extension) {
    return;
  }

  await extension.activate();
  if (!extension.exports || !extension.exports.getAPI) {
    return;
  }

  const api = extension.exports.getAPI(0);
  if (!api) {
    return;
  }

  api.configurePlugin(pluginId, {
    "tags": [
      ""
    ]
  });
}
