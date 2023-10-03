import React, { useState } from 'react';
import './style.css';
import TableEpi from './table-epi';
import TableRelease from './table-release';

const TableApp = () => {
  const [displayTableRelease, setDisplayTableRelease] = useState(true);

  const alternarTabela = () => {
    setDisplayTableRelease(!displayTableRelease);
  };

  return (
    <div className='set-of-tables'>
      <div>
      <button
          onClick={alternarTabela}
          className={displayTableRelease ? 'active-button' : 'inactive-button'}
        >
          Mais Liberados
        </button>
        <button
          onClick={alternarTabela}
          className={displayTableRelease ? 'inactive-button' : 'active-button'}
        >
          Últimas Entregas
        </button>

      </div>
      {displayTableRelease ? <TableRelease /> : <TableEpi />}
    </div>
  );
};

export default TableApp;
