<template>
    <header>
        <center>
            <h1 class="nav-header">
                Post-List
            </h1>
        </center>
        
        <!-- <nav> -->
            <b-navbar toggleable="md" type="blue" variant="blue">
            <b-navbar-brand href="#">Menu</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item href="#">Link 1</b-nav-item>
                <b-nav-item href="#">Link 2</b-nav-item>
                <b-nav-item href="#">Link 3</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-view></router-view>
    
        <!-- </nav> -->
    </header>
 

</template>

<style>
header {
    padding:15px;
    background:#009BDE;

}
header h1 {
    color:#FFF;
}
</style>