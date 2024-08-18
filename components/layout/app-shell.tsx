export default function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <header></header>
      <div>{children}</div>
    </div>
  );
}
