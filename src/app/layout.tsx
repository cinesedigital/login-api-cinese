export const metadata = {
  title: 'Cinese Test App',
  description: 'App de teste da Cinese Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
