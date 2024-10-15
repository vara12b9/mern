import React from 'react'
import Tablehead from './Tablehead'
import TableData from './TableData'

function Table() {
  return (
    <div>
      Table
      <table>
        <th>
          <tr>
            <Tablehead />
          </tr>
        </th>
        <tb>
          <tr>
            <TableData />
          </tr>
        </tb>
      </table>
    </div>
  );
}

export default Table