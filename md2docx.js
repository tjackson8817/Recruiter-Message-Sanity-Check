// Builds the branded Sale Fish Word guide from the Markdown user guide (single source of truth).
// Usage: node md2docx.js <guide.md> <out.docx>
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, ExternalHyperlink, PageBreak, Footer, PageNumber
} = require('docx');

const [, , mdPath, outPath] = process.argv;
const md = fs.readFileSync(mdPath, 'utf8').replace(/\r\n/g, '\n');

const NAVY = '0F2D3D', BLUE = '1B6FA8', TEXT = '444444', RED = '922B21', RED_BORDER = 'C0392B', RED_FILL = 'FDEDEC';
const TOOL_URL = 'https://tjackson8817.github.io/Recruiter-Message-Sanity-Check/';
const FONT = 'Arial';

// ---- inline formatting: **bold**, *italic*, `code`, bare URLs ----
function inline(text, base = {}){
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*|https?:\/\/[^\s)]+)/g;
  let last = 0, m;
  const push = (t, extra = {}) => { if(t) out.push(new TextRun({text: t, font: FONT, color: TEXT, size: 20, ...base, ...extra})); };
  while((m = re.exec(text)) !== null){
    push(text.slice(last, m.index));
    const tok = m[0];
    if(tok.startsWith('**')) push(tok.slice(2, -2), {bold: true});
    else if(tok.startsWith('`')) push(tok.slice(1, -1), {font: 'Consolas', size: 19});
    else if(tok.startsWith('*')) push(tok.slice(1, -1), {italics: true});
    else {
      const url = tok.replace(/[.,;]+$/, '');
      out.push(new ExternalHyperlink({link: url, children: [new TextRun({text: url, font: FONT, size: 20, color: '0563C1', underline: {}, ...base})]}));
      push(tok.slice(url.length));
    }
    last = m.index + tok.length;
  }
  push(text.slice(last));
  return out;
}

function para(text, opts = {}){
  return new Paragraph({children: inline(text), spacing: {after: 140, line: 276}, ...opts});
}

// ---- table ----
function table(rows){
  const header = rows[0], body = rows.slice(1);
  const total = 9360;
  const n = header.length;
  const widths = n === 3 ? [2600, 1400, 5360] : n === 2 ? [3900, 5460] : Array(n).fill(Math.floor(total / n));
  const border = {style: BorderStyle.SINGLE, size: 4, color: 'C9D6DF'};
  const borders = {top: border, bottom: border, left: border, right: border};
  const cell = (t, i, isHead, rowIdx) => new TableCell({
    width: {size: widths[i], type: WidthType.DXA}, borders,
    shading: {type: ShadingType.CLEAR, color: 'auto', fill: isHead ? 'D5E8F0' : (rowIdx % 2 ? 'FFFFFF' : 'FAFCFF')},
    margins: {top: 80, bottom: 80, left: 120, right: 120},
    children: [new Paragraph({children: inline(t, isHead ? {bold: true, color: NAVY} : {})})]
  });
  return new Table({
    width: {size: total, type: WidthType.DXA}, columnWidths: widths,
    rows: [new TableRow({tableHeader: true, children: header.map((t, i) => cell(t, i, true, 0))}),
      ...body.map((r, ri) => new TableRow({children: r.map((t, i) => cell(t, i, false, ri))}))]
  });
}

// ---- cover page ----
const today = new Date();
const dateStr = today.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
const children = [
  new Paragraph({spacing: {after: 1400}}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 40}, children: [new TextRun({text: 'SALE FISH', font: FONT, bold: true, color: NAVY, size: 52})]}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 260}, border: {bottom: {style: BorderStyle.SINGLE, size: 10, color: BLUE, space: 10}},
    children: [new TextRun({text: 'MARKETING AND CONSULTING', font: FONT, color: BLUE, size: 20, characterSpacing: 40})]}),
  new Paragraph({spacing: {after: 300}}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 80}, children: [new TextRun({text: 'Recruiter Message & Job Posting Sanity Check', font: FONT, bold: true, color: NAVY, size: 40})]}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 300}, children: [new TextRun({text: 'User Guide, version 2', font: FONT, italics: true, color: TEXT, size: 26})]}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 300}, children: [new ExternalHyperlink({link: TOOL_URL, children: [new TextRun({text: TOOL_URL, font: FONT, size: 20, color: '0563C1', underline: {}})]})]}),
  new Paragraph({alignment: AlignmentType.CENTER, spacing: {after: 40}, children: [new TextRun({text: 'Created By: Tom Jackson', font: FONT, color: TEXT, size: 20})]}),
  new Paragraph({alignment: AlignmentType.CENTER, children: [new TextRun({text: dateStr, font: FONT, color: TEXT, size: 18})]}),
  new Paragraph({children: [new PageBreak()]}),
];

// ---- body from markdown ----
const lines = md.split('\n');
let i = 0, seenNumbered = false, listRef = 0;
// skip the H1 title and the italic subtitle; the cover replaces them
while(i < lines.length && (lines[i].startsWith('# ') || /^\*[^*].*\*$/.test(lines[i].trim()) || !lines[i].trim())) i++;

while(i < lines.length){
  const line = lines[i];
  const t = line.trim();
  if(!t){ i++; continue; }

  if(t.startsWith('## ')){
    const title = t.slice(3);
    if(/^1\.\s/.test(title)) children.push(new Paragraph({children: [new PageBreak()]}));
    children.push(new Paragraph({heading: HeadingLevel.HEADING_1, children: [new TextRun({text: title, font: FONT, bold: true, color: NAVY, size: 28})], spacing: {before: 300, after: 140}}));
    i++; continue;
  }
  if(t.startsWith('### ')){
    children.push(new Paragraph({heading: HeadingLevel.HEADING_2, children: [new TextRun({text: t.slice(4), font: FONT, bold: true, color: BLUE, size: 22})], spacing: {before: 200, after: 100}}));
    i++; continue;
  }
  if(t.startsWith('>')){
    let q = [];
    while(i < lines.length && lines[i].trim().startsWith('>')){ q.push(lines[i].trim().replace(/^>\s?/, '')); i++; }
    const b = {style: BorderStyle.SINGLE, size: 8, color: RED_BORDER, space: 8};
    children.push(new Paragraph({
      children: inline(q.join(' '), {bold: true, color: RED, size: 19}),
      border: {top: b, bottom: b, left: b, right: b},
      shading: {type: ShadingType.CLEAR, color: 'auto', fill: RED_FILL},
      spacing: {before: 120, after: 240, line: 264}, indent: {left: 160, right: 160}
    }));
    continue;
  }
  if(t.startsWith('|')){
    const rows = [];
    while(i < lines.length && lines[i].trim().startsWith('|')){
      const r = lines[i].trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      if(!r.every(c => /^-+$/.test(c))) rows.push(r);
      i++;
    }
    children.push(table(rows));
    children.push(new Paragraph({spacing: {after: 120}}));
    continue;
  }
  if(/^- /.test(t)){
    while(i < lines.length && /^- /.test(lines[i].trim())){
      children.push(new Paragraph({numbering: {reference: 'bullets', level: 0}, children: inline(lines[i].trim().slice(2)), spacing: {after: 80, line: 264}}));
      i++;
    }
    children.push(new Paragraph({spacing: {after: 60}}));
    continue;
  }
  if(/^\d+\. /.test(t)){
    const ref = 'num' + (listRef++);
    while(i < lines.length && /^\d+\. /.test(lines[i].trim())){
      children.push(new Paragraph({numbering: {reference: ref, level: 0}, children: inline(lines[i].trim().replace(/^\d+\.\s/, '')), spacing: {after: 80, line: 264}}));
      i++;
    }
    children.push(new Paragraph({spacing: {after: 60}}));
    continue;
  }
  // paragraph: gather consecutive lines
  const buf = [];
  while(i < lines.length && lines[i].trim() && !/^(#|>|\||- |\d+\. )/.test(lines[i].trim())){ buf.push(lines[i].trim()); i++; }
  children.push(para(buf.join(' ')));
}

const numConfigs = [{reference: 'bullets', levels: [{level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT, style: {paragraph: {indent: {left: 540, hanging: 270}}, run: {color: BLUE}}}]}];
for(let k = 0; k < listRef; k++) numConfigs.push({reference: 'num' + k, levels: [{level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: {paragraph: {indent: {left: 540, hanging: 300}}}}]});

const doc = new Document({
  creator: 'Tom Jackson', title: 'Recruiter Message & Job Posting Sanity Check — User Guide',
  styles: {default: {document: {run: {font: FONT, size: 20, color: TEXT}}},
    paragraphStyles: [
      {id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: {font: FONT, size: 28, bold: true, color: NAVY}, paragraph: {spacing: {before: 300, after: 140}, outlineLevel: 0}},
      {id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: {font: FONT, size: 22, bold: true, color: BLUE}, paragraph: {spacing: {before: 200, after: 100}, outlineLevel: 1}},
    ]},
  numbering: {config: numConfigs},
  sections: [{
    properties: {page: {size: {width: 12240, height: 15840}, margin: {top: 1080, right: 1440, bottom: 1080, left: 1440}}, titlePage: true},
    footers: {default: new Footer({children: [new Paragraph({alignment: AlignmentType.CENTER, children: [
      new TextRun({text: 'Sale Fish Marketing and Consulting  |  Page ', font: FONT, size: 16, color: '888888'}),
      new TextRun({children: [PageNumber.CURRENT], font: FONT, size: 16, color: '888888'})]})]}),
      first: new Footer({children: [new Paragraph('')]})},
    children
  }]
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(outPath, b); console.log('wrote', outPath); });
