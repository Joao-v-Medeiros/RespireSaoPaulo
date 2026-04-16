const AuthService = {
    // Busca a lista de usuários no LocalStorage
    _getUsers() {
        return JSON.parse(localStorage.getItem('usuarios_sistema') || '[]');
    },

    // Lógica de Cadastro
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

    // Lógica de Login
    login(email, senha) {
        const users = this._getUsers();
        const validUser = users.find(u => u.email === email && u.senha === senha);

        if (validUser) {
            // Cria a sessão usando sessionStorage
            sessionStorage.setItem('usuario_logado', JSON.stringify({
                nome: validUser.nome,
                email: validUser.email
            }));
            return true;
        }
        return false;
    },

    // Verifica se o usuário tem permissão para ver a página
    checkAuth() {
        if (!sessionStorage.getItem('usuario_logado')) {
            window.location.href = "login.html";
        }
    },

    // Encerra a sessão
    logout() {
        sessionStorage.removeItem('usuario_logado');
        window.location.href = "login.html";
    }
};