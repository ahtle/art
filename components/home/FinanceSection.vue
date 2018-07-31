<template>
    <section id="finance" name="finance" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 25px;">Finance</h1>
        <h3 class="section-subheader text-center" style="margin-bottom: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.</h3>
  
        <div class="flex-container">
            <div class="app-card box-shadow" style="width: 25%">
                <div class="fa-container">
                    <font-awesome-icon icon="money-check-alt" />
                </div>

                <div class="app-detail">
                    <h2 class="app-title">DOM COMPENSATION</h2>
                    <h4 class="app-subtitle">Faculty bonus calculation and compensation reporting tool</h4>

                    <hr>

                    <ul>
                        <li>Restricted to campus access with SUNet ID authentication</li>
                        <li>VPN required if accessing off campus</li>
                    </ul>
                </div>
            </div>
        
            <div class="app-card box-shadow" style="width: 25%">
                <div class="fa-container">
                    <font-awesome-icon icon="money-check-alt" />
                </div>
                
                <div class="app-detail">
                    <h2 class="app-title">RAMP</h2>
                    <h4 class="app-subtitle">Resource Allocation Management and Planning tool</h4>

                    <hr>

                    <ul>
                        <li>Restricted to campus access with SUNet ID authentication</li>
                        <li>VPN required if accessing off campus</li>
                    </ul>
                </div>
            </div>
        
        </div>
    </section>
</template>

<style scoped>
#finance {
    padding-left: 30px; 
    padding-right: 30px;
}

.flex-container {
    display: flex;
    justify-content: space-around;
}

.app-card {
    background-color: #fff;
    margin: 0 15px;
}

.app-image-container {
    height: 250px;
    background-size: cover;
    background-position: center;
}

#domcomp-image {
    background-image: url('~assets/images/domcomp.png');
}

#domcommitments-image {
    background-image: url('~assets/images/domcommitments.png');
}

#domfingate-image {
    background-image: url('~assets/images/stanford-01.jpg');
}

</style>


<script>

export default {

}

</script>
