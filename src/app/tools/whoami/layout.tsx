import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'WhoAmI',
  description: "自分の情報を調べるツール",
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
    </section>
  );
}