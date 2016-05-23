# Build 

Note: Haven't streamlined this yet... for now: 

```shell
npm install -g babel webpack less
babel --presets react src/index.jsx --out-file dist/index.js
babel --presets react src/plotter.jsx --out-file dist/plotter.js
webpack dist/index.js dist/bundle.js
lessc src/plotter.less dist/index.css
```
