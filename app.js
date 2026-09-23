/* =========================================
   SOLARIS ENERGY
   APP.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       BACK TO HOME
    ====================================== */

    const backToHomeButton =
        document.getElementById("backToHome");


    if (backToHomeButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToHomeButton
                        .classList
                        .add("visible");

                } else {

                    backToHomeButton
                        .classList
                        .remove("visible");

                }

            }
        );


        backToHomeButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================
       CFE RATE DATA
    ====================================== */

    const cfeRates = {

        residencial: [

            {
                value: "domestica",
                label: "Tarifa doméstica",
                title: "Tarifa doméstica",
                description:
                    "Tarifa para servicio eléctrico de uso doméstico. Selecciona esta opción si tu recibo CFE corresponde a una tarifa residencial doméstica."
            },

            {
                value: "dac",
                label:
                    "DAC — Doméstica de Alto Consumo",
                title: "Tarifa DAC",
                description:
                    "Tarifa Doméstica de Alto Consumo. Se aplica cuando el consumo promedio supera el límite establecido para la localidad y deja de recibir el subsidio correspondiente a las tarifas domésticas."
            }

        ],


        pyme: [

            {
                value: "pdbt",
                label:
                    "PDBT — Pequeña Demanda en Baja Tensión",
                title: "Tarifa PDBT",
                description:
                    "Pequeña Demanda en Baja Tensión. Está orientada a servicios comerciales o de negocio con menor nivel de demanda eléctrica."
            },

            {
                value: "gdbt",
                label:
                    "GDBT — Gran Demanda en Baja Tensión",
                title: "Tarifa GDBT",
                description:
                    "Gran Demanda en Baja Tensión. Corresponde a instalaciones con una demanda eléctrica superior a la considerada para PDBT."
            },

            {
                value: "gdmto",
                label:
                    "GDMTO — Gran Demanda en Media Tensión Ordinaria",
                title: "Tarifa GDMTO",
                description:
                    "Gran Demanda en Media Tensión Ordinaria. Está dirigida a usuarios comerciales o industriales conectados en media tensión."
            },

            {
                value: "gdmth",
                label:
                    "GDMTH — Gran Demanda en Media Tensión Horaria",
                title: "Tarifa GDMTH",
                description:
                    "Gran Demanda en Media Tensión Horaria. Considera periodos horarios de consumo, por lo que el costo de la energía puede variar según el horario."
            },

            {
                value: "dist",
                label:
                    "DIST — Demanda Industrial en Subtransmisión",
                title: "Tarifa DIST",
                description:
                    "Tarifa asociada con usuarios de gran demanda conectados a niveles de subtransmisión."
            },

            {
                value: "dit",
                label:
                    "DIT — Demanda Industrial en Transmisión",
                title: "Tarifa DIT",
                description:
                    "Tarifa asociada con usuarios de gran demanda conectados a niveles de transmisión."
            }

        ]

    };


    /* =====================================
       FORM ELEMENTS
    ====================================== */

    const projectRadios =
        document.querySelectorAll(
            'input[name="projectType"]'
        );

    const cfeRateSelect =
        document.getElementById("cfeRate");

    const rateHelperText =
        document.getElementById(
            "rateHelperText"
        );

    const rateInfoTitle =
        document.getElementById(
            "rateInfoTitle"
        );

    const rateInfoDescription =
        document.getElementById(
            "rateInfoDescription"
        );


    /* =====================================
       GET SELECTED PROJECT
    ====================================== */

    function getSelectedProject() {

        const selected =
            document.querySelector(
                'input[name="projectType"]:checked'
            );

        return selected
            ? selected.value
            : "residencial";

    }


    /* =====================================
       UPDATE CFE DROPDOWN
    ====================================== */

    function updateCfeRates(projectType) {

        if (!cfeRateSelect) {
            return;
        }


        cfeRateSelect.innerHTML = "";


        const placeholder =
            document.createElement("option");


        placeholder.value = "";

        placeholder.textContent =
            "Selecciona la tarifa de tu recibo";

        placeholder.disabled = true;
        placeholder.selected = true;


        cfeRateSelect.appendChild(
            placeholder
        );


        const rates =
            cfeRates[projectType];


        rates.forEach(
            function (rate) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    rate.value;

                option.textContent =
                    rate.label;


                cfeRateSelect.appendChild(
                    option
                );

            }
        );


        updateRateIntroduction(
            projectType
        );

    }


    /* =====================================
       DEFAULT RATE INFORMATION
    ====================================== */

    function updateRateIntroduction(
        projectType
    ) {

        if (
            !rateHelperText ||
            !rateInfoTitle ||
            !rateInfoDescription
        ) {
            return;
        }


        if (
            projectType ===
            "residencial"
        ) {

            rateHelperText.textContent =
                "Para un proyecto residencial, selecciona la tarifa indicada en tu recibo CFE.";

            rateInfoTitle.textContent =
                "Tarifas residenciales";

            rateInfoDescription.textContent =
                "Puedes seleccionar una tarifa doméstica o DAC, dependiendo de la tarifa que aparezca en tu recibo.";

        } else {

            rateHelperText.textContent =
                "Para un proyecto PyME, selecciona la tarifa comercial o industrial indicada en tu recibo CFE.";

            rateInfoTitle.textContent =
                "Tarifas para negocios";

            rateInfoDescription.textContent =
                "Selecciona la tarifa correspondiente de acuerdo con la información indicada en tu recibo.";

        }

    }


    /* =====================================
       SELECTED RATE INFORMATION
    ====================================== */

    function updateSelectedRateInformation() {

        if (!cfeRateSelect) {
            return;
        }


        const projectType =
            getSelectedProject();


        const selectedValue =
            cfeRateSelect.value;


        if (!selectedValue) {

            updateRateIntroduction(
                projectType
            );

            return;

        }


        const selectedRate =
            cfeRates[projectType].find(
                function (rate) {

                    return (
                        rate.value ===
                        selectedValue
                    );

                }
            );


        if (!selectedRate) {
            return;
        }


        if (rateInfoTitle) {

            rateInfoTitle.textContent =
                selectedRate.title;

        }


        if (rateInfoDescription) {

            rateInfoDescription.textContent =
                selectedRate.description;

        }

    }


    /* =====================================
       PROJECT CHANGE
    ====================================== */

    projectRadios.forEach(
        function (radio) {

            radio.addEventListener(
                "change",
                function () {

                    updateCfeRates(
                        this.value
                    );

                }
            );

        }
    );


    /* =====================================
       RATE CHANGE
    ====================================== */

    if (cfeRateSelect) {

        cfeRateSelect.addEventListener(
            "change",
            updateSelectedRateInformation
        );

    }


    /* =====================================
       PROJECT LINKS
    ====================================== */

    const projectLinks =
        document.querySelectorAll(
            "[data-project]"
        );


    projectLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    const project =
                        this.dataset.project;


                    const correspondingRadio =
                        document.querySelector(
                            'input[name="projectType"][value="' +
                            project +
                            '"]'
                        );


                    if (
                        correspondingRadio
                    ) {

                        correspondingRadio.checked =
                            true;


                        updateCfeRates(
                            project
                        );

                    }

                }
            );

        }
    );


    /* =====================================
       INITIALIZE CFE DROPDOWN
    ====================================== */

    updateCfeRates(
        getSelectedProject()
    );


    /* =====================================
       CALCULATOR ELEMENTS
    ====================================== */

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

    const resultPanels =
        document.getElementById(
            "resultPanels"
        );

    const resultCapacity =
        document.getElementById(
            "resultCapacity"
        );

    const resultCost =
        document.getElementById(
            "resultCost"
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

    const finance12 =
        document.getElementById(
            "finance12"
        );

    const finance24 =
        document.getElementById(
            "finance24"
        );

    const finance36 =
        document.getElementById(
            "finance36"
        );

    const recalculateButton =
        document.getElementById(
            "recalculateButton"
        );


    /* =====================================
       CALCULATION ASSUMPTIONS
    ====================================== */

    const solarAssumptions = {

        panelPowerKw: 0.585,

        annualGenerationPerKwp: 1600,

        targetCoverage: 1.00,

        residentialCostPerKwp: 24000,

        businessCostPerKwp: 20000

    };


    /* =====================================
       FORMATTERS
    ====================================== */

    function formatCurrency(value) {

        return new Intl.NumberFormat(
            "es-MX",
            {
                style: "currency",
                currency: "MXN",
                maximumFractionDigits: 0
            }
        ).format(value);

    }


    function formatNumber(value) {

        return new Intl.NumberFormat(
            "es-MX",
            {
                maximumFractionDigits: 0
            }
        ).format(value);

    }


    /* =====================================
       CALCULATE SYSTEM
    ====================================== */

    function calculateSolarSystem(
        bimonthlyConsumption,
        projectType
    ) {

        /* Annual consumption */

        const annualConsumption =
            bimonthlyConsumption * 6;


        /* Required photovoltaic capacity */

        const requiredCapacity =
            (
                annualConsumption *
                solarAssumptions.targetCoverage
            ) /
            solarAssumptions
                .annualGenerationPerKwp;


        /* Number of 585 W panels */

        const numberOfPanels =
            Math.max(
                1,
                Math.ceil(
                    requiredCapacity /
                    solarAssumptions
                        .panelPowerKw
                )
            );


        /* Installed capacity */

        const installedCapacity =
            numberOfPanels *
            solarAssumptions
                .panelPowerKw;


        /* Estimated generation */

        const estimatedAnnualGeneration =
            installedCapacity *
            solarAssumptions
                .annualGenerationPerKwp;


        /* Estimated coverage */

        const estimatedCoverage =
            Math.min(
                100,
                (
                    estimatedAnnualGeneration /
                    annualConsumption
                ) * 100
            );


        /* Cost assumption */

        const costPerKwp =
            projectType === "pyme"
                ? solarAssumptions
                    .businessCostPerKwp
                : solarAssumptions
                    .residentialCostPerKwp;


        /* Estimated investment */

        const estimatedCost =
            installedCapacity *
            costPerKwp;


        /* Financing simulations */

        const payment12 =
            estimatedCost / 12;

        const payment24 =
            estimatedCost / 24;

        const payment36 =
            estimatedCost / 36;


        return {

            annualConsumption,

            numberOfPanels,

            installedCapacity,

            estimatedAnnualGeneration,

            estimatedCoverage,

            estimatedCost,

            payment12,

            payment24,

            payment36

        };

    }


    /* =====================================
       CLEAR PREVIOUS RESULTS
    ====================================== */

    function clearResults() {

        if (resultPanels) {
            resultPanels.textContent = "--";
        }

        if (resultCapacity) {
            resultCapacity.textContent = "--";
        }

        if (resultCost) {
            resultCost.textContent = "--";
        }

        if (resultAnnualConsumption) {
            resultAnnualConsumption.textContent = "--";
        }

        if (resultAnnualGeneration) {
            resultAnnualGeneration.textContent = "--";
        }

        if (resultCoverage) {
            resultCoverage.textContent = "--";
        }

        if (finance12) {
            finance12.textContent = "--";
        }

        if (finance24) {
            finance24.textContent = "--";
        }

        if (finance36) {
            finance36.textContent = "--";
        }

    }


    /* =====================================
       RESET COMPLETE QUOTE
    ====================================== */

    function resetQuote() {

        /*
            Hide old states
        */

        if (quoteResults) {
            quoteResults.hidden = true;
        }

        if (quoteProcessing) {
            quoteProcessing.hidden = true;
        }


        /*
            Remove previous calculated values
        */

        clearResults();


        /*
            Clear consumption
        */

        if (energyConsumption) {
            energyConsumption.value = "";
        }


        /*
            Return project to Residential
        */

        const residentialRadio =
            document.querySelector(
                'input[name="projectType"][value="residencial"]'
            );


        if (residentialRadio) {

            residentialRadio.checked =
                true;

        }


        /*
            Rebuild Residential tariffs.
            This also returns the tariff
            dropdown to its placeholder.
        */

        updateCfeRates(
            "residencial"
        );


        /*
            Return to form
        */

        if (solarQuoteForm) {

            solarQuoteForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }


        /*
            Put cursor in consumption
            after scrolling.
        */

        setTimeout(
            function () {

                if (energyConsumption) {

                    energyConsumption.focus();

                }

            },
            500
        );

    }


    /* =====================================
       FORM SUBMISSION
    ====================================== */

    if (solarQuoteForm) {

        solarQuoteForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const bimonthlyConsumption =
                    Number(
                        energyConsumption.value
                    );


                const projectType =
                    getSelectedProject();


                const selectedRate =
                    cfeRateSelect
                        ? cfeRateSelect.value
                        : "";


                /* Validate consumption */

                if (
                    !bimonthlyConsumption ||
                    bimonthlyConsumption <= 0
                ) {

                    alert(
                        "Ingresa un consumo bimestral válido."
                    );

                    energyConsumption.focus();

                    return;

                }


                /* Validate rate */

                if (!selectedRate) {

                    alert(
                        "Selecciona tu tarifa CFE actual."
                    );

                    cfeRateSelect.focus();

                    return;

                }


                /*
                    IMPORTANT:

                    Remove all previous
                    calculated values before
                    beginning the new
                    calculation.
                */

                clearResults();


                if (quoteResults) {

                    quoteResults.hidden =
                        true;

                }


                /*
                    Show processing
                */

                if (quoteProcessing) {

                    quoteProcessing.hidden =
                        false;


                    quoteProcessing
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                }


                /*
                    Simulate intelligent
                    processing.
                */

                setTimeout(
                    function () {

                        const calculation =
                            calculateSolarSystem(
                                bimonthlyConsumption,
                                projectType
                            );


                        /* Panels */

                        if (resultPanels) {

                            resultPanels.textContent =
                                calculation
                                    .numberOfPanels;

                        }


                        /* Capacity */

                        if (resultCapacity) {

                            resultCapacity.textContent =
                                calculation
                                    .installedCapacity
                                    .toFixed(2);

                        }


                        /* Cost */

                        if (resultCost) {

                            resultCost.textContent =
                                formatCurrency(
                                    calculation
                                        .estimatedCost
                                );

                        }


                        /* Annual consumption */

                        if (
                            resultAnnualConsumption
                        ) {

                            resultAnnualConsumption
                                .textContent =
                                formatNumber(
                                    calculation
                                        .annualConsumption
                                );

                        }


                        /* Annual generation */

                        if (
                            resultAnnualGeneration
                        ) {

                            resultAnnualGeneration
                                .textContent =
                                formatNumber(
                                    calculation
                                        .estimatedAnnualGeneration
                                );

                        }


                        /* Coverage */

                        if (resultCoverage) {

                            resultCoverage.textContent =
                                calculation
                                    .estimatedCoverage
                                    .toFixed(0) +
                                "%";

                        }


                        /* Financing */

                        if (finance12) {

                            finance12.textContent =
                                formatCurrency(
                                    calculation
                                        .payment12
                                );

                        }


                        if (finance24) {

                            finance24.textContent =
                                formatCurrency(
                                    calculation
                                        .payment24
                                );

                        }


                        if (finance36) {

                            finance36.textContent =
                                formatCurrency(
                                    calculation
                                        .payment36
                                );

                        }


                        /*
                            Hide processing
                        */

                        if (quoteProcessing) {

                            quoteProcessing.hidden =
                                true;

                        }


                        /*
                            Show recommendation
                        */

                        if (quoteResults) {

                            quoteResults.hidden =
                                false;


                            quoteResults
                                .scrollIntoView({
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                });

                        }

                    },

                    1800

                );

            }
        );

    }


    /* =====================================
       NEW QUOTE
    ====================================== */

    if (recalculateButton) {

        recalculateButton.addEventListener(
            "click",
            function () {

                resetQuote();

            }
        );

    }

});