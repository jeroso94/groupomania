<template>
    <div class="sidebar">
        <img src="../../public/icon.png" width="50%"/>
        <div class="title">
            <h1>Groupomania</h1> 
            <div class="hello">
                <h3 v-if="user">Bienvenue {{user.email}} </h3>
                <h3 v-if="!user">Non connecté !</h3>
            </div>
        </div>

        <div class="menu-items" v-if="!user">
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    💥 Brûlant
                </div>
            </router-link>

            <router-link to="/login" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    👨🏻‍🚀✅ Se connecter
                </div>
            </router-link>

            <router-link to="/signup" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    📔 S'inscrire
                </div>
            </router-link>
        </div>

        <div class="menu-items" v-if="user">
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    💥 Brûlant
                </div>
            </router-link>

            <router-link to="/message" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    🧻 Message
                </div>
            </router-link>

            <a href="javascript:void(0)" @click="handleClick" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    👨🏻‍🚀❎ Se déconnecter
                </div>
            </a>

            <router-link to="/optout" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    ❌ Supprimer mon profil
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default { 
    props: ['user'],
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    .title {
        color: white;
        font-size: 24px;
        margin-top: 10px;
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    .menu-items > * {
        margin-top: 60px;
    }

    .side-btn:focus {
        outline: none;
    }

    .side-btn.active {
        position: relative;
        background-color: white;
        color: darkslateblue;
        font-weight: 500;
        margin-left: 10px;
        border-radius: 30px 0 0 30px;
    }

    .side-btn.active::before {
        position: absolute;
        content: "";
        top: -30px;
        right: 0px;
        height: 30px;
        width: 30px;
        background-color: white;
    }

    .side-btn.active::after {
        position: absolute;
        content: "";
        bottom: -30px;
        right: 0px;
        height: 30px;
        width: 30px;
        background-color: white;
    }

    .side-btn {
        border: none;
        padding: 16px 0px;
        cursor: pointer;
        font-size: 16px;
        color:white;
        background-color: transparent;
    }

    .side-btn.active .link-container::before {
        position: absolute;
        content: "";
        top: -60px;
        right: 0px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: darkslateblue;        
    }

    .side-btn.active .link-container::after {
        position: absolute;
        content: "";
        bottom: -60px;
        right: 0px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: darkslateblue;        
        z-index: 99;
    }
</style>