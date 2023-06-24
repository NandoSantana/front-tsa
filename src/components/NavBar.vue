<template>
<div>
    <header>
        <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <center>
            <h1 class="nav-header">
                Post-List
            </h1>
        </center>
        
        <b-navbar toggleable="md" type="blue" variant="blue">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <b-nav-item href="/posts"><h4 class="menu-link">Post</h4></b-nav-item>
            <b-nav-item href="/users"><h4 class="menu-link">Users</h4></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>

    </header>
    <router-view></router-view>

 </div>

</template>

<style scoped>
header {
    padding-top:15px;
    padding-bottom:0;
    background:#009BDE;
}
header h1, .menu-link {
    color:#FFF !important;
    padding-top:10px;
}
h4.menu-link:hover {
    text-decoration: none;
     outline: none;
}
nav {
    padding:0 !important;
}
</style>