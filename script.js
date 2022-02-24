

const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const sumitButton = document.getElementById("sumit");

    if(sumitButton) {
        sumitButton.addEventListener('click', (event) => {
            event.preventDefault();

            //A API utilizada é a Reqres para testes
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
                    return response.json();
            }).then((data) => {
                console.log(data)
            })

        })

    }

}
//inicia a função só depois da página carregar
window.onload = init;

