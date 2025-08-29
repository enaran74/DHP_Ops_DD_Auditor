export const metadata = {
  title: 'DHP Ops DD Auditor',
  description: 'Due Diligence Audit App'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }}>
        {children}
      </body>
    </html>
  );
}

