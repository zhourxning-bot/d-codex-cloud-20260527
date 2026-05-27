const pptxgen = require("pptxgenjs");

const out = "D:\\跨境素材\\特看_台湾UGC视频_近10天核查.pptx";

const rows = [
  ["1", "OSCALofficial", "Oscal TIGER 12: Official Introduction | Top-notch Performance, Super-clear Camera. #OSCAL", "2024-09-11-2024-10-15", "28.4M", "1.5M", "5.28%", "Learn More"],
  ["2", "OSCALofficial", "Oscal Pad 18: Showcasing Pad 18|11 Inches. Feel More. Do More. #OSCAL", "2024-09-10-2024-10-15", "7.2M", "486.4K", "6.68%", "Learn More"],
  ["3", "凤凰卫视PhoenixTV", "#Paris2024 #olympics Galadriel, is that you? Russian Coach of the Chinese Women's Artistic Gymnastics Team Has Gone Viral.", "2024-09-09-2024-09-14", "3M", "206.9K", "6.75%", "Learn More"],
  ["4", "凤凰卫视PhoenixTV", "KIDS on the First Day of Kindergarten... #fyp #funnykids #trending #China", "2024-09-13-2024-09-14", "1.6M", "64K", "3.55%", "Learn More"],
  ["5", "凤凰卫视PhoenixTV", "Massive Lightning Strikes China's Hainan as Typhoon Yagi Is Approaching #weather #trending", "2024-09-09-2024-09-12", "1.4M", "59.9K", "3.88%", "Learn More"],
  ["6", "安哥碎碎念", "安哥好车推荐 #正能量 #超跑 #跑车人生 #LOTUS #商业交流", "2024-09-11-2024-09-11", "475K", "50.7K", "10.48%", "Learn More"],
  ["7", "", "Browse and download videos privately.", "2025-09-27-2025-09-27", "2.1M", "39.3K", "1.89%", "Go to Google Play"],
  ["8", "安哥碎碎念", "开3000万豪车吃60块炒饭 #创业 #财商 #正能量 #劳斯莱斯", "2024-09-09-2024-09-14", "606.7K", "33.7K", "5.18%", "Learn More"],
  ["9", "辰馨成就懒女人", "你一定要抓住 #开店 #药局 #拍照 #剪辑 #在家 #搞钱 #fyp", "2024-10-12-2024-10-12", "2.1M", "30.4K", "1.23%", "Contact us"],
  ["10", "", "其实我天生社恐 #社恐 #自媒体 #澄霖闆妹", "2025-08-18-2025-08-18", "627.4K", "29K", "4.54%", "Learn More"],
  ["11", "Jay & Sharon", "We promised to keep our own gifts this year. @PayPal #PayPalPartner", "2025-12-13-2025-12-21", "6.8M", "27.2K", "0.38%", "Learn more"],
  ["12", "", "Have you ever bought perfume this cheap? Order now.", "2026-01-04-2026-01-04", "4.8M", "24.8K", "0.5%", "Order now"],
  ["13", "", "不是谁都能接班，接得住责任，才叫能力！ #接班 #传承 #澄霖生医", "2025-08-18-2025-08-18", "566K", "21K", "3.66%", "Learn More"],
  ["14", "凤凰卫视PhoenixTV", "You never expected what would happen on that boat #funny #bamboorafting #trending", "2024-09-09-2024-09-09", "393.6K", "20.2K", "4.99%", "Learn More"],
  ["15", "凤凰卫视PhoenixTV", "After TYPHOON YAGI comes the season of harvest. #typhoon #yagi #extremeweather", "2024-09-13-2024-09-14", "267.4K", "15.6K", "5.7%", "Learn More"],
  ["16", "", "勇闯村庄遇险 收获丰富翡翠美镯 #翡翠手镯 #缅甸翡翠", "2025-09-12-2025-09-12", "1.5M", "13.6K", "0.86%", "Contact us"],
  ["17", "foodiesushiqueen", "#Ad The NEW Wood Fired-Style Pizzas from DiGiorno are a must try! #Digiorno", "2025-10-03-2025-10-08", "6M", "11.9K", "0.19%", "Shop now"],
  ["18", "MSI", "Prebuilt or custom desktop. Which team are you on? Find your endgame with MSI.", "2026-03-29-2026-03-30", "341.1K", "8.7K", "2.53%", "Learn More"],
  ["19", "", "\"国际通报\"骗子账号！", "2025-09-13-2025-09-13", "887.5K", "7.9K", "0.77%", "Contact us"],
  ["20", "", "\"国际通报\"骗子账号！", "2025-09-12-2025-09-12", "866.2K", "7.7K", "0.79%", "Contact us"],
];

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Codex";
pptx.subject = "Tabcut Taiwan UGC video analysis";
pptx.title = "特看台湾 UGC/广告素材核查";
pptx.company = "Codex";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN",
};
pptx.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pptx.layout = "WIDE";
pptx.margin = 0;

const C = {
  ink: "17212B",
  muted: "667085",
  light: "F3F6F8",
  line: "D9E1E7",
  green: "1F8A70",
  blue: "3157A5",
  amber: "C47C17",
  red: "B54708",
  white: "FFFFFF",
};

function slideTitle(slide, eyebrow, title, note) {
  slide.addText(eyebrow, { x: 0.55, y: 0.35, w: 5.5, h: 0.22, fontSize: 8, bold: true, color: C.green, charSpace: 0 });
  slide.addText(title, { x: 0.55, y: 0.68, w: 9.8, h: 0.55, fontSize: 23, bold: true, color: C.ink, margin: 0 });
  if (note) slide.addText(note, { x: 10.35, y: 0.73, w: 2.4, h: 0.32, fontSize: 8.5, color: C.muted, align: "right" });
  slide.addShape(pptx.ShapeType.line, { x: 0.55, y: 1.34, w: 12.25, h: 0, line: { color: C.line, width: 1 } });
}

function addFooter(slide, page) {
  slide.addText("Source: Tabcut visible page copy / Word report, 2026-05-26", { x: 0.55, y: 7.08, w: 7.5, h: 0.16, fontSize: 7, color: "7B8490" });
  slide.addText(String(page).padStart(2, "0"), { x: 12.25, y: 7.04, w: 0.55, h: 0.2, fontSize: 8, color: "7B8490", align: "right" });
}

function metric(slide, x, label, value, caption, color) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y: 2.28, w: 2.55, h: 1.25, rectRadius: 0.06, fill: { color: "FFFFFF" }, line: { color: C.line, width: 0.8 } });
  slide.addText(label, { x: x + 0.18, y: 2.45, w: 2.1, h: 0.18, fontSize: 8, bold: true, color: C.muted });
  slide.addText(value, { x: x + 0.18, y: 2.73, w: 2.1, h: 0.33, fontSize: 19, bold: true, color });
  slide.addText(caption, { x: x + 0.18, y: 3.15, w: 2.1, h: 0.2, fontSize: 7.5, color: C.muted, fit: "shrink" });
}

function addBullets(slide, x, y, bullets, opts = {}) {
  const runs = [];
  bullets.forEach((b) => runs.push({ text: b, options: { bullet: { type: "ul" }, breakLine: true } }));
  slide.addText(runs, { x, y, w: opts.w || 5.7, h: opts.h || 2.1, fontSize: opts.fontSize || 12, color: opts.color || C.ink, breakLine: false, paraSpaceAfterPt: 7, fit: "shrink", margin: 0.06 });
}

function addTableSlide(slide, start, end, pageNo) {
  slide.background = { color: "FFFFFF" };
  slideTitle(slide, "VISIBLE MATERIAL LIST", `可见素材 Top ${start}-${end}`, "按展现量/热度整理");
  const header = [["#", "账号", "素材标题", "展现量", "热度", "点赞比", "CTA"]];
  const body = rows.slice(start - 1, end).map((r) => [r[0], r[1] || "-", r[2], r[4], r[5], r[6], r[7]]);
  const table = header.concat(body);
  slide.addTable(table, {
    x: 0.55,
    y: 1.62,
    w: 12.23,
    h: 5.05,
    colW: [0.36, 1.55, 5.7, 0.9, 0.82, 0.68, 1.0],
    rowH: [0.35].concat(body.map(() => 0.44)),
    margin: 0.05,
    border: { type: "solid", color: C.line, width: 0.4 },
    fill: { color: "FFFFFF" },
    color: C.ink,
    fontFace: "Microsoft YaHei",
    fontSize: 7.2,
    valign: "mid",
    fit: "shrink",
    bold: false,
    autoFit: false,
    firstRow: { fill: { color: C.ink }, color: C.white, bold: true, fontSize: 7.5 },
    alternateRowFill: "F7FAFC",
  });
  slide.addText("说明：原页面未暴露转化率和独立视频详情链接；本表以点赞比代表互动质量，以展现量/热度代表规模。", {
    x: 0.58,
    y: 6.75,
    w: 11.6,
    h: 0.22,
    fontSize: 7.5,
    color: C.muted,
  });
  addFooter(slide, pageNo);
}

let s = pptx.addSlide();
s.background = { color: "F8FAFB" };
s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: "F8FAFB" }, line: { color: "F8FAFB" } });
s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: C.green }, line: { color: C.green } });
s.addText("特看台湾 UGC / 广告素材核查", { x: 0.72, y: 0.68, w: 9.5, h: 0.55, fontSize: 26, bold: true, color: C.ink });
s.addText("最近 10 天口径下，视频库无结果；可见广告素材可用于素材方向参考，但不能直接视为转化榜单。", { x: 0.72, y: 1.35, w: 9.3, h: 0.55, fontSize: 13, color: C.muted, fit: "shrink" });
metric(s, 0.72, "视频库结果", "No data", "TW + 近10天 + UGC/带货视频", C.red);
metric(s, 3.55, "可整理素材", "20 条", "来自广告素材页可见列表", C.blue);
metric(s, 6.38, "最高展现量", "28.4M", "OSCAL TIGER 12 素材", C.green);
metric(s, 9.21, "最高点赞比", "10.48%", "安哥碎碎念汽车素材", C.amber);
s.addShape(pptx.ShapeType.roundRect, { x: 0.72, y: 4.2, w: 11.85, h: 1.45, rectRadius: 0.06, fill: { color: "FFFFFF" }, line: { color: C.line, width: 0.8 } });
s.addText("本次判断", { x: 0.95, y: 4.44, w: 1.2, h: 0.22, fontSize: 9, bold: true, color: C.green });
addBullets(s, 2.05, 4.38, [
  "当前页面不能证明“点击率高、转化率高”，只能证明可见广告素材的展现规模与互动强弱。",
  "如果要做选品或投放复盘，需要进一步补齐转化率、商品链接、视频详情链接和售卖量。",
], { w: 9.9, h: 0.85, fontSize: 10.5 });
s.addText("D:\\跨境素材\\特看_台湾UGC视频_近10天核查.docx", { x: 0.72, y: 6.72, w: 8.4, h: 0.22, fontSize: 8, color: C.muted });
addFooter(s, 1);

s = pptx.addSlide();
s.background = { color: "FFFFFF" };
slideTitle(s, "SEARCH SCOPE", "查询口径与证据边界", "近 10 天 / 台湾 / UGC");
s.addShape(pptx.ShapeType.roundRect, { x: 0.68, y: 1.75, w: 5.55, h: 3.85, rectRadius: 0.06, fill: { color: "F8FAFB" }, line: { color: C.line, width: 0.8 } });
s.addText("已执行查询", { x: 0.95, y: 2.0, w: 2.2, h: 0.3, fontSize: 15, bold: true, color: C.ink });
addBullets(s, 0.95, 2.48, [
  "特看「发现视频」：TW + 2026-05-16 至 2026-05-25 + 视频带货口径。",
  "结果返回 No data，未形成可直接排序的视频清单。",
  "转向广告素材页，抓取可见 country.TW 前 20 条素材。"
], { w: 4.85, h: 2.1, fontSize: 11 });
s.addShape(pptx.ShapeType.roundRect, { x: 6.72, y: 1.75, w: 5.85, h: 3.85, rectRadius: 0.06, fill: { color: "FFFFFF" }, line: { color: C.line, width: 0.8 } });
s.addText("不可直接使用的字段", { x: 7.0, y: 2.0, w: 2.6, h: 0.3, fontSize: 15, bold: true, color: C.ink });
addBullets(s, 7.0, 2.48, [
  "转化率：页面未暴露，无法核验。",
  "独立 TikTok/特看视频详情链接：复制内容中未暴露。",
  "售卖量/商品成交：当前可见页没有提供。"
], { w: 5.1, h: 2.1, fontSize: 11 });
s.addShape(pptx.ShapeType.roundRect, { x: 0.68, y: 6.02, w: 11.9, h: 0.58, rectRadius: 0.04, fill: { color: "EEF7F4" }, line: { color: "CFE7DE", width: 0.8 } });
s.addText("因此：这份 PPT 是“素材发现与优先核查清单”，不是完整的转化榜单。", { x: 0.92, y: 6.18, w: 11.2, h: 0.24, fontSize: 11, bold: true, color: C.green });
addFooter(s, 2);

s = pptx.addSlide();
s.background = { color: "FFFFFF" };
slideTitle(s, "TOP SIGNALS", "优先关注的素材信号", "从规模与互动双轴筛选");
const signals = [
  ["规模最大", "OSCAL TIGER 12", "28.4M 展现 / 1.5M 热度 / 5.28% 点赞比", C.green],
  ["互动最高", "安哥碎碎念汽车素材", "10.48% 点赞比，虽展现量较低但互动质量强", C.amber],
  ["账号复现", "凤凰卫视PhoenixTV", "多条素材进入前 20，说明账号侧有持续素材分发能力", C.blue],
  ["商业 CTA", "Learn More / Contact us / Order now", "需要回到平台逐条核查商品、落地页和转化链路", C.red],
];
signals.forEach((it, idx) => {
  const x = idx % 2 === 0 ? 0.7 : 6.75;
  const y = idx < 2 ? 1.75 : 4.15;
  s.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.55, h: 1.55, rectRadius: 0.06, fill: { color: "FFFFFF" }, line: { color: C.line, width: 0.8 } });
  s.addShape(pptx.ShapeType.rect, { x, y, w: 0.11, h: 1.55, fill: { color: it[3] }, line: { color: it[3] } });
  s.addText(it[0], { x: x + 0.28, y: y + 0.22, w: 1.8, h: 0.2, fontSize: 8.5, bold: true, color: it[3] });
  s.addText(it[1], { x: x + 0.28, y: y + 0.52, w: 4.85, h: 0.3, fontSize: 14, bold: true, color: C.ink, fit: "shrink" });
  s.addText(it[2], { x: x + 0.28, y: y + 0.95, w: 4.85, h: 0.32, fontSize: 9.2, color: C.muted, fit: "shrink" });
});
addFooter(s, 3);

s = pptx.addSlide();
addTableSlide(s, 1, 10, 4);

s = pptx.addSlide();
addTableSlide(s, 11, 20, 5);

s = pptx.addSlide();
s.background = { color: "FFFFFF" };
slideTitle(s, "NEXT STEPS", "后续核查动作", "补齐转化与商品证据");
s.addShape(pptx.ShapeType.roundRect, { x: 0.72, y: 1.75, w: 11.85, h: 4.25, rectRadius: 0.06, fill: { color: "F8FAFB" }, line: { color: C.line, width: 0.8 } });
const steps = [
  ["1", "逐条回到特看广告素材页", "打开 Learn More / Contact us / Shop now，记录落地页、商品、售价、素材链接。"],
  ["2", "补齐转化口径", "优先找 CTR、CVR、订单量、GMV 或平台等价指标；没有则标注缺失。"],
  ["3", "按业务类目二次筛选", "剔除新闻、诈骗警示、纯品牌曝光等与选品无关素材。"],
  ["4", "沉淀可复用模板", "把“地区 + 近 N 天 + 视频库 + 广告素材页兜底”的流程固化为特看抓取 SOP。"],
];
steps.forEach((st, i) => {
  const y = 2.05 + i * 0.9;
  s.addShape(pptx.ShapeType.ellipse, { x: 1.02, y, w: 0.42, h: 0.42, fill: { color: C.green }, line: { color: C.green } });
  s.addText(st[0], { x: 1.02, y: y + 0.1, w: 0.42, h: 0.16, fontSize: 8, bold: true, color: C.white, align: "center" });
  s.addText(st[1], { x: 1.65, y: y - 0.02, w: 3.1, h: 0.26, fontSize: 13, bold: true, color: C.ink });
  s.addText(st[2], { x: 4.8, y: y, w: 6.8, h: 0.34, fontSize: 10, color: C.muted, fit: "shrink" });
});
s.addShape(pptx.ShapeType.roundRect, { x: 0.72, y: 6.35, w: 11.85, h: 0.46, rectRadius: 0.04, fill: { color: "FFF7E8" }, line: { color: "F3D39A", width: 0.8 } });
s.addText("建议优先复核 #1、#2、#6、#8：分别代表大规模曝光、稳定账号、最高互动和汽车高客单素材。", { x: 0.95, y: 6.49, w: 11.2, h: 0.2, fontSize: 9.5, bold: true, color: "8A4B0F" });
addFooter(s, 6);

pptx.writeFile({ fileName: out });
