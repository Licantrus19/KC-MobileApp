export const questions = [
    {
        id: 1,
        generalQuestion: "¿Su niño puede bajar las escaleras si usted lo lleva de la mano? Puede agarrarse de la pared o de la barandilla también. (Ud. puede hacer esta observación en la tienda, en el parque, o en casa.)",
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
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_up_stair_1_1.jpg")
            }
        ],
        explication: "¿Su hijo baja las escaleras con ayuda suya?",
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
        generalQuestion: "Al enseñarle cómo se da una patada a un balón, ¿intenta su niño dar la patada moviendo la pierna hacia adelante o caminando hasta tocar el balón? (Si ya sabe dar una patada al balón, marque “sí” en esta pregunta.)",
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
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_kicking_ball_2_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de patear un balón?",
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
        generalQuestion: "¿Su niño sube o baja al menos dos escalones sin ayuda? Puede agarrarse de la pared o de la barandilla.",
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
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_alone_stairs_3_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo sube o baja las escaleras sin ayuda?",
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
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_beach_4_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de correr sin caerse o tropesar",
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
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_jumping_5_1.jpg")
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
        id: 6,
        generalQuestion: "Sin apoyarse en ningún objeto, ¿sabe su niño dar una patada a un balón moviendo la pierna hacia atrás y luego hacia adelante?",
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
                relatedTo: 2,
                relatedAnswer: 1
            },
            {
                id: 2,
                relatedTo: 2,
                relatedAnswer: 1
            }
        ],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/1st_test/gross_motor/kid_soccer_6_1.jpg")
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
    }
]