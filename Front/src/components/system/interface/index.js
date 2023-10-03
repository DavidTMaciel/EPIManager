import React from 'react';
import './style.css';
import Menu from '../components/menu';
import Dashboard from '../components/dashboard';
import TableApp from '../components/Tables';

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