import React from 'react';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <span className="logo-name">Matti Meikäläinen</span>
            <span className="logo-title">Kaupanvahvistaja</span>
          </a>
          <nav className="nav-links">
            <a href="#etusivu">Etusivu</a>
            <a href="#tietoa">Tietoa</a>
            <a href="#yhteystiedot">Ota yhteyttä</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="etusivu" className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">Virallinen kaupanvahvistaja</span>
              <h1>Turvalliset ja asiantuntevat kiinteistökaupat</h1>
              <p>
                Toimin julkisena kaupanvahvistajana ja varmistan, että kiinteistökauppasi etenee sujuvasti, lakien mukaisesti ja luotettavasti. Ystävällinen ja joustava palvelu sinun tarpeitasi kuunnellen.
              </p>
              <a href="#yhteystiedot" className="btn btn-primary">
                Ota yhteyttä &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tietoa" className="section about-section">
          <div className="container about-container">
            <div className="about-image">
              <img src="/kuva.png" alt="Matti Meikäläinen, Kaupanvahvistaja" />
            </div>
            <div className="about-text">
              <h2>Asiantuntevaa palvelua vuosien kokemuksella</h2>
              <p>
                Olen Matti Meikäläinen, kokenut julkinen kaupanvahvistaja. Työskentelen huolellisesti ja joustavasti, jotta kiinteistökauppasi etenee luotettavasti ja ilman turhia huolia. Palvelen asiakkaitani ihmisläheisellä otteella ja tulen mielelläni paikan päälle sinulle sopivana ajankohtana.
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section info-section" style={{ backgroundColor: 'var(--bg-color)' }}>
          <div className="container">
            <h2>Miksi valita minut kaupanvahvistajaksi?</h2>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3>Luotettavuus</h3>
                <p>Olen Maanmittauslaitoksen määräämä julkinen kaupanvahvistaja. Voit luottaa siihen, että asiapaperit hoituvat pilkuntarkasti oikein.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Joustavuus</h3>
                <p>Sovitaan tapaaminen sinulle parhaiten sopivaan aikaan ja paikkaan. En toimi vain virastoaikoina.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                </div>
                <h3>Ystävällinen palvelu</h3>
                <p>Kiinteistökauppa on suuri ja tärkeä hetki. Haluan tehdä siitä sinulle mahdollisimman mukavan ja stressittömän kokemuksen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="yhteystiedot" className="section contact-section">
          <div className="container">
            <div className="contact-container">
              <div className="contact-info">
                <h2>Ota yhteyttä</h2>
                <p>Oletko ostamassa, myymässä tai lahjoittamassa kiinteistöä? Jätä minulle viesti, niin palaan asiaan mahdollisimman pian. Vahvistan kauppoja pääasiassa Uudenmaan alueella.</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <strong>Sähköposti</strong>
                      <div style={{ color: 'var(--text-muted)' }}>esimerkki@kaupanvahvistaja.fi</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <strong>Puhelinnumero</strong>
                      <div style={{ color: 'var(--text-muted)' }}>040 123 4567</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <strong>Toiminta-alue</strong>
                      <div style={{ color: 'var(--text-muted)' }}>Helsinki, Espoo, Vantaa, Kauniainen</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Nimi</label>
                    <input type="text" id="name" className="form-control" placeholder="Matti Meikäläinen" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Sähköpostiosoite</label>
                    <input type="email" id="email" className="form-control" placeholder="matti@esimerkki.fi" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Viesti</label>
                    <textarea id="message" className="form-control" placeholder="Hei, tarvitsisin kaupanvahvistajaa ensi viikolla..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Lähetä viesti</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Laki & Vahvistus. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </>
  )
}

export default App
