import {
  Home, Car, Bike, Plane, Banknote, HeartPulse, Stethoscope, Activity,
  ShieldCheck, Building, Users, Dog, Sun, Tent, Scale, Zap,
  Store, Briefcase, BookOpen, HardHat, Cpu, Dumbbell,
  Trees, AlertTriangle, Gavel, UserCheck, TrendingUp,
  PiggyBank, BarChart, Wallet, Recycle, PieChart, ShieldAlert,Building2, Phone
} from 'lucide-react';

export const subMenus = {
  "Per Te": {
    key: "Per Te",
    categories: [
      {
        title: "Casa & Mobilità",
        links: [
          { title: "Assicurazione Casa", href: "/assicurazione-casa", icon: Home },
          { title: "Assicurazione Auto", href: "/assicurazione-auto", icon: Car },
          { title: "Assicurazione Moto", href: "/assicurazione-moto", icon: Bike },
          { title: "Assicurazione Camper", href: "/assicurazione-camper", icon: Tent },
          { title: "Assicurazione Viaggi", href: "/assicurazione-viaggi", icon: Plane },
          { title: "Assicurazione Monopattino", href: "/assicurazione-monopattino", icon: Zap },
        ],
      },
      {
        title: "Salute & Persona",
        links: [
          { title: "Assicurazione Sanitaria", href: "/assicurazione-sanitaria", icon: HeartPulse },
          { title: "Assicurazione Malattia", href: "/assicurazione-malattia", icon: Stethoscope },
          { title: "Assicurazione Infortuni", href: "/assicurazione-infortuni", icon: Activity },
          { title: "Assicurazione Vita", href: "/assicurazione-vita", icon: ShieldCheck },
          { title: "Assicurazione LTC", href: "/assicurazione-ltc", icon: Users },
        ],
      },
      {
        title: "Famiglia & Beni",
        links: [
          { title: "Assicurazione Animale", href: "/assicurazione-animale", icon: Dog },
          { title: "Assicurazione Condominio", href: "/assicurazione-condominio", icon: Building },
          { title: "Assicurazione Fotovoltaico", href: "/assicurazione-fotovoltaico", icon: Sun },
          { title: "Assicurazione Mutuo", href: "/assicurazione-mutuo", icon: Banknote },
        ],
      },
      {
        title: "Protezione Legale",
        links: [
          { title: "Tutela Legale", href: "/assicurazione-tutela-legale", icon: Scale },
          { title: "Assicurazione Sci", href: "/assicurazione-sci", icon: Activity },
        ],
      },
    ],
  },

  "Per il Tuo Business": {
    key: "Per il Tuo Business",
    categories: [
      {
        title: "Attività & Strutture",
        links: [
          { title: "Negozio", href: "/assicurazione-negozio", icon: Store },
          { title: "Ufficio", href: "/assicurazione-ufficio", icon: Briefcase },
          { title: "Fotovoltaico Business", href: "/assicurazione-fotovoltaico-business", icon: Sun },
          { title: "Catastrofale", href: "/assicurazione-catastrofale", icon: AlertTriangle },
        ],
      },
      {
        title: "Professionisti",
        links: [
          { title: "Medici", href: "/assicurazione-professionale-medici", icon: Stethoscope },
          { title: "Commercialisti", href: "/assicurazione-professionale-commercialisti", icon: BookOpen },
          { title: "Ingegneri", href: "/assicurazione-professionale-ingegnere", icon: HardHat },
          { title: "IT", href: "/assicurazione-professionale-it", icon: Cpu },
          { title: "Personal Trainer", href: "/assicurazione-professionale-personal-trainer", icon: Dumbbell },
        ],
      },
      {
        title: "Responsabilità & Rischi",
        links: [
          { title: "D&O", href: "/assicurazione-d-o", icon: Gavel },
          { title: "Cyber Risk", href: "/assicurazione-cyber-risk", icon: ShieldAlert },
          { title: "Agenti e Broker", href: "/assicurazione-rcp-agenti-broker", icon: UserCheck },
          { title: "Agenti Finanziari", href: "/assicurazione-rcp-agenti-finanziari", icon: TrendingUp },
          { title: "Agronomi", href: "/assicurazione-rcp-agronomi", icon: Trees },
        ],
      },
    ],
  },

  "Per le Tue Finanze": {
    key: "Per le Tue Finanze",
    categories: [
      {
        title: "Risparmio & Pensione",
        links: [
          { title: "Pensione", href: "/assicurazione-pensionistica", icon: PiggyBank },
          { title: "Piano di Risparmio", href: "/piano-di-risparmio", icon: Wallet },
          { title: "Piani di Accumulo", href: "/piani-di-accumulo", icon: BarChart },
        ],
      },
      {
        title: "Investimenti",
        links: [
          { title: "Unit Linked", href: "/unit-linked", icon: TrendingUp },
          { title: "Gestione Separata", href: "/gestione-separata", icon: ShieldCheck },
          { title: "Index Linked", href: "/index-linked", icon: PieChart },
          { title: "Polizza Vita Mista", href: "/polizza-vita-mista", icon: Recycle },
        ],
      },
    ],
  },
  "KTS": {
  key: "KTS",
  categories: [
    {
      title: "Company",
      links: [
        {
          title: "Who We Are",
          href: "/chi-siamo",
          icon: Building2,
        },
        {
          title: "Academy & Guide",
          href: "/blog",
          icon: BookOpen,
        },
        {
          title: "Contacts",
          href: "/contatti",
          icon: Phone,
        },
      ],
    },
  ],
},
};

export type TabsType = keyof typeof subMenus;