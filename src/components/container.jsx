function Layout({ children }) {
  return (
     <div className="layout">
      <main>{children}</main>
    </div>
  );
}

function Section({ children, className = "", id = "" }) {
  return (
    <section className={`${className}`} id={id}>
      <div className="container-fluid py-3">{children}</div>
    </section>
  );
}

export { Layout, Section };
