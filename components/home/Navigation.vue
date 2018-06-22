<template>
    <section id="main-navigation" class="transparent-bg">
        <div class="container">
            <nav class="navbar">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#finance">Finance</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#hr">Human Resources</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#faculty">Faculty Affairs</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#operations">Operations</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#communications">Communications</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#research">Research</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#clinical">Clinical</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<style>
    #main-navigation {
        background-color: #8c1515;
        box-shadow: 0 0 10px rgba(0,0,0,.15), 0 3px 3px rgba(0,0,0,.15);
        position: fixed;
        top: 60px;
        z-index: 3000;
        width: 100%;
        transition: background-color 0.5s ease;
    }

    .navbar {
        justify-content: center;
        padding: 5px;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .navbar ul li {
        text-align: center;
        margin: 0 20px;
    }

    .navbar ul li a {
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
</style>


<script>
    export default {

    }
</script>