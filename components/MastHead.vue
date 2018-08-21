<template>
    <header class="box-shadow">
        <section class="container">
            <div class="row">
                <div class="col-md-4">
                    <div id="dom-logo-container">
                        <nuxt-link to="/">
                            <img id="dom-logo" src="~/assets/images/dom-logo.png">
                        </nuxt-link>
                        <div id="dom-signature">
                            <div id="site-name">IT Applications</div>
                            <div id="dom-name">Department of Medicine</div>
                        </div>
                    </div>
                </div>

                <div id="my-apps-container" class="col-md-8">
                    <button class="btn btn-primary">My Apps</button>
                </div>
            </div>
        </section>
    </header>
</template>

<style scoped>
    header {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3000;
    }

    #dom-logo-container {
        display: flex;
        padding: 4px 0;
    }

    #dom-logo-container > a {
        border-right: 1px solid #333;
        padding-right: 5px;
    }

    #dom-logo {
        height: 52px;
    }

    #dom-signature {
        padding-left: 8px;
        padding-top: 8px;
        color: #333;
    }

    #site-name {
        line-height: 15px;
    }

    #dom-name {
        font-size: 1.2rem;
        font-weight: bold;
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

