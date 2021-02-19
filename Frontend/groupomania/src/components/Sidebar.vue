<template>
    <section class="sidebar">
        <header class="title">
            <img class="logo" src="../../public/icon.png" width="50%" alt="Logo Groupomania"/>
            <h1>Groupomania</h1> 
            <p v-if="user">Bienvenue {{user}} </p>
            <p v-if="!user">Non connecté !</p>
        </header>

        <nav class="menu-items" v-if="!user">
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    🔥 Brûlant
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
        </nav>

        <nav class="menu-items" v-if="user">
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    🔥 Surfer !
                </div>
            </router-link>

            <router-link to="/post" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    🧻 Publier
                </div>
            </router-link>

            <a href="http://localhost:8080/" @click="handleClick" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    👨🏻‍🚀❎ Se déconnecter
                </div>
            </a>

            <router-link to="/optout" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    ❌ Supprimer mon profil
                </div>
            </router-link>
        </nav>
        
        <footer>
            <p>
                <a href="https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AA">
                <img src="https://achecker.ca/images/icon_W2_aa.jpg" alt="WCAG 2.0 (Level AA)" height="32" width="102" />
                </a>
            </p>
        </footer>
    </section>
</template>

<script>
export default { 
    data () {
        return {
            user : localStorage.getItem('user')
        }
    },
    methods: {
        handleClick() {
            localStorage.clear();
        }
    }
}
</script>

<style lang="scss" scoped>
    .logo {
        margin-top: 30px;
        // padding: 10px;
        border-radius: 90px;
    }

    .title {
        padding: 5px;
        color: white;
        font-size: 18px;
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    .menu-items > * {
        margin-top: 60px;
    }

    .side-btn {
        text-decoration: none;
        border: none;
        padding: 16px 0px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        color:white;
        background-color: transparent;

        &:focus {
            outline: none;
        }

        &.active {
            position: relative;
            background-color: white;
            color: black;
            font-weight: 700;
            margin-left: 10px;
            border-radius: 30px 0 0 30px;

            &::before {
                position: absolute;
                content: "";
                top: -30px;
                right: 0px;
                height: 30px;
                width: 30px;
                background-color: white;
            }

            &::after {
                position: absolute;
                content: "";
                bottom: -30px;
                right: 0px;
                height: 30px;
                width: 30px;
                background-color: white;
            }
            
            & .link-container::before {
                position: absolute;
                content: "";
                top: -60px;
                right: 0px;
                height: 60px;
                width: 60px;
                border-radius: 50%;
                background-color: black;        
            }

            & .link-container::after {
                position: absolute;
                content: "";
                bottom: -60px;
                right: 0px;
                height: 60px;
                width: 60px;
                border-radius: 50%;
                background-color: black;        
                z-index: 99;
            }
        }
    }
</style>