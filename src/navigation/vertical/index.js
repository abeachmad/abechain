import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://raw.githubusercontent.com/abeachmad/abechain/master/public/islm.png',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://ping.pub',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'https://github.com/abeachmad/abechain',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/abeachmad/abechain',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'https://discord.gg/7qzXTU97',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/abeachmad_',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/abeachmad',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
