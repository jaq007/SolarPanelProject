document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LANGUAGE SELECTOR
       ES / EN
    ====================================================== */

    const languageButtons = document.querySelectorAll(".language-button");

    let currentLanguage = "es";

    const translations = {

        /* =================================================
           ESPAÑOL
        ================================================= */

        es: {

            /* NAVIGATION */

            "nav.how": "¿Cómo funciona?",
            "nav.panels": "Paneles Solares",
            "nav.projects": "Proyectos",
            "nav.maintenance": "Mantenimiento",
            "nav.operations": "¿Cómo operamos?",
            "nav.about": "¿Quiénes somos?",
            "nav.alliances": "Alianzas y Certificaciones",
            "nav.connect": "Solaris Connect",

            /* META */

            "meta.description":
                "Solaris Energy - Soluciones solares inteligentes para hogares y PyMEs.",

            /* HERO */

            "hero.eyebrow": "SOLUCIONES SOLARES INTELIGENTES",
            "hero.title1": "Energía limpia",
            "hero.title2": "para un mejor mañana.",

            "hero.description":
                "Transformamos el consumo de energía de hogares y negocios mediante soluciones solares eficientes, accesibles y diseñadas para generar valor a largo plazo.",

            "hero.quote": "Cotiza tu proyecto",
            "hero.panels": "Conoce nuestros paneles",

            "hero.environment.title": "Beneficios ambientales",
            "hero.environment.carbon": "Menor huella de carbono",
            "hero.environment.emissions": "Menos emisiones",
            "hero.environment.protection": "Protección del entorno",

            "hero.savings.title": "Ahorro",
            "hero.savings.value": "Hasta 90%*",
            "hero.savings.description":
                "de ahorro potencial en consumo de energía de la red.",

            "hero.financing.title": "Financiamiento",
            "hero.financing.value": "12 a 36 meses",
            "hero.financing.description":
                "Planes flexibles para facilitar tu inversión solar.",

            /* HOW IT WORKS */

            "how.eyebrow": "DE LA INSTALACIÓN A TU RECIBO",
            "how.title": "¿Cómo funciona tu sistema solar?",

            "how.description":
                "Conoce de forma sencilla cómo Solaris Energy integra tu proyecto, cómo fluye la energía y qué ocurre bajo diferentes condiciones de operación.",

            /* CFE */

            "cfe.tag": "INTERCONEXIÓN CON CFE",

            "cfe.title":
                "Nosotros te acompañamos durante todo el proceso.",

            "cfe.description1":
                "Un sistema solar interconectado trabaja en conjunto con la red eléctrica. Por ello, el proyecto requiere integrar la información técnica correspondiente y realizar el proceso de interconexión aplicable.",

            "cfe.description2":
                "Solaris Energy prepara la información del proyecto, acompaña la gestión de interconexión y da seguimiento al proceso correspondiente ante CFE.",

            "cfe.note":
                "La autorización, modalidad de interconexión y equipo de medición aplicable dependen de las características del proyecto y del procedimiento correspondiente.",

            "cfe.step1.title": "Evaluamos tu consumo",
            "cfe.step1.description":
                "Analizamos tu consumo eléctrico y las características iniciales de la instalación.",

            "cfe.step2.title": "Diseñamos el sistema",
            "cfe.step2.description":
                "Determinamos capacidad, cantidad de paneles, inversor y componentes necesarios.",

            "cfe.step3.title": "Proceso de interconexión",
            "cfe.step3.description":
                "Integramos la información necesaria y acompañamos el procedimiento correspondiente ante CFE.",

            "cfe.step4.title": "Medición bidireccional",
            "cfe.step4.description":
                "Cuando corresponde al esquema autorizado, el sistema de medición registra la energía tomada de la red y la energía entregada.",

            "cfe.step5.title": "Sistema interconectado",
            "cfe.step5.description":
                "Tu instalación queda preparada para generar, consumir y, cuando corresponda, entregar energía excedente a la red.",

            /* ENERGY FLOW */

            "flow.eyebrow": "DEL SOL A TU HOGAR",
            "flow.title": "Así fluye la energía",

            "flow.description":
                "El sistema trabaja automáticamente para aprovechar primero la energía solar disponible y mantener tu propiedad conectada a la red eléctrica.",

            "flow.step1.title": "Luz solar",
            "flow.step1.description":
                "La radiación solar llega a los módulos fotovoltaicos.",

            "flow.step2.title": "Paneles solares",
            "flow.step2.description":
                "Los paneles convierten la energía solar en electricidad de corriente directa.",

            "flow.step3.title": "Inversor",
            "flow.step3.description":
                "Convierte la electricidad en corriente alterna utilizable por el inmueble.",

            "flow.step4.title": "Hogar o negocio",
            "flow.step4.description":
                "La energía solar alimenta las cargas eléctricas que se encuentran operando.",

            "flow.step5.title": "Red eléctrica",
            "flow.step5.description":
                "La red complementa el suministro o recibe excedentes según el esquema aplicable.",

            /* ENERGY SCENARIOS */

            "scenario.day.label": "DURANTE EL DÍA",
            "scenario.day.title": "Produces tu propia energía",

            "scenario.day.description":
                "Cuando existe suficiente radiación solar, los paneles producen electricidad que se utiliza directamente para cubrir parte o la totalidad del consumo de energía que requiere tu propiedad durante el día, reduciendo así la energía que necesitas obtener de la red eléctrica.",

            "scenario.day.flow": "SOL → PANELES → TU PROPIEDAD",

            "scenario.surplus.label": "CUANDO PRODUCES MÁS",
            "scenario.surplus.title": "¿Qué pasa con el excedente?",

            "scenario.surplus.description":
                "Cuando la generación solar supera tu consumo, la energía excedente puede entregarse a la red eléctrica conforme al esquema de interconexión aplicable a tu proyecto, aprovechando mejor la energía producida por el sistema.",

            "scenario.surplus.flow": "PANELES → EXCEDENTE → RED",

            "scenario.night.label": "DURANTE LA NOCHE",
            "scenario.night.title": "¿De dónde viene la energía?",

            "scenario.night.description":
                "Durante la noche los paneles solares dejan de generar electricidad. En un sistema interconectado convencional, la energía necesaria para mantener tu propiedad operando normalmente se obtiene directamente de la red eléctrica.",

            "scenario.night.flow": "RED → TU PROPIEDAD",

            /* CONDITIONS */

            "conditions.eyebrow": "OPERACIÓN REAL",

            "conditions.title":
                "¿Qué pasa cuando las condiciones no son perfectas?",

            "conditions.description":
                "La producción solar puede variar. La nubosidad, lluvia, suciedad, sombras y temperatura pueden modificar temporalmente el rendimiento del sistema.",

            "conditions.cloudy.title": "Días nublados",
            "conditions.cloudy.description":
                "Los paneles pueden continuar produciendo electricidad con radiación difusa, aunque normalmente a un nivel menor que durante un día despejado.",

            "conditions.rain.title": "Temporada de lluvia",
            "conditions.rain.description":
                "La lluvia y la nubosidad pueden reducir temporalmente la generación. La red continúa disponible para complementar la energía necesaria.",

            "conditions.dirty.title": "Paneles sucios",
            "conditions.dirty.description":
                "Polvo, tierra, hojas y otros residuos pueden reducir la radiación que llega a las celdas solares y afectar la generación.",

            "conditions.shade.title": "Sombras",
            "conditions.shade.description":
                "Árboles, edificios u objetos cercanos pueden producir sombras y reducir el rendimiento. Por ello analizamos la ubicación antes de diseñar el sistema.",

            "conditions.heat.title": "Temperaturas altas",
            "conditions.heat.description":
                "Los paneles necesitan radiación solar, pero temperaturas elevadas pueden reducir temporalmente su eficiencia eléctrica.",

            "conditions.maintenance.title": "Mantenimiento",
            "conditions.maintenance.description":
                "La inspección periódica, limpieza cuando sea necesaria y monitoreo ayudan a conservar el desempeño del sistema.",

            /* FAQ */

            "faq.eyebrow": "PREGUNTAS FRECUENTES",
            "faq.title": "Todo lo que necesitas saber",

            "faq.description":
                "Selecciona una pregunta para conocer la respuesta.",

            "faq.q1": "¿Solaris Energy realiza el trámite con CFE?",
            "faq.a1":
                "Solaris Energy acompaña la integración de la información necesaria y la gestión del proceso de interconexión. La aprobación y los procedimientos correspondientes dependen de CFE y de las características de cada proyecto.",

            "faq.q2": "¿Necesito cambiar mi medidor?",
            "faq.a2":
                "Un proyecto de generación distribuida interconectado requiere un esquema de medición compatible. El equipo correspondiente depende del tipo de servicio y del esquema autorizado.",

            "faq.q3": "¿Qué pasa con la energía que no consumo?",
            "faq.a3":
                "Cuando tu sistema genera más energía de la que consumes en ese momento, el excedente puede entregarse a la red. Su tratamiento depende del esquema de interconexión y contraprestación aplicable.",

            "faq.q4": "¿Los paneles generan energía durante la noche?",
            "faq.a4":
                "No. Los paneles fotovoltaicos requieren radiación solar. En un sistema interconectado convencional sin baterías, durante la noche la electricidad necesaria proviene de la red.",

            "faq.q5": "¿Funcionan cuando está nublado?",
            "faq.a5":
                "Sí. Los paneles pueden generar electricidad con radiación solar difusa, aunque normalmente producen menos energía que bajo condiciones de radiación directa.",

            "faq.q6": "¿Qué pasa durante varios días de lluvia?",
            "faq.a6":
                "La generación puede disminuir debido a la menor radiación disponible. Si el sistema no produce suficiente energía, la red eléctrica continúa suministrando la diferencia en una instalación interconectada.",

            "faq.q7": "¿Qué pasa si los paneles están sucios?",
            "faq.a7":
                "Una acumulación importante de polvo, tierra u otros residuos puede reducir la radiación que reciben las celdas y afectar la generación. Por eso conviene inspeccionar periódicamente el sistema.",

            "faq.q8":
                "¿Me quedaré sin electricidad si los paneles producen poco?",

            "faq.a8":
                "En una instalación convencional interconectada, la red complementa la energía que el sistema solar no pueda producir.",

            "faq.q9": "¿Los paneles necesitan mantenimiento?",
            "faq.a9":
                "Sí requieren inspecciones periódicas. Solaris Energy ofrece planes de mantenimiento para revisar paneles, conexiones y desempeño general del sistema.",

            "faq.q10":
                "¿Cómo puedo saber cuánto está generando mi sistema?",

            "faq.a10":
                "Solaris Connect está diseñado para mostrar indicadores de generación, consumo y rendimiento del sistema desde dispositivos móviles.",

            /* PANELS */

            "panels.eyebrow": "TECNOLOGÍA SOLAR",
            "panels.title": "Paneles para cada necesidad",

            "panels.description":
                "Seleccionamos soluciones de alto desempeño para proyectos residenciales y comerciales.",

            "panels.essential.label": "RESIDENCIAL",
            "panels.essential.description":
                "Una solución eficiente para hogares que desean comenzar su transición hacia la energía solar.",

            "panels.essential.item1": "Alta eficiencia energética",
            "panels.essential.item2": "Diseño residencial",
            "panels.essential.item3":
                "Excelente relación costo-beneficio",

            "panels.performance.label": "ALTO RENDIMIENTO",
            "panels.performance.description":
                "Nuestra configuración principal para proyectos que requieren mayor producción energética.",

            "panels.performance.item1": "Mayor generación por panel",
            "panels.performance.item2":
                "Ideal para residencias y PyMEs",
            "panels.performance.item3":
                "Optimización del espacio disponible",

            "panels.pro.label": "COMERCIAL",
            "panels.pro.description":
                "Diseñado para instalaciones de mayor capacidad y proyectos comerciales de alto consumo.",

            "panels.pro.item1": "Potencia superior",
            "panels.pro.item2": "Aplicaciones comerciales",
            "panels.pro.item3": "Alta densidad energética",

            "panels.quote": "Cotizar proyecto →",

            "common.recommended": "RECOMENDADO",

            /* PROJECTS */

            "projects.eyebrow": "SOLUCIONES A TU MEDIDA",
            "projects.title": "Proyectos solares",

            "projects.description":
                "Diseñamos soluciones de acuerdo con el consumo, características y objetivos de cada cliente.",

            "projects.home.label": "HOGARES",
            "projects.home.title": "Residencial",

            "projects.home.description":
                "Convierte tu hogar en un espacio energéticamente eficiente y reduce tu dependencia de la red.",

            "projects.home.item1": "Evaluación de consumo",
            "projects.home.item2": "Dimensionamiento personalizado",
            "projects.home.item3": "Instalación profesional",
            "projects.home.item4": "Monitoreo del sistema",
            "projects.home.quote": "Cotizar residencia →",

            "projects.business.label": "NEGOCIOS",
            "projects.business.title": "PyMEs",

            "projects.business.description":
                "Soluciones solares para pequeñas y medianas empresas que buscan controlar sus costos energéticos.",

            "projects.business.item1":
                "Análisis de consumo empresarial",
            "projects.business.item2": "Diseño escalable",
            "projects.business.item3":
                "Equipamiento de alto rendimiento",
            "projects.business.item4": "Soporte y mantenimiento",
            "projects.business.quote": "Cotizar negocio →",

            "projects.process1": "Analizamos",
            "projects.process2": "Diseñamos",
            "projects.process3": "Instalamos",
            "projects.process4": "Monitoreamos",

            /* OPERATIONS */

            "operations.title": "¿Cómo operamos?",

            "operations.description":
                "Nuestra cadena de suministro integra selección de tecnología, logística, ensamble e instalación para entregar una solución solar completa.",

            "operations.step1.title": "Selección",
            "operations.step1.description":
                "Evaluamos fabricantes y tecnologías.",

            "operations.step2.title": "Importación",
            "operations.step2.description":
                "Optimizamos rutas y costos logísticos.",

            "operations.step3.title": "Recepción",
            "operations.step3.description":
                "Verificamos componentes y calidad.",

            "operations.step4.title": "Integración",
            "operations.step4.description":
                "Preparamos la solución para cada proyecto.",

            "operations.step5.title": "Distribución",
            "operations.step5.description":
                "Coordinamos entrega al sitio del cliente.",

            "operations.step6.title": "Instalación",
            "operations.step6.description":
                "Implementamos y ponemos en operación el sistema.",

            "operations.model": "MODELO OPERATIVO",
            "operations.china": "Sourcing competitivo",

            "operations.northamerica.title": "Norteamérica",
            "operations.northamerica.description":
                "Alianzas estratégicas",

            "operations.mexico.title": "México",
            "operations.mexico.description":
                "Integración e instalación",

                    /* INTEGRATED 4PL LOGISTICS */

        "logistics.eyebrow": "LOGÍSTICA INTEGRADA",
        "logistics.title":
            "Una cadena de suministro conectada de principio a fin.",
        "logistics.description":
            "Nuestro modelo integra a Redwood Logistics como proveedor 4PL para coordinar proveedores, fabricación, transporte, almacenamiento y distribución dentro de una misma operación.",

        "logistics.detail.label": "ETAPA DE LA CADENA",
        "logistics.importance": "¿Por qué es importante?",

        "logistics.step1.title": "Proveedores",
        "logistics.step1.description":
            "Los proveedores proporcionan los materiales y componentes necesarios. Redwood coordina su movimiento y conecta la información de los proveedores con las necesidades de transporte y producción.",
        "logistics.step1.importance":
            "Ayuda a que los materiales lleguen cuando se necesitan, evitando retrasos y permitiendo que la producción avance.",

        "logistics.step2.title": "Fabricación",
        "logistics.step2.description":
            "Los paneles solares se fabrican y preparan para su distribución. Redwood conecta el estado de producción con las necesidades de transporte de la siguiente etapa.",
        "logistics.step2.importance":
            "Permite planificar el transporte estratégicamente con base en la producción real, en lugar de administrar fabricación y logística como procesos separados.",

        "logistics.step3.title": "Transporte",
        "logistics.step3.description":
            "La operación puede requerir diferentes transportistas, rutas y opciones de transporte. Redwood coordina estas alternativas dentro de un mismo sistema.",
        "logistics.step3.importance":
            "Permite tomar decisiones considerando costo, tiempo y confiabilidad, en lugar de depender de un solo transportista para toda la operación.",

        "logistics.step4.title": "Almacenamiento",
        "logistics.step4.description":
            "Redwood conecta el almacenamiento con el transporte y la demanda. El inventario puede mantenerse cerca de Monterrey hasta que sea necesario.",
        "logistics.step4.importance":
            "Ayuda a tener paneles disponibles cuando se necesitan sin mover o almacenar inventario en exceso.",

        "logistics.step5.title": "Distribución en Monterrey",
        "logistics.step5.description":
            "Redwood coordina el movimiento del inventario hacia el mercado de Monterrey y hasta el punto final de instalación.",
        "logistics.step5.importance":
            "Una mejor coordinación permite entregas más confiables y contribuye a una mejor experiencia para el cliente.",

        "logistics.value.eyebrow": "EL VALOR DEL MODELO 4PL",
        "logistics.value.title":
            "Una operación conectada, no procesos aislados.",
        "logistics.value.description":
            "Redwood conecta proveedores, fabricación, transporte, almacenamiento y distribución dentro de un mismo sistema, administrando la cadena de suministro como una operación conectada.",

        "logistics.value.visibility": "Mayor visibilidad",
        "logistics.value.visibility.description":
            "Información de toda la cadena de suministro.",

        "logistics.value.coordination": "Mejor coordinación",
        "logistics.value.coordination.description":
            "Los participantes y procesos trabajan de forma conectada.",

        "logistics.value.costs": "Menores costos innecesarios",
        "logistics.value.costs.description":
            "Mejores decisiones ayudan a evitar costos logísticos innecesarios.",

        "logistics.value.delivery": "Entregas más confiables",
        "logistics.value.delivery.description":
            "La coordinación permite identificar problemas antes de que afecten la entrega.",
                /* MAINTENANCE */

            "maintenance.eyebrow": "PROTEGE TU INVERSIÓN",
            "maintenance.title": "Pólizas de mantenimiento",

            "maintenance.description":
                "Mantén tu sistema solar operando de manera eficiente mediante planes preventivos y de seguimiento.",

            "maintenance.validity": "VIGENCIA",
            "maintenance.frequency": "FRECUENCIA",

            "maintenance.care.label": "PLAN ESENCIAL",
            "maintenance.care.description":
                "Mantenimiento preventivo para conservar el desempeño de tu sistema.",

            "maintenance.care.validity": "6 meses",
            "maintenance.care.frequency": "1 servicio preventivo",

            "maintenance.care.item1": "Inspección general",
            "maintenance.care.item2": "Revisión visual de paneles",
            "maintenance.care.item3": "Verificación de conexiones",
            "maintenance.care.item4": "Reporte de servicio",
            "maintenance.care.item5": "Atención inmediata",

            "maintenance.plus.label": "PLAN PLUS",
            "maintenance.plus.description":
                "Mayor seguimiento para sistemas residenciales y comerciales.",

            "maintenance.plus.validity": "12 meses",
            "maintenance.plus.frequency": "Cada 6 meses",

            "maintenance.plus.item1":
                "2 servicios programados al año",
            "maintenance.plus.item2":
                "Todo lo incluido en Solaris Care",
            "maintenance.plus.item3": "Evaluación de generación",
            "maintenance.plus.item4":
                "Seguimiento de desempeño",
            "maintenance.plus.item5": "Atención prioritaria",

            "maintenance.business.label": "PLAN EMPRESARIAL",
            "maintenance.business.description":
                "Seguimiento orientado a sistemas comerciales y proyectos de mayor capacidad.",

            "maintenance.business.validity": "12 meses",
            "maintenance.business.frequency": "Cada 3 meses",

            "maintenance.business.item1":
                "4 servicios programados al año",
            "maintenance.business.item2": "Programa preventivo",
            "maintenance.business.item3":
                "Evaluación de rendimiento",
            "maintenance.business.item4":
                "Reportes de seguimiento",
            "maintenance.business.item5": "Soporte especializado",

            "maintenance.info": "Solicitar información",

            /* QUOTE */

            "quote.eyebrow": "COTIZADOR SOLAR",
            "quote.title": "Descubre el sistema ideal para ti.",

            "quote.description":
                "Ingresa tu consumo de energía y selecciona el tipo de proyecto. Nuestro simulador realizará una estimación inicial del sistema recomendado.",

            "quote.step1.title": "Ingresa tu consumo",
            "quote.step1.description":
                "Utiliza el consumo en kWh de tu recibo.",

            "quote.step2.title": "Selecciona tu proyecto",
            "quote.step2.description": "Residencial o PyME.",

            "quote.step3.title": "Obtén tu estimación",
            "quote.step3.description":
                "Paneles, capacidad, generación y costo.",

            "quote.simulation": "SIMULACIÓN",
            "quote.calculate.title": "Calcula tu proyecto",

            "quote.calculate.description":
                "Completa la información para generar una recomendación preliminar.",

            "quote.consumption": "Consumo bimestral",
            "quote.placeholder": "Ej. 1200",

            "quote.consumption.help":
                "Ingresa los kWh consumidos durante un periodo aproximado de dos meses.",

            "quote.projectType": "Tipo de proyecto",

            "quote.residential": "Residencial",
            "quote.residential.description": "Casa habitación",

            "quote.business": "Negocio / PyME",
            "quote.business.description": "Uso comercial",

            "quote.rate": "Tarifa eléctrica",

            "quote.calculate.button": "Calcular proyecto solar",

            "quote.disclaimer":
                "Esta herramienta proporciona únicamente una estimación preliminar. La propuesta final requiere una evaluación técnica.",

            "quote.processing.title": "Procesando tu proyecto...",

            "quote.processing.description":
                "Analizando consumo, capacidad y generación estimada.",

            "quote.recalculate": "↻ Realizar otra cotización",

            /* RESULTS */

            "results.eyebrow": "RECOMENDACIÓN PRELIMINAR",
            "results.title": "Tu proyecto Solaris",

            "results.panels": "PANELES",
            "results.capacity": "CAPACIDAD",
            "results.capacity.description": "Capacidad instalada",

            "results.investment": "INVERSIÓN",
            "results.investment.description":
                "Estimación del proyecto",

            "results.annualConsumption": "CONSUMO ANUAL",
            "results.annualGeneration": "GENERACIÓN ANUAL",
            "results.estimatedKwh": "kWh estimados",

            "results.coverage": "COBERTURA",
            "results.coverage.description":
                "del consumo estimado",

            "results.residential":
                "Estimación preliminar para tu proyecto residencial.",

            "results.business":
                "Estimación preliminar para tu proyecto comercial.",

            /* FINANCING */

            "financing.eyebrow": "FINANCIAMIENTO",
            "financing.title": "Planes de pago",

            "financing.description":
                "Ejemplo ilustrativo basado en el costo estimado del proyecto.",

            "financing.months": "meses",
            "financing.monthly": "Pago mensual estimado",
            "financing.capital": "Capital ilustrativo",
            "financing.popular": "POPULAR",

            "financing.notice":
                "Los pagos mostrados corresponden únicamente a una división ilustrativa del capital estimado. No incluyen intereses, comisiones, seguros ni otros costos financieros y no constituyen una oferta de crédito.",

            /* ABOUT */

            "about.title":
                "Energía inteligente con ejecución local.",

            "about.description1":
                "Solaris Energy nace con el objetivo de facilitar el acceso a tecnologías solares para hogares y pequeñas y medianas empresas.",

            "about.description2":
                "Nuestro modelo combina tecnología, planeación, logística y servicio para ofrecer una experiencia integral desde la evaluación inicial hasta el seguimiento del sistema.",

            "about.sustainability": "Sustentabilidad",
            "about.sustainability.description":
                "Promovemos el uso responsable de energía.",

            "about.technology": "Tecnología",
            "about.technology.description":
                "Integramos soluciones modernas y eficientes.",

            "about.service": "Servicio",
            "about.service.description":
                "Acompañamos al cliente durante el proyecto.",

            /* LOCATION */

            "location.eyebrow": "NUESTRA UBICACIÓN",

            "location.description":
                "Operación enfocada inicialmente en el norte de México.",

            "location.region": "REGIÓN",
            "location.northMexico": "Norte de México",
            "location.base": "BASE",

            /* ALLIANCES */

            "alliances.eyebrow": "ECOSISTEMA SOLAR",
            "alliances.title": "Alianzas y Certificaciones",

            "alliances.description":
                "Trabajamos con tecnología de marcas reconocidas y fortalecemos nuestro modelo mediante asociaciones y certificaciones relevantes para el sector.",

            "alliances.technology": "TECNOLOGÍA",
            "alliances.brands": "Marcas con las que trabajamos",

            "alliances.collaboration": "COLABORACIÓN",
            "alliances.associations": "Asociaciones",

            "alliances.standards": "ESTÁNDARES",
            "alliances.certifications": "Certificaciones",

            /* CONNECT */

            "connect.eyebrow": "TU ENERGÍA EN TUS MANOS",

            "connect.description":
                "Monitorea la generación de tu sistema solar y conoce tu consumo energético desde una experiencia diseñada para dispositivos móviles.",

            "connect.generation": "Generación en tiempo real",
            "connect.generation.description":
                "Visualiza el desempeño de tu sistema solar.",

            "connect.consumption": "Monitoreo de consumo",
            "connect.consumption.description":
                "Comprende cómo utilizas la energía.",

            "connect.performance": "Rendimiento",
            "connect.performance.description":
                "Consulta indicadores del sistema.",

            "connect.alerts": "Alertas",
            "connect.alerts.description":
                "Mantente informado sobre tu instalación.",

            "connect.status": "Sistema conectado",
            "connect.currentGeneration": "GENERACIÓN ACTUAL",
            "connect.todayGeneration": "Generación hoy",
            "connect.todayConsumption": "Consumo hoy",
            "connect.systemPerformance": "Rendimiento del sistema",
            "connect.available": "DISPONIBLE PARA",

            "connect.monitoring": "Monitoreo de tu sistema",
            "connect.mobileAccess":
                "Acceso desde dispositivos móviles",
            "connect.decisions":
                "Información para mejores decisiones",

            /* ACADEMIC */

            "academic.title": "PROYECTO ACADÉMICO",
            "academic.students": "ALUMNOS PARTICIPANTES",
            "academic.professor": "PROFESORA",
            "academic.course": "MATERIA",
            "academic.institutions": "INSTITUCIONES PARTICIPANTES",

            /* FOOTER */

            "footer.slogan": "Energía hoy. Un mejor mañana.",
            "footer.academic": "Proyecto académico 2026",

            /* FLOATING */

            "floating.quote": "Cotizar",
            "floating.home": "Inicio",

            /* CHAT */

            "chat.online": "En línea",
            "chat.hello": "¡Hola!",

            "chat.intro":
                "Soy el asistente virtual de Solaris Energy. Puedo ayudarte con información sobre nuestros sistemas solares.",

            "chat.select":
                "Selecciona una de las preguntas disponibles.",

            "chat.questionTitle": "¿QUÉ TE GUSTARÍA SABER?",
            "chat.reset": "↻ Reiniciar conversación",

            "chat.disclaimer":
                "Solaris Assistant · Simulación informativa"
        },

        /* =================================================
           ENGLISH
        ================================================= */

        en: {

            /* NAVIGATION */

            "nav.how": "How does it work?",
            "nav.panels": "Solar Panels",
            "nav.projects": "Projects",
            "nav.maintenance": "Maintenance",
            "nav.operations": "How do we operate?",
            "nav.about": "About Us",
            "nav.alliances": "Alliances & Certifications",
            "nav.connect": "Solaris Connect",

            /* META */

            "meta.description":
                "Solaris Energy - Smart solar solutions for homes and small and medium-sized businesses.",

            /* HERO */

            "hero.eyebrow": "SMART SOLAR SOLUTIONS",
            "hero.title1": "Clean energy",
            "hero.title2": "for a better tomorrow.",

            "hero.description":
                "We transform energy consumption for homes and businesses through efficient, accessible solar solutions designed to create long-term value.",

            "hero.quote": "Get a project estimate",
            "hero.panels": "Explore our solar panels",

            "hero.environment.title": "Environmental benefits",
            "hero.environment.carbon": "Lower carbon footprint",
            "hero.environment.emissions": "Fewer emissions",
            "hero.environment.protection":
                "Environmental protection",

            "hero.savings.title": "Savings",
            "hero.savings.value": "Up to 90%*",
            "hero.savings.description":
                "potential savings on electricity drawn from the grid.",

            "hero.financing.title": "Financing",
            "hero.financing.value": "12 to 36 months",
            "hero.financing.description":
                "Flexible plans designed to make your solar investment more accessible.",

            /* HOW */

            "how.eyebrow": "FROM INSTALLATION TO YOUR ELECTRIC BILL",
            "how.title": "How does your solar system work?",

            "how.description":
                "Learn how Solaris Energy integrates your project, how energy flows through the system, and what happens under different operating conditions.",

            /* CFE */

            "cfe.tag": "CFE INTERCONNECTION",

            "cfe.title":
                "We support you throughout the entire process.",

            "cfe.description1":
                "A grid-connected solar system operates together with the electrical grid. Therefore, the project requires the appropriate technical information and the applicable interconnection process.",

            "cfe.description2":
                "Solaris Energy prepares the project information, supports the interconnection process, and follows up on the corresponding procedure with CFE.",

            "cfe.note":
                "Authorization, the applicable interconnection arrangement, and metering equipment depend on the characteristics of the project and the corresponding procedure.",

            "cfe.step1.title": "We evaluate your consumption",
            "cfe.step1.description":
                "We analyze your electricity consumption and the initial characteristics of the installation.",

            "cfe.step2.title": "We design the system",
            "cfe.step2.description":
                "We determine system capacity, number of panels, inverter, and required components.",

            "cfe.step3.title": "Interconnection process",
            "cfe.step3.description":
                "We compile the required information and support the corresponding CFE interconnection process.",

            "cfe.step4.title": "Bidirectional metering",
            "cfe.step4.description":
                "When applicable under the authorized arrangement, the metering system records both electricity drawn from the grid and electricity delivered to it.",

            "cfe.step5.title": "Grid-connected system",
            "cfe.step5.description":
                "Your installation is prepared to generate and consume electricity and, when applicable, deliver surplus energy to the grid.",

            /* FLOW */

            "flow.eyebrow": "FROM THE SUN TO YOUR PROPERTY",
            "flow.title": "How energy flows",

            "flow.description":
                "The system operates automatically to use available solar energy first while keeping your property connected to the electrical grid.",

            "flow.step1.title": "Sunlight",
            "flow.step1.description":
                "Solar radiation reaches the photovoltaic modules.",

            "flow.step2.title": "Solar panels",
            "flow.step2.description":
                "The panels convert solar energy into direct-current electricity.",

            "flow.step3.title": "Inverter",
            "flow.step3.description":
                "It converts electricity into alternating current that can be used by the property.",

            "flow.step4.title": "Home or business",
            "flow.step4.description":
                "Solar energy supplies the electrical loads currently operating on the property.",

            "flow.step5.title": "Electrical grid",
            "flow.step5.description":
                "The grid supplements the electricity supply or receives surplus energy according to the applicable arrangement.",

            /* SCENARIOS */

            "scenario.day.label": "DURING THE DAY",
            "scenario.day.title": "You generate your own energy",

            "scenario.day.description":
                "When sufficient solar radiation is available, the panels generate electricity that is used directly to cover part or all of your property's daytime energy consumption, reducing the amount of electricity you need from the grid.",

            "scenario.day.flow":
                "SUN → PANELS → YOUR PROPERTY",

            "scenario.surplus.label": "WHEN YOU GENERATE MORE",
            "scenario.surplus.title":
                "What happens to surplus energy?",

            "scenario.surplus.description":
                "When solar generation exceeds your consumption, surplus energy may be delivered to the electrical grid according to the interconnection arrangement applicable to your project, making better use of the energy generated by the system.",

            "scenario.surplus.flow":
                "PANELS → SURPLUS → GRID",

            "scenario.night.label": "DURING THE NIGHT",
            "scenario.night.title":
                "Where does the electricity come from?",

            "scenario.night.description":
                "At night, solar panels stop generating electricity. In a conventional grid-connected system, the electricity required to keep your property operating normally is supplied directly by the electrical grid.",

            "scenario.night.flow":
                "GRID → YOUR PROPERTY",

            /* CONDITIONS */

            "conditions.eyebrow": "REAL-WORLD OPERATION",

            "conditions.title":
                "What happens when conditions are not perfect?",

            "conditions.description":
                "Solar production can vary. Clouds, rain, dirt, shade, and temperature can temporarily affect system performance.",

            "conditions.cloudy.title": "Cloudy days",
            "conditions.cloudy.description":
                "Solar panels can continue generating electricity from diffuse solar radiation, although usually at a lower level than on a clear day.",

            "conditions.rain.title": "Rainy season",
            "conditions.rain.description":
                "Rain and cloud cover may temporarily reduce generation. The electrical grid remains available to supplement the required electricity.",

            "conditions.dirty.title": "Dirty panels",
            "conditions.dirty.description":
                "Dust, dirt, leaves, and other debris can reduce the solar radiation reaching the cells and affect electricity generation.",

            "conditions.shade.title": "Shade",
            "conditions.shade.description":
                "Trees, buildings, and nearby objects can cast shadows and reduce performance. This is why we evaluate the location before designing the system.",

            "conditions.heat.title": "High temperatures",
            "conditions.heat.description":
                "Solar panels require solar radiation, but high temperatures can temporarily reduce their electrical efficiency.",

            "conditions.maintenance.title": "Maintenance",
            "conditions.maintenance.description":
                "Periodic inspections, cleaning when required, and monitoring help maintain system performance.",

            /* FAQ */

            "faq.eyebrow": "FREQUENTLY ASKED QUESTIONS",
            "faq.title": "Everything you need to know",

            "faq.description":
                "Select a question to view the answer.",

            "faq.q1":
                "Does Solaris Energy handle the CFE interconnection process?",

            "faq.a1":
                "Solaris Energy supports the preparation of the required information and management of the interconnection process. Approval and the corresponding procedures depend on CFE and the characteristics of each project.",

            "faq.q2": "Do I need to replace my meter?",
            "faq.a2":
                "A grid-connected distributed generation project requires a compatible metering arrangement. The corresponding equipment depends on the type of service and the authorized arrangement.",

            "faq.q3":
                "What happens to the energy I do not consume?",

            "faq.a3":
                "When your system generates more energy than you are consuming at that moment, the surplus may be delivered to the grid. Its treatment depends on the applicable interconnection and compensation arrangement.",

            "faq.q4":
                "Do solar panels generate electricity at night?",

            "faq.a4":
                "No. Photovoltaic panels require solar radiation. In a conventional grid-connected system without batteries, the electricity needed at night comes from the grid.",

            "faq.q5": "Do solar panels work on cloudy days?",

            "faq.a5":
                "Yes. Solar panels can generate electricity from diffuse solar radiation, although they typically produce less energy than under direct solar radiation.",

            "faq.q6":
                "What happens during several days of rain?",

            "faq.a6":
                "Generation may decrease because less solar radiation is available. If the system does not generate enough electricity, the electrical grid continues supplying the difference in a grid-connected installation.",

            "faq.q7":
                "What happens if the solar panels are dirty?",

            "faq.a7":
                "A significant accumulation of dust, dirt, or other debris can reduce the radiation reaching the solar cells and affect generation. This is why periodic system inspections are recommended.",

            "faq.q8":
                "Will I lose power if the panels generate too little?",

            "faq.a8":
                "In a conventional grid-connected installation, the electrical grid supplements the electricity that the solar system cannot generate.",

            "faq.q9": "Do solar panels require maintenance?",

            "faq.a9":
                "Yes. Periodic inspections are recommended. Solaris Energy offers maintenance plans to inspect panels, connections, and overall system performance.",

            "faq.q10":
                "How can I see how much energy my system is generating?",

            "faq.a10":
                "Solaris Connect is designed to display generation, consumption, and system performance indicators on mobile devices.",

            /* PANELS */

            "panels.eyebrow": "SOLAR TECHNOLOGY",
            "panels.title": "Solar panels for every need",

            "panels.description":
                "We select high-performance solutions for residential and commercial projects.",

            "panels.essential.label": "RESIDENTIAL",
            "panels.essential.description":
                "An efficient solution for homeowners who want to begin their transition to solar energy.",

            "panels.essential.item1": "High energy efficiency",
            "panels.essential.item2": "Residential design",
            "panels.essential.item3":
                "Excellent cost-to-benefit ratio",

            "panels.performance.label": "HIGH PERFORMANCE",
            "panels.performance.description":
                "Our primary configuration for projects requiring greater energy production.",

            "panels.performance.item1":
                "Higher generation per panel",
            "panels.performance.item2":
                "Ideal for homes and small businesses",
            "panels.performance.item3":
                "Optimized use of available space",

            "panels.pro.label": "COMMERCIAL",
            "panels.pro.description":
                "Designed for higher-capacity installations and high-consumption commercial projects.",

            "panels.pro.item1": "Higher power output",
            "panels.pro.item2": "Commercial applications",
            "panels.pro.item3": "High energy density",

            "panels.quote": "Get a project estimate →",

            "common.recommended": "RECOMMENDED",

            /* PROJECTS */

            "projects.eyebrow": "SOLUTIONS TAILORED TO YOU",
            "projects.title": "Solar projects",

            "projects.description":
                "We design solutions according to each customer's consumption, property characteristics, and objectives.",

            "projects.home.label": "HOMES",
            "projects.home.title": "Residential",

            "projects.home.description":
                "Turn your home into a more energy-efficient property and reduce your dependence on the electrical grid.",

            "projects.home.item1": "Consumption assessment",
            "projects.home.item2": "Customized system sizing",
            "projects.home.item3": "Professional installation",
            "projects.home.item4": "System monitoring",
            "projects.home.quote": "Get a residential estimate →",

            "projects.business.label": "BUSINESSES",
            "projects.business.title": "SMEs",

            "projects.business.description":
                "Solar solutions for small and medium-sized businesses seeking greater control over their energy costs.",

            "projects.business.item1":
                "Business consumption analysis",
            "projects.business.item2": "Scalable design",
            "projects.business.item3":
                "High-performance equipment",
            "projects.business.item4":
                "Support and maintenance",
            "projects.business.quote":
                "Get a business estimate →",

            "projects.process1": "Analyze",
            "projects.process2": "Design",
            "projects.process3": "Install",
            "projects.process4": "Monitor",

            /* OPERATIONS */

            "operations.title": "How do we operate?",

            "operations.description":
                "Our supply chain integrates technology selection, logistics, assembly, and installation to deliver a complete solar solution.",

            "operations.step1.title": "Selection",
            "operations.step1.description":
                "We evaluate manufacturers and technologies.",

            "operations.step2.title": "Import",
            "operations.step2.description":
                "We optimize logistics routes and costs.",

            "operations.step3.title": "Receiving",
            "operations.step3.description":
                "We verify components and quality.",

            "operations.step4.title": "Integration",
            "operations.step4.description":
                "We prepare the solution for each project.",

            "operations.step5.title": "Distribution",
            "operations.step5.description":
                "We coordinate delivery to the customer's site.",

            "operations.step6.title": "Installation",
            "operations.step6.description":
                "We implement and commission the system.",

            "operations.model": "OPERATING MODEL",
            "operations.china": "Competitive sourcing",

            "operations.northamerica.title": "North America",
            "operations.northamerica.description":
                "Strategic partnerships",

            "operations.mexico.title": "Mexico",
            "operations.mexico.description":
                "Integration and installation",

                    /* INTEGRATED 4PL LOGISTICS */

        "logistics.eyebrow": "INTEGRATED LOGISTICS",
        "logistics.title":
            "A connected supply chain from end to end.",
        "logistics.description":
            "Our model integrates Redwood Logistics as a 4PL provider to coordinate suppliers, manufacturing, transportation, warehousing, and distribution within a single operation.",

        "logistics.detail.label": "SUPPLY CHAIN STAGE",
        "logistics.importance": "Why is it important?",

        "logistics.step1.title": "Suppliers",
        "logistics.step1.description":
            "Suppliers provide the materials and components required for the operation. Redwood coordinates their movement and connects supplier information with transportation and production needs.",
        "logistics.step1.importance":
            "It helps ensure materials arrive when needed, preventing delays and allowing production to continue.",

        "logistics.step2.title": "Manufacturing",
        "logistics.step2.description":
            "Solar panels are manufactured and prepared for distribution. Redwood connects production status with the transportation requirements of the next stage.",
        "logistics.step2.importance":
            "It allows transportation to be planned strategically based on actual production instead of managing manufacturing and logistics as separate processes.",

        "logistics.step3.title": "Transportation",
        "logistics.step3.description":
            "The operation may require different carriers, routes, and transportation options. Redwood coordinates these alternatives within a single system.",
        "logistics.step3.importance":
            "It enables decisions based on cost, time, and reliability instead of relying on a single carrier for the entire operation.",

        "logistics.step4.title": "Warehousing",
        "logistics.step4.description":
            "Redwood connects warehousing with transportation and demand. Inventory can be stored near Monterrey until it is needed.",
        "logistics.step4.importance":
            "It helps keep panels available when needed without moving or storing excess inventory.",

        "logistics.step5.title": "Distribution in Monterrey",
        "logistics.step5.description":
            "Redwood coordinates the movement of inventory to the Monterrey market and ultimately to the final installation point.",
        "logistics.step5.importance":
            "Better coordination enables more reliable deliveries and contributes to a better customer experience.",

        "logistics.value.eyebrow": "THE VALUE OF THE 4PL MODEL",
        "logistics.value.title":
            "One connected operation, not isolated processes.",
        "logistics.value.description":
            "Redwood connects suppliers, manufacturing, transportation, warehousing, and distribution within a single system, managing the supply chain as one connected operation.",

        "logistics.value.visibility": "Greater visibility",
        "logistics.value.visibility.description":
            "Information across the entire supply chain.",

        "logistics.value.coordination": "Better coordination",
        "logistics.value.coordination.description":
            "Participants and processes work together as a connected operation.",

        "logistics.value.costs": "Lower unnecessary costs",
        "logistics.value.costs.description":
            "Better decisions help avoid unnecessary logistics costs.",

        "logistics.value.delivery": "More reliable deliveries",
        "logistics.value.delivery.description":
            "Coordination helps identify problems before they affect delivery.",
                /* MAINTENANCE */

            "maintenance.eyebrow": "PROTECT YOUR INVESTMENT",
            "maintenance.title": "Maintenance plans",

            "maintenance.description":
                "Keep your solar system operating efficiently through preventive maintenance and monitoring plans.",

            "maintenance.validity": "TERM",
            "maintenance.frequency": "FREQUENCY",

            "maintenance.care.label": "ESSENTIAL PLAN",
            "maintenance.care.description":
                "Preventive maintenance designed to preserve your system's performance.",

            "maintenance.care.validity": "6 months",
            "maintenance.care.frequency":
                "1 preventive service",

            "maintenance.care.item1": "General inspection",
            "maintenance.care.item2":
                "Visual inspection of solar panels",
            "maintenance.care.item3":
                "Connection verification",
            "maintenance.care.item4": "Service report",
            "maintenance.care.item5": "Immediate assistance",

            "maintenance.plus.label": "PLUS PLAN",
            "maintenance.plus.description":
                "Enhanced monitoring for residential and commercial systems.",

            "maintenance.plus.validity": "12 months",
            "maintenance.plus.frequency": "Every 6 months",

            "maintenance.plus.item1":
                "2 scheduled services per year",
            "maintenance.plus.item2":
                "Everything included in Solaris Care",
            "maintenance.plus.item3":
                "Generation assessment",
            "maintenance.plus.item4":
                "Performance monitoring",
            "maintenance.plus.item5": "Priority assistance",

            "maintenance.business.label": "BUSINESS PLAN",
            "maintenance.business.description":
                "Monitoring designed for commercial systems and higher-capacity projects.",

            "maintenance.business.validity": "12 months",
            "maintenance.business.frequency":
                "Every 3 months",

            "maintenance.business.item1":
                "4 scheduled services per year",
            "maintenance.business.item2":
                "Preventive maintenance program",
            "maintenance.business.item3":
                "Performance assessment",
            "maintenance.business.item4":
                "Monitoring reports",
            "maintenance.business.item5":
                "Specialized support",

            "maintenance.info": "Request information",

            /* QUOTE */

            "quote.eyebrow": "SOLAR ESTIMATOR",
            "quote.title": "Discover the right system for you.",

            "quote.description":
                "Enter your energy consumption and select your project type. Our simulator will provide an initial estimate of the recommended system.",

            "quote.step1.title": "Enter your consumption",
            "quote.step1.description":
                "Use the kWh consumption shown on your electricity bill.",

            "quote.step2.title": "Select your project",
            "quote.step2.description":
                "Residential or small business.",

            "quote.step3.title": "Get your estimate",
            "quote.step3.description":
                "Panels, capacity, generation, and cost.",

            "quote.simulation": "SIMULATION",
            "quote.calculate.title": "Calculate your project",

            "quote.calculate.description":
                "Complete the information to generate a preliminary recommendation.",

            "quote.consumption": "Two-month consumption",
            "quote.placeholder": "E.g. 1200",

            "quote.consumption.help":
                "Enter the kWh consumed during an approximate two-month period.",

            "quote.projectType": "Project type",

            "quote.residential": "Residential",
            "quote.residential.description": "Residential home",

            "quote.business": "Business / SME",
            "quote.business.description": "Commercial use",

            "quote.rate": "Electricity rate",

            "quote.calculate.button":
                "Calculate solar project",

            "quote.disclaimer":
                "This tool provides a preliminary estimate only. The final proposal requires a technical assessment.",

            "quote.processing.title":
                "Processing your project...",

            "quote.processing.description":
                "Analyzing consumption, capacity, and estimated generation.",

            "quote.recalculate":
                "↻ Start another estimate",

            /* RESULTS */

            "results.eyebrow": "PRELIMINARY RECOMMENDATION",
            "results.title": "Your Solaris project",

            "results.panels": "PANELS",
            "results.capacity": "CAPACITY",
            "results.capacity.description":
                "Installed capacity",

            "results.investment": "INVESTMENT",
            "results.investment.description":
                "Estimated project cost",

            "results.annualConsumption":
                "ANNUAL CONSUMPTION",

            "results.annualGeneration":
                "ANNUAL GENERATION",

            "results.estimatedKwh": "estimated kWh",

            "results.coverage": "COVERAGE",
            "results.coverage.description":
                "of estimated consumption",

            "results.residential":
                "Preliminary estimate for your residential project.",

            "results.business":
                "Preliminary estimate for your commercial project.",

            /* FINANCING */

            "financing.eyebrow": "FINANCING",
            "financing.title": "Payment plans",

            "financing.description":
                "Illustrative example based on the estimated project cost.",

            "financing.months": "months",
            "financing.monthly":
                "Estimated monthly payment",
            "financing.capital": "Illustrative principal",
            "financing.popular": "POPULAR",

            "financing.notice":
                "The payments shown represent only an illustrative division of the estimated principal. They do not include interest, fees, insurance, or other financing costs and do not constitute a credit offer.",

            /* ABOUT */

            "about.title":
                "Smart energy with local execution.",

            "about.description1":
                "Solaris Energy was created to make solar technology more accessible to homes and small and medium-sized businesses.",

            "about.description2":
                "Our model combines technology, planning, logistics, and service to provide an integrated experience from the initial assessment through ongoing system monitoring.",

            "about.sustainability": "Sustainability",
            "about.sustainability.description":
                "We promote responsible energy use.",

            "about.technology": "Technology",
            "about.technology.description":
                "We integrate modern and efficient solutions.",

            "about.service": "Service",
            "about.service.description":
                "We support our customers throughout the project.",

            /* LOCATION */

            "location.eyebrow": "OUR LOCATION",

            "location.description":
                "Operations initially focused on northern Mexico.",

            "location.region": "REGION",
            "location.northMexico": "Northern Mexico",
            "location.base": "BASE",

            /* ALLIANCES */

            "alliances.eyebrow": "SOLAR ECOSYSTEM",
            "alliances.title": "Alliances & Certifications",

            "alliances.description":
                "We work with technology from recognized brands and strengthen our business model through relevant industry associations and certifications.",

            "alliances.technology": "TECHNOLOGY",
            "alliances.brands": "Brands we work with",

            "alliances.collaboration": "COLLABORATION",
            "alliances.associations": "Associations",

            "alliances.standards": "STANDARDS",
            "alliances.certifications": "Certifications",

            /* CONNECT */

            "connect.eyebrow": "YOUR ENERGY IN YOUR HANDS",

            "connect.description":
                "Monitor your solar system's generation and understand your energy consumption through an experience designed for mobile devices.",

            "connect.generation":
                "Real-time generation",

            "connect.generation.description":
                "View your solar system's performance.",

            "connect.consumption":
                "Consumption monitoring",

            "connect.consumption.description":
                "Understand how you use energy.",

            "connect.performance": "Performance",

            "connect.performance.description":
                "View key system performance indicators.",

            "connect.alerts": "Alerts",

            "connect.alerts.description":
                "Stay informed about your installation.",

            "connect.status": "System connected",

            "connect.currentGeneration":
                "CURRENT GENERATION",

            "connect.todayGeneration":
                "Generation today",

            "connect.todayConsumption":
                "Consumption today",

            "connect.systemPerformance":
                "System performance",

            "connect.available": "AVAILABLE FOR",

            "connect.monitoring":
                "System monitoring",

            "connect.mobileAccess":
                "Access from mobile devices",

            "connect.decisions":
                "Information for better decisions",

            /* ACADEMIC */

            "academic.title": "ACADEMIC PROJECT",
            "academic.students": "PARTICIPATING STUDENTS",
            "academic.professor": "PROFESSOR",
            "academic.course": "COURSE",
            "academic.institutions":
                "PARTICIPATING INSTITUTIONS",

            /* FOOTER */

            "footer.slogan": "Energy today. A better tomorrow.",
            "footer.academic": "Academic project 2026",

            /* FLOATING */

            "floating.quote": "Estimate",
            "floating.home": "Home",

            /* CHAT */

            "chat.online": "Online",
            "chat.hello": "Hello!",

            "chat.intro":
                "I am Solaris Energy's virtual assistant. I can help you with information about our solar systems.",

            "chat.select":
                "Select one of the available questions.",

            "chat.questionTitle":
                "WHAT WOULD YOU LIKE TO KNOW?",

            "chat.reset": "↻ Restart conversation",

            "chat.disclaimer":
                "Solaris Assistant · Informational simulation"
        }
    };


    /* =====================================================
       TRANSLATION FUNCTIONS
    ====================================================== */

    function translateStaticContent(language) {

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key = element.dataset.i18n;
                const translatedText =
                    translations[language][key];

                if (translatedText !== undefined) {
                    element.textContent = translatedText;
                }

            });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                const translatedText =
                    translations[language][key];

                if (translatedText !== undefined) {
                    element.placeholder = translatedText;
                }

            });


        document
            .querySelectorAll("[data-i18n-content]")
            .forEach(element => {

                const key =
                    element.dataset.i18nContent;

                const translatedText =
                    translations[language][key];

                if (translatedText !== undefined) {
                    element.setAttribute(
                        "content",
                        translatedText
                    );
                }

            });

    }


   function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    document.documentElement.lang = language;

    languageButtons.forEach(button => {

        const buttonLanguage =
            button.dataset.language;

        const isActive =
            buttonLanguage === language;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
        );

    });

    translateStaticContent(language);

    rebuildRateOptions();

    renderChatbotQuestions();

    refreshChatbotLanguage();

    refreshCurrentResultsLanguage();

    const heroSloganImage =
        document.getElementById("heroSloganImage");

    if (heroSloganImage) {

        if (language === "en") {
            heroSloganImage.src = "images/sloganen.png";
            heroSloganImage.alt =
                "Energy today. A better tomorrow.";
        } else {
            heroSloganImage.src = "images/slogan.png";
            heroSloganImage.alt =
                "Energía hoy. Un mejor mañana.";
        }

    }
}


    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selectedLanguage =
                    button.dataset.language;

                if (!selectedLanguage) {
                    return;
                }

                setLanguage(selectedLanguage);

            }
        );

    });


    /* =====================================================
       FLOATING QUOTE BUTTON
    ====================================================== */

    const floatingQuote =
        document.querySelector(".floating-quote");

    if (floatingQuote) {

        floatingQuote.addEventListener(
            "click",
            event => {

                const quoteSection =
                    document.querySelector("#cotizar");

                if (!quoteSection) {
                    return;
                }

                event.preventDefault();

                quoteSection.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       BACK TO HOME
    ====================================================== */

    const backToHome =
        document.getElementById("backToHome");

    if (backToHome) {

        function updateBackToHomeVisibility() {

            backToHome.classList.toggle(
                "visible",
                window.scrollY > 500
            );

        }

        window.addEventListener(
            "scroll",
            updateBackToHomeVisibility
        );

        updateBackToHomeVisibility();

        backToHome.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CFE RATES
    ====================================================== */

    const cfeRates = {

        residencial: {

            domestica: {

                es: {
                    name: "Tarifa doméstica",
                    description:
                        "Servicio residencial convencional. Consulta tu recibo CFE para confirmar la tarifa específica aplicable a tu domicilio."
                },

                en: {
                    name: "Residential rate",
                    description:
                        "Conventional residential electricity service. Check your CFE bill to confirm the specific rate applicable to your property."
                }

            },

            dac: {

                es: {
                    name: "Tarifa DAC",
                    description:
                        "Tarifa Doméstica de Alto Consumo. Los sistemas solares pueden ayudar a reducir la energía adquirida de la red."
                },

                en: {
                    name: "DAC rate",
                    description:
                        "High-Consumption Residential Rate. Solar systems can help reduce the amount of electricity purchased from the grid."
                }

            }

        },

        pyme: {

            pdbt: {

                es: {
                    name: "PDBT",
                    description:
                        "Pequeña Demanda en Baja Tensión. Puede aplicar a pequeños establecimientos con demanda eléctrica reducida."
                },

                en: {
                    name: "PDBT",
                    description:
                        "Small Demand in Low Voltage. It may apply to smaller commercial facilities with relatively low electricity demand."
                }

            },

            gdbt: {

                es: {
                    name: "GDBT",
                    description:
                        "Gran Demanda en Baja Tensión. Puede aplicar a negocios con mayor demanda eléctrica conectados en baja tensión."
                },

                en: {
                    name: "GDBT",
                    description:
                        "Large Demand in Low Voltage. It may apply to businesses with higher electricity demand connected at low voltage."
                }

            },

            gdmto: {

                es: {
                    name: "GDMTO",
                    description:
                        "Gran Demanda en Media Tensión Ordinaria. Consulta tu recibo para verificar si esta tarifa corresponde a tu servicio."
                },

                en: {
                    name: "GDMTO",
                    description:
                        "Large Demand in Ordinary Medium Voltage. Check your electricity bill to confirm whether this rate applies to your service."
                }

            },

            gdmth: {

                es: {
                    name: "GDMTH",
                    description:
                        "Gran Demanda en Media Tensión Horaria. Considera periodos horarios y características específicas de demanda."
                },

                en: {
                    name: "GDMTH",
                    description:
                        "Large Demand in Time-Based Medium Voltage. This rate considers time periods and specific demand characteristics."
                }

            },

            dist: {

                es: {
                    name: "DIST",
                    description:
                        "Tarifa asociada a determinados servicios de distribución. Requiere revisión del recibo y características del servicio."
                },

                en: {
                    name: "DIST",
                    description:
                        "Rate associated with certain distribution services. The electricity bill and service characteristics should be reviewed."
                }

            },

            dit: {

                es: {
                    name: "DIT",
                    description:
                        "Tarifa asociada a determinados servicios eléctricos de mayor capacidad. Confirma su aplicación directamente en tu recibo CFE."
                },

                en: {
                    name: "DIT",
                    description:
                        "Rate associated with certain higher-capacity electricity services. Confirm its application directly on your CFE bill."
                }

            }

        }

    };


    const projectTypeInputs =
        document.querySelectorAll(
            'input[name="projectType"]'
        );

    const cfeRate =
        document.getElementById("cfeRate");

    const rateName =
        document.getElementById("rateName");

    const rateDescription =
        document.getElementById("rateDescription");


    function getSelectedProjectType() {

        const selected =
            document.querySelector(
                'input[name="projectType"]:checked'
            );

        return selected
            ? selected.value
            : "residencial";

    }


    function updateRateDescription() {

        if (
            !cfeRate ||
            !rateName ||
            !rateDescription
        ) {
            return;
        }

        const projectType =
            getSelectedProjectType();

        const selectedRate =
            cfeRate.value;

        const rate =
            cfeRates[projectType]?.[selectedRate];

        if (!rate) {
            return;
        }

        rateName.textContent =
            rate[currentLanguage].name;

        rateDescription.textContent =
            rate[currentLanguage].description;

    }


    function rebuildRateOptions() {

        if (!cfeRate) {
            return;
        }

        const projectType =
            getSelectedProjectType();

        const previousValue =
            cfeRate.value;

        cfeRate.innerHTML = "";

        const availableRates =
            cfeRates[projectType];

        Object.entries(availableRates)
            .forEach(([value, rate]) => {

                const option =
                    document.createElement("option");

                option.value = value;

                option.textContent =
                    rate[currentLanguage].name;

                cfeRate.appendChild(option);

            });


        if (
            previousValue &&
            availableRates[previousValue]
        ) {

            cfeRate.value =
                previousValue;

        }

        updateRateDescription();

    }


    projectTypeInputs.forEach(input => {

        input.addEventListener(
            "change",
            rebuildRateOptions
        );

    });


    if (cfeRate) {

        cfeRate.addEventListener(
            "change",
            updateRateDescription
        );

    }


    /* =====================================================
       PROJECT PRESELECTION
    ====================================================== */

    document
        .querySelectorAll("[data-project]")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const project =
                        link.dataset.project;

                    const projectInput =
                        document.querySelector(
                            `input[name="projectType"][value="${project}"]`
                        );

                    if (projectInput) {

                        projectInput.checked = true;

                        rebuildRateOptions();

                    }

                }
            );

        });


    /* =====================================================
       SOLAR CALCULATOR
    ====================================================== */

    const solarQuoteForm =
        document.getElementById("solarQuoteForm");

    const energyConsumption =
        document.getElementById(
            "energyConsumption"
        );

    const quoteProcessing =
        document.getElementById(
            "quoteProcessing"
        );

    const quoteResults =
        document.getElementById(
            "quoteResults"
        );

    const resultDescription =
        document.getElementById(
            "resultDescription"
        );

    const resultPanels =
        document.getElementById(
            "resultPanels"
        );

    const resultCapacity =
        document.getElementById(
            "resultCapacity"
        );

    const resultInvestment =
        document.getElementById(
            "resultInvestment"
        );

    const resultAnnualConsumption =
        document.getElementById(
            "resultAnnualConsumption"
        );

    const resultAnnualGeneration =
        document.getElementById(
            "resultAnnualGeneration"
        );

    const resultCoverage =
        document.getElementById(
            "resultCoverage"
        );

    const payment12 =
        document.getElementById("payment12");

    const payment24 =
        document.getElementById("payment24");

    const payment36 =
        document.getElementById("payment36");

    const recalculateButton =
        document.getElementById(
            "recalculateButton"
        );


    const solarAssumptions = {

        panelPowerKw: 0.585,

        annualGenerationPerKwp: 1600,

        targetCoverage: 1.00,

        residentialCostPerKwp: 24000,

        businessCostPerKwp: 20000

    };


    let latestSolarResult = null;


    function getNumberFormatter() {

        return new Intl.NumberFormat(
            currentLanguage === "es"
                ? "es-MX"
                : "en-US",
            {
                maximumFractionDigits: 0
            }
        );

    }


    function getCurrencyFormatter() {

        return new Intl.NumberFormat(
            currentLanguage === "es"
                ? "es-MX"
                : "en-US",
            {
                style: "currency",
                currency: "MXN",
                maximumFractionDigits: 0
            }
        );

    }


    function calculateSolarProject(
        bimonthlyConsumption,
        projectType
    ) {

        const annualConsumption =
            bimonthlyConsumption * 6;

        const requiredGeneration =
            annualConsumption *
            solarAssumptions.targetCoverage;

        const requiredCapacity =
            requiredGeneration /
            solarAssumptions.annualGenerationPerKwp;

        const panels =
            Math.max(
                1,
                Math.ceil(
                    requiredCapacity /
                    solarAssumptions.panelPowerKw
                )
            );

        const installedCapacity =
            panels *
            solarAssumptions.panelPowerKw;

        const annualGeneration =
            installedCapacity *
            solarAssumptions.annualGenerationPerKwp;

        const coverage =
            Math.min(
                100,
                (
                    annualGeneration /
                    annualConsumption
                ) * 100
            );

        const costPerKwp =
            projectType === "pyme"
                ? solarAssumptions.businessCostPerKwp
                : solarAssumptions.residentialCostPerKwp;

        const investment =
            installedCapacity *
            costPerKwp;


        return {

            projectType,
            panels,
            installedCapacity,
            annualConsumption,
            annualGeneration,
            coverage,
            investment,

            payments: {
                12: investment / 12,
                24: investment / 24,
                36: investment / 36
            }

        };

    }


    function displaySolarResults(result) {

        if (!result) {
            return;
        }

        latestSolarResult = result;

        const numberFormatter =
            getNumberFormatter();

        const currencyFormatter =
            getCurrencyFormatter();


        if (resultDescription) {

            resultDescription.textContent =
                result.projectType === "pyme"
                    ? translations[currentLanguage][
                        "results.business"
                    ]
                    : translations[currentLanguage][
                        "results.residential"
                    ];

        }


        if (resultPanels) {

            resultPanels.textContent =
                result.panels;

        }


        if (resultCapacity) {

            resultCapacity.textContent =
                `${result.installedCapacity.toFixed(2)} kWp`;

        }


        if (resultInvestment) {

            resultInvestment.textContent =
                currencyFormatter.format(
                    result.investment
                );

        }


        if (resultAnnualConsumption) {

            resultAnnualConsumption.textContent =
                numberFormatter.format(
                    result.annualConsumption
                );

        }


        if (resultAnnualGeneration) {

            resultAnnualGeneration.textContent =
                numberFormatter.format(
                    result.annualGeneration
                );

        }


        if (resultCoverage) {

            resultCoverage.textContent =
                `${Math.round(result.coverage)}%`;

        }


        if (payment12) {

            payment12.textContent =
                currencyFormatter.format(
                    result.payments[12]
                );

        }


        if (payment24) {

            payment24.textContent =
                currencyFormatter.format(
                    result.payments[24]
                );

        }


        if (payment36) {

            payment36.textContent =
                currencyFormatter.format(
                    result.payments[36]
                );

        }

    }


    function refreshCurrentResultsLanguage() {

        if (latestSolarResult) {

            displaySolarResults(
                latestSolarResult
            );

        }

    }


    if (solarQuoteForm) {

        solarQuoteForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const consumption =
                    Number(
                        energyConsumption?.value
                    );

                if (
                    !Number.isFinite(consumption) ||
                    consumption <= 0
                ) {
                    return;
                }

                const projectType =
                    getSelectedProjectType();

                const result =
                    calculateSolarProject(
                        consumption,
                        projectType
                    );


                if (quoteResults) {
                    quoteResults.hidden = true;
                }

                if (quoteProcessing) {

                    quoteProcessing.hidden =
                        false;

                    quoteProcessing.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }


                window.setTimeout(
                    () => {

                        if (quoteProcessing) {
                            quoteProcessing.hidden =
                                true;
                        }

                        displaySolarResults(
                            result
                        );

                        if (quoteResults) {

                            quoteResults.hidden =
                                false;

                            quoteResults.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    },
                    900
                );

            }
        );

    }


    if (recalculateButton) {

        recalculateButton.addEventListener(
            "click",
            () => {

                latestSolarResult = null;

                if (quoteResults) {
                    quoteResults.hidden = true;
                }

                if (quoteProcessing) {
                    quoteProcessing.hidden = true;
                }

                if (solarQuoteForm) {
                    solarQuoteForm.reset();
                }

                const residentialInput =
                    document.querySelector(
                        'input[name="projectType"][value="residencial"]'
                    );

                if (residentialInput) {
                    residentialInput.checked = true;
                }

                rebuildRateOptions();

                if (energyConsumption) {
                    energyConsumption.value = "";
                }

                document
                    .querySelector("#cotizar")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            }
        );

    }


    /* =====================================================
       CHATBOT DATA
    ====================================================== */

    const chatbotData = {

        es: [

            {
                question:
                    "¿Cómo funciona un sistema solar?",

                answer:
                    "Los paneles captan la radiación solar y generan electricidad en corriente directa. El inversor la convierte en corriente alterna para que pueda utilizarse en tu hogar o negocio. En un sistema interconectado, la red eléctrica complementa la energía cuando es necesario."
            },

            {
                question:
                    "¿Solaris Energy realiza el trámite con CFE?",

                answer:
                    "Solaris Energy acompaña la preparación de la información necesaria y el proceso de interconexión. La autorización y los procedimientos correspondientes dependen de CFE y de las características de cada proyecto."
            },

            {
                question:
                    "¿Cuántos paneles necesito?",

                answer:
                    "La cantidad depende principalmente de tu consumo eléctrico, el espacio disponible y las características del proyecto. Puedes utilizar nuestro cotizador para obtener una estimación preliminar."
            },

            {
                question:
                    "¿Cuánto puedo ahorrar?",

                answer:
                    "El ahorro depende de tu consumo, tarifa eléctrica, capacidad instalada, condiciones de generación y hábitos de uso. Un sistema correctamente dimensionado puede reducir significativamente la energía que necesitas obtener de la red."
            },

            {
                question:
                    "¿Qué pasa cuando está nublado?",

                answer:
                    "Los paneles pueden seguir generando electricidad con radiación solar difusa, aunque normalmente producen menos energía que durante un día despejado."
            },

            {
                question:
                    "¿Qué pasa durante la noche?",

                answer:
                    "Los paneles no generan electricidad durante la noche. En un sistema interconectado convencional sin baterías, la energía necesaria se obtiene de la red eléctrica."
            },

            {
                question:
                    "¿Los paneles necesitan mantenimiento?",

                answer:
                    "Sí. Se recomiendan inspecciones periódicas, revisión de conexiones y limpieza cuando sea necesaria. Solaris Energy ofrece diferentes planes de mantenimiento."
            },

            {
                question:
                    "¿Qué es Solaris Connect?",

                answer:
                    "Solaris Connect es nuestra experiencia de monitoreo diseñada para consultar indicadores de generación, consumo y rendimiento del sistema desde dispositivos móviles."
            },

            {
                question:
                    "¿Ofrecen financiamiento?",

                answer:
                    "Nuestro modelo contempla alternativas de pago de 12, 24 y 36 meses. Los valores mostrados en el simulador son ilustrativos y no constituyen una oferta de crédito."
            },

            {
                question:
                    "¿Trabajan con hogares y negocios?",

                answer:
                    "Sí. Solaris Energy diseña proyectos para hogares y para pequeñas y medianas empresas, adaptando la solución al consumo y características de cada instalación."
            }

        ],

        en: [

            {
                question:
                    "How does a solar system work?",

                answer:
                    "Solar panels capture solar radiation and generate direct-current electricity. The inverter converts it into alternating current so it can be used by your home or business. In a grid-connected system, the electrical grid supplements the electricity supply when necessary."
            },

            {
                question:
                    "Does Solaris Energy handle the CFE process?",

                answer:
                    "Solaris Energy supports the preparation of the required information and the interconnection process. Authorization and the corresponding procedures depend on CFE and the characteristics of each project."
            },

            {
                question:
                    "How many solar panels do I need?",

                answer:
                    "The number of panels depends mainly on your electricity consumption, available space, and project characteristics. You can use our solar estimator to obtain a preliminary estimate."
            },

            {
                question:
                    "How much can I save?",

                answer:
                    "Savings depend on your consumption, electricity rate, installed capacity, generation conditions, and usage patterns. A properly sized system can significantly reduce the amount of electricity you need from the grid."
            },

            {
                question:
                    "What happens on cloudy days?",

                answer:
                    "Solar panels can continue generating electricity from diffuse solar radiation, although they typically produce less energy than on a clear day."
            },

            {
                question:
                    "What happens at night?",

                answer:
                    "Solar panels do not generate electricity at night. In a conventional grid-connected system without batteries, the required electricity is supplied by the electrical grid."
            },

            {
                question:
                    "Do solar panels require maintenance?",

                answer:
                    "Yes. Periodic inspections, connection checks, and cleaning when necessary are recommended. Solaris Energy offers different maintenance plans."
            },

            {
                question:
                    "What is Solaris Connect?",

                answer:
                    "Solaris Connect is our monitoring experience designed to display generation, consumption, and system performance indicators on mobile devices."
            },

            {
                question:
                    "Do you offer financing?",

                answer:
                    "Our model includes 12-, 24-, and 36-month payment alternatives. The values shown in the simulator are illustrative and do not constitute a credit offer."
            },

            {
                question:
                    "Do you work with homes and businesses?",

                answer:
                    "Yes. Solaris Energy designs projects for homes and small and medium-sized businesses, adapting each solution to the consumption and characteristics of the installation."
            }

        ]

    };


    /* =====================================================
       CHATBOT
    ====================================================== */

    const chatbotToggle =
        document.getElementById(
            "chatbotToggle"
        );

    const chatbotPanel =
        document.getElementById(
            "chatbotPanel"
        );

    const chatbotClose =
        document.getElementById(
            "chatbotClose"
        );

    const chatbotMessages =
        document.getElementById(
            "chatbotMessages"
        );

    const chatbotQuestions =
        document.getElementById(
            "chatbotQuestions"
        );

    const chatbotReset =
        document.getElementById(
            "chatbotReset"
        );

    const chatbotNotification =
        document.querySelector(
            ".chatbot-notification"
        );


    function renderChatbotQuestions() {

        if (!chatbotQuestions) {
            return;
        }

        chatbotQuestions.innerHTML = "";

        chatbotData[currentLanguage]
            .forEach((item, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.textContent =
                    item.question;

                button.dataset.questionIndex =
                    index;

                button.addEventListener(
                    "click",
                    () => {

                        processChatbotQuestion(
                            index
                        );

                    }
                );

                chatbotQuestions.appendChild(
                    button
                );

            });

    }


    function addChatMessage(
        message,
        type = "assistant"
    ) {

        if (!chatbotMessages) {
            return;
        }

        const wrapper =
            document.createElement("div");

        wrapper.className =
            `chat-message ${type}-message`;


        if (type === "assistant") {

            const avatar =
                document.createElement("div");

            avatar.className =
                "message-avatar";

            avatar.textContent = "☀";

            wrapper.appendChild(avatar);

        }


        const bubble =
            document.createElement("div");

        bubble.className =
            "message-bubble";

        const paragraph =
            document.createElement("p");

        paragraph.textContent =
            message;

        bubble.appendChild(paragraph);

        wrapper.appendChild(bubble);

        chatbotMessages.appendChild(
            wrapper
        );

        scrollChatbotToBottom();

    }


    function showTypingIndicator() {

        if (!chatbotMessages) {
            return null;
        }

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "chat-message assistant-message typing-message";

        const avatar =
            document.createElement("div");

        avatar.className =
            "message-avatar";

        avatar.textContent = "☀";

        const bubble =
            document.createElement("div");

        bubble.className =
            "message-bubble";

        bubble.textContent = "•••";

        wrapper.appendChild(avatar);
        wrapper.appendChild(bubble);

        chatbotMessages.appendChild(
            wrapper
        );

        scrollChatbotToBottom();

        return wrapper;

    }


    function processChatbotQuestion(index) {

        const item =
            chatbotData[currentLanguage][index];

        if (!item) {
            return;
        }

        addChatMessage(
            item.question,
            "user"
        );

        const typing =
            showTypingIndicator();

        window.setTimeout(
            () => {

                typing?.remove();

                addChatMessage(
                    item.answer,
                    "assistant"
                );

            },
            550
        );

    }


    function scrollChatbotToBottom() {

        if (!chatbotMessages) {
            return;
        }

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    function getChatbotIntroHTML() {

        const t =
            translations[currentLanguage];

        return `
            <div class="chat-message assistant-message">

                <div class="message-avatar">☀</div>

                <div class="message-bubble">

                    <strong>${t["chat.hello"]}</strong>

                    <p>${t["chat.intro"]}</p>

                    <p>${t["chat.select"]}</p>

                </div>

            </div>
        `;

    }


    function resetChatbot() {

        if (!chatbotMessages) {
            return;
        }

        chatbotMessages.innerHTML =
            getChatbotIntroHTML();

        renderChatbotQuestions();

        scrollChatbotToBottom();

    }


    function refreshChatbotLanguage() {

        /*
         * Al cambiar de idioma reiniciamos solamente
         * la conversación visual para evitar mezclar
         * mensajes en español e inglés.
         */

        resetChatbot();

    }


    function openChatbot() {

        if (!chatbotPanel) {
            return;
        }

        chatbotPanel.classList.add("open");

        chatbotPanel.setAttribute(
            "aria-hidden",
            "false"
        );

        chatbotToggle?.setAttribute(
            "aria-expanded",
            "true"
        );

        if (chatbotNotification) {
            chatbotNotification.style.display =
                "none";
        }

        scrollChatbotToBottom();

    }


    function closeChatbot() {

        if (!chatbotPanel) {
            return;
        }

        chatbotPanel.classList.remove("open");

        chatbotPanel.setAttribute(
            "aria-hidden",
            "true"
        );

        chatbotToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    chatbotToggle?.addEventListener(
        "click",
        () => {

            const isOpen =
                chatbotPanel?.classList.contains(
                    "open"
                );

            if (isOpen) {
                closeChatbot();
            } else {
                openChatbot();
            }

        }
    );


    chatbotClose?.addEventListener(
        "click",
        closeChatbot
    );


    chatbotReset?.addEventListener(
        "click",
        resetChatbot
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeChatbot();
            }

        }
    );
/* =====================================================
   LOGÍSTICA INTEGRADA 4PL - INTERACTION
===================================================== */

const logisticsSteps = document.querySelectorAll(".logistics-step");

const logisticsDetailNumber =
    document.getElementById("logisticsDetailNumber");

const logisticsDetailIcon =
    document.getElementById("logisticsDetailIcon");

const logisticsDetailTitle =
    document.getElementById("logisticsDetailTitle");

const logisticsDetailDescription =
    document.getElementById("logisticsDetailDescription");

const logisticsDetailImportance =
    document.getElementById("logisticsDetailImportance");


const logisticsData = {
    "1": {
        number: "01",
        icon: "📦",
        title: "Proveedores",
        description:
            "Los proveedores proporcionan los materiales y componentes necesarios. Redwood coordina su movimiento y conecta la información de los proveedores con las necesidades de transporte y producción.",
        importance:
            "Ayuda a que los materiales lleguen cuando se necesitan, evitando retrasos y permitiendo que la producción avance."
    },

    "2": {
        number: "02",
        icon: "🏭",
        title: "Fabricación",
        description:
            "Los paneles solares se fabrican y preparan para su distribución. Redwood conecta el estado de producción con las necesidades de transporte de la siguiente etapa.",
        importance:
            "Permite planificar el transporte estratégicamente con base en la producción real, en lugar de administrar fabricación y logística como procesos separados."
    },

    "3": {
        number: "03",
        icon: "🚛",
        title: "Transporte",
        description:
            "La operación puede requerir diferentes transportistas, rutas y opciones de transporte. Redwood coordina estas alternativas dentro de un mismo sistema.",
        importance:
            "Permite tomar decisiones considerando costo, tiempo y confiabilidad, en lugar de depender de un solo transportista para toda la operación."
    },

    "4": {
        number: "04",
        icon: "🏢",
        title: "Almacenamiento",
        description:
            "Redwood conecta el almacenamiento con el transporte y la demanda. El inventario puede mantenerse cerca de Monterrey hasta que sea necesario.",
        importance:
            "Ayuda a tener paneles disponibles cuando se necesitan sin mover o almacenar inventario en exceso."
    },

    "5": {
        number: "05",
        icon: "📍",
        title: "Distribución en Monterrey",
        description:
            "Redwood coordina el movimiento del inventario hacia el mercado de Monterrey y hasta el punto final de instalación.",
        importance:
            "Una mejor coordinación permite entregas más confiables y contribuye a una mejor experiencia para el cliente."
    }
};


let activeLogisticsStep = "1";


function updateLogisticsDetail(stepKey) {

    const step = logisticsData[stepKey];

    if (!step) {
        return;
    }

    activeLogisticsStep = stepKey;

    logisticsSteps.forEach(button => {

        const isActive =
            button.dataset.logisticsStep === stepKey;

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            isActive ? "true" : "false"
        );

    });


    if (logisticsDetailNumber) {
        logisticsDetailNumber.textContent = step.number;
    }

    if (logisticsDetailIcon) {
        logisticsDetailIcon.textContent = step.icon;
    }


    const titleKey =
        `logistics.step${stepKey}.title`;

    const descriptionKey =
        `logistics.step${stepKey}.description`;

    const importanceKey =
        `logistics.step${stepKey}.importance`;


    if (logisticsDetailTitle) {

        logisticsDetailTitle.textContent =
            translations[currentLanguage][titleKey];

        logisticsDetailTitle.dataset.i18n =
            titleKey;
    }


    if (logisticsDetailDescription) {

        logisticsDetailDescription.textContent =
            translations[currentLanguage][descriptionKey];

        logisticsDetailDescription.dataset.i18n =
            descriptionKey;
    }


    if (logisticsDetailImportance) {

        logisticsDetailImportance.textContent =
            translations[currentLanguage][importanceKey];

        logisticsDetailImportance.dataset.i18n =
            importanceKey;
    }
}


logisticsSteps.forEach(button => {

    const activateLogisticsStep = () => {

        const stepKey =
            button.dataset.logisticsStep;

        if (!stepKey) {
            return;
        }

        updateLogisticsDetail(stepKey);
    };


    button.addEventListener(
        "mouseenter",
        activateLogisticsStep
    );

    button.addEventListener(
        "click",
        activateLogisticsStep
    );

    button.addEventListener(
        "focus",
        activateLogisticsStep
    );

});

updateLogisticsDetail(activeLogisticsStep);

    /* =====================================================
       INITIALIZATION
       Spanish is the default language.
    ====================================================== */

    setLanguage("es");

});