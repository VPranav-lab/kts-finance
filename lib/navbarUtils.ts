import {
    Home, Car, Bike, Plane, Banknote, HeartPulse, Stethoscope, Activity,
    ShieldCheck, Building, Users, Dog, Sun, Tent, Scale, Zap,
    Store, Briefcase, BookOpen, Users2, HardHat, Cpu, Dumbbell, Anchor,
    Trees, AlertTriangle, Gavel, UserCheck, PieChart, ShieldAlert,
    Smartphone, PiggyBank, TrendingUp, BarChart, Wallet, Recycle
} from 'lucide-react';

export const subMenus = {
    "Per Te": {
        key: "Per Te",
        options: [
            {
                title: "Assicurazione Casa",
                href: "/assicurazione-casa",
                icon: Home,
                description: "Proteggi la tua abitazione e i tuoi beni più cari con una copertura completa contro danni, furti e responsabilità civile verso terzi. Vive la tua casa in totale serenità."
            },
            {
                title: "Assicurazione Auto",
                href: "/assicurazione-auto",
                icon: Car,
                description: "Viaggia sicuro con la nostra polizza auto su misura. Dalla RC obbligatoria alle coperture accessorie come kasko, incendio e furto, garantiamo la massima protezione per il tuo veicolo."
            },
            {
                title: "Assicurazione Moto",
                href: "/assicurazione-moto",
                icon: Bike,
                description: "La libertà delle due ruote merita la migliore protezione. Coperture specifiche per ogni tipo di moto, incluse assistenza stradale h24 e protezione dell'abbigliamento tecnico e del casco."
            },
            {
                title: "Assicurazione Viaggi",
                href: "/assicurazione-viaggi",
                icon: Plane,
                description: "Esplora il mondo senza pensieri. Coperture per spese mediche all'estero, annullamento viaggio, smarrimento bagaglio e assistenza in tempo reale ovunque tu decida di andare nei tuoi viaggi."
            },
            {
                title: "Assicurazione Mutuo",
                href: "/assicurazione-mutuo",
                icon: Banknote,
                description: "Garantisci la continuità dei pagamenti del tuo mutuo in caso di imprevisti gravi. Una sicurezza fondamentale per proteggere il futuro della tua famiglia e la stabilità della tua casa."
            },
            {
                title: "Assicurazione Sanitaria",
                href: "/assicurazione-sanitaria",
                icon: HeartPulse,
                description: "Accesso rapido alle migliori cure mediche. Rimborso spese sanitarie, visite specialistiche e accertamenti diagnostici nelle strutture convenzionate più all'avanguardia del territorio nazionale e internazionale."
            },
            {
                title: "Assicurazione Malattia",
                href: "/assicurazione-malattia",
                icon: Stethoscope,
                description: "Un sostegno economico concreto durante il periodo di degenza. Diaria da ricovero e supporto specialistico per affrontare con maggior forza i momenti di difficoltà legati alla salute."
            },
            {
                title: "Assicurazione Infortuni",
                href: "/assicurazione-infortuni",
                icon: Activity,
                description: "Protezione h24, sia nel tempo libero che durante il lavoro. Un indennizzo certo in caso di infortuni che causino invalidità permanente o necessità di riabilitazione specifica."
            },
            {
                title: "Assicurazione Vita",
                href: "/assicurazione-vita",
                icon: ShieldCheck,
                description: "Il gesto più alto di amore per i tuoi cari. Assicura un capitale solido alla tua famiglia in caso di tua prematura scomparsa, permettendo loro di mantenere lo stesso tenore di vita."
            },
            {
                title: "Assicurazione Condominio",
                href: "/assicurazione-condominio",
                icon: Building,
                description: "La polizza globale fabbricati per la tutela delle parti comuni e della responsabilità civile dell'amministratore. Protezione contro danni da acqua, incendio e altri rischi condominiali frequenti."
            },
            {
                title: "Assicurazione LTC",
                href: "/assicurazione-ltc",
                icon: Users,
                description: "Long Term Care: la polizza che ti garantisce una rendita mensile vitalizia in caso di perdita dell'autosufficienza, coprendo i costi di assistenza necessari per la tua dignità."
            },
            {
                title: "Assicurazione Animale",
                href: "/assicurazione-animale",
                icon: Dog,
                description: "Prenditi cura del tuo amico a quattro zampe. Rimborso spese veterinarie per interventi chirurgici e cure mediche, oltre alla responsabilità civile per eventuali danni causati dall'animale."
            },
            {
                title: "Assicurazione Fotovoltaico",
                href: "/assicurazione-fotovoltaico",
                icon: Sun,
                description: "Proteggi il tuo investimento nelle energie rinnovabili. Copertura contro danni diretti all'impianto e perdita di produzione energetica dovuta a eventi atmosferici o guasti accidentali imprevisti."
            },
            {
                title: "Assicurazione Camper",
                href: "/assicurazione-camper",
                icon: Tent,
                description: "La tua casa su ruote merita una protezione speciale. Polizze dedicate ai camperisti con assistenza stradale specifica e copertura del contenuto professionale e personale presente all'interno del mezzo."
            },
            {
                title: "Assicurazione Sci",
                href: "/assicurazione-sci",
                icon: Smartphone,
                description: "Divertimento sulle piste in totale sicurezza. RC obbligatoria per sciatori, rimborso ski-pass non goduto per infortunio e assistenza medica immediata sulle piste da sci più amate."
            },
            {
                title: "Assicurazione Tutela Legale",
                href: "/assicurazione-tutela-legale",
                icon: Scale,
                description: "Difendi i tuoi diritti senza preoccuparti delle spese legali. Copertura dei costi per avvocati e periti in caso di controversie civili, penali o amministrative legate alla tua vita privata."
            },
            {
                title: "Assicurazione Monopattino",
                href: "/assicurazione-monopattino",
                icon: Zap,
                description: "La micro-mobilità elettrica è il futuro. Proteggiti dai rischi della circolazione urbana con una polizza specifica che copre infortuni del conducente e danni a terzi."
            }
        ]
    },
    "Per il Tuo Business": {
        key: "Per il Tuo Business",
        options: [
            {
                title: "Assicurazione Negozio",
                href: "/assicurazione-negozio",
                icon: Store,
                description: "Proteggi il tuo punto vendita da furti, atti vandalici, incendi e danni da acqua. Una copertura completa per la merce, l'arredamento e la responsabilità civile verso i clienti."
            },
            {
                title: "Assicurazione Ufficio",
                href: "/assicurazione-ufficio",
                icon: Briefcase,
                description: "Garantisci la continuità della tua attività professionale. Protezione per hardware, software e archivi cartacei, oltre alle coperture per la responsabilità civile verso dipendenti e visitatori dell'ufficio."
            },
            {
                title: "Assicurazione Professionale Medici",
                href: "/assicurazione-professionale-medici",
                icon: Stethoscope,
                description: "La polizza RC professionale specifica per la categoria medica. Protezione contro richieste di risarcimento per errore professionale, inclusa la tutela legale per procedimenti penali o civili."
            },
            {
                title: "Assicurazione Professionale Commercialisti",
                href: "/assicurazione-professionale-commercialisti",
                icon: BookOpen,
                description: "Gestisci la tua attività di consulenza contabile e fiscale in totale tranquillità. Copertura completa per errori formali, scadenze mancate e consulenze errate che possano causare danni ai tuoi clienti."
            },
            {
                title: "Assicurazione Professionale Mediatori Creditizi",
                href: "/assicurazione-professionale-mediatori-creditizi",
                icon: Banknote,
                description: "Conformità normativa e sicurezza professionale. Protezione specifica per l'attività di intermediazione creditizia, coprendo i rischi legati alla gestione delle pratiche e alla consulenza finanziaria personalizzata."
            },
            {
                title: "Assicurazione Amministratori di Condominio",
                href: "/assicurazione-amministratori-di-condominio",
                icon: Building,
                description: "La polizza indispensabile per ogni amministratore. Copre gli errori professionali legati alla gestione condominiale, alle assemblee e agli adempimenti fiscali e amministrativi dell'edificio gestito."
            },
            {
                title: "Assicurazione Professionale Ingegnere",
                href: "/assicurazione-professionale-ingegnere",
                icon: HardHat,
                description: "Proteggi la tua attività di progettazione e direzione lavori. Copertura per vizi d'opera, errori di calcolo e responsabilità civile legata alla sicurezza sul cantiere e alla progettazione strutturale."
            },
            {
                title: "Assicurazione Professionale IT",
                href: "/assicurazione-professionale-it",
                icon: Cpu,
                description: "Copertura specifica per sviluppatori, consulenti informatici e aziende tecnologiche. Protegge dai danni derivanti da bug del software, perdita dati dei clienti e violazioni della sicurezza informatica aziendale."
            },
            {
                title: "Assicurazione Professionale Personal Trainer",
                href: "/assicurazione-professionale-personal-trainer",
                icon: Dumbbell,
                description: "Garantisci la sicurezza dei tuoi allievi. Protezione RC professionale per infortuni durante l'allenamento e per eventuali danni derivanti da programmi di esercizio fisico e nutrizionali consigliati."
            },
            {
                title: "Assicurazione Fotovoltaico Business",
                href: "/assicurazione-fotovoltaico-business",
                icon: Sun,
                description: "Protezione completa per impianti solari di grandi dimensioni. Copertura All-Risks contro danni materiali e indennità giornaliera per la mancata produzione di energia elettrica dovuta a guasti accidentali."
            },
            {
                title: "Assicurazione RCP Agronomi",
                href: "/assicurazione-rcp-agronomi",
                icon: Trees,
                description: "Consulenza agraria senza rischi patrimoniali. Protezione professionale per dottori agronomi e periti agrari in merito a stime, perizie, progetti di miglioramento fondiario e consulenze tecniche specifiche."
            },
            {
                title: "Assicurazione Catastrofale",
                href: "/assicurazione-catastrofale",
                icon: AlertTriangle,
                description: "Proteggi la tua azienda da eventi eccezionali come terremoti, alluvioni e inondazioni. Una sicurezza indispensabile per garantire la resilienza del tuo business di fronte ai cambiamenti climatici estremi."
            },
            {
                title: "Assicurazione D&O",
                href: "/assicurazione-d-o",
                icon: Gavel,
                description: "Directors and Officers Liability: protegge il patrimonio personale di amministratori e dirigenti da richieste di risarcimento per atti illeciti reali o presunti commessi nell'esercizio delle funzioni aziendali."
            },
            {
                title: "Assicurazione RCP Agenti e Broker",
                href: "/assicurazione-rcp-agenti-broker",
                icon: UserCheck,
                description: "La polizza obbligatoria IVASS per gli intermediari assicurativi. Copertura degli errori nella proposta di prodotti, nella gestione dei premi e nel supporto ai clienti durante la vita della polizza."
            },
            {
                title: "Assicurazione RCP Agenti Finanziari",
                href: "/assicurazione-rcp-agenti-finanziari",
                icon: TrendingUp,
                description: "Sicurezza per chi opera nei mercati finanziari. Protezione professionale per agenti finanziari in merito alla correttezza delle informazioni fornite e alla gestione dei rapporti con gli istituti mandanti."
            },
            {
                title: "Assicurazione RCP Architetti",
                href: "/assicurazione-rcp-architetti",
                icon: Scale,
                description: "Libertà creativa con una solida base di sicurezza. Copertura per errori di progettazione architettonica, direzione lavori e violazione delle normative urbanistiche ed edilizie vigenti nel territorio."
            },
            {
                title: "Assicurazione RCP per Periti Industriali",
                href: "/assicurazione-rcp-periti-industriali",
                icon: BarChart,
                description: "Protezione per periti industriali iscritti all'albo. Copre la responsabilità civile per errori tecnici, perizie giurate e certificazioni di impianti civili e industriali effettuate nell'esercizio della professione."
            },
            {
                title: "Assicurazione Cyber Risk",
                href: "/assicurazione-cyber-risk",
                icon: ShieldAlert,
                description: "Difesa aziendale contro gli attacchi hacker. Gestione delle crisi, rispristino dei sistemi, notifica ai clienti e risarcimento danni per violazioni della privacy e furto di identità digitale aziendale."
            }
        ]
    },
    "Per le Tue Finanze": {
        key: "Per le Tue Finanze",
        options: [
            {
                title: "Assicurazione Pensionistica",
                href: "/assicurazione-pensionistica",
                icon: PiggyBank,
                description: "Pianifica oggi la tua serenità futura. Un piano individuale pensionistico (PIP) flessibile per integrare la pensione pubblica e mantenere il tuo stile di vita anche dopo l'attività lavorativa."
            },
            {
                title: "Piano di Risparmio",
                href: "/piano-di-risparmio",
                icon: Wallet,
                description: "Costruisci il tuo capitale nel tempo con versamenti periodici. Una soluzione ideale per realizzare i tuoi sogni a breve o lungo termine, con la garanzia di rendimenti consolidati."
            },
            {
                title: "Unit Linked",
                href: "/unit-linked",
                icon: TrendingUp,
                description: "Investi nei mercati finanziari attraverso una polizza vita. Una combinazione di protezione assicurativa e potenzialità di rendimento legate a fondi d'investimento diversificati e performanti selezionati."
            },
            {
                title: "Gestione Separata",
                href: "/gestione-separata",
                icon: ShieldCheck,
                description: "Il porto sicuro per i tuoi risparmi. Gestioni finanziarie a basso rischio con capitale garantito o protetto, per una crescita costante e sicura nel tempo dei tuoi investimenti patrimoniali."
            },
            {
                title: "Piani di Accumulo",
                href: "/piani-di-accumulo",
                icon: BarChart,
                description: "PAC: investi piccole somme regolarmente per mediare il prezzo di acquisto e cavalcare le opportunità dei mercati azionari e obbligazionari mondiali in modo disciplinato ed efficiente."
            },
            {
                title: "Polizza Vita Mista",
                href: "/polizza-vita-mista",
                icon: Recycle,
                description: "Protezione e investimento in un unico strumento. Una polizza che garantisce un capitale sia in caso di vita alla scadenza del contratto che in caso di morte durante la sua durata."
            },
            {
                title: "Index Linked",
                href: "/index-linked",
                icon: PieChart,
                description: "Rendimento legato all'andamento di un indice azionario o obbligazionario. Una soluzione dinamica che permette di partecipare alla crescita dei mercati con tutele specifiche sul capitale investito iniziale."
            }
        ]
    }
}

export type TabsType = keyof typeof subMenus;