<<<<<<< HEAD
/**
 * AuthService: Gerenciador Global de Autenticação
 * Utiliza localStorage para simular o Banco de Dados (Usuários)
 * Utiliza sessionStorage para controlar quem está logado no momento
 */
const AuthService = {

    
    
    // Busca a lista de usuários cadastrados no navegador
=======
const AuthService = {
>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
    _getUsers() {
        return JSON.parse(localStorage.getItem('usuarios_sistema') || '[]');
    },

<<<<<<< HEAD
    // 1. REGISTRO (Use na sua tela de cadastro)
    register(email, senha) {
        const users = this._getUsers();
        
        // Verifica se o email já existe
        if (users.find(u => u.email === email)) {
            alert("Este e-mail já está em uso!");
            return false;
        }

        // Adiciona novo usuário
        users.push({ email, senha });
        localStorage.setItem('usuarios_sistema', JSON.stringify(users));
        alert("Cadastro realizado com sucesso!");
        return true;
    },

    // 2. LOGIN (Cria a sessão)
=======
    register(nome, email, senha) {
        const users = this._getUsers();

        if (users.find(u => u.email === email)) {
            alert("Este e-mail já está cadastrado!");
            return false;
        }

        users.push({ nome, email, senha });
        localStorage.setItem('usuarios_sistema', JSON.stringify(users));
        return true;
    },

>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
    login(email, senha) {
        const users = this._getUsers();
        const validUser = users.find(u => u.email === email && u.senha === senha);

        if (validUser) {
<<<<<<< HEAD
            // Salva no sessionStorage para manter o login apenas nesta aba/sessão
            sessionStorage.setItem('sessao_ativa', JSON.stringify({
                email: validUser.email,
                loginTime: new Date().getTime()
=======
            sessionStorage.setItem('sessao_ativa', JSON.stringify({
                nome: validUser.nome,
                email: validUser.email
>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
            }));
            return true;
        }
        return false;
    },

<<<<<<< HEAD
    // 3. PROTEÇÃO DE ROTA (Use nas páginas internas como Home)
    checkAuth() {
        const sessao = sessionStorage.getItem('sessao_ativa');
        if (!sessao) {
            // Se não houver sessão, redireciona para login
            window.location.href = "login.html";
        }
    },

    // 4. LOGOUT
    logout() {
        sessionStorage.removeItem('sessao_ativa');
        window.location.href = "login.html";
    }
};

// Se você estiver em uma página protegida (ex: home.html), 
// chame AuthService.checkAuth() logo no início do script dela.
=======
    checkAuth() {
        if (!sessionStorage.getItem('sessao_ativa')) {
            window.location.href = "/pages/login.html";
        }
    },

    logout() {
        sessionStorage.removeItem('sessao_ativa');
        window.location.href = "/pages/login.html";
    }
};
>>>>>>> bb8996f7f515de0b2725d3d74e266ad11e7fcda8
