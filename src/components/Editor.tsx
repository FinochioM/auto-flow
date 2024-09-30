import MonacoEditor from '@monaco-editor/react';

export default function Editor() {
  return (
    <MonacoEditor
      height="100%"
      width="100%"
      defaultLanguage="python"
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}