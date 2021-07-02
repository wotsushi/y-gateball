import { Column } from 'react-table';
import { Card, Table, LinkName } from './Table';

type Type = '通常' | '永続' | 'カウンター';

interface Trap extends Card {
  type: Type;
};

const data: Trap[] = [
  {
    name: '破壊輪',
    type: '通常',
    num: 1
  },
  {
    name: '激流葬',
    type: '通常',
    num: 1
  },
  {
    name: '奈落の落とし穴',
    type: '通常',
    num: 1
  },
  {
    name: '砂塵の大竜巻',
    type: '通常',
    num: 1
  },
  {
    name: '炸裂装甲',
    type: '通常',
    num: 2
  },
  {
    name: 'リビングデッドの呼び声',
    type: '永続',
    num: 1
  },
];

const columns: Column<Trap>[] = [
  {
    Header: 'カード名',
    accessor: LinkName
  },
  {
    Header: '種類',
    accessor: 'type'
  },
  {
    Header: '枚数',
    accessor: 'num'
  },
];

const TrapTable = () => {
  return (
    <Table columns={columns} data={data} />
  );
}

export default TrapTable;
