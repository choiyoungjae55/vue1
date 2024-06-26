const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../demo/src/main/resources/static',

  // npm run serve 개발 진행시에 포트가 다르기때문에 프록시 설정
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081' //서버 프로젝트 포트번호와 동일할 것
       },
    },
  },
})
