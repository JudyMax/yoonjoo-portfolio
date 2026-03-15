import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '김윤주 · PM Portfolio',
  description:
    '신사업 0→1부터 B2B SaaS 1→N까지, End-to-End PM 김윤주의 포트폴리오입니다.',
  openGraph: {
    title: '김윤주 · PM Portfolio',
    description: '신사업 0→1부터 B2B SaaS 1→N까지, End-to-End PM 김윤주의 포트폴리오입니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="app-wrapper">
          <Header />
          <main className="app-main">{children}</main>
          <footer className="bx--footer">
            <div className="bx--header__inner">
              © 2026 김윤주
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
