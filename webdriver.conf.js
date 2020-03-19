module.exports = {
    url: "http://localhost",
    host: '127.0.0.1',
    smartWait: 5000,
    browser: "chrome",
    restart: false,
    windowSize: "maximize",
    waitForTimeout: 10000,
    smartWait: 10000,
    keepCookies: true,
    keepBrowserState: true,
    port: 4444,
    timeouts: {
        "script": 60000,
        "page load": 60000
    },
    coloredLogs: true,
    desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox", "--ignore-certificate-errors" ]
        }
      }
};