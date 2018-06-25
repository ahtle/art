<template>

    <section id="art-screen">
        <div class="slide-panel" :class="slidePanelClass" id="panel-1" @click="expandPanel(0)">
            <transition name="fade">
                <div v-if="showSlideCoverOne" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('finance')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-2" @click="expandPanel(1)">
            <transition name="fade">
                <div v-if="showSlideCoverTwo" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('hr')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-3" @click="expandPanel(2)">
            <transition name="fade">
                <div v-if="showSlideCoverThree" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('faculty')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-4" @click="expandPanel(3)">
            <transition name="fade">
                <div v-if="showSlideCoverFour" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('operations')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-5" @click="expandPanel(4)">
            <transition name="fade">
                <div v-if="showSlideCoverFive" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('communications')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-6" @click="expandPanel(5)">
            <transition name="fade">
                <div v-if="showSlideCoverSix" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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

                    <a class="arrow-down" v-on:click="emitNavigateTo('research')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <div class="slide-panel" :class="slidePanelClass" id="panel-7" @click="expandPanel(6)">
            <transition name="fade">
                <div v-if="showSlideCoverSeven" class="slide-cover"></div>
            </transition>

            <div class="panel-frame float-left" :class="panelFrameClass"></div>

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
            
                    <a class="arrow-down" v-on:click="emitNavigateTo('clinical')"></a>
                </div>
            </transition>

            <div class="panel-frame float-right" :class="panelFrameClass"></div>
        </div>

        <transition name="fade">
            <a class="affix-nav" v-if="showXButton" @click="initialPanel()"><span>X</span></a>
        </transition>
    </section>
</template>

<style>
   #art-screen {
        z-index: 1000;
        margin-top: 60px;
        height: 95vh;
        width: 100%;
        position: relative;
        background-color: #f9f6ef;
        background-size: cover;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background: url('~assets/images/lake.jpg') no-repeat scroll;
        background-size: cover;
        background-position: center center;
    }
    .slide-panel {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 100%;
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
    }
    .slide-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #f9f6ef;
        z-index: 2000;
    }
    .panel-frame {
        background-color: #f9f6ef;
        height: 100%;
        width: 4px;
        transition: all 0.5s linear;
    }
    .pre-expand{
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        background: rgba(0, 0, 0, .1);
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
        z-index: 1000;
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
    .post-expand {
        height: 100%;
        -webkit-transition: all 1s linear;
        transition: all 1s linear;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .post-expand .text-container {
        position: absolute;
        top: 30%;
        left: 30px;
        right: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        background: rgba(0, 0, 0, .5);
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
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }

    /* affix X button on expand */
    .affix-nav {
        z-index: 2000;
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        top: 50px;
        right: 5%;
        height: 52px;
        width: 52px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .8);
        cursor: pointer;
    }
    .affix-nav span {
        color: #fff;
        font-size: 22px;
    }

</style>

<script>
    export default {
        data () {
            return {
                slidePanelClass: '',
                showSlideCoverOne: true,
                showSlideCoverTwo: true,
                showSlideCoverThree: true,
                showSlideCoverFour: true,
                showSlideCoverFive: true,
                showSlideCoverSix: true,
                showSlideCoverSeven: true,
                panelFrameClass: '',
                showXButton: false,
                showPreExpand: true,
                showPostExpand: [false, false, false, false, false, false, false],
                postExpandTextContainerClass: ['', '', '', '', '', '', ''],
            }
        },
        methods: {
            emitNavigateTo(value) {
                this.$emit('navigate', value);
            },

            initialAnimation() {
                setTimeout(() => {
                    this.showSlideCoverOne = false;
                }, 200);
                setTimeout(() => {
                    this.showSlideCoverSeven = false;
                }, 400);
                setTimeout(() => {
                    this.showSlideCoverTwo = false;
                }, 600);
                setTimeout(() => {
                    this.showSlideCoverSix= false;
                }, 800);
                setTimeout(() => {
                    this.showSlideCoverThree = false;
                }, 1000);
                setTimeout(() => {
                    this.showSlideCoverFive = false;
                }, 1200);
                setTimeout(() => {
                    this.showSlideCoverFour = false;
                }, 1400);
            },

            expandPanel(index) {
                this.panelFrameClass = 'no-width';
                this.slidePanelClass = 'position-initial';
                this.showXButton = true;
                this.showPreExpand = false;
                this.showPostExpand[index] = true;
            },

            initialPanel() {
                this.showXButton = false;
                this.panelFrameClass = '';
                this.showPostExpand = [false, false, false, false, false, false, false];
                this.showPreExpand = true;
                this.slidePanelClass = 'position-initial no-pointer-events';

                setTimeout(() => {
                    this.slidePanelClass = '';
                }, 1000);
            }
        },
        mounted () {
            this.initialAnimation();
        }
    }
</script>