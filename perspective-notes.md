# パース実装メモ

1点パースは、正面性のある構図で主に1つの消失点へ奥行き線を収束させる。2点パースは水平線上の左右2つの消失点へ、左右方向の辺を収束させる。3点パースは2点パースに加え、上下方向の辺も上方または下方の第3消失点へ収束させる。

実装では、パース方式に応じて消失点ハンドルの数と補助線群を切り替える。消失点は画面座標（0〜1）で保持し、ハンドル移動時に各補助線の終点を再計算する。画像に線を直接描く場合は、元画像とは別の透明キャンバスへ線を記録する。

参考URL:
- https://helpx.adobe.com/illustrator/desktop/manage-objects/reshape-transform-objects/about-perspective-drawing.html
- https://thevirtualinstructor.com/twopointperspective.html
- https://etchrlab.com/blogs/news/understanding-three-point-perspective

参考記事の要点：一点透視は奥行き線を1つの消失点へ集め、正面の廊下や部屋の奥行きに向く。二点透視は左右2つの消失点を使い、建物の角を斜めから見る構図に向く。三点透視は左右2点に加え、上方または下方の第3消失点を使い、アオリ・フカンの高さ方向を表現する。今回の実装では、1点は消失点から上下左右の境界へ放射する線、2点は左右の消失点へ収束する線、3点はさらに上下方向の収束線を表示する。
