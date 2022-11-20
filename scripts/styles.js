
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            font-family: Times New Roman;
            font-size: 16px;
            margin: 0;
            padding: 0;
        }
        form {
            width: 30vw;
            padding: 20px;
            background: #ff9598;
            text-align: center;
        }
        div.field {
            margin-bottom: 10px;
        }
        div.actions {
            margin-top: 20px;
        }
        div.actions button {

        }
        div.actions button.primary {

        }
        div.notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            padding: 20px;
            text-align: center;
            background: #e8e8e8;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        div.notification-error {
            color: #a14343;
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }
        div.notification-success {
            color: #43a143;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
        div.notification-info {
            color: #43a143;
            box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
        }
        div.notification-warn {
            color: #a1a143;
            box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
        }
    `;
    document.body.appendChild(style);
})();
