// Script Auto Installer Panel Pterodactyl
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const settings = require('./settings')
const botToken = settings.token;
const linkOwner = settings.linkOwner;

const Owner = settings.ownerId;
const accessFile = 'accessUser.json';
 
const bot = new TelegramBot(botToken, { polling: true });

const { Client } = require('ssh2');
let accessUsers = [];
try {
    accessUsers = JSON.parse(fs.readFileSync(accessFile));
} catch (error) {
    console.error('Error reading accessUsers file:', error);
    accessUsers = [];
}

function checkAccess(chatId, userId) {
    if (!accessUsers.includes(String(userId))) {
        bot.sendMessage(chatId, '❌ Anda tidak memiliki akses untuk menggunakan command ini.');
        return false;
    }
    return true;
}

const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);

   function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('11\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('owner\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }
    
    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('11\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('bashandtokenbyxyro\n');
        stream.write('4\n');
        stream.write('Milky Way\n');
        stream.write('Ultra Core\n');
        stream.write(`${domainnode}\n`);
        stream.write('Wings Engine\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }

// Fungsi Membuat Password secara Acak
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 5;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function sendPanelData(chatId, subdomain, password, keyboard) {
    const message = `⚡ <b>Panel Installation Completed!</b>
📎 Domain : ${subdomain}
👑 User Admin : <code>admin</code>
📢 Password : <code>${password}</code>

<b>Thanks For Using Yoshi Service!</b>`;

    bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [[{ text: '📞 Owner', url: linkOwner }]]
        }
    });
}

bot.onText(/\/yoshi/, (msg) => {
    const chatId = msg.chat.id;
    if (!checkAccess(chatId, msg.from.id)) return;
    const menuText = `
<b>Yoshi Pterodactyl Installer</b>
━━━━━━━━━━━━━━━━
<b>📎 Core Installation</b>
/installpanel
/uninstallpanel
/wingsstart
/fixyarn
/hbpanel
/changepw
/installplugin

<b>🎈 Theme Installer</b>
/stellar - Stellar Theme
/elysium - Elysium Theme
/enigma - Enigma Theme
/billing - Billing Theme
/nightcore - Nightcore Theme
/icemc - Ice Minecraft Theme
/nook - Nook Theme
/mcube - MCube Theme
/mcpurple - MCPurple Theme
/untheme - Reset to default
━━━━━━━━━━━━━━━━
<code>© 2025 Yoshi Development</code>`;

    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Owner', url: 'https://t.me/kibiljoe' }]
            ]
        }
    };

    bot.sendPhoto(chatId, settings.picture, {
        caption: menuText,
        parse_mode: 'HTML',
        reply_markup: keyboard.reply_markup
    });
});

bot.onText(/\/addprem (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = match[1].trim();
  
  if (msg.from.id.toString() !== Owner.toString()) {
    return bot.sendMessage(chatId, 'Fitur Khusus Owner 📚');
  }

  if (!accessUsers.includes(userId)) {
    accessUsers.push(userId);
    fs.writeFileSync(accessFile, JSON.stringify(accessUsers, null, 2));
    bot.sendMessage(chatId, `User ${userId} telah mendapat akses ✅`);
  } else {
    bot.sendMessage(chatId, `👤 User ${userId} sudah menjadi Premium User`);
  }
});

bot.onText(/\/delprem (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = match[1].trim();
  
  // Hanya owner yang bisa akses
  if (msg.from.id.toString() !== Owner.toString()) {
    return bot.sendMessage(chatId, 'Fitur Khusus Owner ‼️');
  }

  const index = accessUsers.indexOf(userId);
  if (index !== -1) {
    accessUsers.splice(index, 1);
    fs.writeFileSync(accessFile, JSON.stringify(accessUsers, null, 2));
    bot.sendMessage(chatId, `User ${userId} telah dihapus dari akses ✔️`);
  } else {
    bot.sendMessage(chatId, `👤 User ${userId} bukan premium user`);
  }
});

const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📞 Owner', url: `${linkOwner}` }]
            ]
        }
    };
    
bot.onText(/^(\.|\#|\/)installpanel$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `<b>📌 Format salah!</b>\nPenggunaan: /installpanel ipvps,password,domain,domainnode,ramvps\n\n<b>📢 Keterangan Tambahan:</b>\nContoh RAM 16, maka ramvps = 16000000`, {
    parse_mode: 'HTML',
    reply_markup: keyboard.reply_markup});
  });
  
bot.onText(/\/installpanel (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  
  if (settings.ownerId.includes(String(msg.from.id))) {
    if (t.length < 5) {
      return bot.sendMessage(chatId, `<b>📌 Format salah!</b>\nPenggunaan: /installpanel ipvps,password,domain,domainnode,ramvps\n\n<b>📢 Keterangan Tambahan:</b>\nContoh RAM 16, maka ramvps = 16000000`, {
        parse_mode: 'HTML',
        reply_markup: keyboard.reply_markup
      });
    }

    const ipvps = t[0];
    const passwd = t[1];
    const subdomain = t[2];
    const domainnode = t[3];
    const ramvps = t[4];
    const connSettings = {
      host: ipvps,
      port: 22,
      username: 'root',
      password: passwd
    };

    let password = generateRandomPassword();
    const command = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
      bot.sendMessage(chatId, `<b>📢 Melakukan Proses Instalasi, Mohon Menunggu 5-15 Menit</b>`, {
        parse_mode: 'HTML',
        reply_markup: keyboard.reply_markup
      });

      conn.exec(command, (err, stream) => {
        if (err) throw err;

        stream.on('close', (code, signal) => {
          console.log(`Stream closed with code ${code} and signal ${signal}`);
          installWings(conn, domainnode, subdomain, password, ramvps);
        }).on('data', (data) => {
          handlePanelInstallationInput(data, stream, subdomain, password);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
      });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
      bot.sendMessage(chatId, `🚀 Update: Sistem Menjalankan Wings/Nodes pada Panel`);

      conn.exec(commandWings, (err, stream) => {
        if (err) throw err;

        stream.on('close', (code, signal) => {
          console.log(`Wings installation stream closed with code ${code} and signal ${signal}`);
          createNode(conn, domainnode, ramvps, subdomain, password);
        });

        stream.on('data', (data) => {
          handleWingsInstallationInput(data, stream, domainnode, subdomain);
        });

        stream.stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
      });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
      const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)';
      bot.sendMessage(chatId, `📍 Membuat Location dan Nodes`);

      conn.exec(command, (err, stream) => {
        if (err) throw err;

        stream.on('close', (code, signal) => {
          console.log(`Node creation stream closed with code ${code} and ${signal} signal`);
          conn.end();
          sendPanelData(chatId, subdomain, password, keyboard);
        }).on('data', (data) => {
          handleNodeCreationInput(data, stream, domainnode, ramvps);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
      });
    }
  }
});

// Build Configure Wings
bot.onText(/^(\.|\#|\/)wingsstart$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /wingsstart ipvps,password,token`);
  });
bot.onText(/\/wingsstart (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 3) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /wingsstart ipvps,password,token');
  }
  const ipvps = t[0];
  const passwd = t[1];
  const token = t[2];
  const connSettings = {
    host: ipvps,
    port: 22,
    username: 'root',
    password: passwd
  };
    const conn = new Client();
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId,' PROSES CONFIGURE WINGS')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log(`Stream closed with code ${code} and ${signal} signal`);
         sendMessage(chatId, 'Success Start Wings ✅');
                conn.end();
            }).on('data', (data) => {
            stream.write('bashandtokenbyxyro\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)stellar$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /stellar ipvps,password`);
  });
bot.onText(/\/stellar (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /stellar ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, 'SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK')
                conn.end();
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)elysium$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /elysium ipvps,password`);
  });
bot.onText(/\/elysium (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /elysium ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `bash <(curl -s -H "Authorization: token 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" https://raw.githubusercontent.com/XstyanzZx/Elsyum/main/elsyum.sh)`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, 'SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK')
                conn.end();
            }).on('data', (data) => {
                stream.write('elysiumbyxyro\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('yes\n');
                stream.write('x\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)enigma$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /enigma ipvps,password`);
  });
bot.onText(/\/enigma (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /enigma ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Permintaan Menginstall Theme Enigma untuk Panel Anda. Proses Sedang Berjalan, Mohon Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, 'Proses Install Berhasil, Silahkan Cek Website Panel Anda. Terima kasih Sudah Menggunakan Script Official Forsakenn')
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write('2\n');
                stream.write('YES\n');
                stream.write('y\n');
                stream.write('A\n');
                stream.write('y\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)uninstalltheme$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /uninstalltheme ipvps,password`);
  });
bot.onText(/\/uninstalltheme (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /uninstalltheme ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, 'SUKSES UNINSTALL THEME PANEL ANDA, SILAHKAN CEK')
                conn.end();
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('x\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)uninstallpanel$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /uninstallpanel ipvps,password`);
  });
bot.onText(/\/uninstallpanel (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /uninstallpanel ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'PROSES UNINSTALL PANEL DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, 'SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK')
                conn.end();
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('5\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)hbpanel$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /hbpanel ipvps,password,username\n\nNote : Masukkan Username Sesuai dengan Keinginan Anda`);
  });
bot.onText(/\/hbpanel (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /hbpanel ipvps,password,username\n\nNote : Masukkan Username Sesuai dengan Keinginan Anda');
  }
let ipvps = t[0];
    let passwd = t[1];
    let usernamehb = t[2];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Proses Hack Back Panel Sedang Berjalan');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Hackback Panel\nData Akun Admin Anda :\nUsername : ${usernamehb}\nPassword : 11\n\nSilahkan Login Ke Panel Menggunakan Data Tersebut`)
                conn.end();
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('7\n');
                stream.write(`${usernamehb}\n`);
                stream.write(`x\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});
//Batas Hack Back Panel
bot.onText(/^(\.|\#|\/)changepw$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /changepw ipvps,password,passwordbaru`);
  });
bot.onText(/\/changepw (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /changepw ipvps,password,passwordbaru');
  }
let ipvps = t[0];
    let passwd = t[1];
    let passvpsnew = t[2];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Mengubah Password Vps');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Mengganti Password pada Vps Anda`)
                conn.end();
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('8\n');
                stream.write(`${passvpsnew}\n`);
                stream.write(`${passvpsnew}\n`);
                stream.write(`x\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)fixyarn$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /fixyarn ipvps,password`);
  });
bot.onText(/\/fixyarn (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /fixyarn ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Fix Yarn Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Melakukan Proses Fix Yarn Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`1\n`);
                stream.write(`YES\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});
bot.onText(/^(\.|\#|\/)nightcore$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /nightcore ipvps,password`);
  });
bot.onText(/\/nightcore (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /nightcore ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme NightCore pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Nightcore Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`11\n`);
                stream.write(`YES\n`);
                stream.write(`y\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});
bot.onText(/^(\.|\#|\/)icemc$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /icemc ipvps,password`);
  });
bot.onText(/\/icemc (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /icemc ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme Ice Minecraft pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Ice Minecraft Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`4\n`);
                stream.write(`YES\n`);
                stream.write(`y\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});
bot.onText(/^(\.|\#|\/)nook$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /nook ipvps,password`);
  });
bot.onText(/\/nook (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /nook ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme Nook pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Nook Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`10\n`);
                stream.write(`YES\n`);
                stream.write(`y\n`);
                stream.write(`yes\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});
bot.onText(/^(\.|\#|\/)mcube$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /mcube ipvps,password`);
  });
bot.onText(/\/mcube (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /mcube ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme Mcube pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Mcube Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`12\n`);
                stream.write(`YES\n`);
                stream.write(`y\n`);
                stream.write(`yes\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)mcpurple$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /mcpurple ipvps,password`);
  });
bot.onText(/\/mcpurple (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /mcpurple ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/rainmc0123/rainmc0123/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme Minecraft Purple pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Minecraft Purple Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('RAIN\n');
                stream.write('RAIN\n');
                stream.write(`13\n`);
                stream.write(`YES\n`);
                stream.write(`y\n`);
                stream.write(`15\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)billing$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /billing ipvps,password`);
  });
bot.onText(/\/billing (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /billing ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Theme Billing pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Theme Billing Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
            stream.write('skyzodev\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write(`yes\n`);
                stream.write(`x\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/^(\.|\#|\/)installplugin$/, async (msg) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /installplugin ipvps,password`);
  });
bot.onText(/\/installplugin (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  if (!checkAccess(chatId, msg.from.id)) return;
  const text = match[1];
  const t = text.split(',');
  if (settings.ownerId.includes(String(msg.from.id))) {
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /installplugin ipvps,password');
  }
let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function bot(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        sendMessage(chatId, 'Memproses Install Depennd pada Panel Anda. Proses Ini Mungkin Memakan Waktu 5-10 Menit Kedepan, Mohon untuk Menunggu');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                sendMessage(chatId, `Sukses Menginstall Depend Pada Panel Anda. Terima Kasih Sudah Menggunakan Script Official Forsakenn`)
                conn.end();
            }).on('data', (data) => {
                stream.write('11\n');
                stream.write('A\n');
                stream.write(`Y\n`);
                stream.write(`Y\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        sendMessage(chatId, 'Katasandi atau IP tidak valid');
    }).connect(connSettings);
     } else {
      bot.sendMessage(chatId, 'Fitur Ini Khusus Owner Saya!!!');
    }
});

bot.onText(/\/subdomain/, (msg) => {
  const chatId = msg.chat.id;
  const menuSubdo = `Fitur Ini Sedang Dalam Proses Perbaikan </>`;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'About 📚', callback_data: 'subdo' }, { text: 'Owner 🚩', url: 'https://t.me/kibiljoe' }],
      ]
    }
  };

  bot.sendMessage(chatId, menuSubdo, keyboard);
});

bot.on('callback_query', (callbackQuery) => {
  const data = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;

  if (data === 'subdo') {
    const ramListMessage = `Fitur Subdomain adalah Fitur untuk Membuat Subdomain yang Biasa Digunakan untuk Proses Install Panel\n\n© Powered By Yoshi`;
    bot.answerCallbackQuery(callbackQuery.id);
    bot.editMessageText(ramListMessage, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Kembali ke Menu Start', callback_data: 'start' }]
        ]
      }
    });
  }

  if (data === 'start') {
    const menuSubdo = `Fitur Ini Sedang Dalam Proses Perbaikan </>`;
    const keyboard = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'About 📚', callback_data: 'subdo' }, { text: 'Owner 🚩', url: 'https://t.me/kibiljoe' }],
        ]
      }
    };
    bot.answerCallbackQuery(callbackQuery.id);
    bot.editMessageText(menuSubdo, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: keyboard,
      parse_mode: 'Markdown'
    });
  }
});