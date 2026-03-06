import React, { useState } from 'react';
import kuva from './assets/jari_heikkinen.JPEG';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col" onClick={closeMenu}>
            <span className="text-xl md:text-2xl font-bold text-brand hover:text-brand-hover transition-colors">Jari Heikkinen</span>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-brand-muted uppercase mt-0.5">Kaupanvahvistaja</span>
          </a>

          <button
            className="md:hidden text-brand-text p-2 -mr-2 z-50"
            onClick={toggleMenu}
            aria-label="Avaa valikko"
          >
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            <a href="#etusivu" className="text-brand-text hover:text-brand font-medium text-[1.1rem] transition-colors">Etusivu</a>
            <a href="#tietoa" className="text-brand-text hover:text-brand font-medium text-[1.1rem] transition-colors">Tietoa</a>
            <a href="#yhteystiedot" className="text-brand-text hover:text-brand font-medium text-[1.1rem] transition-colors">Ota yhteyttä</a>
          </nav>

          {/* Mobile Nav Overlay */}
          <nav className={`fixed inset-y-0 right-0 w-64 bg-white shadow-2xl flex flex-col items-center justify-center gap-10 transition-transform duration-300 md:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <a href="#etusivu" onClick={closeMenu} className="text-2xl font-medium text-brand-text hover:text-brand">Etusivu</a>
            <a href="#tietoa" onClick={closeMenu} className="text-2xl font-medium text-brand-text hover:text-brand">Tietoa</a>
            <a href="#yhteystiedot" onClick={closeMenu} className="text-2xl font-medium text-brand-text hover:text-brand">Ota yhteyttä</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="etusivu" className="min-h-[85vh] relative flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background layering */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-[url('./assets/kuopio.jpg')]"></div>
        <div className="absolute inset-0 z-0 bg-brand-bg/95"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center animate-fade-in-up mt-10">
          <span className="inline-block px-4 py-1.5 border-2 border-brand text-brand font-bold text-sm tracking-widest uppercase mb-8">
            Virallinen kaupanvahvistaja
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1f2937] tracking-tight leading-tight mb-8">
            Turvalliset ja asiantuntevat<br className="hidden md:block" /> kiinteistökaupat
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
            Olen maanmittauslaitoksen määräämä julkinen kaupanvahvistaja ja toimin apunasi kaikissa kiinteistön luovutuksissa. Kiinteistön luovutus on usein yksi elämän suurista hetkistä – autan sinua hoitamaan kaiken rauhallisesti, selkeästi ja luotettavasti alusta loppuun.
          </p>
          <a href="#yhteystiedot" className="group flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold text-lg px-8 py-4 rounded-md shadow-md transition-colors">
            Ota yhteyttä
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="tietoa" className="py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={kuva}
              alt="Jari Heikkinen, Kaupanvahvistaja"
              className="w-full max-w-sm mx-auto object-cover rounded-md shadow-md border border-gray-100"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6">Henkilökohtaista palvelua</h2>
            <div className="w-16 h-1 bg-brand mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Kiinteistön luovutuksiin liittyy paljon yksityiskohtia, ja monelle prosessi on harvinainen ja tuntuu helposti monimutkaiselta. Minun tehtäväni on tehdä siitä sinulle mahdollisimman helppo ja turvallinen. Hoidan asiat selkeästi, rauhallisesti ja asiakkaan tilanteen huomioiden.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Moni asiakkaani kertoo, että asiointi on ollut yllättävän helppoa ja mutkatonta. Se on tavoitteeni jokaisessa tapaamisessa: että sinulle jää tunne, että kaikki meni sujuvasti ja turvallisesti. Palvelen joustavasti myös iltaisin ja viikonloppuisin, jotta asioiden hoitaminen onnistuu sinulle sopivana ajankohtana.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Me / Services */}
      <section className="py-20 md:py-24 bg-brand-bg/50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-6">Miksi valita minut kaupanvahvistajaksi?</h2>
            <div className="w-24 h-1 bg-brand mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 pb-10">
                <h3 className="text-xl font-bold text-[#1f2937] mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  Luotettavuus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Olen Maanmittauslaitoksen määräämä julkinen kaupanvahvistaja. Voit luottaa siihen, että asiapaperit hoituvat pilkuntarkasti oikein.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 pb-10">
                <h3 className="text-xl font-bold text-[#1f2937] mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  Joustavuus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sovitaan tapaaminen sinulle parhaiten sopivaan aikaan ja paikkaan. En toimi pelkästään virastoaikojen puitteissa.
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 pb-10">
                <h3 className="text-xl font-bold text-[#1f2937] mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  Apu ja opastus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Laadin tilanteeseesi sopivat kauppa- ja lahjakirjat. Opastan mitä asiakirjoja tarvitaan ja autan turvallisesti eteenpäin.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-gray-200">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-6">Milloin kaupanvahvistajaa tarvitaan?</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lain mukaan kaupanvahvistajan vahvistus vaaditaan kaikissa kiinteistöjen luovutuksissa. Varmistan, että asiakirjat on laadittu oikein ja osapuolten henkilöllisyys sekä tahto on tarkistettu.
                </p>
                <div className="mt-8 bg-gray-50 border-l-4 border-brand p-5 text-gray-700 italic text-[1.05rem]">
                  Huom: Kaupanvahvistajaa <strong>ei tarvita</strong> asunto-osakkeiden (eli tavanomaisten kerros- tai rivitaloasuntojen) kaupoissa.
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <ul className="flex flex-col gap-4 text-lg text-[#1f2937] font-medium bg-white p-6 border border-gray-100 shadow-sm rounded-md">
                  <li className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Kiinteistön kauppa
                  </li>
                  <li className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Kiinteistön lahjoitus
                  </li>
                  <li className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Määräalan myynti tai osto
                  </li>
                  <li className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Kiinteistön vaihto
                  </li>
                  <li className="flex items-center gap-4 py-2 pt-2 border-b border-gray-100 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    Määräosan luovutus
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="yhteystiedot" className="py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg p-10 md:p-14 flex flex-col gap-10 border border-gray-200 shadow-sm">

            <div className="text-center max-w-2xl mx-auto mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-6">Ota yhteyttä</h2>
              <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Oletko ostamassa, myymässä tai lahjoittamassa kiinteistöä? Jätä minulle viesti, niin palaan asiaan mahdollisimman pian. Vahvistan kauppoja pääasiassa Pohjois-Savon alueella.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-8 bg-white p-8 border border-gray-100 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <h3 className="text-xl font-bold text-[#1f2937] border-b border-gray-100 pb-4">Yhteystietoni</h3>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-bg text-brand border border-gray-200 rounded-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 mb-1 text-sm uppercase tracking-wide">Puhelin</h4>
                    <a href="tel:0401234567" className="text-[#1f2937] hover:text-brand font-medium text-lg">040 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-bg text-brand border border-gray-200 rounded-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 mb-1 text-sm uppercase tracking-wide">Sähköposti</h4>
                    <a href="mailto:jari@esimerkki.fi" className="text-[#1f2937] hover:text-brand font-medium text-lg">jari@esimerkki.fi</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-bg text-brand border border-gray-200 rounded-md">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 mb-1 text-sm uppercase tracking-wide">Toiminta-alue</h4>
                    <div className="text-[#1f2937] text-lg font-medium">Kuopio, Siilinjärvi, Maaninka, Nilsiä, Lapinlahti</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white p-8 border border-gray-100 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
                <h3 className="text-xl font-bold text-[#1f2937] border-b border-gray-100 pb-4 mb-6">Jätä viesti</h3>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">Nimi</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-gray-800" placeholder="Etunimi Sukunimi" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">Sähköpostiosoite</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-gray-800" placeholder="sahkoposti@esimerkki.fi" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">Viesti</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-gray-800 resize-y" placeholder="Kerro lyhyesti kiinteistökaupastasi..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-white font-bold text-lg py-3.5 rounded-md transition-colors mt-2">
                    Lähetä viesti
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#242b27] text-[#93a19b] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm tracking-wide">&copy; {new Date().getFullYear()} Kaupanvahvistaja Jari Heikkinen – Kuopio, Siilinjärvi, Maaninka, Nilsiä, Lapinlahti</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
