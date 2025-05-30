<template>
    <main class="main-container">
        <header class="main-header">
            <h1 class="header-title">Seja Bem Vindo <span class="header-highlight">Empresa X</span></h1>
        </header>

        <div class="main-content">
            <section class="search-filters">
                <form action="" class="search-form">
                    <input type="search" class="search-input" placeholder="Buscar...">
                    <article class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="tecnologia 1">
                            Tecnologia 1
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="tecnologia 2">
                            Tecnologia 2
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="tecnologia 3">
                            Tecnologia 3
                        </label>
                    </article>
                    <article class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="projetos">
                            Projetos
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="propostas">
                            Propostas
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="interesse" value="empresas">
                            Empresas
                        </label>
                    </article>
                </form>
            </section>

            <section class="create-proposal">
                <form action="" class="proposal-form">
                    <div class="proposal-content-wrapper">
                        <h2 class="proposal-title">Crie sua proposta</h2>
                        <div class="proposal-container">
                            <article class="proposal-fields">
                                <input type="text" class="proposal-input" placeholder="Nome do projeto">
                                <textarea class="proposal-input" placeholder="Descrição do projeto"></textarea>
                                <input type="text" class="proposal-input" placeholder="Detalhes extras, observações...">
                            </article>
                            <article class="proposal-checkboxes">
                                <input type="text" class="proposal-input" placeholder="Valor da proposta">
                                <div class="proposal-technologies">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 1">
                                            Tecnologia 1
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 2">
                                            Tecnologia 2
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 3">
                                            Tecnologia 3
                                        </label>
                                    </div>
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 1">
                                            Tecnologia 1
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 2">
                                            Tecnologia 2
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="interesse" value="tecnologia 3">
                                            Tecnologia 3
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </form>

                <section class="profiles-section">
                    <h1 class="profiles-title">Veja perfis, projetos e propostas</h1>
                    <article class="profile-card">
                        <div class="profile-info">
                            <img src="../assets/profile.png" alt="" class="profile-img">
                            <p class="profile-name">Nome da empresa</p>
                        </div>
<router-link to="/perfil" class="profile-link">Visitar perfil</router-link>
                    </article>
                    <article class="profile-card">
                        <div class="profile-info">
                            <img src="../assets/profile.png" alt="" class="profile-img">
                            <p class="profile-name">Nome da empresa</p>
                        </div>
<router-link to="/perfil" class="profile-link">Visitar perfil</router-link>
                    </article>
                    <article class="profile-card">
                        <div class="profile-info">
                            <img src="../assets/profile.png" alt="" class="profile-img">
                            <p class="profile-name">Nome da empresa</p>
                        </div>
<router-link to="/perfil" class="profile-link">Visitar perfil</router-link>
                    </article>
                    <article class="profile-card">
                        <div class="profile-info">
                            <img src="../assets/profile.png" alt="" class="profile-img">
                            <p class="profile-name">Nome da empresa</p>
                        </div>
<router-link to="/perfil" class="profile-link">Visitar perfil</router-link>
                    </article>
                </section>
            </section>
        </div>
    </main>
</template>

<style scoped>
@import '../css/dashboard_empresa.css';
</style>
