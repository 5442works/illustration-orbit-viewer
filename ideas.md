# Illustration Orbit Viewer — Design Brainstorm

## Approach 1
- Theme Name: Drafting Room
- Very Brief Intro: 作画机と設計図を思わせる明るい紙面。視点確認の精度と落ち着きを、罫線・座標・注釈で表現する。
- Probability: 0.07

## Approach 2
- Theme Name: Observatory Console
- Very Brief Intro: 天文観測所の操作盤を思わせる深い青緑の空間。カメラ軌道と視点の変化を、観測値と静かな光で可視化する。
- Probability: 0.03

## Approach 3
- Theme Name: Material Stage
- Very Brief Intro: 舞台美術のラフ模型のような温かいインターフェース。背景・対象・地面のレイヤーを、素材の重なりとして見せる。
- Probability: 0.09

## Chosen Approach: Observatory Console

### Design Movement
Contemporary scientific-instrument UI mixed with editorial brutalism: an observatory console translated into a calm, tactile creative tool.

### Core Principles
1. The viewport is the instrument, not a decorative hero; controls should orbit around the act of looking.
2. Data-like readouts make camera position and uncertainty explicit.
3. Deep blue-green surfaces create focus, while one warm signal color marks the active state.
4. The interface uses asymmetry, thin rules, and compact labels instead of generic cards and gradients.

### Color Philosophy
Use ink blue-green as the working field, pale mineral text for legibility, and a single amber-orange signal color for active controls and camera markers. The contrast should feel like a precise instrument in a dark studio, not a gaming dashboard.

### Layout Paradigm
A persistent narrow left rail for file and layer operations, a wide central viewport, and a right-hand instrument column for camera telemetry. The viewport occupies the visual center but controls stay asymmetrical and anchored to the edges.

### Signature Elements
- Orbit trace: a thin amber arc and crosshair around the camera target.
- Telemetry labels: compact uppercase values for yaw, pitch, zoom, and mode.
- Material swatches: small layer chips indicating scene, subject, ground, and reference.

### Interaction Philosophy
Dragging should feel physical and immediate, like moving a camera rig. UI controls respond with restrained motion; frequent camera actions are instant, while panels and status changes use short transitions.

### Animation
Use 150–220ms ease-out transitions for panel states and button feedback. The viewport itself must track pointer movement without lag. Add a subtle settling motion only when snapping to a preset. Respect prefers-reduced-motion.

### Typography System
Use Space Grotesk for headings and telemetry, and IBM Plex Sans for body copy and controls. Headings are compact and slightly letter-spaced; numeric camera readouts use tabular figures.

### Brand Essence
A private visual instrument for illustrators who want to test composition from every angle without uploading their work. Personality: observant, tactile, exacting.

### Brand Voice
Headlines are concise and instrument-like; CTAs describe the action, never vague benefits. Example lines: “Orbit the scene.” and “Nothing leaves this browser.”

### Wordmark & Logo
A bold circular orbit mark: an open ring interrupted by a small square camera reticle, no text inside the mark. The wordmark uses a custom-spaced geometric treatment rather than a default font rendering.

### Signature Brand Color
Signal amber: #F2A65A.

## Style Decisions
- The initial prototype must foreground the viewport and direct manipulation.
- Background-inclusive scene inspection is the default; transparency is an optional layer operation.
- 3D uncertainty is shown through labels such as “single-plane estimate” rather than hidden.
