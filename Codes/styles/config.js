// confi.js
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([]));
}
function cadastrarNovoUsuario() {
    var nome = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));
    var usuarioExistente = usuariosCadastrados.find(function (user) {
        return user.nome === nome;
    });

    if (usuarioExistente) {
        alert('Nome de usuário já está em uso. Por favor, escolha outro.');
        return false;
    }
    
    usuariosCadastrados.push({ nome: nome, senha: senha });
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
    alert('Usuário cadastrado com sucesso!');
    return true;
}
