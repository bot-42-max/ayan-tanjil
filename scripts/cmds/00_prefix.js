module.exports = {
config: {
name: "prefix",
version: "1.0",
author: "Tokodori_Frtiz",//remodified by cliff
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "auto 🪐",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "prefix") {
return message.reply({
body: `
‣ 𝐆𝐥𝐨𝐛𝐚𝐥 𝐩𝐫𝐞𝐟𝐢𝐱: / 
‣𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐩𝐫𝐞𝐟𝐢𝐱: /

‣ ᯽ 𝘼  𝐃  𝐌  𝐈  𝐍 ᯽
‣    𝐓 𝐀 𝐍 𝐉 𝐈 𝐋

‣ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ⓕ
‣ Ťåñjïł Hāšāń Æßp 
\n\n\n  `,
attachment: await global.utils.getStreamFromURL("https://i.imgur.com/WxtBNOq.jpeg")
});
}
}
}
