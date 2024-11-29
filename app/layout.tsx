import '@/app/ui/global.css'
import {Interr} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Interr.className} antialiased`}>{children}</body>
    </html>
  );
}
