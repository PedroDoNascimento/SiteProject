// cadastro.js
function logar() {
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));

    var usuarioExistente = usuariosCadastrados.find(function (user) {
        return user.nome === usuario && user.senha === senha;
    });

    if (usuarioExistente) {
        alert('Sucesso');
        localStorage.setItem('usuarioLogado', usuario);
        
    } 
     else {
        alert('Usuário ou senha incorretos');
    }
}
