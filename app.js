document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FLOATING ACTIONS
       COTIZAR + CHAT + BACK TO HOME
    ====================================================== */

    const backToHome =
        document.getElementById("backToHome");

    const floatingQuote =
        document.querySelector(".floating-quote");


    /* =====================================================
       FLOATING QUOTE BUTTON
    ====================================================== */

    if (floatingQuote) {

        floatingQuote.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const quoteSection =
                    document.getElementById("cotizar");

                if (quoteSection) {

                    quoteSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================================
       BACK TO HOME
    ====================================================== */

    if (backToHome) {

        const updateBackToHomeButton = () => {

            if (window.scrollY > 500) {

                backToHome.classList.add(
                    "visible"
                );

            } else {

                backToHome.classList.remove(
                    "visible"
                );

            }

        };


        window.addEventListener(
            "scroll",
            updateBackToHomeButton,
            {
                passive: true
            }
        );


        updateBackToHomeButton();


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

        residencial: [

            {
                value: "domestica",
                name: "Tarifa doméstica",
                description:
                    "Tarifa de servicio doméstico. Verifica en tu recibo CFE la tarifa específica aplicable."
            },

            {
                value: "dac",
                name: "DAC — Doméstica de Alto Consumo",
                description:
                    "Tarifa doméstica de alto consumo. Los sistemas solares pueden ser especialmente relevantes para usuarios con consumos elevados."
            }

        ],


        pyme: [

            {
                value: "pdbt",
                name: "PDBT",
                description:
                    "Pequeña Demanda en Baja Tensión."
            },

            {
                value: "gdbt",
                name: "GDBT",
                description:
                    "Gran Demanda en Baja Tensión."
            },

            {
                value: "gdmto",
                name: "GDMTO",
                description:
                    "Gran Demanda en Media Tensión Ordinaria."
            },

            {
                value: "gdmth",
                name: "GDMTH",
                description:
                    "Gran Demanda en Media Tensión Horaria."
            },

            {
                value: "dist",
                name: "DIST",
                description:
                    "Tarifa asociada con servicios de distribución."
            },

            {
                value: "dit",
                name: "DIT",
                description:
                    "Tarifa asociada con servicios en alta tensión."
            }

        ]

    };


    const cfeRateSelect =
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

        if (!cfeRateSelect) {
            return;
        }

        const projectType =
            getSelectedProjectType();

        const rates =
            cfeRates[projectType];

        const selectedRate =
            rates.find(
                rate =>
                    rate.value ===
                    cfeRateSelect.value
            ) || rates[0];


        if (rateName) {

            rateName.textContent =
                selectedRate.name;

        }


        if (rateDescription) {

            rateDescription.textContent =
                selectedRate.description;

        }

    }


    function rebuildRateOptions() {

        if (!cfeRateSelect) {
            return;
        }

        const projectType =
            getSelectedProjectType();

        const rates =
            cfeRates[projectType];


        cfeRateSelect.innerHTML = "";


        rates.forEach(rate => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                rate.value;

            option.textContent =
                rate.name;

            cfeRateSelect.appendChild(
                option
            );

        });


        updateRateDescription();

    }


    document
        .querySelectorAll(
            'input[name="projectType"]'
        )
        .forEach(radio => {

            radio.addEventListener(
                "change",
                rebuildRateOptions
            );

        });


    if (cfeRateSelect) {

        cfeRateSelect.addEventListener(
            "change",
            updateRateDescription
        );

    }


    rebuildRateOptions();


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

                    const radio =
                        document.querySelector(
                            `input[name="projectType"][value="${project}"]`
                        );


                    if (radio) {

                        radio.checked = true;

                        rebuildRateOptions();

                    }

                }
            );

        });


    /* =====================================================
       SOLAR CALCULATOR
    ====================================================== */

    const solarQuoteForm =
        document.getElementById(
            "solarQuoteForm"
        );

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


    const currencyFormatter =
        new Intl.NumberFormat(
            "es-MX",
            {
                style: "currency",
                currency: "MXN",
                maximumFractionDigits: 0
            }
        );


    const numberFormatter =
        new Intl.NumberFormat(
            "es-MX",
            {
                maximumFractionDigits: 0
            }
        );


    function calculateSolarProject(
        bimonthlyConsumption,
        projectType
    ) {

        const annualConsumption =
            bimonthlyConsumption * 6;


        const requiredCapacity =
            (
                annualConsumption *
                solarAssumptions.targetCoverage
            ) /
            solarAssumptions
                .annualGenerationPerKwp;


        const panels =
            Math.ceil(
                requiredCapacity /
                solarAssumptions.panelPowerKw
            );


        const installedCapacity =
            panels *
            solarAssumptions.panelPowerKw;


        const annualGeneration =
            installedCapacity *
            solarAssumptions
                .annualGenerationPerKwp;


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
                ? solarAssumptions
                    .businessCostPerKwp
                : solarAssumptions
                    .residentialCostPerKwp;


        const investment =
            installedCapacity *
            costPerKwp;


        return {

            annualConsumption,

            panels,

            installedCapacity,

            annualGeneration,

            coverage,

            investment

        };

    }


    function displaySolarResults(
        result,
        projectType
    ) {

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

        const resultDescription =
            document.getElementById(
                "resultDescription"
            );


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
                `${result.coverage.toFixed(0)}%`;

        }


        if (resultDescription) {

            resultDescription.textContent =
                projectType === "pyme"
                    ? "Estimación preliminar para tu proyecto comercial."
                    : "Estimación preliminar para tu proyecto residencial.";

        }


        /* =================================================
           FINANCING
        ================================================= */

        const payment12 =
            result.investment / 12;

        const payment24 =
            result.investment / 24;

        const payment36 =
            result.investment / 36;


        const payment12Element =
            document.getElementById(
                "payment12"
            );

        const payment24Element =
            document.getElementById(
                "payment24"
            );

        const payment36Element =
            document.getElementById(
                "payment36"
            );


        if (payment12Element) {

            payment12Element.textContent =
                currencyFormatter.format(
                    payment12
                );

        }


        if (payment24Element) {

            payment24Element.textContent =
                currencyFormatter.format(
                    payment24
                );

        }


        if (payment36Element) {

            payment36Element.textContent =
                currencyFormatter.format(
                    payment36
                );

        }

    }


    if (
        solarQuoteForm &&
        energyConsumption &&
        quoteProcessing &&
        quoteResults
    ) {

        solarQuoteForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const consumption =
                    Number(
                        energyConsumption.value
                    );


                if (
                    !Number.isFinite(consumption) ||
                    consumption <= 0
                ) {

                    energyConsumption.focus();

                    return;

                }


                const projectType =
                    getSelectedProjectType();


                quoteResults.hidden =
                    true;


                quoteProcessing.hidden =
                    false;


                quoteProcessing.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                const result =
                    calculateSolarProject(
                        consumption,
                        projectType
                    );


                setTimeout(
                    () => {

                        quoteProcessing.hidden =
                            true;


                        displaySolarResults(
                            result,
                            projectType
                        );


                        quoteResults.hidden =
                            false;


                        quoteResults.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    1800
                );

            }
        );

    }


    /* =====================================================
       RESET CALCULATOR
    ====================================================== */

    if (
        recalculateButton &&
        solarQuoteForm &&
        energyConsumption &&
        quoteProcessing &&
        quoteResults
    ) {

        recalculateButton.addEventListener(
            "click",
            () => {

                quoteProcessing.hidden =
                    true;

                quoteResults.hidden =
                    true;


                solarQuoteForm.reset();


                const residentialRadio =
                    document.querySelector(
                        'input[name="projectType"][value="residencial"]'
                    );


                if (residentialRadio) {

                    residentialRadio.checked =
                        true;

                }


                rebuildRateOptions();


                energyConsumption.value =
                    "";


                solarQuoteForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                setTimeout(
                    () => {

                        energyConsumption.focus();

                    },
                    500
                );

            }
        );

    }


    /* =====================================================
       SOLARIS ASSISTANT
       10 QUESTIONS + 10 ANSWERS
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


    const chatbotData = [

        {
            question:
                "¿Cuántos paneles solares necesito?",

            answer:
                "La cantidad depende principalmente de tu consumo eléctrico. En Solaris Energy utilizamos tu consumo en kWh para realizar una estimación inicial. Puedes utilizar nuestro Cotizador Solar para obtener una recomendación preliminar del número de paneles y la capacidad del sistema."
        },

        {
            question:
                "¿Cuánto puedo ahorrar con paneles solares?",

            answer:
                "El ahorro depende de factores como tu consumo, tarifa eléctrica, ubicación, generación solar y dimensionamiento del sistema. Un proyecto correctamente dimensionado puede reducir de forma importante el consumo de energía proveniente de la red. La cifra final debe determinarse mediante una evaluación específica del proyecto."
        },

        {
            question:
                "¿Qué planes de financiamiento ofrecen?",

            answer:
                "Nuestro simulador presenta alternativas ilustrativas de 12, 24 y 36 meses. Los pagos mostrados representan una división del costo estimado del proyecto y no incluyen intereses, comisiones, seguros u otros costos financieros."
        },

        {
            question:
                "¿Trabajan con proyectos residenciales?",

            answer:
                "Sí. Diseñamos proyectos para casas habitación considerando el consumo energético del hogar, el espacio disponible y la capacidad necesaria para generar una solución solar adecuada."
        },

        {
            question:
                "¿Instalan sistemas para negocios y PyMEs?",

            answer:
                "Sí. Solaris Energy contempla soluciones para pequeñas y medianas empresas. Analizamos el consumo del negocio para estimar capacidad, número de paneles y características generales del proyecto."
        },

        {
            question:
                "¿Qué marcas de paneles y equipos manejan?",

            answer:
                "Nuestro ecosistema contempla marcas como Huawei, Trina Solar, Solis, Enphase, Unirac, JA Solar, Sungrow, Canadian Solar, Tesla, Risen, Jinko Solar, First Solar, SMA, Yingli Solar y Hanwha. La selección específica dependerá de las necesidades del proyecto."
        },

        {
            question:
                "¿Ofrecen mantenimiento?",

            answer:
                "Sí. Contamos con planes de mantenimiento Solaris Care, Solaris Care+ y Solaris Business, orientados a inspección preventiva, seguimiento de desempeño y soporte para instalaciones residenciales y comerciales."
        },

        {
            question:
                "¿Cómo funciona Solaris Connect?",

            answer:
                "Solaris Connect es nuestra propuesta de aplicación móvil para Android y iOS. Permite visualizar información sobre generación solar, consumo energético, rendimiento del sistema y alertas desde un dispositivo móvil."
        },

        {
            question:
                "¿Cuánto tarda una instalación?",

            answer:
                "El tiempo depende del tamaño y complejidad del proyecto. Antes de establecer un plazo se requiere evaluar consumo, dimensionamiento, disponibilidad de equipos, características del inmueble y programación de instalación."
        },

        {
            question:
                "¿Cómo puedo solicitar una cotización?",

            answer:
                "Puedes utilizar el Cotizador Solar disponible en esta misma página. Ingresa tu consumo bimestral en kWh, selecciona si tu proyecto es residencial o PyME y elige tu tarifa eléctrica. El sistema generará una estimación preliminar de paneles, capacidad, generación e inversión."
        }

    ];


    /* =====================================================
       RENDER QUESTIONS
    ====================================================== */

    function renderChatbotQuestions() {

        if (!chatbotQuestions) {
            return;
        }


        chatbotQuestions.innerHTML = "";


        chatbotData.forEach(
            (item, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "chat-question-button";


                button.textContent =
                    `${index + 1}. ${item.question}`;


                button.addEventListener(
                    "click",
                    () => {

                        processChatbotQuestion(
                            item
                        );

                    }
                );


                chatbotQuestions.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
       ADD USER MESSAGE
    ====================================================== */

    function addUserMessage(text) {

        if (!chatbotMessages) {
            return;
        }


        const message =
            document.createElement("div");


        message.className =
            "chat-message user-message";


        const bubble =
            document.createElement("div");


        bubble.className =
            "message-bubble";


        bubble.textContent =
            text;


        message.appendChild(
            bubble
        );


        chatbotMessages.appendChild(
            message
        );


        scrollChatToBottom();

    }


    /* =====================================================
       ADD ASSISTANT MESSAGE
    ====================================================== */

    function addAssistantMessage(text) {

        if (!chatbotMessages) {
            return;
        }


        const message =
            document.createElement("div");


        message.className =
            "chat-message assistant-message";


        const avatar =
            document.createElement("div");


        avatar.className =
            "message-avatar";


        avatar.textContent =
            "☀";


        const bubble =
            document.createElement("div");


        bubble.className =
            "message-bubble";


        const paragraph =
            document.createElement("p");


        paragraph.textContent =
            text;


        bubble.appendChild(
            paragraph
        );


        message.appendChild(
            avatar
        );


        message.appendChild(
            bubble
        );


        chatbotMessages.appendChild(
            message
        );


        scrollChatToBottom();

    }


    /* =====================================================
       TYPING INDICATOR
    ====================================================== */

    function showTypingIndicator() {

        if (!chatbotMessages) {
            return;
        }


        const message =
            document.createElement("div");


        message.className =
            "chat-message assistant-message";


        message.id =
            "chatbotTypingMessage";


        const avatar =
            document.createElement("div");


        avatar.className =
            "message-avatar";


        avatar.textContent =
            "☀";


        const typing =
            document.createElement("div");


        typing.className =
            "message-bubble chatbot-typing";


        typing.innerHTML =
            `
                <span></span>
                <span></span>
                <span></span>
            `;


        message.appendChild(
            avatar
        );


        message.appendChild(
            typing
        );


        chatbotMessages.appendChild(
            message
        );


        scrollChatToBottom();

    }


    function removeTypingIndicator() {

        const typingMessage =
            document.getElementById(
                "chatbotTypingMessage"
            );


        if (typingMessage) {

            typingMessage.remove();

        }

    }


    /* =====================================================
       PROCESS QUESTION
    ====================================================== */

    function processChatbotQuestion(item) {

        addUserMessage(
            item.question
        );


        showTypingIndicator();


        /*
            Short delay makes the simulated
            conversation feel more natural.
        */

        setTimeout(
            () => {

                removeTypingIndicator();


                addAssistantMessage(
                    item.answer
                );

            },
            700
        );

    }


    /* =====================================================
       SCROLL CHAT
    ====================================================== */

    function scrollChatToBottom() {

        if (!chatbotMessages) {
            return;
        }


        requestAnimationFrame(
            () => {

                chatbotMessages.scrollTop =
                    chatbotMessages.scrollHeight;

            }
        );

    }


    /* =====================================================
       OPEN CHAT
    ====================================================== */

    function openChatbot() {

        if (
            !chatbotPanel ||
            !chatbotToggle
        ) {
            return;
        }


        chatbotPanel.classList.add(
            "open"
        );


        chatbotPanel.setAttribute(
            "aria-hidden",
            "false"
        );


        chatbotToggle.setAttribute(
            "aria-expanded",
            "true"
        );


        if (chatbotNotification) {

            chatbotNotification.style.display =
                "none";

        }


        scrollChatToBottom();

    }


    /* =====================================================
       CLOSE CHAT
    ====================================================== */

    function closeChatbot() {

        if (
            !chatbotPanel ||
            !chatbotToggle
        ) {
            return;
        }


        chatbotPanel.classList.remove(
            "open"
        );


        chatbotPanel.setAttribute(
            "aria-hidden",
            "true"
        );


        chatbotToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* =====================================================
       RESET CHAT
    ====================================================== */

    function resetChatbot() {

        if (!chatbotMessages) {
            return;
        }


        chatbotMessages.innerHTML =
            `
                <div class="chat-message assistant-message">

                    <div class="message-avatar">
                        ☀
                    </div>

                    <div class="message-bubble">

                        <strong>
                            ¡Hola!
                        </strong>

                        <p>
                            Soy el asistente virtual de Solaris Energy.
                            Puedo ayudarte con información sobre nuestros
                            sistemas solares.
                        </p>

                        <p>
                            Selecciona una de las preguntas disponibles.
                        </p>

                    </div>

                </div>
            `;


        scrollChatToBottom();

    }


    /* =====================================================
       CHAT EVENTS
    ====================================================== */

    if (
        chatbotToggle &&
        chatbotPanel
    ) {

        chatbotToggle.addEventListener(
            "click",
            () => {

                if (
                    chatbotPanel.classList
                        .contains("open")
                ) {

                    closeChatbot();

                } else {

                    openChatbot();

                }

            }
        );

    }


    if (chatbotClose) {

        chatbotClose.addEventListener(
            "click",
            closeChatbot
        );

    }


    if (chatbotReset) {

        chatbotReset.addEventListener(
            "click",
            resetChatbot
        );

    }


    /*
        Close with ESC key.
    */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                chatbotPanel &&
                chatbotPanel.classList
                    .contains("open")
            ) {

                closeChatbot();

            }

        }
    );


    renderChatbotQuestions();

});