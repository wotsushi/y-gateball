# 04環境ツール

04環境に特化した決闘補助アプリです。
以下の機能を提供しています。

- ゲーム・ライフポイントの管理・計算
- デッキレシピ確認（ステータス一覧つき）
- ルール確認
- FAQ確認

## 推奨環境

iPad miniとか。ライフポイント計算機能を使わないならばスマホでもよさそう。

## 使用方法

https://wotsushi.github.io/y-gateball/ を開けば使えます。
iPadの場合はホーム画面に追加しておくとアプリっぽくなるのでおすすめです。

## 開発者向け

[yarn](https://yarnpkg.com) が必要です。

pullした直後や使用しているパッケージが更新されていると感じた場合は下記コマンドを実行します。

```sh
$ yarn install
```

ローカル環境起動をする（ローカルで動作確認するだけならば後続のビルドは不要）。

```sh
$ yarn start
```

ビルドする。

```sh
$ yarn build
```

https://wotsushi.github.io/y-gateball/ にデプロイする。事前にビルドしておくこと。

```sh
$ yarn deploy
```

[gh-pages ブランチ](https://github.com/wotsushi/y-gateball/commits/gh-pages) にビルドされたファイルがpushされます。
本リポジトリのGitHub Pagesでgh-pages ブランチの内容が公開されるようになっています。
