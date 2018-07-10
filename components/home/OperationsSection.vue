<template>
    <section id="operations" name="operations" class="panel">
        <!-- <h1 class="section-header text-center" style="margin-bottom: 25px;">Operations</h1>
        <h3 class="section-subheader text-center" style="margin-bottom: 50px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.</h3> -->
  
        <div class="flex-container">
            <div class="app-card" style="width: 25%; background-color: #717171;">                
                <div class="app-detail">
                    <h2 class="app-title" style="color: orange; font-size: 2em;">Operations</h2>
                    <p style="color: #fff; font-size: 1.5em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                </div>
            </div>

            <div class="app-card box-shadow" style="width: 25%">
                <div class="app-image-container" id="domcomp-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">shc request</h2>
                    <p>Redevelopment of SHC request system with Stanford SUNet ID authentication to make it compatible with all our secure systems, and make it more convenient for users with the single sign on.</p>
                </div>
            </div>
        
            <div class="app-card box-shadow" style="width: 25%">
                <div class="app-image-container" id="domresources-image"></div>
                
                <div class="app-detail">
                    <h2 class="app-title">domresources</h2>
                    <p>Central hosting of internal resources for the department in a statc format.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#finance {
    padding-left: 60px; 
    padding-right: 60px;
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

#domresources-image {
    background-image: url('~assets/images/domresources.png');
}

</style>


<script>
export default {
    
}
</script>
