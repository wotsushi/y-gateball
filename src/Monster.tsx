import BootstrapTable from "react-bootstrap-table-next";
import { isMobileOnly } from "react-device-detect";

import { linkName } from "./common";
import "./Monster.scss";

type Attribute = "闇" | "光" | "地" | "水" | "炎" | "風";
type Type =
  | "ドラゴン"
  | "魔法使い"
  | "アンデット"
  | "戦士"
  | "獣戦士"
  | "獣"
  | "鳥獣"
  | "悪魔"
  | "天使"
  | "昆虫"
  | "恐竜"
  | "爬虫類"
  | "魚"
  | "海竜"
  | "機械"
  | "雷"
  | "水"
  | "炎"
  | "岩石"
  | "植物";

interface Monster {
  name: string;
  shorthand?: string;
  lv: number;
  attribute: Attribute;
  type: Type;
  atk: number;
  effect_atk?: number;
  def: number;
  num: number;
}

const data: Monster[] = [
  {
    name: "カオス・ソルジャー －開闢の使者－",
    shorthand: "開闢",
    lv: 8,
    attribute: "光",
    type: "戦士",
    atk: 3000,
    def: 2500,
    num: 1,
  },
  {
    name: "人造人間－サイコ・ショッカー",
    shorthand: "ショッカー",
    lv: 6,
    attribute: "闇",
    type: "機械",
    atk: 2400,
    def: 1500,
    num: 1,
  },
  {
    name: "天空騎士パーシアス",
    lv: 5,
    attribute: "光",
    type: "天使",
    atk: 1900,
    def: 1400,
    num: 1,
  },
  {
    name: "イグザリオン・ユニバース",
    shorthand: "イグザリオン",
    lv: 4,
    attribute: "闇",
    type: "獣戦士",
    atk: 1800,
    effect_atk: 1400,
    def: 1900,
    num: 1,
  },
  {
    name: "霊滅術師 カイクウ",
    lv: 4,
    attribute: "闇",
    type: "魔法使い",
    atk: 1800,
    def: 700,
    num: 1,
  },
  {
    name: "魔導戦士 ブレイカー",
    lv: 4,
    attribute: "闇",
    type: "魔法使い",
    atk: 1600,
    effect_atk: 1900,
    def: 1000,
    num: 1,
  },
  {
    name: "同族感染ウィルス",
    lv: 4,
    attribute: "水",
    type: "水",
    atk: 1600,
    def: 1000,
    num: 1,
  },
  {
    name: "ブレイドナイト",
    lv: 4,
    attribute: "光",
    type: "戦士",
    atk: 1600,
    effect_atk: 2000,
    def: 1000,
    num: 1,
  },
  {
    name: "異次元の女戦士",
    lv: 4,
    attribute: "光",
    type: "戦士",
    atk: 1500,
    def: 1600,
    num: 3,
  },
  {
    name: "首領・ザルーグ",
    lv: 4,
    attribute: "闇",
    type: "戦士",
    atk: 1400,
    def: 1500,
    num: 1,
  },
  {
    name: "ならず者傭兵部隊",
    lv: 4,
    attribute: "地",
    type: "戦士",
    atk: 1000,
    def: 1000,
    num: 1,
  },
  {
    name: "ファイバーポッド",
    lv: 3,
    attribute: "地",
    type: "植物",
    atk: 500,
    def: 500,
    num: 1,
  },
  {
    name: "お注射天使リリー",
    lv: 3,
    attribute: "地",
    type: "魔法使い",
    atk: 400,
    effect_atk: 3400,
    def: 1500,
    num: 1,
  },
  {
    name: "魂を削る死霊",
    lv: 3,
    attribute: "闇",
    type: "アンデット",
    atk: 300,
    def: 200,
    num: 1,
  },
  {
    name: "聖なる魔術師",
    lv: 1,
    attribute: "光",
    type: "魔法使い",
    atk: 300,
    def: 400,
    num: 2,
  },
  {
    name: "キラー・スネーク",
    lv: 1,
    attribute: "水",
    type: "爬虫類",
    atk: 300,
    def: 250,
    num: 1,
  },
];

const effectATK = (effect_atk: number | undefined, monster: Monster) =>
  effect_atk === undefined ? monster.atk : effect_atk;

const columns = [
  {
    text: "カード名",
    dataField: "name",
    formatter: linkName,
  },
  {
    text: "レベル",
    dataField: "lv",
    sort: true,
  },
  {
    text: "属性",
    dataField: "attribute",
    sort: true,
  },
  {
    text: "種族",
    dataField: "type",
    sort: true,
  },
  {
    text: "攻撃力",
    dataField: "atk",
    sort: true,
  },
  {
    text: "効果攻撃力",
    dataField: "effect_atk",
    formatter: effectATK,
    sort: true,
    sortValue: effectATK,
  },
  {
    text: "守備力",
    dataField: "def",
    sort: true,
  },
  {
    text: "枚数",
    dataField: "num",
    sort: true,
  },
];

const columnsMobile = [
  {
    text: "カード名",
    dataField: "name",
    formatter: linkName,
  },
  {
    text: "攻撃力",
    dataField: "atk",
    sort: true,
  },
  {
    text: "効果攻撃力",
    dataField: "effect_atk",
    formatter: effectATK,
    sort: true,
    sortValue: effectATK,
  },
  {
    text: "守備力",
    dataField: "def",
    sort: true,
  },
  {
    text: "枚数",
    dataField: "num",
    sort: true,
  },
];

const MonsterTable = () => (
  <div className="monster-table">
    <BootstrapTable
      bootstrap4
      keyField="name"
      data={data}
      columns={isMobileOnly ? columnsMobile : columns}
      defaultSorted={[{ dataField: "atk", order: "desc" }]}
    ></BootstrapTable>
  </div>
);

export default MonsterTable;
