import { Column } from 'react-table';
import { Card, Table, LinkName } from './Table';

type Attribute = '闇' | '光' | '地' | '水' | '炎' | '風';
type Type = 'ドラゴン' | '魔法使い' | 'アンデット' | '戦士' | '獣戦士' | '獣' | '鳥獣' | '悪魔' | '天使' | '昆虫' | '恐竜' | '爬虫類' | '魚' | '海竜' | '機械' | '雷' | '水' | '炎' | '岩石' | '植物';

interface Monster extends Card {
  lv: number;
  attribute: Attribute;
  type: Type;
  atk: number;
  def: number;
};

const data: Monster[] = [
  {
    name: 'カオス・ソルジャー －開闢の使者－',
    lv: 8,
    attribute: '光',
    type: '戦士',
    atk: 3000,
    def: 2500,
    num: 1
  },
  {
    name: '人造人間－サイコ・ショッカー',
    lv: 6,
    attribute: '闇',
    type: '機械',
    atk: 2400,
    def: 1500,
    num: 1
  },
  {
    name: '天空騎士パーシアス',
    lv: 5,
    attribute: '光',
    type: '天使',
    atk: 1900,
    def: 1400,
    num: 1
  },
  {
    name: 'イグザリオン・ユニバース',
    lv: 4,
    attribute: '闇',
    type: '獣戦士',
    atk: 1800,
    def: 1900,
    num: 1
  },
  {
    name: '霊滅術師 カイクウ',
    lv: 4,
    attribute: '闇',
    type: '魔法使い',
    atk: 1800,
    def: 700,
    num: 1
  },
  {
    name: '魔導戦士 ブレイカー',
    lv: 4,
    attribute: '闇',
    type: '魔法使い',
    atk: 1600,
    def: 1000,
    num: 1
  },
  {
    name: '同族感染ウィルス',
    lv: 4,
    attribute: '水',
    type: '水',
    atk: 1600,
    def: 1000,
    num: 1
  },
  {
    name: 'ブレイドナイト',
    lv: 4,
    attribute: '光',
    type: '戦士',
    atk: 1600,
    def: 1000,
    num: 1
  },
  {
    name: 'ならず者傭兵部隊',
    lv: 4,
    attribute: '地',
    type: '戦士',
    atk: 1000,
    def: 1000,
    num: 1
  },
  {
    name: '異次元の女戦士',
    lv: 4,
    attribute: '光',
    type: '戦士',
    atk: 1500,
    def: 1600,
    num: 3
  },
  {
    name: '首領・ザルーグ',
    lv: 4,
    attribute: '闇',
    type: '戦士',
    atk: 1400,
    def: 1500,
    num: 1
  },
  {
    name: 'ファイバーポッド',
    lv: 3,
    attribute: '地',
    type: '植物',
    atk: 500,
    def: 500,
    num: 1
  },
  {
    name: 'お注射天使リリー',
    lv: 3,
    attribute: '地',
    type: '魔法使い',
    atk: 400,
    def: 1500,
    num: 1
  },
  {
    name: '魂を削る死霊',
    lv: 3,
    attribute: '闇',
    type: 'アンデット',
    atk: 300,
    def: 200,
    num: 1
  },
  {
    name: '聖なる魔術師',
    lv: 1,
    attribute: '光',
    type: '魔法使い',
    atk: 300,
    def: 400,
    num: 2
  },
  {
    name: 'キラー・スネーク',
    lv: 1,
    attribute: '水',
    type: '爬虫類',
    atk: 300,
    def: 250,
    num: 1
  },
];

const columns: Column<Monster>[] = [
  {
    Header: 'カード名',
    accessor: LinkName,
  },
  {
    Header: 'レベル',
    accessor: 'lv'
  },
  {
    Header: '属性',
    accessor: 'attribute'
  },
  {
    Header: '種族',
    accessor: 'type'
  },
  {
    Header: '攻撃力',
    accessor: 'atk'
  },
  {
    Header: '守備力',
    accessor: 'def'
  },
  {
    Header: '枚数',
    accessor: 'num'
  },
];

const MonsterTable = () => {
  return (
    <Table columns={columns} data={data} />
  );
}

export default MonsterTable;
