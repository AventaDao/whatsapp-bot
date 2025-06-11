const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', qr => {
    console.log('Scan QR ini dengan WhatsApp kamu:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot siap digunakan!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hai') {
        message.reply('Hai juga! Ada yang bisa saya bantu?');
    }
});

client.initialize();
