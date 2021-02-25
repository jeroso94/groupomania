<template>
    <section class="sidebar">
        <header class="title">
            <img class="logo" src="../../public/icon.png" alt="Logo Groupomania"/>
            <h1 class="company">Groupomania</h1> 
            <p v-if="user">Bienvenue {{user}} </p>
            <p v-if="!user">⚠ Non connecté</p>
        </header>

        <nav class="menu-items" v-if="!user">
            <router-link to="/" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">👨🏻‍🚀✅</p>
                    <p class="legendary">Se connecter</p>
                </div>
            </router-link>

            <router-link to="/signup" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">📔</p>
                    <p class="legendary">S'inscrire</p>
                </div>
            </router-link>
        </nav>

        <nav class="menu-items" v-if="user">
            <router-link to="/post" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">🧻</p>
                    <p class="legendary">Publier</p>
                </div>
            </router-link>

            <router-link to="/hot" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">🔥</p>
                    <p class="legendary">Surfer </p>
                </div>
            </router-link>

            <a href="http://localhost:8080/" @click="handleClick" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">👨🏻‍🚀❎</p>
                    <p class="legendary">Se déconnecter</p>
                </div>
            </a>

            <router-link to="/optout" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">
                    <p class="icons">❌</p> 
                    <p class="legendary">Supprimer mon profil</p>
                </div>
            </router-link>
        </nav>
        
        <footer>
            <p>
                <a href="https://achecker.ca/checker/index.php?uri=referer&gid=WCAG2-AA">
                <img class="acchecker" src="https://achecker.ca/images/icon_W2_aa.jpg" alt="WCAG 2.0 (Level AA)" />
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
    @media screen and (min-width: 320px) {
    .logo {
        margin-top: 5px;
        // padding: 10px;
        border-radius: 90px;
        block-size: 7vmax ;
    }

    .company {
        color: lightcoral;
        font-size: 2rem;
    }

    .title {
        padding: 5px;
        color: white;
        font-size: 1rem;
    }        
        .menu-items {
            display: flex;
            justify-content: space-around;
            // flex-direction: column;
            margin-top: 5px;
        }

        .menu-items > * {
            // margin-top: 30px;
        }

        .side-btn {
            text-decoration: none;
            border: none;
            // padding: 16px 0px;
            cursor: pointer;
            font-size: 1.0rem;
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
                font-weight: 1700;
                // margin-left: 10px;
                border-radius: 10px 10px 10px 10px;


            }
        }

        .icons, .legendary {
            margin: 0px;
        }

        footer {
            margin-top: 5px;
        }

        .acchecker {
            block-size: 2vmax;
        }
    }

    @media screen and (min-width: 768px) {
        
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

            & .link-container {
                display: flex;
                justify-content: center;
                align-items: center;

            }

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

        footer {
            margin-top: 80px;
        }
    }
</style>