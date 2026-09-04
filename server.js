services:
  - type: web
    name: cheboksary-automarket
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 20
