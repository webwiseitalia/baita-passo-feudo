import { Link } from 'react-router-dom'
import { SITE_DATA } from '../constants/siteData'

export default function CookiePolicy() {
  return (
    <div className="bg-alpine-cream min-h-screen">
      {/* Header */}
      <div className="bg-alpine-dark py-10 px-6 lg:px-16 2xl:px-24">
        <div className="max-w-[900px] mx-auto">
          <Link to="/" className="label-upper text-alpine-gold/60 hover:text-alpine-gold transition-colors text-xs mb-4 inline-block">
            &larr; Torna alla Home
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl text-white mb-2">Cookie Policy</h1>
          <p className="text-wood-500 text-sm">Informativa sull'utilizzo dei cookie</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-16 2xl:px-24 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto bg-white p-6 md:p-10 lg:p-14">
          <p className="text-wood-400 text-sm mb-8">Ultimo aggiornamento: {SITE_DATA.legal.lastUpdated}</p>

          {/* Privacy-Friendly badge */}
          <div className="bg-green-50 p-5 border-l-3 border-green-500 mb-10 flex items-start gap-4">
            <span className="text-green-500 text-2xl mt-0.5">&#10003;</span>
            <div>
              <p className="font-accent font-semibold text-green-800 text-sm mb-1">Sito Privacy-Friendly</p>
              <p className="text-green-700 text-sm leading-relaxed">Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per la navigazione.</p>
            </div>
          </div>

          {/* 1. Cosa sono */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-wood-600 leading-relaxed">I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.</p>
          </section>

          {/* 2. Tipologie */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">2. Tipologie di Cookie</h2>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.1 Cookie Tecnici</h3>
            <p className="text-wood-600 leading-relaxed mb-3">Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.</p>
            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40 mb-6">
              <p className="font-accent font-semibold text-alpine-dark text-xs mb-2">Cookie tecnici utilizzati su questo sito:</p>
              <ul className="list-disc list-inside text-wood-500 text-sm space-y-1">
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="text-wood-400 text-xs mt-3 italic">Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
            </div>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.2 Cookie Analitici</h3>
            <div className="bg-red-50 p-4 border-l-3 border-red-400 mb-6 flex items-start gap-3">
              <span className="text-red-400 text-lg">&#10007;</span>
              <div>
                <p className="font-accent font-semibold text-red-700 text-xs mb-1">NON UTILIZZATI</p>
                <p className="text-red-600 text-sm">Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
              </div>
            </div>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.3 Cookie di Profilazione</h3>
            <div className="bg-red-50 p-4 border-l-3 border-red-400 mb-6 flex items-start gap-3">
              <span className="text-red-400 text-lg">&#10007;</span>
              <div>
                <p className="font-accent font-semibold text-red-700 text-xs mb-1">NON UTILIZZATI</p>
                <p className="text-red-600 text-sm">Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
              </div>
            </div>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.4 Cookie di Terze Parti</h3>
            <div className="bg-red-50 p-4 border-l-3 border-red-400 mb-6 flex items-start gap-3">
              <span className="text-red-400 text-lg">&#10007;</span>
              <div>
                <p className="font-accent font-semibold text-red-700 text-xs mb-1">NON UTILIZZATI</p>
                <p className="text-red-600 text-sm">Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
              </div>
            </div>
          </section>

          {/* 3. Cookie Utilizzati */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">3. Cookie Utilizzati su Questo Sito</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-alpine-dark">
                    <th className="text-left py-2 pr-4 font-accent font-semibold text-alpine-dark">Nome Cookie</th>
                    <th className="text-left py-2 pr-4 font-accent font-semibold text-alpine-dark">Tipologia</th>
                    <th className="text-left py-2 pr-4 font-accent font-semibold text-alpine-dark">Finalità</th>
                    <th className="text-left py-2 font-accent font-semibold text-alpine-dark">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-wood-100">
                    <td className="py-3 pr-4 text-wood-600">baita-passo-feudo-cookie-consent</td>
                    <td className="py-3 pr-4"><span className="bg-alpine-cream text-wood-600 px-2 py-0.5 text-xs font-accent">Tecnico</span></td>
                    <td className="py-3 pr-4 text-wood-500">Memorizza lo stato di accettazione/rifiuto della barra laterale per migliorare l'esperienza di navigazione</td>
                    <td className="py-3 text-wood-500">365 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40">
              <p className="text-wood-500 text-sm"><strong className="text-wood-700">Nota importante:</strong> I cookie tecnici come "baita-passo-feudo-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.</p>
            </div>
          </section>

          {/* 4. Come gestire */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">4. Come Gestire i Cookie</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.</p>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">Disabilitare i cookie tramite il browser:</h3>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-2 mb-4 ml-2">
              <li><strong className="text-wood-700">Google Chrome:</strong> Impostazioni &rarr; Privacy e sicurezza &rarr; Cookie e altri dati dei siti</li>
              <li><strong className="text-wood-700">Mozilla Firefox:</strong> Preferenze &rarr; Privacy e sicurezza &rarr; Cookie e dati dei siti web</li>
              <li><strong className="text-wood-700">Safari:</strong> Preferenze &rarr; Privacy &rarr; Cookie e dati dei siti web</li>
              <li><strong className="text-wood-700">Microsoft Edge:</strong> Impostazioni &rarr; Cookie e autorizzazioni del sito &rarr; Gestisci ed elimina cookie</li>
            </ul>

            <div className="bg-amber-50 p-4 border-l-3 border-amber-500">
              <p className="text-amber-700 text-sm"><strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.</p>
            </div>
          </section>

          {/* 5. Link esterni */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">5. Link a Siti Esterni</h2>
            <p className="text-wood-600 leading-relaxed">Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.</p>
          </section>

          {/* 6. Aggiornamenti */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">6. Aggiornamenti della Cookie Policy</h2>
            <p className="text-wood-600 leading-relaxed mb-2">Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.</p>
            <p className="text-wood-600 leading-relaxed">Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.</p>
          </section>

          {/* 7. Base normativa */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">7. Base Normativa</h2>
            <p className="text-wood-600 leading-relaxed mb-3">Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-1 ml-2">
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8. Contatti */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">8. Contatti</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40">
              <p className="font-accent font-semibold text-alpine-dark text-sm mb-2">{SITE_DATA.legal.owner}</p>
              <p className="text-wood-500 text-sm">{SITE_DATA.contact.address.full}</p>
              <p className="text-wood-500 text-sm mt-1">Email: <a href={`mailto:${SITE_DATA.contact.email}`} className="text-alpine-gold hover:underline">{SITE_DATA.contact.email}</a></p>
              <p className="text-wood-500 text-sm">Tel: <a href={`tel:${SITE_DATA.contact.phoneRaw}`} className="text-alpine-gold hover:underline">{SITE_DATA.contact.phone}</a></p>
            </div>
          </section>

          {/* Zero Tracking badge */}
          <div className="bg-green-50 p-6 text-center mb-8">
            <span className="text-green-500 text-3xl block mb-2">&#10003;</span>
            <p className="font-heading text-lg text-green-800 mb-1">Zero Tracciamento</p>
            <p className="text-green-600 text-sm">Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link to="/" className="text-center py-3 px-8 border border-wood-200 text-wood-600 hover:bg-alpine-cream transition-colors text-sm font-accent tracking-wide">
              Torna alla Home
            </Link>
            <Link to="/privacy-policy" className="text-center py-3 px-8 border border-wood-200 text-wood-600 hover:bg-alpine-cream transition-colors text-sm font-accent tracking-wide">
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
