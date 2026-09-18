# Image assets

Drop the following files into this directory before launch:

- `hero.jpg` — primary product shot used by the hero (recommended ~1600×1600 JPG, optimized). The Kickstarter "box on concrete plinth" shot is the strongest single asset.
- `manual-cover.jpg` — Owner's Manual cover for the press page.
- `wordmark.svg` — optional SVG wordmark for the press kit.

## Optional: 360° spin sequence

Drop 24 JPG frames into `./spin/`, named `frame_01.jpg` through `frame_24.jpg`, captured at evenly spaced angles around the box. The hero component auto-detects them and enables drag-to-rotate. If `frame_01.jpg` is missing, the component falls back to a static `hero.jpg`.

To capture: place the box on a turntable, lock the camera, shoot 24 frames (one every 15°). Edit consistently and export as 1200×1200 JPG (~70 KB each).

## Optional: customer photo wall

Approved UGC submissions go into `./wild/`. Future enhancement: read this directory at build time and render the gallery automatically.
