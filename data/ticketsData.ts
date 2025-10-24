export interface Ticket {
    id: number;
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