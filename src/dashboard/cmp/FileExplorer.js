import React, { useState } from 'react';
import { FaFolder, FaFile, FaFolderOpen } from 'react-icons/fa';

const FileExplorer = ({ node, onFileClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFolderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: 16 }}>
      {node.type === 'folder' ? (
        <div onClick={handleFolderClick} style={{ cursor: 'pointer' }}>
          {isOpen ? <FaFolderOpen /> : <FaFolder />} {node.name}
        </div>
      ) : (
        <div onClick={() => onFileClick(node)} style={{ cursor: 'pointer' }}>
          <FaFile /> {node.name}
        </div>
      )}

      {isOpen &&
        node.children?.map((child, idx) => (
          <FileExplorer key={idx} node={child} onFileClick={onFileClick} />
        ))}
    </div>
  );
};

export default FileExplorer;
