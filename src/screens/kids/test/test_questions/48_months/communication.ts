export const questions = [
    {
        id: 1,
        generalQuestion: "¿Dice su niño los nombres de al menos tres cosas de una categoría de objetos ordinarios? Por ejemplo, si Ud. le dice “Dime algunas cosas que se pueden comer”, ¿su niño menciona alimentos (como galletas, huevos, o pan)? O si Ud. le dice “Dime los nombres de algunos animales, ¿su niño menciona algún animal (como vaca, perro, elefante)? ",
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
                url: require("../../../../../assets/questions/7th_test/communication/family_hug_1_1.jpg")
            }
        ],
        explication: "¿Su hijo es capaz de mencionar 3 cosas de una misma categoría?",
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
        generalQuestion: " ¿Contesta su niña las siguientes preguntas? (Marque “a veces” si su niña responde a una sóla de las 2 preguntas.)",
        specificQuestions: [
            "“¿Qué haces cuando tienes hambre?” (Las respuestas aceptables incluyen frases como “pido algo de comer”, “como”, y “hago un sandwich”.) Por favor, escriba la respuesta de su niña:",
            "“¿Qué haces cuando tienes sueño?” (Las respuestas aceptables incluyen frases como “me acuesto”, “duermo”, y “me siento”.) Por favor escriba la respuesta de su niña:"
        ],
        type: "text",
        hasAudio: false,
        hasImage: true,
        hasExplication: false,
        hasConditional: false,
        hasMoreQuestions: true,
        hasRelationTo: false,
        relation: [],
        comments: [
            {
                id: 1,
                value: []
            },
            {
                id: 2,
                value: []
            }
        ],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/7th_test/communication/girl_eating_2_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/7th_test/communication/girl_sleeping_2_2.jpg")
            }
        ],
        audio: "",
        explication: "",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Si"
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
        generalQuestion: "¿Su niño puede mencionar al menos dos características de objetos ordinarios? Por ejemplo, al decirle, “Dime algo sobre tu pelota”, ¿dice su niño algo como “Es redonda”, “La tiro”, “Es grande”?",
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
                url: require("../../../../../assets/questions/7th_test/communication/kid_playing_3_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo logra mencionar 2 características de objetos?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Si"
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
        generalQuestion: "Al formular sus palabras, ¿su niña usa terminaciones como “-é”, “-ando”, y “-s”? Por ejemplo, dice “Tiré la pelota”, “Estoy jugando”, o “Veo dos gatos”.",
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
                url: require("../../../../../assets/questions/7th_test/communication/mother_talking_4_1.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo utiliza correctamente los tiempos de los verbos al formular oraciones?",
        rangeAnswer: " ",
        options: [],
        answer: [
            {
                id: 1,
                points: 10,
                value: "Si"
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
        generalQuestion: "Sin hacer señas para ayudarle ni repetir las instrucciones, ¿puede su niño llevar a cabo tres acciones completamente diferentes cuando Ud. se lo pide? Debe decirle las tres instrucciones antes de que él comience a hacerlas. Por ejemplo, le puede pedir, “Aplaude con las manos, camina hasta la puerta, y siéntate”, o “Dame la pluma, abre el libro, y ponte de pie”.",
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
                url: require("../../../../../assets/questions/7th_test/communication/kid_reading_5_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/7th_test/communication/kid_throwing_ball_5_2.jpg")
            },
            {
                id: 3,
                url: require("../../../../../assets/questions/7th_test/communication/kid_smiling_5_3.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de hacer 3 acciones diferentes al pedírselo?",
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
        generalQuestion: "Al formar oraciones, ¿incluye su niña todas las palabras necesarias (como “un”, “el”, “la”, “soy”, “es”, “está”, y “son”) para que sean completas? Por ejemplo dice: “Voy al parque”, “¿Dónde está el juguete?” o “¿Vas a venir también?”",
        specificQuestions: [],
        type: "select",
        hasAudio: true,
        hasImage: true,
        hasExplication: true,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        conditional: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/7th_test/communication/kid_sad_6_1.jpg")
            }
        ],
        audio: "[Falta]",
        explication: "¿Su hijo formula oraciones correctamente?",
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