// api/galiyan.js

const galiTemplates = [
    "{name} madarchod kya scene hai, teri maa ki chut mein aag laga di maine!",
    "{name} bhenchod teri behen ko raat bhar chod ke aaya hoon!",
    "{name} gandu teri gaand itni tight hai ki main roz faad ke chodta hoon!",
    "{name} saale harami teri puri family ko group chod diya!",
    "{name} randike teri maa ka bhosda itna loose ho gaya hai!",
    "{name} bhosdike ab teri aukaat dikhaunga saale!",
    "{name} chutiye teri maa ko sadak pe bech ke aaya hoon!",
    "{name} madarchod teri maa ki fuddi mein mera lawda daal ke ghuma diya!",
    "{name} hijde teri behen ko OnlyFans pe daal diya maine!",
    "{name} randibaz teri behen mera personal maal ban chuki hai!",
    "{name} madarchod teri maa pregnant ho gayi hai mera hone wala beta!",
    "{name} gandu teri gaand mein diesel daal ke aag laga dunga!",
    "{name} saale harami teri maa ko blue film mein shoot kar diya!",
    "{name} bhenchod teri puri khandan ki izzat le li maine!",
    "{name} randike teri behen ki chut pe mera naam tattoo kar diya!",
    "{name} bhosdike tera baap mera driver aur teri maa meri randi hai!",
    "{name} chutiye teri maa ki fuddi itni geeli hai ki swimming kar sakta hoon!",
    "{name} madarchod teri gaand itni geeli ho gayi hai ki lawda slide ho jata hai!",
    "{name} harami tu scam karta hai aur main teri maa ko chodta hoon!",
    "{name} gandu teri family business teri maa ka chut ka hai!"
];

export default function handler(req, res) {
    const { name, count = 1 } = req.query;

    const num = Math.min(Math.max(parseInt(count) || 1, 1), 30);

    let gaaliyan = [];

    if (name) {
        for (let i = 0; i < num; i++) {
            const template = galiTemplates[Math.floor(Math.random() * galiTemplates.length)];
            const gali = template.replace(/\{name\}/g, name);
            gaaliyan.push(gali);
        }
    } else {
        for (let i = 0; i < num; i++) {
            const template = galiTemplates[Math.floor(Math.random() * galiTemplates.length)];
            gaaliyan.push(template.replace(/\{name\}\s*/g, ""));
        }
    }

    res.status(200).json({
        success: true,
        name: name || "Random",
        requested: num,
        delivered: gaaliyan.length,
        gaaliyan: num === 1 ? gaaliyan[0] : gaaliyan,
        timestamp: new Date().toISOString()
    });
      }
