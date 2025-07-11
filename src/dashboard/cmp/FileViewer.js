import React from 'react';

const FileViewer = ({ file }) => {
  if (!file) return <div>Select a file to view its contents.</div>;

  return (
    <div className="file-viewer">
      <h4>{file.name}</h4>
      <pre>{file.content}</pre>
    </div>
  );
};

export default FileViewer;
