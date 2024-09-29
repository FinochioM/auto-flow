import MonacoEditor from '@monaco-editor/react';

export default function Editor() {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="python"
      theme="vs-dark"
    />
  );
}