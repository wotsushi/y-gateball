import BootstrapTable from "react-bootstrap-table-next";
import { linkName } from "./common";

type Type = "通常" | "永続" | "カウンター";

interface Trap {
  name: string;
  type: Type;
  num: number;
}

const data: Trap[] = [
  {
    name: "破壊輪",
    type: "通常",
    num: 1,
  },
  {
    name: "激流葬",
    type: "通常",
    num: 1,
  },
  {
    name: "奈落の落とし穴",
    type: "通常",
    num: 1,
  },
  {
    name: "砂塵の大竜巻",
    type: "通常",
    num: 1,
  },
  {
    name: "炸裂装甲",
    type: "通常",
    num: 2,
  },
  {
    name: "リビングデッドの呼び声",
    type: "永続",
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

const TrapTable = () => (
  <BootstrapTable
    bootstrap4
    keyField="name"
    data={data}
    columns={columns}
  ></BootstrapTable>
);

export default TrapTable;
