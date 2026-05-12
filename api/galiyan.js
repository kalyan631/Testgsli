// api/galiyan.js
export default function handler(req, res) {
    const { name = "Madarchod", count = 1 } = req.query;

    const num = Math.min(Math.max(parseInt(count), 1), 20);

    const templates = [
        "{name} madarchod kya scene hai, teri maa ki chut mein aag laga di!",
        "{name} bhenchod teri behen ko raat bhar chod ke aaya!",
        "{name} gandu teri gaand faad dunga saale!",
        "{name} randike teri maa ka bhosda!",
        "{name} bhosdike ab teri aukaat dikhaunga!",
        "{name} chutiye teri maa ko sadak pe bech diya!",
        "{name} madarchod teri maa ki fuddi mein lawda!",
        "{name} hijde teri behen mera maal hai!"
    ];

    let gaaliyan = [];
    for (let i = 0; i < num; i++) {
        let gali = templates[Math.floor(Math.random() * templates.length)];
        gali = gali.replace(/\{name\}/g, name);
        gaaliyan.push(gali);
    }

    res.status(200).json({
        success: true,
        name: name,
        count: num,
        gaaliyan: num === 1 ? gaaliyan[0] : gaaliyan
    });
}
