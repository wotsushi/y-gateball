interface FAQ {
  name: string;
  qas: [string, string][];
}
const faqs: FAQ[] = [
  {
    name: "カオス・ソルジャー －開闢の使者－",
    qas: [
      [
        "正規の手順で特殊召喚した《カオス・ソルジャー －開闢の使者－》が《ファイバーポッド》でデッキに戻された場合、その《カオス・ソルジャー －開闢の使者－》に蘇生制限は課せられますか？",
        "はい",
      ],
      [
        "《カオス・ソルジャー －開闢の使者－》の「フィールド上のモンスター1体を選択してゲームから除外する」効果はメインフェイズ2に特殊召喚した場合でもそのターンに発動できますか？",
        "はい",
      ],
    ],
  },
  {
    name: "人造人間－サイコ・ショッカー",
    qas: [
      [
        "《人造人間－サイコ・ショッカー》の召喚成功時に《激流葬》のような召喚反応罠カードを発動できますか？",
        "いいえ",
      ],
      [
        "《人造人間－サイコ・ショッカー》を対象に《リビングデッドの呼び声》を発動した場合、《人造人間－サイコ・ショッカー》は墓地から特殊召喚されますか？",
        "はい",
      ],
      [
        "《人造人間－サイコ・ショッカー》が場に存在する状態で《リビングデッドの呼び声》を破壊すると《リビングデッドの呼び声》で蘇生したモンスターは破壊されますか？",
        "いいえ",
      ],
      [
        "《リビングデッドの呼び声》で蘇生した《人造人間－サイコ・ショッカー》を破壊すると《リビングデッドの呼び声》は破壊されますか？",
        "はい",
      ],
    ],
  },
  {
    name: "天空騎士パーシアス",
    qas: [
      [
        "《天空騎士パーシアス》で裏側守備表示の《ファイバーポッド》を攻撃した場合、効果の発動順序はどうなりますか？",
        "《天空騎士パーシアス》でドローした後に《ファイバーポッド》のリバース効果を処理します。なおこれらは発動タイミングが異なり、独立したチェーンブロックとなります（《天空騎士パーシアス》はダメージ計算後の効果発動、《ファイバーポッド》は戦闘結果解決時の効果発動）。",
      ],
    ],
  },
  {
    name: "イグザリオン・ユニバース",
    qas: [
      [
        "《炸裂装甲》の発動タイミングと《イグザリオン・ユニバース》の効果発動タイミングは同じですか？",
        "いいえ、《イグザリオン・ユニバース》の効果の方が発動タイミングが広いです。《炸裂装甲》は攻撃宣言直後のチェーンブロックでのみ発動可能です。《イグザリオン・ユニバース》はバトルステップ終了前のチェーンブロックでも発動可能です。したがって、相手が《炸裂装甲》を発動しないことを確認してから《イグザリオン・ユニバース》の効果を発動できます。",
      ],
      [
        "《イグザリオン・ユニバース》の攻撃宣言時に《スケープ・ゴート》が発動されました。巻き戻しにより羊トークンを攻撃する際に《イグザリオン・ユニバース》の効果を発動できますか？",
        "はい",
      ],
      [
        "《イグザリオン・ユニバース》で裏側守備表示のモンスターに攻撃する際、そのモンスターが表になった後に《イグザリオン・ユニバース》の効果を発動できますか？",
        "いいえ",
      ],
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
          <h2 id={faq.name}>《{faq.name}》</h2>
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