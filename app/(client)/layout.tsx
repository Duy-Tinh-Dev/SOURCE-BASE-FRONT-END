import AppShell from '@/components/layout/app-shell';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AppShell>{children}</AppShell>
    </main>
  );
}
