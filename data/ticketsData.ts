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
        subject: "Printer Configuration Issues",
        workLocation: "SREI",
        status: {
            name: "Pending",
            color: "red"
        },
        lastMessage: "2 hours ago",
        createdAt: new Date("2024-10-24T08:30:00")
    },
    {
        id: 2,
        requester: {
            name: "Maria Santos",
            email: "maria.santos@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Network Connection Problems",
        workLocation: "SRE",
        status: {
            name: "Open",
            color: "blue"
        },
        lastMessage: "1 hour ago",
        createdAt: new Date("2024-10-24T09:15:00")
    },
    {
        id: 3,
        requester: {
            name: "João Pereira",
            email: "joao.pereira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Software Installation Request",
        workLocation: "SRAP",
        status: {
            name: "Awaiting Stock",
            color: "yellow"
        },
        lastMessage: "3 hours ago",
        createdAt: new Date("2024-10-24T07:45:00")
    },
    {
        id: 4,
        requester: {
            name: "Ana Costa",
            email: "ana.costa@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Email Configuration Help",
        workLocation: "DRE",
        status: {
            name: "Completed",
            color: "green"
        },
        lastMessage: "Yesterday",
        createdAt: new Date("2024-10-23T14:20:00")
    },
    {
        id: 5,
        requester: {
            name: "Carlos Mendes",
            email: "carlos.mendes@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Computer Hardware Replacement",
        workLocation: "SREI",
        status: {
            name: "Closed",
            color: "gray"
        },
        lastMessage: "2 days ago",
        createdAt: new Date("2024-10-22T16:30:00")
    },
    {
        id: 6,
        requester: {
            name: "Luisa Fernandes",
            email: "luisa.fernandes@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Access Permission Request",
        workLocation: "SRE",
        status: {
            name: "Open",
            color: "blue"
        },
        lastMessage: "30 minutes ago",
        createdAt: new Date("2024-10-24T10:30:00")
    },
    {
        id: 7,
        requester: {
            name: "Miguel Rodrigues",
            email: "miguel.rodrigues@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Database Connection Error",
        workLocation: "DRE",
        status: {
            name: "Pending",
            color: "red"
        },
        lastMessage: "4 hours ago",
        createdAt: new Date("2024-10-24T06:15:00")
    },
    {
        id: 8,
        requester: {
            name: "Sofia Almeida",
            email: "sofia.almeida@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "VPN Connection Setup",
        workLocation: "SRAP",
        status: {
            name: "Completed",
            color: "green"
        },
        lastMessage: "1 day ago",
        createdAt: new Date("2024-10-23T11:45:00")
    },
    {
        id: 9,
        requester: {
            name: "Pedro Santos",
            email: "pedro.santos@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Monitor Replacement Request",
        workLocation: "DRE",
        status: {
            name: "Open",
            color: "blue"
        },
        lastMessage: "45 minutes ago",
        createdAt: new Date("2024-10-24T09:45:00")
    },
    {
        id: 10,
        requester: {
            name: "Rita Oliveira",
            email: "rita.oliveira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "Software License Renewal",
        workLocation: "SRAP",
        status: {
            name: "Awaiting Stock",
            color: "yellow"
        },
        lastMessage: "5 hours ago",
        createdAt: new Date("2024-10-24T05:30:00")
    },
    {
        id: 11,
        requester: {
            name: "Nuno Ferreira",
            email: "nuno.ferreira@madeira.gov.pt",
            avatar: "/others/avatar.png"
        },
        subject: "System Access Issues",
        workLocation: "SRE",
        status: {
            name: "Pending",
            color: "red"
        },
        lastMessage: "1 hour ago",
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