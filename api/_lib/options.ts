/**
 * @link https://github.com/vercel/og-image/blob/main/api/_lib/options.ts
 */

import chrome from 'chrome-aws-lambda'

const exePath =
  process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

interface Options {
  args: string[]
  executablePath: string
  headless: boolean
}

export const getOptions = async (isDev: boolean): Promise<Options> =>
  isDev
    ? {
        args: [],
        executablePath: exePath,
        headless: true,
      }
    : {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
