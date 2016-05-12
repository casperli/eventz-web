exports.config = {
  baseUrl: 'http://localhost:3005/',
  capabilities: {
    "browserName": "firefox",
  },
  directConnect: true,
  specs: ['**/*.e2e.ts'],
};
