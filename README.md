# Qin Todo React Native Expo (チーム f2)

## デザイン

- [Figma](https://www.figma.com/file/SNPCXNu0V6k6wHS4piYyS2/Qin-Todo?node-id=104%3A1925)

## セットアップ

### リポジトリのクローン

```
git clone https://github.com/Lesser-cuckoo/qintodo-native-cuckoo
```

### 依存関係のインストール

```
cd qintodo-native-cuckoo
yarn
```

## 開発

### 開発環境の立ち上げ

```
yarn start
```

### エミュレータでデバッグする場合

xcodeやAndroid Studioを導入し、エミュレータを起動できるようにする。

### 実機でデバッグする場合

Android・iPhoneにExpo Goをインストールし、QRコードを読み取る。

## Git ブランチルール

`main`

- 本番環境のビルド用ブランチ

`develop`

- 本番反映前に確認するためのステージング環境
- 常駐ブランチで、開発用ブランチ`(GitHub UserName)/issue*`からの変更を受け付け、main にマージ

`(GitHub UserName)/issue*`

- 開発用ブランチ
- 必ず develop から分岐して、develop にマージ
- `*`は issue 番号
- [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)を使うと便利

`main`, `develop`には直接 push せず、`(GitHub UserName)/issue*`から PR を投げて、レビュー後に`develop`にマージする。

また、Commit メッセージの冒頭に[gitmoji](https://gitmoji.dev/)をつけることを推奨 (Commit の粒度が調整されるため)。
[VSCode のプラグイン](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)を使うと便利。