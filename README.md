# Angular-V9-Template

angular v9 のテンプレートプロジェクトです。  
`ng new` した後、以下の変更を加えています。

- angular material 導入
- prettier 導入
  - prettier によるフォーマットは未対応
- tslint.json 修正

## tslint.json 修正内容

```diff
-   "member-access": false,
+   "member-access": [true, "no-public"],
```

クラスのメンバ（プロパティ、メソッド、コンストラクタ）のアクセス修飾子に `public` を使用できないようにしています。

```diff
+   "variable-name": { "options": ["ban-keywords", "check-format", "allow-pascal-case"] }
```

変数名に **アンダースコア**`_` のプレフィックスを許容しないようにしています。
