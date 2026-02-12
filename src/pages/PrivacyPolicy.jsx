import { Link } from 'react-router-dom'
import { SITE_DATA } from '../constants/siteData'

export default function PrivacyPolicy() {
  return (
    <div className="bg-alpine-cream min-h-screen">
      {/* Header */}
      <div className="bg-alpine-dark py-10 px-6 lg:px-16 2xl:px-24">
        <div className="max-w-[900px] mx-auto">
          <Link to="/" className="label-upper text-alpine-gold/60 hover:text-alpine-gold transition-colors text-xs mb-4 inline-block">
            &larr; Torna alla Home
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl text-white mb-2">Privacy Policy</h1>
          <p className="text-wood-500 text-sm">Informativa sul trattamento dei dati personali</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-16 2xl:px-24 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto bg-white p-6 md:p-10 lg:p-14">
          <p className="text-wood-400 text-sm mb-8">Ultimo aggiornamento: {SITE_DATA.legal.lastUpdated}</p>

          {/* 1. Titolare */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">1. Titolare del Trattamento</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Il Titolare del trattamento dei dati personali è:</p>
            <div className="bg-alpine-cream p-5 border-l-3 border-alpine-gold/40">
              <p className="font-accent font-semibold text-alpine-dark text-sm mb-2">{SITE_DATA.legal.owner}</p>
              <p className="text-wood-500 text-sm">{SITE_DATA.contact.address.full}</p>
              <p className="text-wood-500 text-sm mt-1">Tel: {SITE_DATA.contact.phone}</p>
              <p className="text-wood-500 text-sm">Email: {SITE_DATA.contact.email}</p>
            </div>
          </section>

          {/* 2. Dati Raccolti */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="text-wood-600 leading-relaxed mb-3">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-1 mb-4 ml-2">
              <li><strong className="text-wood-700">Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong className="text-wood-700">Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong className="text-wood-700">Messaggio/Descrizione</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40 mb-6">
              <p className="font-accent font-semibold text-alpine-dark text-xs mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
              <ul className="list-disc list-inside text-wood-500 text-sm space-y-1">
                <li>Rispondere alle richieste di informazioni</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Organizzare soggiorni e prenotazioni</li>
                <li>Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 className="font-accent font-semibold text-alpine-dark text-sm mb-3">2.2 Base giuridica del trattamento</h3>
            <p className="text-wood-600 leading-relaxed mb-2">Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).</p>
          </section>

          {/* 3. Modalità */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">3. Modalità di Trattamento</h2>
            <p className="text-wood-600 leading-relaxed mb-3">I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.</p>
            <p className="text-wood-600 leading-relaxed">Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.</p>
          </section>

          {/* 4. Conservazione */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">4. Conservazione dei Dati</h2>
            <p className="text-wood-600 leading-relaxed mb-3">I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.</p>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-1 ml-2">
              <li><strong className="text-wood-700">Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong className="text-wood-700">Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong className="text-wood-700">Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5. Comunicazione */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">5. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-wood-600 leading-relaxed mb-3">I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-1 mb-4 ml-2">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="bg-red-50 p-4 border-l-3 border-red-400">
              <p className="font-accent font-semibold text-red-700 text-xs mb-2">I tuoi dati NON verranno MAI:</p>
              <ul className="list-disc list-inside text-red-600 text-sm space-y-1">
                <li>Venduti a terze parti</li>
                <li>Condivisi con società di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6. Diritti */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-wood-600 leading-relaxed mb-3">In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc list-inside text-wood-600 text-sm leading-relaxed space-y-1 mb-4 ml-2">
              <li><strong className="text-wood-700">Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong className="text-wood-700">Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong className="text-wood-700">Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong className="text-wood-700">Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong className="text-wood-700">Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong className="text-wood-700">Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong className="text-wood-700">Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40">
              <p className="font-accent font-semibold text-alpine-dark text-xs mb-2">Come esercitare i tuoi diritti:</p>
              <p className="text-wood-500 text-sm">Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${SITE_DATA.contact.email}`} className="text-alpine-gold hover:underline">{SITE_DATA.contact.email}</a> o tramite raccomandata A/R all'indirizzo: {SITE_DATA.contact.address.full}.</p>
              <p className="text-wood-500 text-sm mt-1">Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.</p>
            </div>
          </section>

          {/* 7. Reclamo */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">7. Diritto di Reclamo</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.</p>
            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40">
              <p className="font-accent font-semibold text-alpine-dark text-xs mb-2">Garante per la protezione dei dati personali:</p>
              <p className="text-wood-500 text-sm">Sito web: www.garanteprivacy.it</p>
              <p className="text-wood-500 text-sm">Email: garante@gpdp.it</p>
              <p className="text-wood-500 text-sm">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          {/* 8. Cookie */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="text-wood-600 leading-relaxed">Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-alpine-gold hover:underline">Cookie Policy</Link>.</p>
          </section>

          {/* 9. Modifiche */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">9. Modifiche alla Privacy Policy</h2>
            <p className="text-wood-600 leading-relaxed">Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.</p>
          </section>

          {/* 10. Contatti */}
          <section className="mb-10">
            <h2 className="font-heading text-xl md:text-2xl text-alpine-dark mb-4">10. Contatti</h2>
            <p className="text-wood-600 leading-relaxed mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
            <div className="bg-alpine-cream p-4 border-l-3 border-alpine-gold/40 flex flex-col gap-2">
              <a href={`mailto:${SITE_DATA.contact.email}`} className="text-alpine-gold hover:underline text-sm">{SITE_DATA.contact.email}</a>
              <a href={`tel:${SITE_DATA.contact.phoneRaw}`} className="text-alpine-gold hover:underline text-sm">{SITE_DATA.contact.phone}</a>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-wood-100 pt-6 mt-10 text-center">
            <p className="text-wood-400 text-xs leading-relaxed">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link to="/" className="text-center py-3 px-8 border border-wood-200 text-wood-600 hover:bg-alpine-cream transition-colors text-sm font-accent tracking-wide">
              Torna alla Home
            </Link>
            <Link to="/cookie-policy" className="text-center py-3 px-8 border border-wood-200 text-wood-600 hover:bg-alpine-cream transition-colors text-sm font-accent tracking-wide">
              Leggi la Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
