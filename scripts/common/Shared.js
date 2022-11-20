
window.Shared = {
    form: (children) => {
        const form = document.createElement('form');
        for (const child of children) {
            form.appendChild(child);
        }
        return form;
    },
    actions: (children) => {
        const actions = document.createElement('div');
        actions.classList.add('actions')
        for (const child of children) {
            actions.appendChild(child);
        }
        return actions;
    },
    field: ({label, input}) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        const labelElement = document.createElement('label');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label +':';
        field.appendChild(input);
        return field;
    },
    input: ({type = 'text', name, onKeyPress = ()=>{}}) => {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        input.addEventListener('keypress', onKeyPress);
        return input;
    },
    button: ({text, type = 'default', onClick = ()=>{}}) => {
        const button = document.createElement('button');
        button.classList.add(type);
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },
    notification: {
        timer: null,
        element: null,
        create: ({text, type}) => {
            Shared.notification.remove();
            const element = document.createElement('div');
            element.classList.add('notification');
            element.classList.add(`notification-${type}`);
            element.textContent = text;
            Shared.notification.element = element;
            document.body.appendChild(element);
            Shared.notification.timer = setTimeout(() => {
                Shared.notification.remove();
            }, 5000);
        },
        remove: () => {
            if (Shared.notification.element) {
                clearTimeout(Shared.notification.timer);
                document.body.removeChild(Shared.notification.element);
                Shared.notification.element = null;
            }
        }
    }
}
