export interface Funcionario {
    id: string;
    name: string;
    email: string;
    nif: string;
    numeroMecanografico: string;
    avatar: string;
    secretaria: string;
    department: string;
    status: 'active' | 'inactive' | 'vacation' | 'intern';
    position: string;
    phone?: string;
}

export const funcionariosData: Funcionario[] = [
    // SRE - Secretaria Regional de Educação, Ciência e Tecnologia
    {
        id: "func001",
        name: "Ana Silva Santos",
        email: "ana.santos@sre.madeira.gov.pt",
        nif: "123456789",
        numeroMecanografico: "1001",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRE",
        department: "DRE",
        status: "active",
        position: "Técnico Superior"
    },
    {
        id: "func002", 
        name: "Carlos Miguel Ferreira",
        email: "carlos.ferreira@sre.madeira.gov.pt",
        nif: "123456790",
        numeroMecanografico: "1002",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRE",
        department: "DRE",
        status: "active",
        position: "Coordenador"
    },
    {
        id: "func003",
        name: "Maria João Pereira",
        email: "maria.pereira@sre.madeira.gov.pt", 
        nif: "123456791",
        numeroMecanografico: "1003",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRE",
        department: "DRJ",
        status: "active",
        position: "Técnico"
    },
    {
        id: "func004",
        name: "João Pedro Oliveira",
        email: "joao.oliveira@sre.madeira.gov.pt",
        nif: "123456792", 
        numeroMecanografico: "1004",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRE",
        department: "DRD",
        status: "vacation",
        position: "Diretor Técnico"
    },
    {
        id: "func005",
        name: "Rita Catarina Sousa",
        email: "rita.sousa@sre.madeira.gov.pt",
        nif: "123456793",
        numeroMecanografico: "1005", 
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRE",
        department: "DRAE",
        status: "active",
        position: "Assistente Técnico"
    },
    {
        id: "func006",
        name: "Pedro Miguel Costa",
        email: "pedro.costa@sre.madeira.gov.pt",
        nif: "123456794",
        numeroMecanografico: "1006",
        avatar: "/login/avatars/avatar2.jpg", 
        secretaria: "SRE",
        department: "DRPRI",
        status: "active",
        position: "Engenheiro"
    },

    // SRF - Secretaria Regional das Finanças
    {
        id: "func007",
        name: "Sandra Isabel Rodrigues",
        email: "sandra.rodrigues@srf.madeira.gov.pt",
        nif: "123456795",
        numeroMecanografico: "2001",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRF", 
        department: "DROT",
        status: "active",
        position: "Contabilista"
    },
    {
        id: "func008",
        name: "Miguel Ângelo Freitas",
        email: "miguel.freitas@srf.madeira.gov.pt",
        nif: "123456796",
        numeroMecanografico: "2002",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRF",
        department: "AT-RAM",
        status: "active", 
        position: "Inspetor Tributário"
    },
    {
        id: "func009",
        name: "Carla Sofia Mendes",
        email: "carla.mendes@srf.madeira.gov.pt",
        nif: "123456797",
        numeroMecanografico: "2003",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRF",
        department: "DREM",
        status: "active",
        position: "Estatístico"
    },
    {
        id: "func010",
        name: "António José Gonçalves",
        email: "antonio.goncalves@srf.madeira.gov.pt",
        nif: "123456798",
        numeroMecanografico: "2004", 
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRF",
        department: "GSRF",
        status: "active",
        position: "Assessor"
    },

    // SRAP - Secretaria Regional de Agricultura e Pescas
    {
        id: "func011",
        name: "Helena Maria Teixeira",
        email: "helena.teixeira@srap.madeira.gov.pt",
        nif: "123456799",
        numeroMecanografico: "3001",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRAP",
        department: "DRA",
        status: "active",
        position: "Engenheiro Agrónomo"
    },
    {
        id: "func012",
        name: "Rui Manuel Vieira",
        email: "rui.vieira@srap.madeira.gov.pt",
        nif: "123456800", 
        numeroMecanografico: "3002",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRAP",
        department: "DRAAC",
        status: "active",
        position: "Técnico Ambiente"
    },
    {
        id: "func013",
        name: "Susana Cristina Martins",
        email: "susana.martins@srap.madeira.gov.pt",
        nif: "123456801",
        numeroMecanografico: "3003",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRAP",
        department: "DROTe", 
        status: "intern",
        position: "Estagiário"
    },

    // SRITJ - Secretaria Regional de Inclusão, Trabalho e Juventude
    {
        id: "func014",
        name: "Patrícia Alexandra Alves",
        email: "patricia.alves@sritj.madeira.gov.pt",
        nif: "123456802",
        numeroMecanografico: "4001",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRITJ",
        department: "DRJ",
        status: "active",
        position: "Animador Juventude"
    },
    {
        id: "func015",
        name: "Nuno Alexandre Silva",
        email: "nuno.silva@sritj.madeira.gov.pt",
        nif: "123456803",
        numeroMecanografico: "4002",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRITJ", 
        department: "DRCAS",
        status: "active",
        position: "Assistente Social"
    },
    {
        id: "func016",
        name: "Cristina Isabel Faria",
        email: "cristina.faria@sritj.madeira.gov.pt",
        nif: "123456804",
        numeroMecanografico: "4003",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRITJ",
        department: "DRT",
        status: "active",
        position: "Inspector do Trabalho"
    },

    // SRSPC - Secretaria Regional de Saúde e Proteção Civil
    {
        id: "func017",
        name: "Dr. Fernando José Cardoso",
        email: "fernando.cardoso@srspc.madeira.gov.pt",
        nif: "123456805",
        numeroMecanografico: "5001",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRSPC",
        department: "DRS",
        status: "active",
        position: "Médico"
    },
    {
        id: "func018",
        name: "Enfª Teresa Marques",
        email: "teresa.marques@srspc.madeira.gov.pt",
        nif: "123456806",
        numeroMecanografico: "5002", 
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRSPC",
        department: "IASAUDE",
        status: "active",
        position: "Enfermeira"
    },
    {
        id: "func019",
        name: "Capitão Jorge Spínola",
        email: "jorge.spinola@srspc.madeira.gov.pt",
        nif: "123456807",
        numeroMecanografico: "5003",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRSPC",
        department: "SRPC",
        status: "active",
        position: "Oficial Proteção Civil"
    },

    // SRETC - Secretaria Regional de Economia, Turismo e Cultura
    {
        id: "func020",
        name: "Isabel Cristina Abreu",
        email: "isabel.abreu@sretc.madeira.gov.pt",
        nif: "123456808",
        numeroMecanografico: "6001",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRETC",
        department: "DRT",
        status: "active",
        position: "Promotor Turismo"
    },
    {
        id: "func021",
        name: "José Carlos Nóbrega", 
        email: "jose.nobrega@sretc.madeira.gov.pt",
        nif: "123456809",
        numeroMecanografico: "6002",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRETC",
        department: "DRC",
        status: "vacation",
        position: "Conservador"
    },
    {
        id: "func022",
        name: "Marina Sofia Câmara",
        email: "marina.camara@sretc.madeira.gov.pt",
        nif: "123456810",
        numeroMecanografico: "6003",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRETC",
        department: "DRET",
        status: "active",
        position: "Economista"
    },

    // SREI - Secretaria Regional de Equipamentos e Infraestruturas  
    {
        id: "func023",
        name: "Eng. Paulo Roberto Figueira",
        email: "paulo.figueira@srei.madeira.gov.pt",
        nif: "123456811",
        numeroMecanografico: "7001",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SREI",
        department: "DRE",
        status: "active",
        position: "Engenheiro Civil"
    },
    {
        id: "func024",
        name: "Arq. Sofia Mendonça",
        email: "sofia.mendonca@srei.madeira.gov.pt",
        nif: "123456812",
        numeroMecanografico: "7002",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SREI", 
        department: "DREPH",
        status: "active",
        position: "Arquiteta"
    },
    {
        id: "func025",
        name: "Ricardo Filipe Ornelas",
        email: "ricardo.ornelas@srei.madeira.gov.pt",
        nif: "123456813",
        numeroMecanografico: "7003",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SREI",
        department: "DRET",
        status: "active",
        position: "Técnico Transportes"
    },

    // More employees continuing the pattern...
    {
        id: "func026",
        name: "Mónica Patrícia Camacho",
        email: "monica.camacho@sre.madeira.gov.pt",
        nif: "123456814",
        numeroMecanografico: "1007",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRE",
        department: "DRE",
        status: "active",
        position: "Professora"
    },
    {
        id: "func027", 
        name: "Vítor Hugo Pestana",
        email: "vitor.pestana@sre.madeira.gov.pt",
        nif: "123456815",
        numeroMecanografico: "1008", 
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRE",
        department: "DRE",
        status: "active",
        position: "Coordenador Pedagógico"
    },
    {
        id: "func028",
        name: "Cláudia Filipa Jardim",
        email: "claudia.jardim@sre.madeira.gov.pt",
        nif: "123456816",
        numeroMecanografico: "1009",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRE",
        department: "DRJ",
        status: "active",
        position: "Psicóloga"
    },
    {
        id: "func029",
        name: "André Filipe Gouveia",
        email: "andre.gouveia@sre.madeira.gov.pt",
        nif: "123456817",
        numeroMecanografico: "1010",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRE",
        department: "DRD",
        status: "intern",
        position: "Estagiário Desporto"
    },
    {
        id: "func030",
        name: "Sónia Alexandra Faria",
        email: "sonia.faria@srf.madeira.gov.pt",
        nif: "123456818",
        numeroMecanografico: "2005",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRF",
        department: "DROT",
        status: "active",
        position: "Técnica Orçamento"
    },
    {
        id: "func031",
        name: "Bruno Miguel Santos",
        email: "bruno.santos@srf.madeira.gov.pt", 
        nif: "123456819",
        numeroMecanografico: "2006",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRF",
        department: "AT-RAM",
        status: "active",
        position: "Técnico Tributário"
    },
    {
        id: "func032",
        name: "Liliana Sofia Correia",
        email: "liliana.correia@srf.madeira.gov.pt",
        nif: "123456820",
        numeroMecanografico: "2007",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRF",
        department: "DREM",
        status: "vacation",
        position: "Analista Dados"
    },
    {
        id: "func033",
        name: "Tiago Alexandre Freitas",
        email: "tiago.freitas@srap.madeira.gov.pt",
        nif: "123456821",
        numeroMecanografico: "3004",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRAP",
        department: "DRA",
        status: "active",
        position: "Veterinário"
    },
    {
        id: "func034",
        name: "Dra. Elisabete Sousa",
        email: "elisabete.sousa@srap.madeira.gov.pt",
        nif: "123456822", 
        numeroMecanografico: "3005",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRAP",
        department: "DRAAC",
        status: "active",
        position: "Bióloga"
    },
    {
        id: "func035",
        name: "Filipe Jorge Henriques",
        email: "filipe.henriques@sritj.madeira.gov.pt",
        nif: "123456823",
        numeroMecanografico: "4004",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRITJ",
        department: "DRJ",
        status: "active",
        position: "Coordenador Projetos"
    },
    {
        id: "func036",
        name: "Ana Catarina Rodrigues",
        email: "ana.rodrigues@sritj.madeira.gov.pt",
        nif: "123456824",
        numeroMecanografico: "4005",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SRITJ",
        department: "DRCAS",
        status: "active",
        position: "Técnica Social"
    },
    {
        id: "func037",
        name: "Dr. Mário Costa Silva",
        email: "mario.silva@srspc.madeira.gov.pt",
        nif: "123456825",
        numeroMecanografico: "5004",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRSPC", 
        department: "DRS",
        status: "active",
        position: "Médico Especialista"
    },
    {
        id: "func038",
        name: "Enfª Carla Baptista",
        email: "carla.baptista@srspc.madeira.gov.pt", 
        nif: "123456826",
        numeroMecanografico: "5005",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRSPC",
        department: "IASAUDE",
        status: "active",
        position: "Enfermeira Especialista"
    },
    {
        id: "func039",
        name: "Técnico João Andrade",
        email: "joao.andrade@srspc.madeira.gov.pt",
        nif: "123456827",
        numeroMecanografico: "5006", 
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SRSPC",
        department: "SRPC",
        status: "active",
        position: "Técnico Emergência"
    },
    {
        id: "func040",
        name: "Raquel Filipa Camacho",
        email: "raquel.camacho@sretc.madeira.gov.pt",
        nif: "123456828",
        numeroMecanografico: "6004",
        avatar: "/login/avatars/avatar4.jpg", 
        secretaria: "SRETC",
        department: "DRT",
        status: "active",
        position: "Guia Turismo"
    },
    {
        id: "func041",
        name: "Marco António Velosa",
        email: "marco.velosa@sretc.madeira.gov.pt",
        nif: "123456829",
        numeroMecanografico: "6005",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRETC",
        department: "DRC", 
        status: "active",
        position: "Técnico Museus"
    },
    {
        id: "func042",
        name: "Eng. Carlos Ponte",
        email: "carlos.ponte@srei.madeira.gov.pt",
        nif: "123456830",
        numeroMecanografico: "7004",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SREI",
        department: "DRE",
        status: "active",
        position: "Engenheiro Obras"
    },
    {
        id: "func043",
        name: "Arq. Diana Faria",
        email: "diana.faria@srei.madeira.gov.pt",
        nif: "123456831",
        numeroMecanografico: "7005", 
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SREI",
        department: "DREPH",
        status: "vacation",
        position: "Arquiteta Paisagista"
    },
    {
        id: "func044",
        name: "Luís Miguel Ferreira",
        email: "luis.ferreira@srei.madeira.gov.pt",
        nif: "123456832",
        numeroMecanografico: "7006",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SREI",
        department: "DRPOP",
        status: "active",
        position: "Coordenador Obras"
    },
    {
        id: "func045",
        name: "Dra. Conceição Vieira",
        email: "conceicao.vieira@presidencia.madeira.gov.pt",
        nif: "123456833",
        numeroMecanografico: "8001",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SPRG",
        department: "GSRP",
        status: "active",
        position: "Assessora"
    },
    {
        id: "func046",
        name: "Dr. Eduardo Brasão",
        email: "eduardo.brasao@presidencia.madeira.gov.pt",
        nif: "123456834",
        numeroMecanografico: "8002",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SPRG", 
        department: "DRAECE",
        status: "active",
        position: "Técnico Europeus"
    },
    {
        id: "func047",
        name: "Sandra Regina Nunes",
        email: "sandra.nunes@presidencia.madeira.gov.pt",
        nif: "123456835",
        numeroMecanografico: "8003",
        avatar: "/login/avatars/avatar3.jpg",
        secretaria: "SPRG",
        department: "DRCM",
        status: "active",
        position: "Técnica Comunidades"
    },
    {
        id: "func048",
        name: "Jornalista Pedro Caldeira",
        email: "pedro.caldeira@presidencia.madeira.gov.pt",
        nif: "123456836",
        numeroMecanografico: "8004",
        avatar: "/login/avatars/avatar4.jpg",
        secretaria: "SPRG",
        department: "DRCS",
        status: "active",
        position: "Jornalista"
    },
    {
        id: "func049",
        name: "Ana Paula Gouveia",
        email: "ana.gouveia@sre.madeira.gov.pt",
        nif: "123456837",
        numeroMecanografico: "1011",
        avatar: "/login/avatars/avatar1.jpg",
        secretaria: "SRE",
        department: "DRPRI",
        status: "active", 
        position: "Gestora Projetos"
    },
    {
        id: "func050",
        name: "Roberto Silva Machado",
        email: "roberto.machado@srf.madeira.gov.pt",
        nif: "123456838",
        numeroMecanografico: "2008",
        avatar: "/login/avatars/avatar2.jpg",
        secretaria: "SRF",
        department: "GSRF",
        status: "intern",
        position: "Estagiário Finanças"
    }
];


// Funcoes auxiliares para filtrar funcionários por secretaria, departamento e status
export const getFuncionariosBySecretaria = (secretaria: string) => {
    return funcionariosData.filter(func => func.secretaria === secretaria);
};

export const getFuncionariosByDepartment = (department: string) => {
    return funcionariosData.filter(func => func.department === department);
};

export const getFuncionariosByStatus = (status: string) => {
    if (status === 'all') return funcionariosData;
    return funcionariosData.filter(func => func.status === status);
};

export const getSecretarias = () => {
    return [...new Set(funcionariosData.map(func => func.secretaria))];
};

export const getDepartments = () => {
    return [...new Set(funcionariosData.map(func => func.department))];
};