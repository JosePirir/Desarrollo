document.getElementById("toggleLanguageButton").addEventListener("click", () => {
    const button = document.getElementById("toggleLanguageButton");
    const isEnglish = button.textContent === "Español"; // Detecta el idioma actual del botón
    const textContent = [
        {
            selector: "#first div:nth-of-type(1) h2",
            es:"ASOCCAM",
            en:"ASOCCAM",
        },
        {
            selector:"#first div:nth-of-type(1) p",
            es:"Asociación Cristiana para el Cuidado del Adulto Mayor",
            en:"Christian Association for the Care of the Elderly",
        },
        {
            selector:"#second h2",
            es:"Programas",
            en:"Programs"
        },
        {
            selector: "#second div:nth-of-type(1) h3", // Accede al primer <h3>
            es: "EVANGELISMO",
            en: "EVANGELISM",
        },
        {
            selector: "#second div:nth-of-type(1) p", // Accede al primer <p>
            es: "En todos nuestros programas de apoyo se predican las Buenas Nuevas de Salvación, se promueve la oración y los tratados evangelistícos.",
            en: "In all our support programs, the Good News of Salvation is preached, and prayer and evangelistic tracts are promoted.",
        },
        {
            selector: "#second div:nth-of-type(2) h3", // Accede al segundo <h3>
            es: "CAPACITACIÓN",
            en: "TRAINING",
        },
        {
            selector: "#second  div:nth-of-type(2) p", // Accede al segundo <p>
            es: "Como Ministerio impartimos capacitaciones sobre la capellanía del Adulto Mayor desde la perspectiva biblíca.",
            en: "As a Ministry, we provide training on chaplaincy for the elderly from a biblical perspective.",
        },
        {
            selector: "#second div:nth-of-type(3) h3", // Accede al tercer <h3>
            es: "PROYECTOS COMUNITARIOS",
            en: "COMMUNITY PROJECTS",
        },
        {
            selector: "#second  div:nth-of-type(3) p", // Accede al tercer <p>
            es: "ASOCCAM apoya a rehabilitemos Guatemala en el área de Recursos Humanos en el hospital de Sololá. Brinda apoyo en viáticos y vivienda a estudiantes de fisioterapia que realizan pasantías, contribuyendo a la atención integral de los pacientes de la tercera edad.",
            en: "ASOCCAM supports the project Rehabilitemos Guatemala in the area of Human Resources at the Sololá hospital. It provides support with travel expenses and housing for physiotherapy students doing internships, contributing to comprehensive care for elderly patients.",
        },
        {
            selector: "#second  div:nth-of-type(4) h3", // Accede al cuarto <h3>
            es: "EMPRENDIMIENTO",
            en: "ENTREPRENEURSHIP",
        },
        {
            selector: "#second  div:nth-of-type(4) p", // Accede al cuarto <p>
            es: "ASOCCAM promueve al adulto mayor emprendedor y comerciante informal con el objetivo de cultivar su independencia económica mientras sus facultades físicas y mentales lo permitan para mantenerse activo con una autoestima saludable.",
            en: "ASOCCAM promotes elderly entrepreneurs and informal traders to cultivate their economic independence as long as their physical and mental faculties allow them, helping them stay active with healthy self-esteem.",
        },
        {
            selector: "#third div:nth-of-type(1) h2",
            es: "¿Quiénes somos?",
            en: "Who are we?"
        },
        {
            selector: "#third div:nth-of-type(1) p",
            es: "Somos una Asociación Cristiana para el Cuidado del Adulto Mayor (ASOCCAM) en Guatemala opera como un ministerio fuera de la iglesia local, enfocándose en el desarrollo integral del adulto mayor y promoviendo una cultura inclusiva entre las nuevas generaciones.",
            en: "We are a Christian Association for the Care of the Elderly (ASOCCAM) in Guatemala, operating as a ministry outside the local church, focusing on the comprehensive development of the elderly and promoting an inclusive culture among new generations."
        },
        {
            selector: "#fourth h2",
            es: "Misión y Visión",
            en: "Mission & Vision"
        },
        {
            selector: "#fourth div:nth-of-type(1) h3",
            es: "Misión",
            en: "Mission"
        },
        {
            selector: "#fourth div:nth-of-type(1) p",
            es: "Canalizar recursos para el desarrollo e implementación de programas de evangelización y atención integral al adulto mayor.",
            en: "Channel resources for the development and implementation of evangelization and comprehensive care programs for the elderly."
        },
        {
            selector: "#fourth div:nth-of-type(2) h3",
            es: "Visión",
            en: "Vision",
        },
        {
            selector: "#fourth div:nth-of-type(2) p",
            es: "Canalizar recursos para el desarrollo e implementación de programas de evangelización y atención integral al adulto mayor.",
            en: "To be an Association that replicates a Christian model of comprehensive care for the elderly through specialized centers throughout the country."
        },
        {
            selector: "#fifth h2",
            es: "Nuestro Programa Integral del Adulto Mayor",
            en: "Our Comprehensive Program for the Elderly"
        },
        {
            selector: "#fifth div:nth-of-type(1) h3",
            es: "Fisico",
            en: "Physical"
        },
        {
            selector: "#fifth div:nth-of-type(1) p",
            es: "Cuidamos el estado de salud del adulto mayor, programando jornadas médicas, oftalmológicas, dentales, entre otras.",
            en: "We take care of the health status of the elderly, scheduling medical, ophthalmological, dental sessions, among others."
        },
        {
            selector: "#fifth div:nth-of-type(2) h3",
            es: "Emocional",
            en: "Emotional",
        },
        {
            selector: "#fifth div:nth-of-type(2) p",
            es: "Cuidamos el estado emocional del adulto mayor realizando visitas domiciliarias para manejar de manera adecuada el estrés, la depresión, la soledad y el duelo.",
            en: "We take care of the emotional state of the elderly by making home visits to adequately manage stress, depression, loneliness and grief.",
        },
        {
            selector: "#fifth div:nth-of-type(3) h3",
            es: "Espiritual",
            en: "Spiritual",
        },
        {
            selector: "#fifth div:nth-of-type(3) p",
            es: "Desarrollamos estudio bíblico con temáticas contextualizadas a la tercera edad, Además de cumplir con la labor de evangelismo y discipulado.",
            en: "We develop Bible study with themes contextualized to the elderly, in addition to carrying out the work of evangelism and discipleship.",
        },
        {
            selector: "#fifth div:nth-of-type(4) h3",
            es: "Recreativas",
            en: "Recreational",
        },
        {
            selector: "#fifth div:nth-of-type(4) p",
            es: "Elaboración de manualidades con materiales reciclados acorde a su edad.",
            en: "Making crafts with recycled materials according to their age.",
        },
        {
            selector: "#sixth div h2",
            es: "Programa de Apadrinamiento",
            en: "Sponsorship Program",
        },
        {
            selector: "#sixth div p:nth-of-type(1)",
            es: "Este programa busca apadrinar a adultos mayores en situación de vulnerabilidad y trabajadores del comercio informal mediante la entrega mensual de una bolsa de víveres.",
            en: "This program seeks to sponsor older adults in vulnerable situations and informal trade workers through the monthly delivery of a bag of groceries.",
        },
        {
            selector: "#sixth div p:nth-of-type(2)",
            es: "A través de donaciones en efectivo o especie, se brinda apoyo a personas de la tercera edad de escasos recursos, contando también con patrocinadores que respalden el programa de forma general.",
            en: "Through donations in cash or in kind, support is provided to low-income seniors, also counting on sponsors who support the program in general.",
        },
        {
            selector: "#seventh h2",
            es: "¡Haznos saber tu donativo!",
            en: "Let us know your donation!",
        },
        {
            selector: "#seventh p:nth-of-type(1)",
            es: "Tu generosidad cambia vidas. Con tu donativo, llevamos cuidado, amor y esperanza a los adultos mayores que más lo necesitan. Únete a nuestra misión y sé parte de esta transformación.",
            en: "Your generosity changes lives. With your donation, we bring care, love and hope to older adults who need it most. Join our mission and be part of this transformation.",
        },
        {
            selector: "#seventh p:nth-of-type(2)",
            es: "¡GRACIAS POR HACER LA DIFERENCIA!",
            en: "THANK YOU FOR MAKING A DIFFERENCE!",
        },
        {
            selector: "#seventh a",
            es: "Donar con PayPal",
            en: "Donate with PayPal",
        },
        {
            selector: "footer",
            es: "2025 ASOCCAM Guatemala. Todos los derechos reservados.",
            en: "2025 ASOCCAM Guatemala. All rights reserved.",
        },
    ];

    // Cambia los textos de acuerdo al idioma actual
    textContent.forEach(item => {
        const element = document.querySelector(item.selector);
        if (!element.getAttribute("data-es")) {
            // Guarda el texto original en español en un atributo personalizado
            element.setAttribute("data-es", item.es);
        }
        element.textContent = isEnglish ? element.getAttribute("data-es") : item.en;
    });

    // Cambia el texto del botón
    button.textContent = isEnglish ? "English" : "Español";
});
