<!--top-->
# 💓 Vue.js

2016/11/19 - 静岡JavaScript勉強会 #4 [@nakajmg](https://twitter.com/nakajmg)

[#shizuoka_js](https://twitter.com/search?q=%23shizuoka_js)

-----

# <img src="https://avatars3.githubusercontent.com/u/1995370?v=3&s=160" style="border-radius: 50%;">


- [@nakajmg](https://twitter.com/nakajmg)（じまぐ）
- [株式会社ピクセルグリッド](https://www.pxgrid.com/)
- フロントエンド・エンジニア


---
.
どうもはじめまして、じまぐです。ピクセルグリッドという会社からやってまいりました。
フロントエンド・エンジニアという肩書きで、JavaScriptを書いて生計をたてています。
nakajmgというidで活動しています。

-----
<!--cover-vue-->
# はなします

- Vue.jsのいいところ
- サポートライブラリ/ツール
- そのほか

---
.
今日はとにかくJavaScriptフレームワークのVue.jsについて話します。
まずVue.jsがどういうフレームワークであるか、次にVue.jsのここがいいというポイントを、そしてVueをサポートするツールやライブラリついて簡単に紹介します。

-----
<!--target-->
# こんな人におすすめ

- jQueryの次にいきたい人
- ほかの言語がメインの人
- フロントエンドに疲れた人


-----
<!--cover-vue-->

# Vue.jsについて

- Viewに特化したライブラリ
- コンポーネント指向
- Simple & Easy

---
.
Vue.jsはUIを組み立てるViewの部分に特化したライブラリです。
アプリケーションを構成するコンポーネントをHTMLのタグのようなレベルにわけて定義することで、再利用性の高いコンポーネントの作成を可能にします。
そしてAPIなどがとてもシンプルでわかりやすく、とにかく簡単に使えるようになる、というのが特徴です。
どれくらいシンプルなのか、少しみてみましょう。

-----
<!--iitokoro-->
# Vue.jsのいいところ

-----
<!--wakaba-->
# とにかくシンプル

- 🔰 APIが理解しやすい
- 😆 直感的に書ける（__気持ちいい__）
- ✨ コードがきれいな状態を保てる ✨

---

構文やAPIがシンプルさを保ってることで、学習コストが抑えられます。
Vue.jsを使う上では、JSXのような特別なシンタックスを覚える必要はなく、持っているJS・HTML・CSSの知識だけで十分にアプリケーションを書くことができます。

直感的に書けるということも大事で、学習コストもそうなんですが、何より気持ちよく書けるかどうか、そこが重要です。

そして自然とコードがきれいな状態を保てます。Vue.jsではどこで何をさせるべきか、どこで何をさせないべきかという指針が、APIの設計に埋め込まれています。しかし、それでも十分な柔軟性を持っているので、窮屈さを感じることはありません。
-----
<!--code-->
<iframe src="./demo/hello/index.html" width="600px" height="400px">
</iframe>

[demo/hello](./demo/hello/index.html)


---
.
これはVue.jsの説明をするうえでよく登場するデータバインディングのデモです。
HTML上にはインプットボックスと、その内容を出力するタグの２つがあります。
インプットボックスを更新すると出力も同時に変わります。

-----
<!--code-->
```html
<div id="app"></div>
<script src="./vue.js"></script>
<script>
  new Vue({
    el: '#app',
    template: `<div>
      <p><input v-model="message"></p>
      <p>{{message}}</p>
    </div>`,
    data() {
      return {
        message: 'Hello Vue.js'
      }
    }
  })
</script>
```

---

このデモのコードとしてはこれですべてです。
わずか十数行でデモのようなリアクティブなプログラムが実装できてしまいます。
このコード、目を通したら何が何をやっているか、なんとなく理解できてしまいませんか？
これは正にVue.jsのシンプルさを表していて、（JavaScriptに限らず）プログラムが読める人であればすぐに使い始められるフレームワークだと思います。

-----
<!--wakaba-->

## 覚えやすく便利

- 宣言的なテンプレート
- リアクティブなレンダリング
- 純粋なJavaScriptオブジェクトモデル

-----
<!--wakaba-->
## 学習コストが低いということ

ときとして軽視されがちだが、走る前の/走ってる  
プロジェクトにアサインされる人の負担が小さいことに越したことはない

-----
<!--power-->
## 少ない学習で大きなパワー💪


-----
<!--hayai-->
# 軽くて速い

<small>参考：[ほかのフレームワークとの比較](https://vuejs.org/v2/guide/comparison.html)</small>

-----
<!--cover-hayai-->

# 軽い

Name                       | Size (min+gzip)
-------------------------- | -------------
Vue 2.0                    | **23K**
React 15.3.0 + React DOM   | 43K
Angular 1.4.5            | 51K 
Angular 2                  | 111K
Angular 2 + Rx             | **143K**

<!-- Vue 2.0 + vue-router + vuex| 26K -->

<blockquote>
<a href="https://gist.github.com/Restuta/cda69e50a853aa64912d">Restuta/framework-sizes.md</a>
,
<a href="https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#28bf">Vue 2.0 is Here!#Perfomance</a>
</blockquote>

-----
<!--cover-hayai-->
# 速い

![](./img/speed.png)

<blockquote>
<a href="https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#28bf">Vue 2.0 is Here!#Perfomance</a>
,
<a href="http://stefankrause.net/js-frameworks-benchmark4/webdriver-ts/table.html">Results for js web frameworks benchmark</a>
</blockquote>

-----
<!--super-->
# 強い

-----
<!--hatena-->

## 本当に強いの❓

🤔「他のフレームワークより軽くて速いのはわかった  
けどAngularはフルスタックで対応力にすぐれてるよ。Vue.jsは同じ土俵に立てるの？」


-----
<!--houyouryoku-->
## どんな規模にも対応できる<br>フレームワーク

---

２つめのいいところ。
Vue.jsがどんな規模のアプリケーションにも対応できるフレームワークだということです。

-----
<!--seityou-->
## アプリケーションは成長する

アプリケーションは作って終わりということは少なく、機能追加など新しい要求によって段階的に成長していく

-----
<!--youkyuu-->

### 要求に合わせて拡張・変更したい…

🤔「この設計になるならクライアントルーティングしてシングルステートな感じでモジュールもほかのサービスで使いまわせるようにしたほうがヨサソウだな…」

-----
<!--tsurami-->

### 要求に対応できないフレームワークだと…

🤔「今使ってるフレームワークだとめんどくさみあって厳しいし、そもそもこれに対応できるかあやしい😥別のフレームワークで作り直したほうが早いまであるぞ😱」

-----
<!--okane-->

## 初期の技術選定が<br>サービスの成長に影響する

初期の要求だけに合わせてフレームワークを選ぶと  
のちのち苦労することになりかねない。将来的な要求の変化に対応できるフレームワーク選びが重要☝🏻

-----
<!--important-->
## Vue.js単体では<br>小規模なSPAぐらいまで

- <span style="font-size: 1.5em; vertical-align: middle;">😄</span> キャンペーンサイト/LP/プロトタイプ</span>
- <span style="font-size: 1.5em; vertical-align: middle;">😉</span> 小規模SPA
- <span style="font-size: 1.5em; vertical-align: middle;">😫</span> 中規模SPA
- <span style="font-size: 1.5em; vertical-align: middle;">👺</span> 大規模SPA

---

最初に紹介したとおり、Vue.jsはViewに特化したライブラリで、ここにあげているようなコンポーネントやキャンペーンサイト、小規模なシングルページアプリケーションぐらいまでしか適していません。
Vue.js単体にこれ以上を求めると火が出て死人が出るかもしれません。

-----
## あらゆる規模に対応？<br>どうやって？

---
<!--hatena-->
ではどうやってVue.jsであらゆる規模に対応するのか。
Vue.jsのトップページを見てみましょう。

-----
<!--cover-progressive-->

---

Vue.jsのトップページを見ると「Progressive Framework」という単語がでてきます。
これは作者のEvan氏が提唱するフレームワークの概念です。
ではこのプログレッシブフレームワークとはどういったものなのでしょうか。

-----
<!--juunan-->
## Progressive Framework

アプリケーションの段階的な要求の変化に対応して  
そのときの規模に合わせて必要なだけスケールできる柔軟性をもつフレームワーク

参考: [Vue.js: The Progressive Framework](https://docs.google.com/presentation/d/1WnYsxRMiNEArT3xz7xXHdKeH1C-jT92VxmptghJb5Es/edit#slide=id.p)

---

プログレッシブフレームワークとは、「アプリケーションの段階的な要求の変化に対応できて、規模に合わせて必要なだけ拡張/縮小できる柔軟性をもつフレームワーク」です。
アプリケーションは作って終わりということはなく、運用を続けて機能の追加などが行われます。
ときとして最初の要求とは全く異なる要求が出てきて「このフレームワークだとそれに応えるのは難しい（めんどくさい）かも…」といった状況に陥りがちです。

作者のEvan氏のプレゼン資料に、プログレッシブフレームワークの概念についての説明がありますので、興味のあるかたは目を通してみてください。
-----
<!--tool-->
### Vue.jsをサポートする<br>ライブラリ/ツールを使って対応

- ルーティング：[vue-router](https://github.com/vuejs/vue-router)
- 状態管理：[vuex](https://github.com/vuejs/vuex)
- ビルドシステム：[vue-loader](https://github.com/vuejs/vue-loader)/[vueify](https://github.com/vuejs/vueify)
- デバッグ：[vue-devtools](https://github.com/vuejs/vue-devtools)
- そのほか色々… 👉 [awesome-vue](https://github.com/vuejs/awesome-vue)

---

ルーティングが必要になったらvue-routerを、Fluxのような状態管理が必要になったらvuexを導入することで
アプリケーションの変化に対応できます。
vue-loaderとvueifyは規模が大きくなるにつれて複雑になりがちな、コンポーネントを管理しやすくする開発環境を整えてくれるツールです。

-----
<!--tool-->
## 公式のライブラリ/ツールが<br>充実している

-----
<!--annsin-->
## 公式サポートという安心感

Vue.js本体のアップデートにライブラリ/ツールも追従  
してサポートが続く。サードパーティ製ライブラリだとアップデートに追従できない可能性がある☝🏻

-----
<!--hatena-->
## 結局なんやかんや色々と<br>覚えないといけないのでは！？

-----

## 必要なものを<br>必要なときに覚える
<!--kaidan-->
全部を覚える必要はない。要件に応じて使うものを必要なときに導入し、その都度覚えればいい☝🏻

---

AngularJSのようなフルスタックと呼ばれるようなフレームワークの場合、使うのに必要な学習コストは機能と比例して高くなります。これはその機能がいる・いらないにかかわらずフレームワークの全体像を理解する必要があるからです。

Vue.jsの場合、アプリケーションの規模によって何を使い、何を使わないか柔軟に選択できます。選択したものを選択したときに覚えればよいのです。

-----
<!--guide-->
# まずはガイドを読もう

Vue.jsがどういうものか、どう使えばいいかは  
[公式のガイド](http://vuejs.org/v2/guide/)に詰め込まれている☝🏻

<small>[(日本語訳は公開目前)](https://github.com/vuejs/jp.vuejs.org/tree/lang-ja-2.0/src/v2/guide)</small>
-----
<!--guide-->
## 整備されたドキュメント

- [vuejs/Guide](http://vuejs.org/v2/guide/)
- [vuejs/API](http://vuejs.org/v2/api/)
- [vue-router（日本語）](http://router.vuejs.org/ja/index.html)
- [vuex](http://vuex.vuejs.org/en/)
- [vue-loader](http://vue-loader.vuejs.org/en/index.html)

---
.
Vue.jsは関連するライブラリやツールを含め、とにかくドキュメントが手厚く親切に書かれています。
コミュニティによる翻訳も活発で、覚えるのに困ることはないと言ってもいいでしょう。

-----
<!--nihon-->
## 日本語のサポートも十分に

- [コアチーム](https://github.com/orgs/vuejs/people)に日本人がいる [<img src="https://avatars3.githubusercontent.com/u/72989?v=3&s=96" >](https://twitter.com/kazu_pon)[<img src="https://avatars3.githubusercontent.com/u/2194624?v=3&s=96" >](https://twitter.com/ktsn)[<img src="https://avatars3.githubusercontent.com/u/5313274?v=3&s=96" >](https://twitter.com/tejitak)
- [日本語翻訳プロジェクト](https://github.com/vuejs/jp.vuejs.org)がある
- [日本ユーザー向けグループ](https://vuejs-jp-slackin.herokuapp.com/)（Slack）がある

-----
<!--super-->
## コミュニティが強いOSSは強い

-----
<!--tool-->
## ライブラリ/ツールが充実

-----
<!--bg-vuex-->
## [Vuex](https://github.com/vuejs/vuex)

- FluxとかRedux for Vue.js
- アプリケーションの状態を一元的に管理
- アプリケーションの複雑性を解消するため

-----
<!--vuex-->

<blockquote>
<a href="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/en/images/vuex.png">vuejs/vuex/dev/docs/en/images/vuex.png</a>
</blockquote>

-----
<!--bg-vuex-->

## Vuexの効能

- データフローが一方向に
- 信頼できる唯一の情報源 (single source of truth)
- コンポーネント同士のやりとりが不要に
- 状態変更が明示的かつ追跡可能に 👉 ✨vue-devtools✨

-----
<!--bg-vuex-invert-->

## 中規模以上のSPAで使おう

規模の小さなアプリケーションにVuexを導入すると冗長であまり効果のない制約を生み出すことに。  
[シンプルなイベントバスの仕組み](https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication)でも十分機能する☝🏻

-----
<!--devtools-->
## [vue-devtools](https://github.com/vuejs/vue-devtools)

- コンポーネントの状態確認
- ルーティングの状態確認（vue-router）
- 状態変化の追跡とタイムトラベル（vuex）

-----
<!--code-->

<iframe src="./demo/vuex/index.html" width="600px" height="400px">
</iframe>

[demo/vuex](./demo/vuex/index.html)

-----
<!--devtools-->
### コンポーネントの状態確認

![](./img/devtools_component.png)

-----
<!--devtools-->
### Storeの状態変化の追跡とタイムトラベル

![](./img/devtools_vuex.png)

-----

## [vue-loader](https://github.com/vuejs/vue-loader)/[vueify](https://github.com/vuejs/vueify)

- webpack/Browserifyでバンドル
- 1コンポーネント1ファイル（.vue）

-----
<!--code-->

.vue
```html
<template>
  <div class="my-component"><span>{{message}}</span></div>
</template>
<style lang="scss" scoped>
  .my-component {
    color: tomato;
    span { border: 1px solid #000; }
  }
</style>
<script>
  export default {
    data() { return { message: 'Hello!!' } }
  }
</script>
```

-----

## .vueファイル

- JS：ES2015で書ける（babel）
- CSS：プリプロセッサ（Sass/Stylus）が使える
- Hot Module Replacement（HMR、差分更新）

-----
<!--code-->
CSS Modulesも使える

```html
<style module>
  .red {
    color: red;
  }
  .bold {
    font-weight: bold;
  }
</style>

<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

-----

## [vue-cli](https://github.com/vue-cli)

- スキャフォールド用のコマンドラインツール
- vue-loader/vueifyの環境構築
- `$ vue init webpack awesome-project`

-----
<!--code-->

Y/nで必要な環境をセットアップ

```bash
$ vue init webpack awesome-project

? Project name awesome-project
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset AirBNB
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "awesome-project".
   
   To get started:
    cd awesome-project
    npm install
    npm run dev
```

-----
<!--relax-->
## らくらく環境構築

- めんどくさい環境構築をスキップできる
- 公式のテンプレートがいい感じ
- ESLint/ユニットテスト/E2Eテストの環境構築もしてくれる

-----
<!--relax-->
## 手を抜こう

webpack/Browserifyみたいな初期設定がめんどくさいやつはツールに任せて、もっと大事な部分に時間をかけられるように

-----
<!--houyouryoku-->
# まとめ

-----

<!--end-->

# Vue.jsは強い

- 💪 少ない学習で大きなパワー
- 💨 軽くて速い
- 👐 ライブラリ/ツールでどんな規模にも対応

-----
<!--end2-->
# Thank you👍

[@nakajmg](https://twitter.com/nakajmg)

-----
<!--codegrid-->

## Vue.jsの連載やってます

## 👉 [CodeGrid](http://www.codegrid.net/) 👈
