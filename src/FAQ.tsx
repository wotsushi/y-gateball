import "./FAQ.scss";

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
      [
        "《カオス・ソルジャー －開闢の使者－》の特殊召喚成功時に相手の《奈落の落とし穴》より先に《カオス・ソルジャー －開闢の使者－》の「フィールド上のモンスター1体を選択してゲームから除外する」効果を発動できますか？",
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
      [
        "《霊滅術師 カイクウ》が攻撃表示のモンスターに攻撃し相手プレイヤーに戦闘ダメージを与えたとき、攻撃したモンスターを《霊滅術師 カイクウ》の除外効果の対象にできますか？",
        "いいえ",
      ],
      [
        "攻撃表示の《霊滅術師 カイクウ》と攻撃表示の《異次元の女戦士》が戦闘した場合、それぞれの効果発動の順序はどうなりますか？",
        "《霊滅術師 カイクウ》が《異次元の女戦士》に攻撃した場合は先に《霊滅術師 カイクウ》の効果を発動するかを選択します。《異次元の女戦士》が《霊滅術師 カイクウ》に攻撃した場合は先に《異次元の女戦士》の効果を発動するかを選択します。",
      ],
    ],
  },
  {
    name: "魔導戦士 ブレイカー",
    qas: [
      [
        "《魔導戦士 ブレイカー》の召喚成功時に相手の《奈落の落とし穴》より先に《魔導戦士 ブレイカー》の起動効果を発動できますか？",
        "いいえ、《魔導戦士 ブレイカー》の召喚成功時に魔力カウンターを乗せる誘発効果が発動するため、相手に優先権が移ります。",
      ],
      [
        "《魔導戦士 ブレイカー》の反転召喚・特殊召喚成功時に魔力カウンターを乗せる誘発効果は発動しますか？",
        "いいえ",
      ],
    ],
  },
  {
    name: "同族感染ウィルス",
    qas: [
      [
        "《同族感染ウィルス》の召喚成功時に相手の《奈落の落とし穴》より先に《同族感染ウィルス》の起動効果を発動できますか？",
        "はい",
      ],
    ],
  },
  {
    name: "ブレイドナイト",
    qas: [],
  },
  {
    name: "異次元の女戦士",
    qas: [
      [
        "攻撃表示の《霊滅術師 カイクウ》と攻撃表示の《異次元の女戦士》が戦闘した場合、それぞれの効果発動の順序はどうなりますか？",
        "《霊滅術師 カイクウ》が《異次元の女戦士》に攻撃した場合は先に《霊滅術師 カイクウ》の効果を発動するかを選択します。《異次元の女戦士》が《霊滅術師 カイクウ》に攻撃した場合は先に《異次元の女戦士》の効果を発動するかを選択します。",
      ],
      [
        "《異次元の女戦士》で裏側守備表示の《ファイバーポッド》を攻撃した場合、効果の発動順序はどうなりますか？",
        "まず強制効果である《ファイバーポッド》の効果が発動し、それにチェーンする形で任意効果である《異次元の女戦士》の効果を発動できます。",
      ],
      [
        "《異次元の女戦士》で《リビングデッドの呼び声》で特殊召喚されたモンスターに攻撃しました。そのモンスターを戦闘破壊した上で《異次元の女戦士》の効果を発動した場合、《リビングデッドの呼び声》は破壊されますか？",
        "はい",
      ],
      [
        "《リビングデッドの呼び声》で特殊召喚された《異次元の女戦士》が相手モンスターに戦闘破壊された上で《異次元の女戦士》の効果を発動した場合、《リビングデッドの呼び声》は破壊されますか？",
        "はい",
      ],
    ],
  },
  {
    name: "首領・ザルーグ",
    qas: [
      [
        "相手のデッキが1枚以下の状態で《首領・ザルーグ》のデッキの上から2枚を墓地へ送る効果を発動した場合、デッキ切れにより決闘に勝利しますか？",
        "いいえ、相手のデッキが0枚の状態で相手がドローするまでは決闘に勝利しません。",
      ],
    ],
  },
  {
    name: "ならず者傭兵部隊",
    qas: [
      [
        "《ならず者傭兵部隊》の召喚成功時に相手の《破壊輪》より先に《ならず者傭兵部隊》の起動効果を発動できますか？",
        "はい",
      ],
    ],
  },
  {
    name: "ファイバーポッド",
    qas: [
      [
        "裏側守備表示の《ファイバーポッド》が攻撃され戦闘破壊が確定した場合、その《ファイバーポッド》自身はデッキに戻りますか？",
        "はい",
      ],
      [
        "反転召喚して発動した《ファイバーポッド》の効果にチェーンして《破壊輪》が発動されました。《破壊輪》や《破壊輪》で破壊されたモンスターはデッキに戻りますか？",
        "はい",
      ],
      [
        "《天空騎士パーシアス》で裏側守備表示の《ファイバーポッド》を攻撃した場合、効果の発動順序はどうなりますか？",
        "《天空騎士パーシアス》でドローした後に《ファイバーポッド》のリバース効果を処理します。なおこれらは発動タイミングが異なり、独立したチェーンブロックとなります（《天空騎士パーシアス》はダメージ計算後の効果発動、《ファイバーポッド》は戦闘結果解決時の効果発動）。",
      ],
      [
        "《異次元の女戦士》で裏側守備表示の《ファイバーポッド》を攻撃した場合、効果の発動順序はどうなりますか？",
        "まず強制効果である《ファイバーポッド》の効果が発動し、それにチェーンする形で任意効果である《異次元の女戦士》の効果を発動できます。",
      ],
    ],
  },
  {
    name: "お注射天使リリー",
    qas: [
      [
        "一度のダメージステップに《お注射天使リリー》の効果を2回以上発動できますか？",
        "いいえ",
      ],
      [
        "《お注射天使リリー》の効果発動後に《炸裂装甲》を発動できますか？",
        "いいえ",
      ],
      [
        "《お注射天使リリー》の効果で攻撃力がアップしている状態で《破壊輪》を発動するタイミングはありますか？",
        "ありません",
      ],
    ],
  },
  {
    name: "魂を削る死霊",
    qas: [
      [
        "《魂を削る死霊》を対象に《強奪》を発動し、《強奪》にチェーンして発動した《サイクロン》で《強奪》が破壊されました。《魂を削る死霊》は破壊されますか？",
        "はい",
      ],
      [
        "《魂を削る死霊》を対象に《破壊輪》を発動しました。《破壊輪》によるダメージは発生しますか？",
        "はい",
      ],
      [
        "《魂を削る死霊》を対象に《早すぎた埋葬》を発動しました。《魂を削る死霊》の特殊召喚成功時に《激流葬》を発動できますか？",
        "その《魂を削る死霊》以外に場にモンスターが存在すれば発動できます。特殊召喚した《魂を削る死霊》はチェーンブロックを作らずに破壊されるためです。",
      ],
      [
        "《魂を削る死霊》を対象に《早すぎた埋葬》を発動しました。その《魂を削る死霊》を対象に《破壊輪》を発動できますか？",
        "いいえ",
      ],
      [
        "裏側守備表示の《魂を削る死霊》を対象に《心変わり》を発動しました。《魂を削る死霊》は破壊されますか？",
        "いいえ",
      ],
    ],
  },
  {
    name: "聖なる魔術師",
    qas: [
      [
        "《光の護封剣》の発動にチェーンして《サイクロン》を発動しました。《光の護封剣》の「相手フィールド上に存在するモンスターを全て表側表示にする」効果で表側になった《聖なる魔術師》でチェーン発動した《サイクロン》を手札に加えられますか？",
        "はい、《聖なる魔術師》の効果は《光の護封剣》と《サイクロン》のチェーンブロックとは異なるチェーンブロックで処理されるためです。",
      ],
    ],
  },
  {
    name: "キラー・スネーク",
    qas: [],
  },
  {
    name: "押収",
    qas: [],
  },
  {
    name: "強引な番兵",
    qas: [],
  },
  {
    name: "強欲な壺",
    qas: [],
  },
  {
    name: "苦渋の選択",
    qas: [],
  },
  {
    name: "心変わり",
    qas: [
      [
        "《心変わり》でコントロールを得たモンスターを相手に返すとき、相手の場にモンスターが5体存在するとどうなりますか？",
        "コントロールを得たモンスターは破壊されます。",
      ],
    ],
  },
  {
    name: "大嵐",
    qas: [],
  },
  {
    name: "ライトニング・ボルテックス",
    qas: [
      [
        "相手の場に表側のモンスターが存在しない状況でも《ライトニング・ボルテックス》を発動できますか？",
        "いいえ",
      ],
    ],
  },
  {
    name: "光の護封剣",
    qas: [
      [
        "相手の場にモンスターが存在しない場合に《光の護封剣》を発動できますか？",
        "はい",
      ],
      [
        "《光の護封剣》の発動にチェーンした《サイクロン》でその《光の護封剣》を破壊しました。《光の護封剣》の「相手フィールド上に存在するモンスターを全て表側表示にする」効果は適用されますか？",
        "はい",
      ],
      [
        "《光の護封剣》の発動にチェーンして《サイクロン》を発動しました。《光の護封剣》の「相手フィールド上に存在するモンスターを全て表側表示にする」効果で表側になった《聖なる魔術師》でチェーン発動した《サイクロン》を手札に加えられますか？",
        "はい、《光の護封剣》と《サイクロン》のチェーンブロックとは異なるチェーンブロックで《聖なる魔術師》の効果が発動されるためです。",
      ],
    ],
  },
  {
    name: "抹殺の使徒",
    qas: [
      [
        "《抹殺の使徒》で除外したリバースモンスターの残り枚数が0枚だと確定している場合もリバース効果モンスターだった場合の効果は処理しますか？",
        "はい",
      ],
    ],
  },
  {
    name: "増援",
    qas: [
      [
        "デッキに戦士族モンスターが存在しないことが確定している場合に《増援》を発動できますか？",
        "いいえ",
      ],
    ],
  },
  {
    name: "強奪",
    qas: [
      [
        "（《強奪》を装備していないモンスターの）攻撃宣言時に《強奪》が破壊されモンスターのコントロールが相手に戻りました。攻撃の巻き戻しは発生しますか？",
        "はい",
      ],
      [
        "《強奪》でコントロールを得たモンスターを相手に返すとき、相手の場にモンスターが5体存在するとどうなりますか？",
        "コントロールを得たモンスターは破壊されます。",
      ],
      [
        "《魂を削る死霊》を対象に《強奪》を発動し、《強奪》にチェーンして発動した《サイクロン》で《強奪》が破壊されました。《魂を削る死霊》は破壊されますか？",
        "はい",
      ],
    ],
  },
  {
    name: "早すぎた埋葬",
    qas: [],
  },
  {
    name: "スケープ・ゴート",
    qas: [
      [
        "《スケープ・ゴート》を発動したターンにモンスターをセットできますか？",
        "はい",
      ],
      [
        "チェーン2以降に《スケープ・ゴート》を発動しました。羊トークンの特殊召喚に対して《激流葬》を発動できますか？",
        "いいえ",
      ],
      [
        "《スケープ・ゴート》にチェーンした《サイクロン》で《強奪》が破壊され自分の場のモンスターが2体以上になりました。《スケープ・ゴート》の効果は不発になりますか？",
        "はい",
      ],
      [
        "自分の《リビングデッドの呼び声》にチェーンした《サイクロン》で《リビングデッドの呼び声》が破壊されました。そのターンに《スケープ・ゴート》を発動できますか？",
        "いいえ",
      ],
    ],
  },
  {
    name: "サイクロン",
    qas: [
      [
        "魔法・罠の発動にチェーンした《サイクロン》でその魔法・罠を破壊した場合、その魔法・罠の効果は不発になりますか？",
        "装備魔法または永続罠であれば不発になります。それ以外であれば不発になりません。",
      ],
      [
        "《光の護封剣》の発動にチェーンした《サイクロン》でその《光の護封剣》を破壊しました。《光の護封剣》の「相手フィールド上に存在するモンスターを全て表側表示にする」効果は適用されますか？",
        "はい",
      ],
    ],
  },
  {
    name: "破壊輪",
    qas: [
      [
        "お互いのライフポイント以上の攻撃力を持つモンスターを《破壊輪》で破壊した場合、引き分けになりますか？",
        "はい",
      ],
      [
        "場で発動したモンスター効果にチェーンして《破壊輪》でそのモンスターを破壊した場合、そのモンスターの効果は不発になりますか？",
        "いいえ",
      ],
      [
        "《お注射天使リリー》の効果で攻撃力がアップしている状態で《破壊輪》を発動するタイミングはありますか？",
        "ありません",
      ],
      [
        "《魂を削る死霊》を対象に《破壊輪》を発動しました。《破壊輪》によるダメージは発生しますか？",
        "はい",
      ],
    ],
  },
  {
    name: "激流葬",
    qas: [
      [
        "《ならず者傭兵部隊》の召喚成功時に《ならず者傭兵部隊》の効果が発動されました。この効果にチェーンして《激流葬》を発動できますか？",
        "はい",
      ],
      [
        "モンスター召喚成功時に《破壊輪》が発動されました。《破壊輪》にチェーンして《激流葬》を発動できますか？",
        "はい",
      ],
    ],
  },
  {
    name: "奈落の落とし穴",
    qas: [],
  },
  {
    name: "砂塵の大竜巻",
    qas: [
      [
        "自分の魔法・罠ゾーンにカードが5枚存在する状態で《砂塵の大竜巻》を発動できますか？発動できる場合、《砂塵の大竜巻》をセットしていたゾーンに手札の魔法・罠をセットできますか？",
        "《砂塵の大竜巻》は発動できますが、セットはできません。《砂塵の大竜巻》はその効果を処理している間は魔法・罠ゾーンに存在するためです。",
      ],
      [
        "《砂塵の大竜巻》で対象に指定したカードがチェーン発動されました。《砂塵の大竜巻》の効果で魔法・罠をセットできますか？",
        "はい",
      ],
    ],
  },
  {
    name: "炸裂装甲",
    qas: [
      [
        "《炸裂装甲》の発動タイミングと《イグザリオン・ユニバース》の効果発動タイミングは同じですか？",
        "いいえ、《イグザリオン・ユニバース》の効果の方が発動タイミングが広いです。《炸裂装甲》は攻撃宣言直後のチェーンブロックでのみ発動可能です。《イグザリオン・ユニバース》はバトルステップ終了前のチェーンブロックでも発動可能です。したがって、相手が《炸裂装甲》を発動しないことを確認してから《イグザリオン・ユニバース》の効果を発動できます。",
      ],
    ],
  },
  {
    name: "リビングデッドの呼び声",
    qas: [
      [
        "チェーン2以降に《リビングデッドの呼び声》を発動した場合、モンスターの特殊召喚に対して《激流葬》や《奈落の落とし穴》を発動できますか？",
        "いいえ",
      ],
      [
        "直接攻撃宣言時に《リビングデッドの呼び声》が発動されました。特殊召喚されたモンスターに攻撃する必要はありますか？",
        "いいえ、巻き戻しが発生します。",
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
];

const FAQList = () => {
  return (
    <>
      {faqs.map((faq) => (
        <div className="faq">
          <h2 id={faq.name}>《{faq.name}》</h2>
          {faq.qas.map(([q, a]) => (
            <p>
              Q: {q} <br />
              A: {a}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};
export default FAQList;
