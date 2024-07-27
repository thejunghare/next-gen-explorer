import React from 'react';
import FileExplorer from './components/FileExplorer';
import SidebarComponent from './components/SidebarComponent';

const App = () => {
    return (
        <div className="flex">
            <SidebarComponent/>
            {/*<FileExplorer/>*/}
        </div>

    );
};

export default App;
