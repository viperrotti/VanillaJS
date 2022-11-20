window.addEventListener('load', () => {

    const main = document.createElement('main');

    document.body.appendChild(main);

    const uid_aluno = "c271cbb9-fc13-486e-a2df-80fe72ea72ed";

    const inputs = {
        uid: Shared.input({
            name: 'uid',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        tiragem: Shared.input({
            type: 'number',
            name: 'tiragem',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        titulo: Shared.input({
            name: 'titulo',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        autor: Shared.input({
            name: 'autor',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        }),
        descricao: Shared.input({
            name: 'descricao',
            onKeyPress: () => {
                Shared.notification.remove();
            }
        })
    }
    main.appendChild(
        Shared.form([
            Shared.field({
                label: 'ID Livro',
                input: inputs.uid
            }),
            Shared.field({
                label: 'Titulo',
                input: inputs.titulo
            }),
            Shared.field({
                label: 'Autor',
                input: inputs.autor
            }),
            Shared.field({
                label: 'Descricao',
                input: inputs.descricao
            }),
            Shared.field({
                label: 'Tiragem',
                input: inputs.tiragem
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
                        fetch('http://livros.letscode.dev.netuno.org:25390/services/livro', {
                            method: 'PUT',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "aluno": {
                                    "uid": uid_aluno
                                },
                                "uid": inputs.uid.value,
                                "tiragem": parseInt(inputs.tiragem.value),
                                "titulo": inputs.titulo.value,
                                "autor": inputs.autor.value,
                                "descricao": inputs.descricao.value,
                            })
                        }).then((response) => {
                            if (response.status === 204) {
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