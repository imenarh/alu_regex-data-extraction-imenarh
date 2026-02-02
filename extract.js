const fs = require('fs');

const sampleTextFile = process.argv[2];

if (!sampleTextFile) {
  console.log('Error: No input file specified.');
  console.log('Usage: node extract.js <input-file>');
  process.exit(2);
}

const pattern = {
    emails: /\b[A-Za-z0-9._%+-]+@{1}[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    urls: /https?:\/\/[^\s"'<>]+/gi,
    phone: /(\+250\s?|0)7\d{8}/g,
    hashtags: /#\w[\w-]*/g,
    currency: /\$\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g
};

const maskEmail = (e) => e.replace(/^(.)([^@]*)@/, (m,p,q)=> p + '*'.repeat(q.length) + '@');

function extract(text) {
    const out = {};
    out.emails = Array.from(new Set((text.match(pattern.emails)||[]))).map(maskEmail);
    out.urls = Array.from(new Set(text.match(pattern.urls)||[]));
    out.phone = Array.from(new Set(text.match(pattern.phone)||[]));
    out.hashtags = Array.from(new Set(text.match(pattern.hashtags)||[]));
    out.currency = Array.from(new Set(text.match(pattern.currency)||[]));
    return out;
}

// Reading sample file and extracting data
fs.readFile(sampleTextFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }
    const sampleData = data;
    console.log('Sample Data Loaded:');
    try {
        const result = extract(sampleData);
        console.log('Extraction Result:');
        console.log(JSON.stringify(result, null, 2));
        }catch (err) {
        console.error('Error during extraction:', err.message);
}
    });