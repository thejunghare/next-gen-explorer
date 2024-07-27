import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'flowbite-react';
import { fetchFiles } from '../services/api';

const FileExplorer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function loadFiles() {
      const files = await fetchFiles('C:\\'); // You can change this to any initial directory
      setFiles(files);
    }
    loadFiles();
  }, []);

  return (
    <div className="p-4 flex-grow">
      <h1 className="text-2xl mb-4">File Explorer</h1>
      <ListGroup>
        {files.map((file, index) => (
          <ListGroupItem key={index} className="flex items-center space-x-4">
            <DocumentIcon className="h-5 w-5" />
            <span>{file}</span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default FileExplorer;
