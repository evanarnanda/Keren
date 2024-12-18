import { Html } from '@elysiajs/html'
export default function BaseHtml( { children }: { children: JSX.Element } ) {
  return (
    <html lang='en' >
        
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Franken UI</title>
            <link rel='stylesheet' href='/public/dist/output.css' />
            <script src="/public/dist/htmx@2.0.4/htmx.min.js"></script>
            <script src="/public/htmx.js"></script>
        </head>
        <body class="bg-background text-foreground">
            {children}
        </body>
        {/* <script src="/public/theme.js"></script> */}
    </html>
  )
}