<template>
    <section id="clinical" name="clinical" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 50px; width: 100%;">Clinical</h1>

        <div id="domquality" class="app-box box-shadow">
            <div class="overlay">
                <h3 class="app-title">domquality</h3>
                <p class="app-description">Quality improvement projects enrollment, tracking, management. 
                    Allow trainees to enroll in specific QI projects and allow mentors to monitor and assess, for eventual reporting to national QI organization.</p>
            </div>
        </div>
        
        <div id="cdh-inventory" class="app-box box-shadow">
            <div class="overlay">
                <h3 class="app-title">CDH Inventory</h3>
                <p class="app-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
    #clinical {
        padding-left: 90px;
        padding-right: 90px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .app-box {
        width: 35%;
        height: 500px;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    #domquality {
        background-image: url('~assets/images/domquality.jpg');
    }

    #cdh-inventory {
        background-image: url('~assets/images/campus-big-03.jpg');
    }

    .overlay {
        background: rgba(0, 0, 0, 0.4);
        padding: 50px;
        height: 100%;
    }

    .app-title {
        color: orange;
        font-size: 40px;
    }

    .app-description {
        color: #fff;
        font-size: 30px;
    }
</style>
