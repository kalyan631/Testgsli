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
    "{name} gandu teri family business teri maa ka chut ka hai!",
    "{name} madarchod teri maa ki chut mein bomb foda hai maine!",
    "{name} bhenchod teri behen ko hotel mein gangbang karwaya!",
    "{name} gandu teri gaand mein mirchi laga ke chodunga!",
    "{name} saale teri maa ka bhosda mera favourite hai!",
    "{name} randike teri puri family ko chod chuka hoon!",
    "{name} bhosdike teri maa roz mere paas aati hai!",
    "{name} chutiye teri behen mera side chick ban gayi!",
    "{name} madarchod tera baap mera naukar hai!",
    "{name} hijde teri behen ki chut mein mera naam likh diya!",
    "{name} randibaz teri maa ka OnlyFans chala raha hoon!",
    "{name} madarchod teri gaand faad ke hospital pahuncha dunga!",
    "{name} bhenchod teri maa ko public mein nanga karke choda!",
    "{name} gandu teri behen ko maine double penetration diya!",
    "{name} saale harami teri family ki sab auraton ko chod chuka!",
    "{name} randike teri maa ki fuddi se cash nikal raha hoon!",
    "{name} bhosdike tera ghar mera whorehouse ban gaya!",
    "{name} chutiye teri behen ko main roz pelta hoon!",
    "{name} madarchod teri maa ko swing pe chhod ke video banaya!",
    "{name} gandu teri gaand mein patakha phod dunga!",
    "{name} saale teri maa pregnant hai mera bachha!",
    "{name} randike teri behen mera personal randi hai!",
    "{name} bhenchod teri maa ki bur mein Corona daal dunga!",
    "{name} madarchod teri gaand se khoon nikalwa dunga!",
    "{name} hijde tu itna gandu hai ki lawda muh mein le leta hai!",
    "{name} chutiye teri maa ko college mein chod ke aaya!",
    "{name} randibaz teri behen ko maine onlyfans pe viral kar diya!",
    "{name} bhosdike tera baap cuckold hai!",
    "{name} madarchod teri maa ka bur itna loose hai bus mein chadh jati hai!",
    "{name} gandu teri puri lineage chod ke rakh dunga!",
    "{name} saale harami teri behen ko maine hotel leke pelta hoon!",
    "{name} randike teri maa mera ATM card hai!",
    "{name} bhenchod teri behen ki virginity maine tod di!",
    "{name} madarchod teri gaand mein haath daal ke ghumata hoon!",
    "{name} chutiye teri maa ko main sadak pe bechta hoon!",
    "{name} gandu teri maa ki fuddi mein dahi jama hai kya?",
    "{name} saale teri behen mera daily maal hai!",
    "{name} randibaz teri family ruined kar di maine!",
    "{name} bhosdike teri maa ko double penetration pasand hai!",
    "{name} madarchod tera muh mera toilet hai!",
    "{name} hijde teri behen ko main live sex show karwata hoon!",
    "{name} chutiye teri maa old age mein bhi nahi chhodunga!",
    "{name} gandu teri gaand itni tight hai roz chodta hoon!",
    "{name} saale teri behen ko maine payment leke choda!",
    "{name} randike teri maa ka favourite customer main hoon!",
    "{name} bhenchod teri puri mohalla chod chuka hoon!",
    "{name} madarchod teri maa ko maine blue film mein daal diya!",
    "{name} gandu teri behen ko main swing pe chhodta hoon!",
    "{name} chutiye teri family tree chod ke rakh di!",
    "{name} saale harami tera baap mera driver tha!",
    "{name} randibaz teri maa ka bur mein patakha phoda!",
    "{name} bhosdike teri behen mera personal property hai!",
    "{name} madarchod teri gaand mein virus daal dunga!",
    "{name} hijde tu itna bhosdika hai ki lawda dekh ke rone lagta hai!",
    "{name} chutiye teri maa ko main roz video call pe chodta hoon!",
    "{name} gandu teri behen ki chut geeli karke chhod deta hoon!",
    "{name} saale teri maa ki fuddi mein mera peshab!",
    "{name} randike teri puri family ko maine pel diya!",
    "{name} bhenchod teri maa ka bhosda mera favourite hole hai!",
    "{name} madarchod teri gaand faad ke rakh dunga aaj!",
    "{name} chutiye teri behen ko maine gangbang karwaya!",
    "{name} gandu teri maa ko main sadak pe pelta hoon!",
    "{name} saale harami teri family ki izzat khatam kar di!",
    "{name} randibaz teri maa mera ATM hai!",
    "{name} bhosdike teri behen ko maine tattoo kar diya!",
    "{name} madarchod tera baap mera cuckold hai!",
    "{name} hijde teri maa ki chut mein bomb foda!",
    "{name} chutiye teri behen mera side business hai!",
    "{name} gandu teri gaand mein mirchi daal dunga!",
    "{name} saale teri maa ko maine viral kar diya!",
    "{name} randike teri puri khandan chod chuka hoon main!",
    "{name} bhenchod teri maa pregnant kar di!",
    "{name} madarchod teri gaand itni loose ho gayi hai!",
    "{name} chutiye teri behen ko main roz bula ke chodta hoon!",
    "{name} gandu teri family ko maine barbaad kar diya!",
    "{name} saale harami teri maa ka bhosda mera hai!",
    "{name} randibaz tu abhi bhi baap banne ki koshish kar raha hai!"
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
