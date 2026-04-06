import { subMenus } from "./navbarUtils";

export const footerMenus = {
    "KTS Finance": {
        key: "KTS Finance",
        options: [
            {
                title: "Chi Siamo",
                href: "/chi-siamo"
            },
            {
                title: "Lavora con noi",
                href: "/lavora-con-noi"
            },
            {
                title: "Dicono di Noi",
                href: "/dicono-di-noi"
            },
            {
                title: "Contatti",
                href: "/contatti"
            },
            {
                title: "Blog Assicurazioni",
                href: "/blog-assicurazioni"
            },
            {
                title: "Blog Mercati Finanziari",
                href: "/blog-mercati-finanziari"
            },
            {
                title: "Guide Per Te",
                href: "/guide-per-te"
            },
            {
                title: "Guide Per il Tuo Business",
                href: "/guide-per-il-tuo-business"
            },
            {
                title: "Guide Per le Tue Finanze",
                href: "/guide-per-le-tue-finanze"
            },
            {
                title: "Academy",
                href: "/academy"
            }
        ]
    },
    "Informazioni Utili": {
        key: "Informazioni Utili",
        options: [
            {
                title: "Reclami",
                href: "/reclami"
            },
            {
                title: "Whistleblowing",
                href: "/whistleblowing"
            },
            {
                title: "Faq",
                href: "/faq"
            },
            {
                title: "Partner",
                href: "/partner"
            },
            {
                title: "Proteggiti dalle Truffe",
                href: "/proteggiti-dalle-truffe"
            },
            {
                title: "Glossario Finanziario",
                href: "/glossario-finanziario"
            },
            {
                title: "Glossario Assicurativo",
                href: "/glossario-assicurativo"
            },
            {
                title: "Arbitro Assicurativo",
                href: "/arbitro-assicurativo"
            }
        ]
    },
    "Legale": {
        key: "Legale",
        options: [
            {
                title: "Cookie Policy",
                href: "/cookie-policy"
            },
            {
                title: "Privacy Policy",
                href: "/privacy-policy"
            },
            {
                title: "Termini e Condizioni",
                href: "/termini-e-condizioni"
            },
            {
                title: "Politica Parità di Genere",
                href: "/politica-parita-di-genere"
            },
            {
                title: "Codice Etico",
                href: "/codice-etico"
            },
            {
                title: "Conflitto di Interesse",
                href: "/conflitto-di-interesse"
            },
            {
                title: "Informativa Vendita a Distanza",
                href: "/informativa-vendita-a-distanza"
            },
            {
                title: "Informativa Oblio Oncologico",
                href: "/informativa-oblio-oncologico"
            },
            {
                title: "Manuale Operativo Firma Elettronica Avanzata (Uso Esterno)",
                href: "/manuale-operativo-firma-elettronica-avanzata-uso-esterno"
            },
            {
                title: "Manuale Operativo Progetto FEA",
                href: "/manuale-operativo-progetto-fea"
            },
            {
                title: "Elenco Imprese",
                href: "/elenco-imprese"
            }

        ]
    },
    ...subMenus
}

export type footerTypes = keyof typeof footerMenus