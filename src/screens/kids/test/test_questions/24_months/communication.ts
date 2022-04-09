export const questions = [
    {
        id: 1,
        generalQuestion: "Sin enseñarle primero, ¿puede señalar con el dedo el dibujo correcto cuando Ud. le dice, “Enséñame dónde está el gatito”, o le pregunta, “¿Dónde está el perro?” (Solamente tiene que identificar un dibujo correctamente en la pantalla.)",
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
                url: require("../../../../../assets/questions/1st_test/communication/dog_sit_1_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/1st_test/communication/cat_sit_1_2.jpg")
            }
        ],
        explication: "¿Su hijo identifca un objeto mencionado previamente sin necesidad de señalarlo?",
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
        generalQuestion: "¿Imita su niña una oración de dos palabras? Por ejemplo, cuando Ud. dice “Mamá juega”, “Papá come”, o “¿Qué es?”, repite ella la misma frase? (Marque “sí” aun si sus palabras sean difíciles de entender).",
        specificQuestions: [],
        type: "select",
        hasAudio: true,
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
                url: require("../../../../../assets/questions/1st_test/communication/family_playing_2_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/1st_test/communication/family_eating_pizza_2_2.jpg")
            }
        ],
        audio: "[FALTA]",
        explication: "¿Su hijo repite las frases dichas por usted anteriormente?",
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
        generalQuestion: "Sin darle pistas señalándole o usando gestos, ¿puede su niño seguir almenos tres de las siguientes instrucciones?",
        specificQuestions: [],
        type: "checklist",
        hasAudio: false,
        hasImage: true,
        hasExplication: false,
        hasConditional: false,
        hasMoreQuestions: false,
        hasRelationTo: false,
        relation: [],
        comments: [],
        imageUrls: [
            {
                id: 1,
                url: require("../../../../../assets/questions/1st_test/communication/family_playing_legos_3_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/1st_test/communication/kid_closing_door_3_2.jpg")
            },
            {
                id: 3,
                url: require("../../../../../assets/questions/1st_test/communication/towel_3_3.jpg")
            },
            {
                id: 4,
                url: require("../../../../../assets/questions/1st_test/communication/jacket_3_4.jpg")
            },
            {
                id: 5,
                url: require("../../../../../assets/questions/1st_test/communication/family_walking_3_5.jpg")
            },
            {
                id: 6,
                url: require("../../../../../assets/questions/1st_test/communication/kid_books_3_6.jpg")
            }
        ],
        audio: "",
        explication: "¿Su hijo es capaz de  seguir instrucciones?",
        rangeAnswer: "3",
        options: [
            {
                id: 1,
                points: 1,
                value: "Pon el juguete en la mesa"
            },
            {
                id: 2,
                points: 1,
                value: "Cierra la puerta"
            },
            {
                id: 3,
                points: 1,
                value: "Tráeme una toalla"
            },
            {
                id: 4,
                points: 1,
                value: "Busca tu abrigo"
            },
            {
                id: 5,
                points: 1,
                value: "Dame la mano"
            },
            {
                id: 6,
                points: 1,
                value: "Agarra tu libro"
            }
        ],
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
        generalQuestion: "Si Ud. señala un dibujo de una pelota (gatito, vaso, gorro, etc.) y le pregunta a su niña “¿qué es?”, ¿puede identificar y nombrar al menos un dibujo?",
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
                url: require("../../../../../assets/questions/1st_test/communication/red_ball_4_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/1st_test/communication/cat_sit_gray_4_2.jpg")
            },
            {
                id: 3,
                url: require("../../../../../assets/questions/1st_test/communication/glass_water_4_3.jpg")
            },
            {
                id: 4,
                url: require("../../../../../assets/questions/1st_test/communication/black_hat_4_4.jpg")
            }
        ],
        audio: "",
        explication: "¿Si usted señala un objeto, su hijo es capaz de indentificarlo?",
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
        generalQuestion: "¿Puede decir dos o tres palabras juntas que representen ideas diferentes, como: “Veo perro”, “Mamá llega casa”, o “¿Se fue gatito”? (No cuente las combinaciones de palabras que expresen una sóla idea como “se acabó”, “está bien”, y “¿qué es?”)",
        specificQuestions: [],
        type: "select",
        hasAudio: true,
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
                url: require("../../../../../assets/questions/1st_test/communication/kid_and_dog_5_1.jpg")
            },
            {
                id: 2,
                url: require("../../../../../assets/questions/1st_test/communication/cat_watching_5_2.jpg")
            },
            {
                id: 3,
                url: require("../../../../../assets/questions/1st_test/communication/family_hug_5_3.jpg")
            }
        ],
        audio: "[FALTA]",
        explication: "¿Su hijo formula frases que representen acciones?",
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
        generalQuestion: "¿Puede usar correctamente al menos dos palabras como “mi”, “yo”,“mía”, o “tú”?",
        specificQuestions: [],
        type: "select",
        hasAudio: true,
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
                url: require("../../../../../assets/questions/1st_test/communication/baby_surprised_6_1.jpg")
            }
        ],
        audio: "[FALTA]",
        explication: "¿Su hijo usa correctamente los pronombres?",
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
