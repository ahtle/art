<template>
    <section id="finance" name="finance" class="panel sand">
        <h1 class="section-header text-center" style="margin-bottom: 25px;">Finance</h1>
        <h3 class="section-subheader text-center" style="margin-bottom: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.</h3>
  
        <div class="flex-container">
            <div class="app-card box-shadow" style="width: 25%">
                <div class="app-image-container" id="domcomp-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">domcomp</h2>
                    <p>Faculty compensation reporting, clinical incentive and bonus calculation. Workflow from compensation reporting to OTP generation. 
                        Division roll up for analytic insights. Faculty direct and secure access to their own reports for transparency and communications.</p>
                </div>
            </div>
        
            <div class="app-card box-shadow" style="width: 25%">
                <div class="app-image-container" id="domcommitments-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">domcommitments</h2>
                    <p>Faculty commitment requesting, tracking, management, and reporting system. Workflow for new commitment request with progressive 
                        roles of authority for documenting and approving. Commitment tracking and reporting through visualization, and drill down by any defined criteria.</p>
                </div>
            </div>
        
            <div class="app-card box-shadow" style="width: 25%">
                <div class="app-image-container" id="domfingate-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">domfingate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
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
