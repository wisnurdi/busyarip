import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Bu Syarip</span>,
  useNextSeoProps: () => {
      return {
        titleTemplate: "Bu Syarip - %s"
      };
  },
  chat: {
    link: 'https://api.whatsapp.com/send?phone=+6289605933133&text=halo',
  },
  footer: {
    text: 'BPS Kabupaten Karanganyar',
  },
  feedback.content: null,
}

export default config
