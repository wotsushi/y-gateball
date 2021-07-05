const Rule = () => {
  return (
    <ul>
      <li>お互いのプレイヤーは04環境デッキを用いてデュエルする</li>
      <li>先攻後攻を入れ替えての2デュエル1セットでの対戦とする</li>
      <li>先攻ドローあり</li>
      <li>
        召喚成功時に優先権が相手に移っていなければ優先権を放棄することなく召喚したモンスターの起動効果を発動できる
        <ul>
          <li>
            例:
            あなたは《ならず者傭兵部隊》の召喚に成功した。たとえ相手が《破壊輪》を発動する意思を持っていたとしても、あなたはそれより先に《ならず者傭兵部隊》の起動効果を発動できる。
          </li>
        </ul>
      </li>
      <li>
        召喚・反転召喚・特殊召喚を無効にするカードの発動タイミングは存在しないものとして扱う
        <ul>
          <li>
            つまり、モンスターの召喚・反転召喚・特殊召喚は必ず成功する（それらを無効にするカードは存在しないため）
          </li>
          <li>
            例1:
            あなたは《ならず者傭兵部隊》を召喚するつもりだが、起動効果を直ちに発動する意思はないとする。この場合、《ならず者傭兵部隊》を場に出したタイミングで相手に「何か発動しますか？」と
            <b>一度だけ</b>
            確認すれば十分である。言い換えると、確認した場合は召喚成功時にあなたが先に《ならず者傭兵部隊》の効果を発動できる権利を放棄したことになる。
          </li>
          <li>
            例2:
            あなたが《ならず者傭兵部隊》を場に出したとき、相手に一切の確認をせずに《ならず者傭兵部隊》の起動効果を発動してよい。
          </li>
        </ul>
      </li>
      <li>
        《抹殺の使徒》の対象となったカードがリバース効果モンスターだった場合に行う処理の代わりに、お互いのプレイヤーは、デッキから同名カードをすべてゲームから除外し、デッキをシャッフルし、フィールド上にセットされたカードおよび手札のカードの名前とその枚数を相手プレイヤーに伝える（どのカードがどの位置にあるのかは伝えない）。
      </li>
      <li>
        エラッタされた下記カードについて、それらのテキストはエラッタ前のテキストとして扱う
        <ul>
          <li>
            《キラー・スネーク》のテキスト:
            自分のスタンバイフェイズ時にこのカードが墓地に存在している場合、このカードを手札に戻すことができる。
          </li>
          <li>
            《破壊輪》のテキスト:
            フィールド上に表側表示で存在するモンスター１体を破壊し、お互いにその攻撃力分のダメージを受ける。
          </li>
        </ul>
      </li>
      <li>
        用語の変更（ゲーム影響なし）
        <ul>
          <li>リリース → 生け贄</li>
          <li>アドバンス召喚 → 生け贄召喚</li>
        </ul>
      </li>
    </ul>
  );
};
export default Rule;
