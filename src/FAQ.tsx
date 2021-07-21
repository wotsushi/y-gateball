interface FAQ {
  name: string;
  qas: [string, string][];
}
const faqs: FAQ[] = [
  {
    name: "カオス・ソルジャー －開闢の使者－",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "人造人間－サイコ・ショッカー",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "天空騎士パーシアス",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "イグザリオン・ユニバース",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "霊滅術師 カイクウ",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "魔導戦士 ブレイカー",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "同族感染ウィルス",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "ブレイドナイト",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "ならず者傭兵部隊",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "異次元の女戦士",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "首領・ザルーグ",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "ファイバーポッド",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "お注射天使リリー",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "魂を削る死霊",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "聖なる魔術師",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "キラー・スネーク",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "押収",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "強引な番兵",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "強欲な壺",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "苦渋の選択",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "心変わり",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "大嵐",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "ライトニング・ボルテックス",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "光の護封剣",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "抹殺の使徒",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "増援",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "早すぎた埋葬",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "スケープ・ゴート",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "サイクロン",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "破壊輪",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "激流葬",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "奈落の落とし穴",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "砂塵の大竜巻",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "炸裂装甲",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
  {
    name: "リビングデッドの呼び声",
    qas: [
      ["hoge", "huga"],
      ["seyana", "sorena"],
    ],
  },
];

const FAQList = () => {
  return (
    <>
      {faqs.map((faq) => (
        <>
          <h2 id={faq.name}>{faq.name}</h2>
          {faq.qas.map(([q, a]) => (
            <p>
              Q: {q} <br />
              A: {a}
            </p>
          ))}
        </>
      ))}
    </>
  );
};
export default FAQList;
