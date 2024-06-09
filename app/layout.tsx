import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';
import { Inter } from "next/font/google";
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config/Wagmi'
import { Web3ModalProvider } from '@/config/Web3Modal'
import { Lens } from '@/config/Lens'
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Provider from '@/app/Provider'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | VimCord',
    default: 'VimCord',
  },
  description: "",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="zh">
      <Head>
        <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="VimCoed:Lens Protocol Web3 Content social 内容社交" />
        <meta property="twitter:description" content="Lens Protocol Web3 Content social" />
        <meta property="description" content="基于Lens协议构建,为中文用户构建,内容社交,社群聊天,放大创作者经济,灵感保证原创,Web3优质内容的去中心化平台" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="VimCord Dapp:基于Lens协议构建,为中文用户设计的去中心化平台" />
        <meta property="og:title" content="VimCord Dapp"></meta>
        <meta property="og:description" content="基于Lens协议构建,为中文用户构建,内容社交,社群聊天,放大创作者经济,灵感保证原创,Web3优质内容的去中心化平台" />
       {/*  <meta property="og:url" content="Canonical link preview URL"></meta> */}
      </Head>

      <body className={inter.className}>
        <Provider>
          <Web3ModalProvider initialState={initialState}>
            <Lens>

              <Header />
              {/* <div className="sm:mt-16"/> */}
              {children}

              <Analytics />
              <SpeedInsights />

            </Lens>
          </Web3ModalProvider>
        </Provider>

      </body>
    </html>
  );
}
