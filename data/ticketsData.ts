export interface Ticket {
    id: number;
    ticketId: string;
    requester: {
        name: string;
        email: string;
        avatar: string;
    };
    subject: string;
    workLocation: string;
    status: {
        name: string;
        color: 'red' | 'blue' | 'gray' | 'yellow' | 'green';
    };
    lastMessage: string;
    createdAt: Date;
}

export const ticketsData: Ticket[] = [
    {
        id: 1,
        ticketId: "24158",
        requester: {
            name: "David Silva",
            email: "david.silva@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas de Configuração da Impressora",
        workLocation: "SREI",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 2 horas",
        createdAt: new Date("2024-10-24T08:30:00")
    },
    {
        id: 2,
        ticketId: "24237",
        requester: {
            name: "Maria Santos",
            email: "maria.santos@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas de Ligação à Rede",
        workLocation: "SRE",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-24T09:15:00")
    },
    {
        id: 3,
        ticketId: "24419",
        requester: {
            name: "João Pereira",
            email: "joao.pereira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Pedido de Instalação de Software",
        workLocation: "SRAP",
        status: {
            name: "Aguarda Stock",
            color: "yellow"
        },
        lastMessage: "há 3 horas",
        createdAt: new Date("2024-10-24T07:45:00")
    },
    {
        id: 4,
        ticketId: "24387",
        requester: {
            name: "Ana Costa",
            email: "ana.costa@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Ajuda com Configuração de Email",
        workLocation: "DRE",
        status: {
            name: "Concluído",
            color: "green"
        },
        lastMessage: "Ontem",
        createdAt: new Date("2024-10-23T14:20:00")
    },
    {
        id: 5,
        ticketId: "24293",
        requester: {
            name: "Carlos Mendes",
            email: "carlos.mendes@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Substituição de Hardware do Computador",
        workLocation: "SREI",
        status: {
            name: "Fechado",
            color: "gray"
        },
        lastMessage: "há 2 dias",
        createdAt: new Date("2024-10-22T16:30:00")
    },
    {
        id: 6,
        ticketId: "24501",
        requester: {
            name: "Luisa Fernandes",
            email: "luisa.fernandes@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Pedido de Permissão de Acesso",
        workLocation: "SRE",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 30 minutos",
        createdAt: new Date("2024-10-24T10:30:00")
    },
    {
        id: 7,
        ticketId: "24186",
        requester: {
            name: "Miguel Rodrigues",
            email: "miguel.rodrigues@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Erro de Ligação à Base de Dados",
        workLocation: "DRE",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 4 horas",
        createdAt: new Date("2024-10-24T06:15:00")
    },
    {
        id: 8,
        ticketId: "24365",
        requester: {
            name: "Sofia Almeida",
            email: "sofia.almeida@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Configuração de Ligação VPN",
        workLocation: "SRAP",
        status: {
            name: "Concluído",
            color: "green"
        },
        lastMessage: "há 1 dia",
        createdAt: new Date("2024-10-23T11:45:00")
    },
    {
        id: 9,
        ticketId: "24528",
        requester: {
            name: "Pedro Santos",
            email: "pedro.santos@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Pedido de Substituição de Monitor",
        workLocation: "DRE",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 45 minutos",
        createdAt: new Date("2024-10-24T09:45:00")
    },
    {
        id: 10,
        ticketId: "24447",
        requester: {
            name: "Rita Oliveira",
            email: "rita.oliveira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Renovação de Licença de Software",
        workLocation: "SRAP",
        status: {
            name: "Aguarda Stock",
            color: "yellow"
        },
        lastMessage: "há 5 horas",
        createdAt: new Date("2024-10-24T05:30:00")
    },
    {
        id: 11,
        ticketId: "24572",
        requester: {
            name: "Nuno Ferreira",
            email: "nuno.ferreira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas de Acesso ao Sistema",
        workLocation: "SRE",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-24T09:00:00")
    },
    {
        id: 14,
        ticketId: "24601",
        requester: {
            name: "Ana Costa",
            email: "ana.costa@sre.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Email",
        workLocation: "SRE",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 30 minutos",
        createdAt: new Date("2024-10-25T10:15:00")
    },
    {
        id: 15,
        ticketId: "24602",
        requester: {
            name: "João Ferreira",
            email: "joao.ferreira@srf.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Sistema Lento",
        workLocation: "SRF",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 45 minutos",
        createdAt: new Date("2024-10-25T09:30:00")
    },
    {
        id: 16,
        ticketId: "24603",
        requester: {
            name: "Sofia Pereira",
            email: "sofia.pereira@srap.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Erro na Aplicação Web",
        workLocation: "SRAP",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 2 horas",
        createdAt: new Date("2024-10-25T08:00:00")
    },
    {
        id: 17,
        ticketId: "24604",
        requester: {
            name: "Miguel Santos",
            email: "miguel.santos@sritj.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Teclado Avariado",
        workLocation: "SRITJ",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 1 dia",
        createdAt: new Date("2024-10-24T14:20:00")
    },
    {
        id: 18,
        ticketId: "24605",
        requester: {
            name: "Carla Rodrigues",
            email: "carla.rodrigues@srspc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Monitor Não Liga",
        workLocation: "SRSPC",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 3 horas",
        createdAt: new Date("2024-10-25T07:15:00")
    },
    {
        id: 19,
        ticketId: "24606",
        requester: {
            name: "Pedro Mendes",
            email: "pedro.mendes@sretc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com VPN",
        workLocation: "SRETC",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-25T09:45:00")
    },
    {
        id: 20,
        ticketId: "24607",
        requester: {
            name: "Isabel Gonçalves",
            email: "isabel.goncalves@srei.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Scanner Não Funciona",
        workLocation: "SREI",
        status: {
            name: "Fechado",
            color: "gray"
        },
        lastMessage: "há 2 dias",
        createdAt: new Date("2024-10-23T16:30:00")
    },
    {
        id: 21,
        ticketId: "24608",
        requester: {
            name: "António Alves",
            email: "antonio.alves@sprg.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Falta de Toner",
        workLocation: "SPRG",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 4 horas",
        createdAt: new Date("2024-10-25T06:00:00")
    },
    {
        id: 22,
        ticketId: "24609",
        requester: {
            name: "Patrícia Sousa",
            email: "patricia.sousa@sre.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Backup de Dados",
        workLocation: "SRE",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 15 minutos",
        createdAt: new Date("2024-10-25T11:30:00")
    },
    {
        id: 23,
        ticketId: "24610",
        requester: {
            name: "Rui Martins",
            email: "rui.martins@srf.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Instalação de Software",
        workLocation: "SRF",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 2 horas",
        createdAt: new Date("2024-10-25T08:45:00")
    },
    {
        id: 24,
        ticketId: "24611",
        requester: {
            name: "Teresa Ribeiro",
            email: "teresa.ribeiro@srap.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Computador com Vírus",
        workLocation: "SRAP",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 3 dias",
        createdAt: new Date("2024-10-22T13:15:00")
    },
    {
        id: 25,
        ticketId: "24612",
        requester: {
            name: "Carlos Fernandes",
            email: "carlos.fernandes@sritj.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Câmara Web",
        workLocation: "SRITJ",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-25T10:00:00")
    },
    {
        id: 26,
        ticketId: "24613",
        requester: {
            name: "Mónica Castro",
            email: "monica.castro@srspc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Telefone Avariado",
        workLocation: "SRSPC",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 5 horas",
        createdAt: new Date("2024-10-25T05:30:00")
    },
    {
        id: 27,
        ticketId: "24614",
        requester: {
            name: "Paulo Gomes",
            email: "paulo.gomes@sretc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Projetor",
        workLocation: "SRETC",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 30 minutos",
        createdAt: new Date("2024-10-25T11:00:00")
    },
    {
        id: 28,
        ticketId: "24615",
        requester: {
            name: "Cristina Lopes",
            email: "cristina.lopes@srei.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Erro na Base de Dados",
        workLocation: "SREI",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-25T09:15:00")
    },
    {
        id: 29,
        ticketId: "24616",
        requester: {
            name: "Fernando Dias",
            email: "fernando.dias@sprg.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Rato Não Funciona",
        workLocation: "SPRG",
        status: {
            name: "Fechado",
            color: "gray"
        },
        lastMessage: "há 1 semana",
        createdAt: new Date("2024-10-18T14:45:00")
    },
    {
        id: 30,
        ticketId: "24617",
        requester: {
            name: "Sandra Pinto",
            email: "sandra.pinto@sre.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Colunas",
        workLocation: "SRE",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 2 dias",
        createdAt: new Date("2024-10-23T12:00:00")
    },
    {
        id: 31,
        ticketId: "24618",
        requester: {
            name: "Nuno Cardoso",
            email: "nuno.cardoso@srf.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Atualização do Sistema",
        workLocation: "SRF",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 6 horas",
        createdAt: new Date("2024-10-25T04:15:00")
    },
    {
        id: 32,
        ticketId: "24619",
        requester: {
            name: "Rita Magalhães",
            email: "rita.magalhaes@srap.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Acesso Negado ao Sistema",
        workLocation: "SRAP",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 3 horas",
        createdAt: new Date("2024-10-25T07:45:00")
    },
    {
        id: 33,
        ticketId: "24620",
        requester: {
            name: "Jorge Barbosa",
            email: "jorge.barbosa@sritj.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Erro de Login",
        workLocation: "SRITJ",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 45 minutos",
        createdAt: new Date("2024-10-25T10:30:00")
    },
    {
        id: 34,
        ticketId: "24621",
        requester: {
            name: "Susana Nunes",
            email: "susana.nunes@srspc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Disco Rígido",
        workLocation: "SRSPC",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 4 dias",
        createdAt: new Date("2024-10-21T15:20:00")
    },
    {
        id: 35,
        ticketId: "24622",
        requester: {
            name: "Ricardo Silva",
            email: "ricardo.silva@sretc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Impressora Offline",
        workLocation: "SRETC",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 2 horas",
        createdAt: new Date("2024-10-25T08:30:00")
    },
    {
        id: 36,
        ticketId: "24623",
        requester: {
            name: "Helena Moreira",
            email: "helena.moreira@srei.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Erro no Sistema de Gestão Documental",
        workLocation: "SREI",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 7 horas",
        createdAt: new Date("2024-10-25T03:00:00")
    },
    {
        id: 37,
        ticketId: "24624",
        requester: {
            name: "Tiago Correia",
            email: "tiago.correia@sprg.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Software Não Funciona Corretamente",
        workLocation: "SPRG",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-25T09:00:00")
    },
    {
        id: 38,
        ticketId: "24625",
        requester: {
            name: "Vera Carvalho",
            email: "vera.carvalho@sre.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Lentidão no Computador",
        workLocation: "SRE",
        status: {
            name: "Fechado",
            color: "gray"
        },
        lastMessage: "há 5 dias",
        createdAt: new Date("2024-10-20T11:30:00")
    },
    {
        id: 39,
        ticketId: "24626",
        requester: {
            name: "Daniel Rocha",
            email: "daniel.rocha@srf.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Internet",
        workLocation: "SRF",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 4 horas",
        createdAt: new Date("2024-10-25T06:45:00")
    },
    {
        id: 40,
        ticketId: "24627",
        requester: {
            name: "Cláudia Monteiro",
            email: "claudia.monteiro@srap.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Computador Não Liga",
        workLocation: "SRAP",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 1 dia",
        createdAt: new Date("2024-10-24T16:15:00")
    },
    {
        id: 41,
        ticketId: "24628",
        requester: {
            name: "André Freitas",
            email: "andre.freitas@sritj.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas de Configuração da Impressora",
        workLocation: "SRITJ",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 8 horas",
        createdAt: new Date("2024-10-25T02:30:00")
    },
    {
        id: 42,
        ticketId: "24629",
        requester: {
            name: "Joana Teixeira",
            email: "joana.teixeira@srspc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Sistema Lento",
        workLocation: "SRSPC",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 20 minutos",
        createdAt: new Date("2024-10-25T11:15:00")
    },
    {
        id: 43,
        ticketId: "24630",
        requester: {
            name: "Bruno Araújo",
            email: "bruno.araujo@sretc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Monitor Não Liga",
        workLocation: "SRETC",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 3 horas",
        createdAt: new Date("2024-10-25T07:00:00")
    },
    {
        id: 44,
        ticketId: "24631",
        requester: {
            name: "Filipa Cunha",
            email: "filipa.cunha@srei.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Teclado Avariado",
        workLocation: "SREI",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 6 dias",
        createdAt: new Date("2024-10-19T10:45:00")
    },
    {
        id: 45,
        ticketId: "24632",
        requester: {
            name: "Luís Marques",
            email: "luis.marques@sprg.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Scanner Não Funciona",
        workLocation: "SPRG",
        status: {
            name: "Fechado",
            color: "gray"
        },
        lastMessage: "há 2 semanas",
        createdAt: new Date("2024-10-11T13:20:00")
    },
    {
        id: 46,
        ticketId: "24633",
        requester: {
            name: "Catarina Reis",
            email: "catarina.reis@sre.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Falta de Toner",
        workLocation: "SRE",
        status: {
            name: "Pendente",
            color: "red"
        },
        lastMessage: "há 5 horas",
        createdAt: new Date("2024-10-25T05:00:00")
    },
    {
        id: 47,
        ticketId: "24634",
        requester: {
            name: "Vasco Simões",
            email: "vasco.simoes@srf.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Backup de Dados",
        workLocation: "SRF",
        status: {
            name: "Em Progresso",
            color: "yellow"
        },
        lastMessage: "há 10 minutos",
        createdAt: new Date("2024-10-25T11:45:00")
    },
    {
        id: 48,
        ticketId: "24635",
        requester: {
            name: "Mariana Campos",
            email: "mariana.campos@srap.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Instalação de Software",
        workLocation: "SRAP",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 1 hora",
        createdAt: new Date("2024-10-25T09:30:00")
    },
    {
        id: 49,
        ticketId: "24636",
        requester: {
            name: "Eduardo Leite",
            email: "eduardo.leite@sritj.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Computador com Vírus",
        workLocation: "SRITJ",
        status: {
            name: "Resolvido",
            color: "green"
        },
        lastMessage: "há 3 dias",
        createdAt: new Date("2024-10-22T14:30:00")
    },
    {
        id: 50,
        ticketId: "24637",
        requester: {
            name: "Inês Coelho",
            email: "ines.coelho@srspc.madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Problemas com Câmara Web",
        workLocation: "SRSPC",
        status: {
            name: "Aberto",
            color: "blue"
        },
        lastMessage: "há 2 horas",
        createdAt: new Date("2024-10-25T08:15:00")
    }
];

// Helper function to get status styling
export const getStatusStyling = (color: Ticket['status']['color']) => {
    switch (color) {
        case 'red':
            return 'bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200';
        case 'blue':
            return 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200';
        case 'gray':
            return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
        case 'yellow':
            return 'bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200';
        case 'green':
            return 'bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200';
        default:
            return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
};