import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const quickActions = [
  ['🐾', 'Nuevo producto', 'Crear una ficha en Productos', 'https://github.com/menefta/cibeland-hub/new/main/docs/productos?filename=nuevo-producto.md'],
  ['🤝', 'Nuevo proveedor', 'Guardar contacto y condiciones', 'https://github.com/menefta/cibeland-hub/new/main/docs/proveedores?filename=nuevo-proveedor.md'],
  ['💡', 'Nueva idea', 'Añadir una idea al backlog', 'https://github.com/menefta/cibeland-hub/new/main/docs/ideas?filename=nueva-idea.md'],
  ['📋', 'Nuevo procedimiento', 'Documentar un proceso paso a paso', 'https://github.com/menefta/cibeland-hub/new/main/docs/procedimientos?filename=nuevo-procedimiento.md']
];

const cards = [
  ['🐾', 'Productos', 'Fichas, medidas, materiales, precios y estado del catálogo.', '/docs/productos/catalogo'],
  ['🎨', 'Diseño', 'Marca, colores, logos, packaging y recursos creativos.', '/docs/diseno/manual-de-marca'],
  ['🛠️', 'Fabricación', 'Impresión 3D, bordado, láser, moldes y controles de calidad.', '/docs/fabricacion/mapa-de-fabricacion'],
  ['📣', 'Marketing', 'Campañas, redes sociales, lanzamientos y calendario.', '/docs/marketing/plan-de-marketing'],
  ['📋', 'Procedimientos', 'Procesos repetibles para trabajar mejor y cometer menos errores.', '/docs/procedimientos/lanzar-producto'],
  ['💡', 'Ideas', 'Backlog de ideas, experimentos y próximos productos.', '/docs/ideas/backlog']
];

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Inicio" description="Repositorio interno de CIBELAND">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Repositorio interno</span>
            <h1>CIBELAND Hub</h1>
            <p>Todo el conocimiento de la tienda online de mascotas, ordenado y compartido.</p>
            <Link className="button button--primary button--lg" to="/docs/intro">Entrar al repositorio</Link>
          </div>
        </section>

        <section className={`container ${styles.quickSection}`}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>Acciones rápidas</span>
              <h2>¿Qué quieres añadir?</h2>
            </div>
            <Link to="/docs/plantillas/nuevo-producto">Ver plantillas</Link>
          </div>
          <div className={styles.quickGrid}>
            {quickActions.map(([icon, title, text, link]) => (
              <a className={styles.quickCard} href={link} key={title} target="_blank" rel="noreferrer">
                <span className={styles.quickIcon}>{icon}</span>
                <div><strong>{title}</strong><small>{text}</small></div>
                <b>＋</b>
              </a>
            ))}
          </div>
          <p className={styles.helpText}>Los botones abren GitHub con el archivo ya colocado en la carpeta correcta. Copia el contenido de la plantilla correspondiente, rellena los datos y pulsa <strong>Commit changes</strong>.</p>
        </section>

        <section className={`container ${styles.grid}`}>
          {cards.map(([icon, title, text, link]) => (
            <Link className={styles.card} to={link} key={title}>
              <span>{icon}</span><h2>{title}</h2><p>{text}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
