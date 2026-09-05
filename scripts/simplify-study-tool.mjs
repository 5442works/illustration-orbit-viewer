import fs from 'node:fs';
const path='/home/ubuntu/illustration-orbit-viewer/client/src/pages/Home.tsx'; let s=fs.readFileSync(path,'utf8');
for (const line of [
'  const [compareMode, setCompareMode] = useState(false);\n',
'  const [compareSplit, setCompareSplit] = useState(50);\n',
'  const [draggingCompare, setDraggingCompare] = useState(false);\n',
'  const [baselineCamera] = useState<CameraState>({ yaw: 0, pitch: 0, distance: 5.8 });\n',
'  const [baselineImage] = useState<ImageSettings>({ width: 6.1, height: 3.7, x: 0, y: 0, lockRatio: true });\n'
]) s=s.replace(line,'');
s=s.replace(' setCompareSplit(50);','');
s=s.replace('<button className={compareMode ? "compare-toggle active" : "compare-toggle"} onClick={() => setCompareMode(v => !v)}>左右比較</button>','');
s=s.replace('<div className={`viewport-wrap ${compareMode ? "is-compare" : ""}`} style={{ "--compare-split": `${compareSplit}%` } as React.CSSProperties} onPointerMove={(e) => { if (!draggingCompare) return; const r = e.currentTarget.getBoundingClientRect(); setCompareSplit(Math.max(20, Math.min(80, ((e.clientX - r.left) / r.width) * 100))); }} onPointerUp={() => setDraggingCompare(false)} onPointerLeave={() => setDraggingCompare(false)}><div ref={mountRef} className="viewport" />{compareMode && <div className="compare-baseline"><div className="compare-label"><strong>変更前</strong><span>基準画像 · 距離 {baselineCamera.distance.toFixed(1)} · 視野角 42°</span></div><div className="compare-divider" onPointerDown={(e) => { e.stopPropagation(); setDraggingCompare(true); }}><span>↔</span></div><img src={imageUrl} alt="変更前の基準画像" style={{ width: `${(baselineImage.width / 6.1) * 100}%`, height: `${(baselineImage.height / 3.7) * 100}%`, left: `${50 + baselineImage.x * 8}%`, top: `${50 - baselineImage.y * 8}%` }} /></div>}', '<div className="viewport-wrap"><div ref={mountRef} className="viewport" />');
s=s.replace('<p className="panel-note camera-note">カメラ距離は被写体との位置、視野角はレンズの広さです。距離を変えず視野角だけ変えると、広角・望遠の違いを確認できます。</p><label className="toggle-row"><input type="checkbox" checked={compareMode} onChange={e => setCompareMode(e.target.checked)} /> 変更前後を左右比較</label>','<p className="panel-note camera-note">カメラ距離は被写体との位置、視野角はレンズの広さです。距離を変えず視野角だけ変えると、広角・望遠の違いを確認できます。</p>');
s=s.replace('<p className="panel-note compare-note">左右比較は、調整前の基準構図と現在の調整結果を見比べる機能です。境界線をドラッグして、確認したい側の表示幅を広げられます。</p>','');
s=s.replace('<label className="toggle-row"><input type="checkbox" checked={parallax.enabled} onChange={e => setParallax(x => ({ ...x, enabled: e.target.checked }))} /> カメラ連動</label>','<p className="panel-note">カメラ連動は常時有効です。視差の強さを0にすると、視差効果だけを無効にできます。</p>');
fs.writeFileSync(path,s);
