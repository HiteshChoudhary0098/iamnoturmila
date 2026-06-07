// feed posts data — swap `cls` for real <img> later
const POSTS = [
  { cls: 'p-orange', k: 'Calidad, sabor', big: 'Y Frescura', k2: 'tomate manzano' },
  { cls: 'p-green', big: 'Comer frutas te hace feliz', italic: false },
  { cls: 'p-yellow', k: 'Papaya', big: 'Kaya Paya', k2: 'súper dulce' },
  { cls: 'p-photo-leaf', head: 'Eat your greens!', k2: 'come tus vegetales' },
  { cls: 'p-orange', k: '¡Higiene,', big: 'frescura', k2: 'y calidad!' },
  { cls: 'p-photo-green', k: 'Frescura', big: 'Y Calidad', italic: false, k2: 'en cada producto' },
  { cls: 'p-yellow', big: 'Don Cate' },
  { cls: 'p-green', head: 'Sentirse feliz es vital', headSm: true, k2: 'para una vida saludable' },
  { cls: 'p-orange-deep', k: '¡Rápida, fácil', big: 'y Saludable!', italic: false, bigSm: true },
]

const GRID = [
  { cls: 'p-orange', t: 'CUPÓN' },
  { cls: 'p-yellow', t: 'EL MEJOR ALIMENTO' },
  { cls: 'p-green', t: '🍅' },
  { cls: 'p-green', t: 'PIÑA SWEET' },
  { cls: 'p-orange-deep', t: 'SOPA DE TOMATE' },
  { cls: 'p-yellow', t: 'PRODUCTOS' },
]

function Post({ post, delay }) {
  return (
    <div className={`post ${post.cls} reveal d${delay}`}>
      {post.k && <span className="k">{post.k}</span>}
      {post.head && (
        <span className="head-t" style={post.headSm ? { fontSize: 20 } : undefined}>
          {post.head}
        </span>
      )}
      {post.big && (
        <span
          className="big"
          style={{
            ...(post.italic === false ? { fontStyle: 'normal' } : {}),
            ...(post.bigSm ? { fontSize: 24 } : {}),
          }}
        >
          {post.big}
        </span>
      )}
      {post.k2 && <span className="k">{post.k2}</span>}
      <span className="badge">LC</span>
    </div>
  )
}

export default function Project() {
  return (
    <section id="project">
      <div className="inner">
        <div className="head reveal">
          <div className="num">01</div>
          <div className="meta">
            <h2>La Carreta</h2>
            <div className="h-sub">Frutas y Verduras</div>
            <div className="h-kicker">Creatividad y redacción de contenido</div>
          </div>
        </div>

        <div className="layout">
          {/* phone mockup */}
          <div className="phone reveal d1">
            <div className="notch" />
            <div className="screen">
              <div className="ph-status">
                <span>1:16</span>
                <span>▮▮ ⌃ ▮</span>
              </div>
              <div className="ph-top">‹ &nbsp; lacarretafrutasyverduras &nbsp; ⌄ ⋯</div>
              <div className="ph-prof">
                <div className="ph-ava" />
                <div className="ph-stats">
                  <div><b>385</b>Posts</div>
                  <div><b>3,455</b>Followers</div>
                  <div><b>323</b>Following</div>
                </div>
              </div>
              <div className="ph-bio">
                <div className="name">La Carreta | Frutas y Verduras</div>
                <div>Empresa familiar 100% guatemalteca, casi un siglo cultivando la mejor calidad.</div>
                <div className="link">www.lacarreta.com.gt</div>
              </div>
              <div className="ph-btns">
                <div>Following ⌄</div>
                <div>Message</div>
              </div>
              <div className="ph-high">
                <div className="h"><div className="ring">🚚</div>Delivery</div>
                <div className="h"><div className="ring">😊</div>Clientes</div>
                <div className="h"><div className="ring">📍</div>Encuentra</div>
              </div>
              <div className="ph-tabs"><span>▦</span><span>▷</span><span>👤</span></div>
              <div className="ph-grid">
                {GRID.map((g, i) => (
                  <div className={g.cls} key={i}>{g.t}</div>
                ))}
              </div>
            </div>
          </div>

          {/* feed grid */}
          <div className="feed">
            {POSTS.map((p, i) => (
              <Post key={i} post={p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>

        <div className="notes">
          <div className="n reveal d1">Contenido de <b>valor</b> e interés</div>
          <div className="n reveal d2">Contenido <b>interactivo</b></div>
          <div className="n reveal d3">Contenido <b>creativo</b> que refleja la personalidad de marca</div>
        </div>
      </div>
    </section>
  )
}
