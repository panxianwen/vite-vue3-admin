// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const res: any = {}
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }

    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName)
      } catch (error) {
        console.error(error)
      }
    }

    res[envName] = realName
    process.env[envName] = realName
  }
  return res
}
