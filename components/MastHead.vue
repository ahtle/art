<template>
    <header class="box-shadow">
        <section class="container">
            <div class="row">
                <div class="col-md-4">
                    <nuxt-link to="/">
                        <img id="dom-logo" src="~/assets/images/dom-logo.png">
                    </nuxt-link>
                </div>

                <div id="my-apps-container" class="col-md-8">
                    <button class="btn btn-primary">My Apps</button>
                </div>
            </div>
        </section>
    </header>
</template>

<style>
    header {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3000;
    }

    #dom-logo {
        height: 60px;
        width: 100%;
    }

    #my-apps-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #my-apps-container button {
        width: 80px;
        height: 30px;
        font-size: 14px;
        background-color: #8c1515;
    }

</style>

