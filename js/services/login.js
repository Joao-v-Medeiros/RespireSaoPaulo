const AuthService = {
    _getUsers() {
        return JSON.parse(localStorage.getItem('usuarios_sistema') || '[]');
    },

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

    login(email, senha) {
        const users = this._getUsers();
        const validUser = users.find(u => u.email === email && u.senha === senha);

        if (validUser) {
            sessionStorage.setItem('sessao_ativa', JSON.stringify({
                nome: validUser.nome,
                email: validUser.email
            }));
            return true;
        }
        return false;
    },

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
