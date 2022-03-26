export const questions = [
    {
        id: 1,
        generalQuestion: "¿Su niñosaddas sube o baja al menos dos escalones sin ayuda? Puede agarrarse de la pared o de la barandilla. (Ud. puede hacer esta observación en la tienda, en el parque, o en casa.)",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        audio: "",
        conditional: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/kid_white_stairs_1_1.jpg")
            }
        ],
        explication: "¿Su hijo es capaz de movilizarse por las escaleras sin ayuda?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    },
    {
        id: 2,
        generalQuestion: "¿Su niña corre bien y sabe detenerse sin chocar con las cosas o caerse?",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/girl_walking_beach_2_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de correr sin caerse o tropesar? ",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    },
    {
        id: 3,
        generalQuestion: "¿Puede saltar su niño, levantando ambos pies del suelo a la vez?",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/kid_jumping_3_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo salta con los pies juntos?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    },
    {
        id: 4,
        generalQuestion: "Sin apoyarse en ningún objeto, ¿sabe su niño dar una patada a un balón moviendo la pierna hacia atrás y luego hacia adelante?",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/kid_jumping_blue_4_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de patear un balón sin necesidad de apoyarse de algún objeto?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    },
    {
        id: 5,
        generalQuestion: "¿Puede saltar hacia adelante al menos 3 pulgadas (7 centímetros) levantando ambos pies del suelo al mismo tiempo?",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/girl_jumping_5_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo logra saltar hacia adelante?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    },
    {
        id: 6,
        generalQuestion: "¿Sube las escaleras su niño poniendo sólo un pie en cada escalón? (El pie izquierdo en un escalón y el derecho en el siguiente.) Puede agarrarse de la barandilla o de la pared.",
        specificQuestions: [],
        type: "select",
        hasAudio: false,
        hasImage: true,
        hasExplication: true,
        hasConditional: true,
        hasMoreQuestions: false,
        hasRelationTo: true,
        relation: [
            {
                id: 1,
                relatedTo: 1,
                relatedAnswer: 1
            },
            {
                id: 2,
                relatedTo: 1,
                relatedAnswer: 1
            }
        ],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/2nd_test/gross_motor/boy_up_stairs_6_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo sube las escaleras colocando un solo pie en cada escalón?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Sí"
            },
            {
                id: 2,
                points: 5,
                value: "A veces"
            },
            {
                id: 3,
                points: 0,
                value: "No"
            }
        ]
    }
]