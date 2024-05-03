// confi.js

// Verifica se já existem usuários cadastrados
if (!localStorage.getItem('usuarios')) {
    // Se não houver usuários cadastrados, inicializa um array vazio
    localStorage.setItem('usuarios', JSON.stringify([]));
}

function cadastrarNovoUsuario() {
    var nome = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;

    // Obtém a lista de usuários cadastrados do localStorage
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));

    // Verifica se o nome de usuário já está em uso
    var usuarioExistente = usuariosCadastrados.find(function (user) {
        return user.nome === nome;
    });

    if (usuarioExistente) {
        alert('Nome de usuário já está em uso. Por favor, escolha outro.');
        return false;
    }

    // Adiciona o novo usuário à lista
    usuariosCadastrados.push({ nome: nome, senha: senha });

    // Atualiza a lista de usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
    alert('Usuário cadastrado com sucesso!');
    return true;
}
