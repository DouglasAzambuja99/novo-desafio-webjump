const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'smvkd4',
  e2e: {
      baseUrl: 'https://magento2-demo.magebit.com/'
  },
});
