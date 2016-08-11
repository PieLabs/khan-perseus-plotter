# Build 

Note: Haven't streamlined this yet... for now: 

```shell
npm install -g webpack less
npm install abel-cli
babel --presets react src/index.jsx --out-file dist/index.js
babel --presets react src/plotter.jsx --out-file dist/plotter.js
webpack dist/index.js dist/bundle.js
lessc src/plotter.less dist/index.css
```

# Run Demo
    cd serve-pie-demo
    serve-pie