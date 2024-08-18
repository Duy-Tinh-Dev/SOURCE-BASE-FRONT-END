'use client';

import { Layout } from '@/components/layout/layout';

export default function HomePage() {
  return (
    <Layout fixed>
      <Layout.Header>header</Layout.Header>
      <Layout.Body className="flex flex-col">
        <h1>Home Page</h1>
      </Layout.Body>
    </Layout>
  );
}
