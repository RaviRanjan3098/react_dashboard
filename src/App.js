import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './dashboard/Layout/header';
import Sidebar from './dashboard/Layout/sidebar';
import MainContact from './dashboard/RouteLink';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <div className="app">
        <Sidebar />
        <div className="content">
          <MainContact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import FileExplorer from './dashboard/cmp/FileExplorer';
// import FileViewer from './dashboard/cmp/FileViewer';
// import fileSystem from './dashboard/data/fileSystem.json';

// const App = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   return (
//     <div className="app-container">
//       <aside className="sidebar">
//         <FileExplorer node={fileSystem} onFileClick={setSelectedFile} />
//       </aside>
//       <main className="content">
//         <FileViewer file={selectedFile} />
//       </main>
//     </div>
//   );
// };

// export default App;
