<template>
    <footer id="global-footer">
        <div class="container">
            <div class="row">
                <div id="bottom-logo" class="col-xs-6 col-sm-2">
                    <a href="https://www.stanford.edu">
                        <img src="~assets/images/footer-stanford-logo@2x.png" alt="Stanford University">
                    </a>
                </div>

                <div id="bottom-text" class="col-xs-6 col-sm-10">
                    <ul>
                        <li class="home">
                            <a href="https://www.stanford.edu">SU Home</a>
                        </li>
                        <li class="maps alt">
                            <a href="https://visit.stanford.edu/plan/maps.html" data-ua-action="visit.stanford.edu/plan/maps" data-ua-label="global-footer" class="su-link">Maps &amp; Directions</a>
                        </li>
                        <li class="search-stanford">
                            <a href="https://stanford.edu/search/">Search Stanford</a>
                        </li>
                        <li class="terms alt">
                            <a href="https://www.stanford.edu/site/terms.html">Terms of Use</a>
                        </li>
                        <li class="emergency-info">
                            <a href="https://emergency.stanford.edu/" data-ua-label="global-footer" class="su-link">Emergency Info</a>
                        </li>
                    </ul>

                    <p class="copyright vcard col-sm-10">© 
                        <span class="fn org">Stanford University</span>.&nbsp; 
                        <span class="adr"><span class="locality">Stanford</span>, <span class="region">California</span> <span class="postal-code">94305</span></span>. 
                        <span id="termsofuse">
                            <a href="https://www.stanford.edu/group/security/dmca.html" data-ua-action="copyright-complaints" data-ua-label="global-footer" class="su-link">Copyright Complaints</a>&nbsp;&nbsp;&nbsp;
                            <a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4" data-ua-action="trademark-notice" data-ua-label="global-footer" class="su-link">Trademark Notice</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    #global-footer {
        position: relative;
        background-color: #8c1515;
        color: #e3dfd5;
        height: 120px;
        padding-top: 30px;
        font-family:"Source Sans Pro", sans-serif;
    }

    .flex-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    img {
        width: 120px;
    }

    #bottom-logo {
        margin: -5px 0 10px;
    }

    #bottom-text ul {
        padding-left: 0;
        margin: 0;
        list-style: none;
    }

    #global-footer #bottom-text ul li {
        width: auto;
        margin: 0 15px 3px 0;
        padding: 0;
        float: none;
        clear: left;
        display: inline-block;
    }

    #bottom-text ul li a {
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        color: #e3dfd5;
    }

    #bottom-text p {
        padding-left: 0;
        font-size: 16px;
        font-weight: 600;
    }

     #termsofuse {
        margin-left: 10px;
        font-size: 14px;
    }

    #termsofuse a {
        color: #e3dfd5;
    }
</style>

