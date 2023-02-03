import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {

  return (
    <Html lang="en" >
      <Head />
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
