import BootstrapTable from "react-bootstrap-table-next";
import { linkName } from "./common";

type Type = "通常" | "儀式" | "永続" | "装備" | "フィールド" | "速攻";

interface Spell {
  name: string;
  type: Type;
  num: number;
}

const data: Spell[] = [
  {
    name: "押収",
    type: "通常",
    num: 1,
  },
  {
    name: "強引な番兵",
    type: "通常",
    num: 1,
  },
  {
    name: "強欲な壺",
    type: "通常",
    num: 1,
  },
  {
    name: "苦渋の選択",
    type: "通常",
    num: 1,
  },
  {
    name: "心変わり",
    type: "通常",
    num: 1,
  },
  {
    name: "大嵐",
    type: "通常",
    num: 1,
  },
  {
    name: "ライトニング・ボルテックス",
    type: "通常",
    num: 1,
  },
  {
    name: "光の護封剣",
    type: "通常",
    num: 1,
  },
  {
    name: "抹殺の使徒",
    type: "通常",
    num: 1,
  },
  {
    name: "増援",
    type: "通常",
    num: 1,
  },
  {
    name: "強奪",
    type: "装備",
    num: 1,
  },
  {
    name: "早すぎた埋葬",
    type: "装備",
    num: 1,
  },
  {
    name: "スケープ・ゴート",
    type: "速攻",
    num: 1,
  },
  {
    name: "サイクロン",
    type: "速攻",
    num: 1,
  },
];

const columns = [
  {
    text: "カード名",
    dataField: "name",
    formatter: linkName,
  },
  {
    text: "種類",
    dataField: "type",
  },
  {
    text: "枚数",
    dataField: "num",
  },
];

const SpellTable = () => (
  <BootstrapTable
    bootstrap4
    keyField="name"
    data={data}
    columns={columns}
  ></BootstrapTable>
);

export default SpellTable;
