//Função digitar sozinho
function digitar(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML=''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML+=letra, 75*i)
    });
}
let texto = document.getElementById('texto')
//função digitar sozinho

//clase de mensagens

class Mensagens{
    constructor(nome,email,mensagen){
        this.nome=nome
        this.email=email
        this.mensagen= mensagen
    }
        validarDados(){
        for(let i in this){
            if(this[i]==undefined ||this[i]=='' ||this[i]==null ||this[i]==0){
                return false
            }
        }
        return true;
    }
}


//capturar dados dos campos
function capturaDados(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let mensagen = document.getElementById('mensagem').value

    let men = new Mensagens(nome,email,mensagen)
    
    if(men.validarDados()){
        typeModal('success')
        let nome = document.getElementById('nome').value = ''
        let email = document.getElementById('email').value =''
        let mensagen = document.getElementById('mensagem').value=''
        $('#modalRegistro').modal('show')
    }else{
        typeModal('error')
        $('#modalRegistro').modal('show')
    }

}

//tipo do modal
function typeModal(f){
	let tipo = f
	if (f=='success') {
		let modalSuccess = document.getElementById('titulo_modal')
		modalSuccess.innerHTML='Mensagem Enviada!'
		modalSuccess.className='text-success'
		let conteudo = document.getElementById('conteudo')
		conteudo.innerHTML='Sua mensagem foi enviada com sucesso.'
		let btn= document.getElementById('btnAcao')
		btn.innerHTML='Voltar'
		btn.className='btn btn-success'
	}else{
		let modalSuccess = document.getElementById('titulo_modal')
		modalSuccess.innerHTML='Erro!'
		modalSuccess.className='text-danger'
		let conteudo = document.getElementById('conteudo')
		conteudo.innerHTML='Verifique se todos os campos foram preenchidos!'
		let btn= document.getElementById('btnAcao')
		btn.innerHTML='Voltar e corrigir'
		btn.className='btn btn-danger'
	}
}

function fechar(){
    let nav = document.getElementById('nav1')
    nav.className='navbar-collapse collapse'
}

