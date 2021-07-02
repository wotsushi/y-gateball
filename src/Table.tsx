import { Column, useTable } from "react-table";

const Encoding = require('encoding-japanese');
//import { Encoding } from "encoding-japanese";
export interface Card {
  name: string;
  num: number;
};

type TableProps<D extends Card> = {
  columns: Column<D>[],
  data: D[]
};

export const LinkName = <D extends Card> (row: D) => {
  const name = `《${row.name}》`;
  const unicodeArray = name.split('').map((_, i) => name.charCodeAt(i));
  const encodedArray =Encoding.convert(unicodeArray, "EUCJP");
  const page = Encoding.urlEncode(encodedArray);
  return <a href={`https://yugioh-wiki.net/index.php?cmd=backup&page=${page}&age=1#content_1_0`} target="_blank" rel="noopener noreferrer">{row.name}</a>;
}

export const Table = <D extends Card>({ columns, data }: TableProps<D>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
