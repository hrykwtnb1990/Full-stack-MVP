Kaizen Management App

React（Vite）+ Express + PostgreSQL + Tailwind + Chart.js で構成しています。
改善活動管理アプリ（Kaizen Management App）を **すべて Render 上で動かす** render で使用します。

バックエンド（Express + Knex + PostgreSQL） → Render Web Service
フロントエンド（React + Vite） → Render Static Site
DB（PostgreSQL） → Render Managed PostgreSQL
※未実施

バックエンドのセットアップ
back フォルダのディレクトリで npm install を実行

バックエンドの詳細
back/server.js - API
repository,services フォルダ- バックエンドとデータベースの処理
db/maigrations - マイグレーションの操作情報
db/seeds - テストデータ

フロントエンドのセットアップ
front フォルダのディレクトリで npm install を実行

フロントエンドの詳細
src/component
chart.jsx - 提案済みのグラフ
Form.jsx 　-　提案提出用フォーム
List.jsx 　- 提出済みデータ一覧　
Layout.jsx - ページの上部の共通ボタン

上記４点を App.jsx に集約して表示しています。

リソース
chart.jsx https://www.chartjs.org/
Form.jsx https://react-hook-form.com/
List.jsx https://reactrouter.com/home

将来の計画
UI/UX の再検討
機能追加予定　一覧検索機能、修正機能
