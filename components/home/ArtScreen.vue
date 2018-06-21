<template>

    <section id="art-screen">
        <div class="slide-panel" :class="slidePanelClass" id="panel-1" @click="expandPanel(0)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <p><span>F</span>inance</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[0]">
                    <div class="text-container">
                    <h1>Finance</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#finance"></a>
                </div>
            </transition>

        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-2" @click="expandPanel(1)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <p><span>H</span>uman Resources</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[1]">
                    <div class="text-container" :class="postExpandTextContainerClass[1]">
                        <h1>Human Resources</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#hr"></a>
                </div>
            </transition>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-3" @click="expandPanel(2)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <div class="site-title">
                        <h1>A</h1>
                        <span>Administrative</span>
                    </div>
                    <p><span>F</span>aculty Affairs</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[2]">
                    <div class="text-container">
                    <h1>Faculty Affairs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#faculty"></a>
                </div>
            </transition>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-4" @click="expandPanel(3)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <div class="site-title">
                        <h1>R</h1>
                        <span>& &nbsp;Research</span>
                    </div>
                    <p><span>O</span>perations</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[3]">
                    <div class="text-container">
                    <h1>Operations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#operations"></a>
                </div>
            </transition>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-5" @click="expandPanel(4)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <div class="site-title">
                        <h1>T</h1>
                        <span>Tools</span>
                    </div>
                    <p><span>C</span>ommunications</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[4]">
                    <div class="text-container">
                    <h1>Communications</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#communications"></a>
                </div>
            </transition>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-6" @click="expandPanel(5)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <p><span>R</span>esearch</p>
                </div>
            </transition>

            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[5]">
                    <div class="text-container">
                    <h1>Research</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>

                    <a class="arrow-down" href="#research"></a>
                </div>
            </transition>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-7" @click="expandPanel(6)">
            <transition name="fade">
                <div class="pre-expand" v-if="showPreExpand">
                    <p><span>C</span>linical</p>
                </div>
            </transition>
            
            <transition name="fade">
                <div class="post-expand" v-if="showPostExpand[6]">
                    <div class="text-container">
                    <h1>Clinical</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    </div>
            
                    <a class="arrow-down" href="#clinical"></a>
                </div>
            </transition>
        </div>

        <transition name="fade">
            <a class="affix-nav" v-if="showXButton" @click="initialPanel()"><span>X</span></a>
        </transition>
    </section>
</template>

<style>
    #art-screen {
        margin-top: 60px;
        /* z-index: 1000; */
        height: 95vh;
        width: 100%;
        position: relative;
        background-color: #f9f6ef;
        background-size: cover;
        display: flex;
    }

    .slide-panel {
        display: inline-block;
        height: 100%;
        flex: 1;
        float: left;
        margin-left: 4px;
        margin-right: 4px;
        opacity: 0;
        transition: all 0.5s linear;
        background: url('~assets/images/lake.jpg') no-repeat scroll;
        background-size: cover;
    }

    .pre-expand{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .pre-expand p {
        color: #fff;
        font-size: 1.4em;
        text-align: center;
    }

    .pre-expand p span {
        color: orange;
        font-size: 1.2em;
        font-weight: bold;
    }

    .pre-expand .site-title {
        position: absolute;
        top: 40px;
    }

    .site-title h1 {
        text-align: center;
        font-size: 6em;
        color: orange;
    }

    .site-title span {
        text-align: center;
        font-size: 20pt;
        color: #b1040e;
    }

    .top-blank, .bottom-blank {
        background-color: rgb(41, 46, 48);
        width: 100%;
        position: absolute;
    }

    .top-blank {
        top: 0;
        transition: all 0.5s ease;
    }

    .bottom-blank {
        bottom: 0;
        transition: all 0.5s ease;
    }

    #panel-1 {
        background-position-x: calc(-100vw * 0 / 7);
    }

    #panel-1 .pre-expand .top-blank, #panel-1 .pre-expand .bottom-blank {
        height: 150px;
    }

    #panel-2 {
        background-position-x: calc(-100vw * 1 / 7);
    }

    #panel-2 .pre-expand .top-blank, #panel-2 .pre-expand .bottom-blank {
        height: 100px;
    }

    #panel-3 {
        background-position-x: calc(-100vw * 2 / 7);
    }

    #panel-3 .pre-expand .top-blank, #panel-3 .pre-expand .bottom-blank {
        height: 50px;
    }

    #panel-4 {
        background-position-x: calc(-100vw * 3 / 7);
    }

    #panel-5 {
        background-position-x: calc(-100vw * 4 / 7);
    }

    #panel-5 .pre-expand .bottom-blank, #panel-5 .pre-expand .top-blank {
        height: 50px;
    }

    #panel-6 {
        background-position-x: calc(-100vw * 5 / 7);
    }

    #panel-6 .pre-expand .bottom-blank, #panel-6 .pre-expand .top-blank {
        height: 100px;
    }

    #panel-7 {
        background-position-x: calc(-100vw * 6 / 7);
    }

    #panel-7 .pre-expand .bottom-blank, #panel-7 .pre-expand .top-blank {
        height: 150px;
    }

    .post-expand {
        height: 100%;
        transition: all 1s linear;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .post-expand .text-container {
        position: absolute;
        top: 30%;
        left: 30px;
        right: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.5);
    }

    .post-expand h1 {
        color: orange;
        font-size: 4em;
    }

    .post-expand p {
        color: #fff;
        font-size: 2em;
        width: 60%;
    }

    .arrow-down {
        position: absolute;
        bottom: 140px;
        left: 50%;
        border: solid #fff;
        border-width: 0 10px 10px 0;
        display: inline-block;
        padding: 0 20px 40px;
        transform: rotate(45deg);
    }

    /* affix X button on expand */
    .affix-nav {
        z-index: 2000;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50px;
        right: 5%;
        height: 52px;
        width: 52px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .affix-nav span {
        color: #fff;
        font-size: 22px;
    }

    /* utility */
    .opacity {
        opacity: 1 !important;
    }

    .no-margin {
        margin: 0; 
    }

    /* vue animation */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<script>
    export default {
        data () {
            return {
                slidePanelClass: '',
                showXButton: false,
                showPreExpand: true,
                showPostExpand: [false, false, false, false, false, false, false],
                postExpandTextContainerClass: ['', '', '', '', '', '', ''],
            }
        },
        methods: {
            initialAnimation() {
                setTimeout(() => {
                    $('#panel-1, #panel-7').addClass('opacity');
                }, 300);
                setTimeout(() => {
                    $('#panel-2, #panel-6').addClass('opacity');
                }, 600);
                setTimeout(() => {
                    $('#panel-3, #panel-5').addClass('opacity');
                }, 900);
                setTimeout(() => {
                    $('#panel-4').addClass('opacity');
                }, 1200);
            },

            expandPanel(index) {
                this.slidePanelClass = 'opacity no-margin';
                this.showXButton = true;
                this.showPreExpand = false;
                this.showPostExpand[index] = true;
            },

            initialPanel() {
                this.showXButton = false;
                this.showPostExpand = [false, false, false, false, false, false, false];

                setTimeout(() => {
                    this.slidePanelClass = 'opacity';
                    this.showPreExpand = true;
                }, 300);
            }
        },
        mounted () {
            this.initialAnimation();
        }
    }
</script>