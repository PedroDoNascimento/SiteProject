// cadastro.js

function logar() {
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    // Obtém a lista de usuários cadastrados do localStorage
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));

    // Verifica se o usuário e a senha estão corretos
    var usuarioExistente = usuariosCadastrados.find(function (user) {
        return user.nome === usuario && user.senha === senha;
    });

    if (usuarioExistente) {
        alert('Sucesso');
        localStorage.setItem('usuarioLogado', usuario);
    } else {
        alert('Usuário ou senha incorretos');
    }
}
