const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===================================================================
                                                                     
       █████╗  ██████╗██████╗ ██╗   ██╗██╗     ██╗ ██████╗
      ██╔══██╗██╔════╝██╔══██╗╚██╗ ██╔╝██║     ██║██╔════╝
      ███████║██║     ██████╔╝ ╚████╔╝ ██║     ██║██║     
      ██╔══██║██║     ██╔══██╗  ╚██╔╝  ██║     ██║██║     
      ██║  ██║╚██████╗██║  ██║   ██║   ███████╗██║╚██████╗
      ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝ ╚═════╝
                                                    
                HEO1:1 复刻主题 版本:${version}                       
  ===================================================================`)
})
