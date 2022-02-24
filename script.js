const init = () => {
    //ValidaEmail
    const validateEmail = (event) =>{
        const input = event.currentTarget;
        const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const emailTeste = regex.test(input.value);

        if (!emailTeste){
            sumitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        }else{
            sumitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error')
        }
    }
    //Valida Password
    const validatePassword = (event) => {
        const input = event.currentTarget;

        if (input.value.length < 8){
            sumitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        }else{
            sumitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error')
        }
    }

    //Get dos campos
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const sumitButton = document.getElementById("sumit");

    //Chama funções de validações
    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassword);

    //Feedback do usuario para login inválido
    const erroHandler = () => {
        sumitButton.classList.remove('success');
        sumitButton.classList.add('error');
        sumitButton.textContent = 'LOGIN INVÁLIDO'
    }
    //Feedback do usuario para login válido
    const sucessHandler = () => {
        sumitButton.classList.remove('error');
        sumitButton.classList.add('success');
        sumitButton.textContent = 'LOGIN OK'
    }

    if(sumitButton) {
        sumitButton.addEventListener('click', (event) => {
            event.preventDefault();

            sumitButton.textContent = '...Aguarde';

            /*
            A API utilizada é a Reqres para testes e Credeciais para login:

            Email = eve.holt@reqres.in
            Password = cityslicka
            Token return 200 = QpwL5tke4Pnpja7X4
             */
            fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value
                })//Callback para quando fetch return 200
            }).then((response)=> {
                    if (response.status !==200){
                        return erroHandler();
                    }
                    sucessHandler();
            })/*.then((data) => {
                console.log(data)
            })*/
                .catch(()=>{
                 erroHandler();
                })

        })

    }

}
//inicia a função só depois da página carregar
window.onload = init;

