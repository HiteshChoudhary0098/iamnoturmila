// feed posts data — swap `cls` for real <img> later
const POSTS = [
  {
    cls: "p-orange",
    k: "Quality, flavor",
    big: "And Freshness",
    k2: "apple tomato",
  },
  { cls: "p-green", big: "Eating fruits makes you happy", italic: false },
  { cls: "p-yellow", k: "Papaya", big: "Kaya Paya", k2: "super sweet" },
  { cls: "p-photo-leaf", head: "Eat your greens!", k2: "eat your vegetables" },
  { cls: "p-orange", k: "Hygiene,", big: "freshness", k2: "and quality!" },
  {
    cls: "p-photo-green",
    k: "Freshness",
    big: "And Quality",
    italic: false,
    k2: "in each product",
  },
  { cls: "p-yellow", big: "Don Cate" },
  {
    cls: "p-green",
    head: "Feeling happy is vital",
    headSm: true,
    k2: "for a healthy life",
  },
  {
    cls: "p-orange-deep",
    k: "Fast, easy",
    big: "and Healthy!",
    italic: false,
    bigSm: true,
  },
];

const GRID = [
  { cls: "p-orange", t: "COUPON" },
  { cls: "p-yellow", t: "THE BEST SEEDS" },
  { cls: "p-green", t: "🌱" },
  { cls: "p-green", t: "Castor Seeds" },
  { cls: "p-orange-deep", t: "Cumin Powder" },
  { cls: "p-yellow", t: "PRODUCTS" },
];

function Post({ post, delay }) {
  return (
    <div className={`post ${post.cls} reveal d${delay}`}>
      {post.k && <span className="k">{post.k}</span>}
      {post.head && (
        <span
          className="head-t"
          style={post.headSm ? { fontSize: 20 } : undefined}
        >
          {post.head}
        </span>
      )}
      {post.big && (
        <span
          className="big"
          style={{
            ...(post.italic === false ? { fontStyle: "normal" } : {}),
            ...(post.bigSm ? { fontSize: 24 } : {}),
          }}
        >
          {post.big}
        </span>
      )}
      {post.k2 && <span className="k">{post.k2}</span>}
      <span className="badge">LC</span>
    </div>
  );
}

export default function Project() {
  return (
    <section id="project">
      <div className="inner">
        <div className="head reveal">
          <div className="num">01</div>
          <div className="meta">
            <h2>Shree Balaji Internation</h2>
            <div className="h-sub">Digital Marketing Specialist</div>
            <div className="h-kicker">Creativity and content writing</div>
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
              <div className="ph-top">‹ &nbsp; shree..... &nbsp; ⌄ ⋯</div>
              <div className="ph-prof">
                <div className="ph-ava" />
                <div className="ph-stats">
                  <div>
                    <b>385</b>Posts
                  </div>
                  <div>
                    <b>3,455</b>Followers
                  </div>
                  <div>
                    <b>323</b>Following
                  </div>
                </div>
              </div>
              <div className="ph-bio">
                <div className="name">Want to buy Seeds and Oils ? </div>
                <div>
                  100% Organic Pesticide free, 100% Transparency of the Process
                </div>
                <div className="link">www.shreeBala....</div>
              </div>
              <div className="ph-btns">
                <div>Following ⌄</div>
                <div>Message</div>
              </div>
              <div className="ph-high">
                <div className="h">
                  <div className="ring">🚚</div>Delivery
                </div>
                <div className="h">
                  <div className="ring">😊</div>Customers
                </div>
                <div className="h">
                  <div className="ring">📍</div>Find
                </div>
              </div>
              <div className="ph-tabs">
                <span>▦</span>
                <span>▷</span>
                <span>👤</span>
              </div>
              <div className="ph-grid">
                {GRID.map((g, i) => (
                  <div className={g.cls} key={i}>
                    {g.t}
                  </div>
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
          <div className="n reveal d1">
            Content of <b>value</b> and interest
          </div>
          <div className="n reveal d2">
            <b>Interactive</b> content
          </div>
          <div className="n reveal d3">
            <b>Creative</b> content that reflects brand personality
          </div>
        </div>
      </div>
    </section>
  );
}
