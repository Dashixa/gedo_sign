document.querySelector('.generateBtn').addEventListener('click', function () {
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const status = document.querySelector('.status').value;
    const mobile = document.querySelector('.mobile').value;

    if (!name || !email || !status || !mobile) {
        alert('Пожалуйста, заполните все поля формы!');
        return;
    }

    const fileContent = `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Footer</title>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333; background-color: #f5f5f5;">

    <table width="100%" cellspacing="0" cellpadding="0"
        style="max-width: 500px; padding: 20px 0 20px 20px; background: #ffffff;">

        <tr>
            <td style="display: inline-block;">
                <a href="https://gedocorp.ru/" target="_blank">
                    <img src="https://i.yapx.ru/YwyWS.png" alt="Company Logo" width="150" height="45"
                        style="display: block;">
                </a>
            </td>
        </tr>



        <tr>
            <td style="padding: 20px 0 10px; text-align: left; font-size: 14px; line-height: 1.5;">
                <span style="color: #333333;">С уважением, </span>
                <br>
                <span style="font-weight: bold; color: #333333;">${name}!</span>
            </td>
        </tr>


        <tr>
            <td style="padding: 0 0 25px; text-align: left; font-size: 14px; color: #333333; line-height: 1.5;">
                ${status}
            </td>
        </tr>



        <tr>
            <td>
                <div style="height: 1px; width: 320px; background-color: #bfbfbf;"></div>
            </td>
        </tr>


        <tr>
            <td style="padding: 25px 0 5px; text-align: left; font-size: 14px; color: #999999; line-height: 1.5;">
                Мобильный: ${mobile}
            </td>

        </tr>



        <tr>
            <td style="padding: 0 0 25px; text-align: left;">
                <a href="mailto:${email}"
                    style="color: #3498db; text-decoration: none; font-size: 14px;">${email}</a>
            </td>
        </tr>

        <tr>
            <td>
                <div style="height: 1px; width: 320px; background-color: #bfbfbf;"></div>
            </td>
        </tr>

        <tr style="margin-top: 25px; display: flex;">
            <td>
                <a href="https://vk.com/gedocorp" target="_blank" style="font-size: 14px; text-decoration: none; margin-right: 15px; color: #3498db;">
                   Вконтакте
                </a>
            </td>
            <td>
                <a href="https://t.me/gedocorp" target="_blank" style="font-size: 14px; text-decoration: none; color: #3498db;">
                    Telegram
                </a>
            </td>
        </tr>

    </table>
</body>

</html>`;

    document.querySelector('.filePreview').textContent = fileContent;

    const blob = new Blob([fileContent], { type: 'html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Подпись.html`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});