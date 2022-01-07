export const startBrowser = async (puppeteer) => {
  let browser

  try {
    browser = await puppeteer.launch({
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
      ],
      ignoreHTTPSErrors: true,
    })
  } catch (err) {
    console.log('Could not create a browser instance => : ', err)
  }

  return browser
}
