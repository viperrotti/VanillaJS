window.addEventListener('load', () => {

    const main = document.createElement('main');

    document.body.appendChild(main);

    const uid_aluno = "c271cbb9-fc13-486e-a2df-80fe72ea72ed";

    const inputs = {
        busca: Shared.input({
            name: 'busca',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
    }

    main.appendChild(
        Shared.form([
            Shared.field({
                label: 'Busca',
                input: inputs.busca
            }),
            Shared.actions([
                Shared.button({
                    text: 'Voltar',
                    onClick: () => {
                    }
                }),
                Shared.button({
                    text: 'Entrar',
                    type: 'primary',
                    onClick: () => {                           
                        fetch('http://livros.letscode.dev.netuno.org:25390/services/livro/lista', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "aluno": {
                                    "uid": uid_aluno
                                },
                                "text": inputs.busca.value,
                            })
                        }).then((response) => {
                            if (response.ok) {
                                response.json().then((data) => {
                                    Shared.notification.create({
                                        text: JSON.stringify(data),
                                        type: 'success'
                                    });
                                });
                            } else {
                                response.json().then((data) => {
                                    Shared.notification.create({
                                        text: JSON.stringify(data),
                                        type: 'error'
                                    });
                                });
                            }
                        }).catch((error) => {
                            console.log('Erro geral:', error);
                        });
                    }
                })
            ])
        ])
    );

});