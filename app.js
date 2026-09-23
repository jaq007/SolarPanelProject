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

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToHomeButton.classList.add("visible");
            } else {
                backToHomeButton.classList.remove("visible");
            }

        });

        backToHomeButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

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
                label: "DAC — Doméstica de Alto Consumo",
                title: "Tarifa DAC",
                description:
                    "Tarifa Doméstica de Alto Consumo. Se aplica cuando el consumo promedio supera el límite establecido para la localidad y deja de recibir el subsidio correspondiente a las tarifas domésticas."
            }

        ],


        pyme: [

            {
                value: "pdbt",
                label: "PDBT — Pequeña Demanda en Baja Tensión",
                title: "Tarifa PDBT",
                description:
                    "Pequeña Demanda en Baja Tensión. Está orientada a servicios comerciales o de negocio con menor nivel de demanda eléctrica."
            },

            {
                value: "gdbt",
                label: "GDBT — Gran Demanda en Baja Tensión",
                title: "Tarifa GDBT",
                description:
                    "Gran Demanda en Baja Tensión. Corresponde a instalaciones con una demanda eléctrica superior a la considerada para PDBT."
            },

            {
                value: "gdmto",
                label: "GDMTO — Gran Demanda en Media Tensión Ordinaria",
                title: "Tarifa GDMTO",
                description:
                    "Gran Demanda en Media Tensión Ordinaria. Está dirigida a usuarios comerciales o industriales conectados en media tensión."
            },

            {
                value: "gdmth",
                label: "GDMTH — Gran Demanda en Media Tensión Horaria",
                title: "Tarifa GDMTH",
                description:
                    "Gran Demanda en Media Tensión Horaria. Considera periodos horarios de consumo, por lo que el costo de la energía puede variar según el horario."
            },

            {
                value: "dist",
                label: "DIST — Demanda Industrial en Subtransmisión",
                title: "Tarifa DIST",
                description:
                    "Tarifa asociada con usuarios de gran demanda conectados a niveles de subtransmisión."
            },

            {
                value: "dit",
                label: "DIT — Demanda Industrial en Transmisión",
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
        document.getElementById("rateHelperText");

    const rateInfoTitle =
        document.getElementById("rateInfoTitle");

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

        rates.forEach(function (rate) {

            const option =
                document.createElement("option");

            option.value = rate.value;
            option.textContent = rate.label;

            cfeRateSelect.appendChild(
                option
            );

        });


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


        if (projectType === "residencial") {

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
                "Selecciona PDBT, GDBT, GDMTO, GDMTH, DIST o DIT de acuerdo con la tarifa indicada en tu recibo.";

        }

    }


    /* =====================================
       SHOW INFORMATION FOR SELECTED RATE
    ====================================== */

    function updateSelectedRateInformation() {

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


        rateInfoTitle.textContent =
            selectedRate.title;

        rateInfoDescription.textContent =
            selectedRate.description;

    }


    /* =====================================
       PROJECT TYPE CHANGE
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

       Clicking Residential or PyME earlier
       on the website automatically selects
       the corresponding project in the
       quote form.
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
       INITIALIZE DROPDOWN
    ====================================== */

    updateCfeRates(
        getSelectedProject()
    );


    /* =====================================
       QUOTE FORM

       CHECKPOINT 11B:
       The actual solar calculation will
       be implemented in the next step.

       For now we prevent the browser from
       refreshing the page.
    ====================================== */

    const solarQuoteForm =
        document.getElementById(
            "solarQuoteForm"
        );


    if (solarQuoteForm) {

        solarQuoteForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                /*
                    Solar calculation will
                    be added in Checkpoint 11B.
                */

            }
        );

    }

});