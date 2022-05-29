import bowser from "bowser"

export const getUserAgent = () => {
  const uaData = bowser.parse(window.navigator.userAgent)
  return {
    Browserinfo: `${uaData.browser.name} ${uaData.browser.version}`,
    Deviceinfo: `${uaData.os.name} ${uaData.os.versionName} ${uaData.platform.type}`,
  }
}
