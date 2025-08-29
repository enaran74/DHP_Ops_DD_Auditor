export default function HomePage() {
  return (
    <main style={{ padding: 16 }}>
      <header style={{ position: 'sticky', top: 0, background: '#fff', paddingBottom: 8 }}>
        <h1 style={{ margin: 0 }}>DHP Ops DD Auditor</h1>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <input placeholder="Search sections/items" style={{ flex: 1, padding: 8 }} />
          <button>Save All</button>
          <button>Export</button>
        </div>
      </header>
      <section style={{ marginTop: 24 }}>
        <p>Welcome. App scaffolding is ready.</p>
      </section>
    </main>
  );
}

