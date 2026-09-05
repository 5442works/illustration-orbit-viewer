import fs from 'node:fs';
const path='/home/ubuntu/illustration-orbit-viewer/client/src/pages/Home.tsx'; let s=fs.readFileSync(path,'utf8');
const from='{guides.gaze && <div className="gaze-guide"><span>視線誘導</span></div>}<div className="angle-hud">';
const to='{guides.gaze && <div className="gaze-guide"><span>視線誘導</span></div>}{light.enabled && <div className="light-guide"><span>主光源</span><i /></div>}<div className="depth-ladder">{layers.map((layer) => <button key={layer.id} className={selectedId === layer.id ? "active" : ""} onClick={() => setSelectedId(layer.id)}><span>{layer.depth}</span><b>{layer.id === "background" ? "背景" : layer.id === "character" ? "キャラクター" : "前景"}</b><em>Z {layer.z.toFixed(2)}</em></button>)}</div><div className="angle-hud">';
if (!s.includes(from)) throw new Error('anchor not found'); s=s.replace(from,to); fs.writeFileSync(path,s);
