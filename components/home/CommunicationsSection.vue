<template>
    <section id="communications" name="communications" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 50px;">Communications</h1>

        <div class="flex-container">
            <div class="app-card box-shadow" style="width: 20%">
                <div class="app-image-container" id="medicinecalendars-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">medicinecalendars</h2>
                    <p>Central depository of events in the department to allow user submission of events for general public consumption. 
                        Automated feed to any website that wants to display the events of their specific categories or keywords.</p>
                </div>
            </div>

            <div class="app-card box-shadow" style="width: 20%">
                <div class="app-image-container" id="surgerycalendars-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">surgerycalendars</h2>
                    <p>Similar system as Medicine Calendars, but for the department of surgery.</p>
                </div>
            </div>

            <div class="app-card box-shadow" style="width: 20%">
                <div class="app-image-container" id="newsletter-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                </div>
            </div>

            <div class="app-card box-shadow" style="width: 20%">
                <div class="app-image-container" id="annualreports-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">annual reports</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
    .flex-container {
        display: flex;
        flex-direction: row;
        align-content: space-between;
        padding-left: 60px;
        padding-right: 60px;
    }

    #medicinecalendars-image {
        background-image: url('~assets/images/medicinecalendars.png');
    }

    #surgerycalendars-image {
        background-image: url('~assets/images/surgerycalendars.png');
    }

    #newsletter-image {
        background-image: url('~assets/images/newsletter.png');
    }

    #annualreports-image {
        background-image: url('~assets/images/annualreport.png');
    }
</style>
