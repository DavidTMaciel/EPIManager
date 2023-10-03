import React from 'react';

const TableRelease = () => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Funcionario</th>
                        <th>EPI</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>15-10-2023</td>
                        <td>Jose</td>
                        <td>Bota</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>15-10-2023</td>
                        <td>Jose</td>
                        <td>Bota</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableRelease;
