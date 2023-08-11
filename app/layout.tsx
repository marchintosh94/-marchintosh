import { Metadata } from "next";
import { PropsWithChildren } from "react";

import metaSocialImg from '../assets/meta/marcobaratto.png'

const title = 'Marco Baratto'
const metaDesc = 'Marco baratto portfolio website where you can find all my projects, experiences and discover curious things about me.'
export const metadata: Metadata = {
    title,
    description: metaDesc,
    applicationName: 'Marco Baratto',
    twitter: {
        card: 'summary_large_image'
    },
    openGraph:{
        title,
        type: 'website',
        url: 'https://www.marcobaratto.dev/',
        images: metaSocialImg.src
    }, 
    icons: [
        { rel:'apple-touch-icon-precomposed', sizes:'57x57', url:'/favicon/apple-touch-icon-57x57.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'114x114', url:'/favicon/apple-touch-icon-114x114.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'72x72', url:'/favicon/apple-touch-icon-72x72.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'144x144', url:'/favicon/apple-touch-icon-144x144.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'60x60', url:'/favicon/apple-touch-icon-60x60.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'120x120', url:'/favicon/apple-touch-icon-120x120.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'76x76', url:'/favicon/apple-touch-icon-76x76.png'},
        { rel:'apple-touch-icon-precomposed', sizes:'152x152', url:'/favicon/apple-touch-icon-152x152.png'},
        { rel:'icon', type:'image/png', url:'/favicon/favicon-196x196.png', sizes:'196x196'},
        { rel:'icon', type:'image/png', url:'/favicon/favicon-96x96.png', sizes:'96x96'},
        { rel:'icon', type:'image/png', url:'/favicon/favicon-32x32.png', sizes:'32x32'},
        { rel:'icon', type:'image/png', url:'/favicon/favicon-16x16.png', sizes:'16x16'},
        { rel:'icon', type:'image/png', url:'/favicon/favicon-128.png', sizes:'128x128'}
    ],
    
}

export default function RootLayout({ children }: PropsWithChildren){
    return (
        <html lang="en" className="h-full antialiased">
            <body> {children} </body>
        </html>
    )
}