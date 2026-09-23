document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       BACK TO HOME
    ========================================= */

    const backToHome = document.getElementById("backToHome");

    if (backToHome) {

        const updateBackToHomeButton = () => {

            if (window.scrollY > 500) {
                backToHome.classList.add("visible");
            } else {
                backToHome.classList.remove("visible");
            }

        };

        window.addEventListener(
            "scroll",
            updateBackToHomeButton
        );

        updateBackToHomeButton();


        backToHome.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       CFE RATES
    ========================================= */

    const cfeRates = {

        residencial: [

            {
                value: "domestica",
                name: "Tarifa doméstica",
                description:
                    "Tarifa residencial para servicio doméstico."
            },

            {
                value: "dac",
                name: "DAC - Doméstica de Alto Consumo",
                description:
                    "Tarifa residencial aplicable a usuarios clasificados como de alto consumo."
            }

        ],


        pyme: [

            {
                value: "pdbt",
                name: "PDBT - Pequeña Demanda en Baja Tensión",
                description:
                    "Tarifa para pequeña demanda en baja tensión."
            },

            {
                value: "gdbt",
                name: "GDBT - Gran Demanda en Baja Tensión",
                description:
                    "Tarifa para gran demanda en baja tensión."
            },

            {
                value: "gdmto",
                name: "GDMTO - Gran Demanda en Media Tensión Ordinaria",
                description:
                    "Tarifa para gran demanda en media tensión ordinaria."
            },

            {
                value: "gdmth",
                name: "GDMTH - Gran Demanda en Media Tensión Horaria",
                description:
                    "Tarifa para gran demanda en media tensión con componentes horarios."
            },

            {
                value: "dist",
                name: "DIST - Demanda Industrial en Subtransmisión",
                description:
                    "Categoría orientada a servicios de mayor demanda conectados en niveles superiores de tensión."
            },

            {
                value: "dit",
                name: "DIT - Demanda Industrial en Transmisión",
                description:
                    "Categoría orientada a grandes usuarios conectados en niveles de transmisión."
            }

        ]

    };


    /* =========================================
       ELEMENTS
    ========================================= */

    const quoteForm =
        document.getElementById("solarQuoteForm");

    const energyConsumption =
        document.getElementById("energyConsumption");

    const cfeRate =
        document.getElementById("cfeRate");

    const rateHelperText =
        document.getElementById("rateHelperText");

    const rateInfoTitle =
        document.getElementById("rateInfoTitle");

    const rateInfoDescription =
        document.getElementById("rateInfoDescription");

    const quoteProcessing =
        document.getElementById("quoteProcessing");

    const quoteResults =
        document.getElementById("quoteResults");

    const recalculateButton =
        document.getElementById("recalculateButton");


    /* =========================================
       RESULTS
    ========================================= */

    const resultPanels =
        document.getElementById("resultPanels");

    const resultCapacity =
        document.getElementById("resultCapacity");

    const resultCost =
        document.getElementById("resultCost");

    const resultAnnualConsumption =
        document.getElementById(
            "resultAnnualConsumption"
        );

    const resultAnnualGeneration =
        document.getElementById(
            "resultAnnualGeneration"
        );

    const resultCoverage =
        document.getElementById("resultCoverage");

    const finance12 =
        document.getElementById("finance12");

    const finance24 =
        document.getElementById("finance24");

    const finance36 =
        document.getElementById("finance36");


    /* =========================================
       SOLAR ASSUMPTIONS
    ========================================= */

    const solarAssumptions = {

        panelPowerKw: 0.585,

        annualGenerationPerKwp: 1600,

        targetCoverage: 1.00,

        residentialCostPerKwp: 24000,

        businessCostPerKwp: 20000

    };


    /* =========================================
       CURRENCY FORMATTER
    ========================================= */

    const currencyFormatter =
        new Intl.NumberFormat(
            "es-MX",
            {
                style: "currency",
                currency: "MXN",
                maximumFractionDigits: 0
            }
        );


    /* =========================================
       GET PROJECT TYPE
    ========================================= */

    function getSelectedProjectType() {

        const selected =
            document.querySelector(
                'input[name="projectType"]:checked'
            );

        return selected
            ? selected.value
            : "residencial";

    }


    /* =========================================
       BUILD RATE OPTIONS
    ========================================= */

    function buildRateOptions(projectType) {

        if (!cfeRate) {
            return;
        }

        cfeRate.innerHTML =
            '<option value="">Selecciona una tarifa</option>';


        const rates =
            cfeRates[projectType] || [];


        rates.forEach((rate) => {

            const option =
                document.createElement("option");

            option.value = rate.value;

            option.textContent = rate.name;

            cfeRate.appendChild(option);

        });


        if (rateInfoTitle) {
            rateInfoTitle.textContent =
                "Información de tarifa";
        }

        if (rateInfoDescription) {
            rateInfoDescription.textContent =
                "Selecciona una tarifa para consultar una descripción general.";
        }

        if (rateHelperText) {

            if (projectType === "residencial") {

                rateHelperText.textContent =
                    "Selecciona la tarifa residencial que aparece en tu recibo.";

            } else {

                rateHelperText.textContent =
                    "Selecciona la tarifa correspondiente a tu negocio o PyME.";

            }

        }

    }


    /* =========================================
       RATE INFORMATION
    ========================================= */

    function updateRateInformation() {

        if (!cfeRate) {
            return;
        }


        const projectType =
            getSelectedProjectType();

        const rates =
            cfeRates[projectType] || [];

        const selectedRate =
            rates.find(
                (rate) =>
                    rate.value === cfeRate.value
            );


        if (!selectedRate) {

            if (rateInfoTitle) {
                rateInfoTitle.textContent =
                    "Información de tarifa";
            }

            if (rateInfoDescription) {
                rateInfoDescription.textContent =
                    "Selecciona una tarifa para consultar una descripción general.";
            }

            return;

        }


        if (rateInfoTitle) {
            rateInfoTitle.textContent =
                selectedRate.name;
        }

        if (rateInfoDescription) {
            rateInfoDescription.textContent =
                selectedRate.description;
        }

    }


    /* =========================================
       PROJECT TYPE CHANGE
    ========================================= */

    const projectRadios =
        document.querySelectorAll(
            'input[name="projectType"]'
        );


    projectRadios.forEach((radio) => {

        radio.addEventListener(
            "change",
            () => {

                buildRateOptions(
                    getSelectedProjectType()
                );

            }
        );

    });


    if (cfeRate) {

        cfeRate.addEventListener(
            "change",
            updateRateInformation
        );

    }


    /* =========================================
       PROJECT LINKS
    ========================================= */

    const projectLinks =
        document.querySelectorAll(
            "[data-project]"
        );


    projectLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                const projectType =
                    link.dataset.project;

                const radio =
                    document.querySelector(
                        `input[name="projectType"][value="${projectType}"]`
                    );


                if (radio) {

                    radio.checked = true;

                    buildRateOptions(
                        projectType
                    );

                }

            }
        );

    });


    /* =========================================
       CALCULATE SOLAR PROJECT
    ========================================= */

    function calculateSolarProject(
        bimonthlyConsumption,
        projectType
    ) {

        const annualConsumption =
            bimonthlyConsumption * 6;


        const requiredAnnualGeneration =
            annualConsumption *
            solarAssumptions.targetCoverage;


        const requiredCapacity =
            requiredAnnualGeneration /
            solarAssumptions.annualGenerationPerKwp;


        const numberOfPanels =
            Math.ceil(
                requiredCapacity /
                solarAssumptions.panelPowerKw
            );


        const installedCapacity =
            numberOfPanels *
            solarAssumptions.panelPowerKw;


        const estimatedAnnualGeneration =
            installedCapacity *
            solarAssumptions.annualGenerationPerKwp;


        const estimatedCoverage =
            Math.min(
                100,
                (
                    estimatedAnnualGeneration /
                    annualConsumption
                ) * 100
            );


        const costPerKwp =
            projectType === "pyme"
                ? solarAssumptions.businessCostPerKwp
                : solarAssumptions.residentialCostPerKwp;


        const estimatedCost =
            installedCapacity *
            costPerKwp;


        return {

            annualConsumption,

            numberOfPanels,

            installedCapacity,

            estimatedAnnualGeneration,

            estimatedCoverage,

            estimatedCost,

            payment12:
                estimatedCost / 12,

            payment24:
                estimatedCost / 24,

            payment36:
                estimatedCost / 36

        };

    }


    /* =========================================
       CLEAR RESULTS
    ========================================= */

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
            resultAnnualConsumption.textContent =
                "--";
        }

        if (resultAnnualGeneration) {
            resultAnnualGeneration.textContent =
                "--";
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


    /* =========================================
       DISPLAY RESULTS
    ========================================= */

    function displayResults(results) {

        if (resultPanels) {

            resultPanels.textContent =
                results.numberOfPanels;

        }


        if (resultCapacity) {

            resultCapacity.textContent =
                results.installedCapacity
                    .toFixed(2);

        }


        if (resultCost) {

            resultCost.textContent =
                currencyFormatter.format(
                    results.estimatedCost
                );

        }


        if (resultAnnualConsumption) {

            resultAnnualConsumption.textContent =
                Math.round(
                    results.annualConsumption
                ).toLocaleString("es-MX");

        }


        if (resultAnnualGeneration) {

            resultAnnualGeneration.textContent =
                Math.round(
                    results.estimatedAnnualGeneration
                ).toLocaleString("es-MX");

        }


        if (resultCoverage) {

            resultCoverage.textContent =
                `${results.estimatedCoverage.toFixed(0)}%`;

        }


        if (finance12) {

            finance12.textContent =
                currencyFormatter.format(
                    results.payment12
                );

        }


        if (finance24) {

            finance24.textContent =
                currencyFormatter.format(
                    results.payment24
                );

        }


        if (finance36) {

            finance36.textContent =
                currencyFormatter.format(
                    results.payment36
                );

        }

    }


    /* =========================================
       FORM SUBMIT
    ========================================= */

    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const consumption =
                    Number(
                        energyConsumption.value
                    );


                const projectType =
                    getSelectedProjectType();


                if (
                    !consumption ||
                    consumption <= 0
                ) {

                    energyConsumption.focus();

                    return;

                }


                if (
                    !cfeRate ||
                    !cfeRate.value
                ) {

                    if (cfeRate) {
                        cfeRate.focus();
                    }

                    return;

                }


                clearResults();


                if (quoteResults) {
                    quoteResults.hidden = true;
                }


                if (quoteProcessing) {

                    quoteProcessing.hidden = false;

                    quoteProcessing.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }


                const results =
                    calculateSolarProject(
                        consumption,
                        projectType
                    );


                window.setTimeout(
                    () => {

                        if (quoteProcessing) {
                            quoteProcessing.hidden =
                                true;
                        }


                        displayResults(results);


                        if (quoteResults) {

                            quoteResults.hidden =
                                false;

                            quoteResults.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    },
                    1800
                );

            }
        );

    }


    /* =========================================
       RESET QUOTE
    ========================================= */

    function resetQuote() {

        if (quoteResults) {
            quoteResults.hidden = true;
        }

        if (quoteProcessing) {
            quoteProcessing.hidden = true;
        }


        clearResults();


        if (energyConsumption) {
            energyConsumption.value = "";
        }


        const residentialRadio =
            document.querySelector(
                'input[name="projectType"][value="residencial"]'
            );


        if (residentialRadio) {
            residentialRadio.checked = true;
        }


        buildRateOptions("residencial");


        if (quoteForm) {

            quoteForm.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }


        window.setTimeout(
            () => {

                if (energyConsumption) {
                    energyConsumption.focus();
                }

            },
            500
        );

    }


    if (recalculateButton) {

        recalculateButton.addEventListener(
            "click",
            resetQuote
        );

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    buildRateOptions(
        getSelectedProjectType()
    );

});