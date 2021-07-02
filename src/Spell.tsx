import { Column } from 'react-table';
import { Card, Table, LinkName } from './Table';

type Type = '通常' | '儀式' | '永続' | '装備' | 'フィールド' | '速攻';

interface Spell extends Card {
  type: Type;
};

const data: Spell[] = [
  {
    name: '押収',
    type: '通常',
    num: 1
  },
  {
    name: '強引な番兵',
    type: '通常',
    num: 1
  },
  {
    name: '強欲な壺',
    type: '通常',
    num: 1
  },
  {
    name: '苦渋の選択',
    type: '通常',
    num: 1
  },
  {
    name: '心変わり',
    type: '通常',
    num: 1
  },
  {
    name: '大嵐',
    type: '通常',
    num: 1
  },
  {
    name: 'ライトニング・ボルテックス',
    type: '通常',
    num: 1
  },
  {
    name: '光の護封剣',
    type: '通常',
    num: 1
  },
  {
    name: '抹殺の使徒',
    type: '通常',
    num: 1
  },
  {
    name: '増援',
    type: '通常',
    num: 1
  },
  {
    name: '強奪',
    type: '装備',
    num: 1
  },
  {
    name: '早すぎた埋葬',
    type: '装備',
    num: 1
  },
  {
    name: 'スケープ・ゴート',
    type: '速攻',
    num: 1
  },
  {
    name: 'サイクロン',
    type: '速攻',
    num: 1
  },
];

const columns: Column<Spell>[] = [
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

const SpellTable = () => {
  return (
    <Table columns={columns} data={data} />
  );
}

export default SpellTable;
