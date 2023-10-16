import React from 'react';
import './style.css';
import Menu from '../../components/components-interface/menu';
import Dashboard from '../../components/components-interface/dashboard';
import TableApp from '../../components/components-interface/Tables';

function Interface() {
    return (
        <div>
            <Menu />
            <Dashboard />
            <TableApp />
            

        </div>
    )
}
export default Interface;