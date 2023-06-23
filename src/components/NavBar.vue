<template>
    <header>
        <center>
            <h1 class="nav-header">
                Post-List
            </h1>
        </center>
        
        <!-- <nav> -->
            <b-navbar toggleable="md" type="blue" variant="blue">
       
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                <b-nav-item href="/posts"><h3 class="menu-link">Post</h3></b-nav-item>
                <b-nav-item href="/users"><h3 class="menu-link">Users</h3></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>

            <router-view></router-view>
    
        <!-- </nav> -->
    </header>
 

</template>

<style>
header {
    padding-top:15px;
    padding-bottom:0;
    background:#009BDE;

}
header h1, .menu-link {
    color:#FFF !important;
}
nav {
    padding:0 !important;
}
</style>