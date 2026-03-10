// src/data/products.ts
export type ProductSpec = {
  diameter: string;
  length_mm?: number;
  grade?: string;
  finish: string;
  material: string;
  pitch?: number;
  drive_size?: string;
  thread?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  categoryLabel: string;
  stock_quantity: number;
  specifications: ProductSpec;
};

const IMG = {
  socket: "/images/socket-head.png",
  button: "/images/socket-head.png",
  csk: "/images/socket-head.png",
  phillips: "/images/socket-head.png",
  philcsk: "/images/socket-head.png",
  cheese: "/images/socket-head.png",
  grub: "/images/socket-head.png",
  nut: "/images/socket-head.png",
  nyloc: "/images/socket-head.png",
  washer: "/images/socket-head.png",
  spring: "/images/socket-head.png",
  brass: "/images/socket-head.png",
  spacer: "/images/socket-head.png",
};

type PEntry = [string,number,number,number,string?,number?];

function makeProducts(
  cat: string, catLabel: string, img: string, desc: string,
  mat: string, finish: string, grade: string|undefined,
  driveSize: string|undefined, entries: PEntry[]
): Product[] {
  return entries.map(([dia, len, price, stock, id_suffix, pitch]) => ({
    id: `${cat}-${id_suffix || dia.toLowerCase().replace('.','')}-${len}`,
    name: `${catLabel} ${dia} x ${len}mm – ${finish}`,
    description: desc,
    price,
    image_url: img,
    category: cat,
    categoryLabel: catLabel,
    stock_quantity: stock,
    specifications: {
      diameter: dia,
      length_mm: len,
      grade,
      finish,
      material: mat,
      pitch,
      drive_size: driveSize,
    },
  }));
}

function makeNuts(
  cat: string, catLabel: string, img: string, desc: string,
  mat: string, finish: string, entries: [string,number,number,string?][]
): Product[] {
  return entries.map(([dia, price, stock, suf]) => ({
    id: `${cat}-${suf || dia.toLowerCase().replace('.', '')}`,
    name: `${catLabel} ${dia} – ${finish}`,
    description: desc,
    price,
    image_url: img,
    category: cat,
    categoryLabel: catLabel,
    stock_quantity: stock,
    specifications: { diameter: dia, finish, material: mat },
  }));
}

// === ALLEN SOCKET HEAD (High Tensile 10.9 / SS304) ===
const socketHead = makeProducts(
  "socket-head","Allen Socket Head",IMG.socket,
  "Socket head cap screw with hex drive, high tensile strength.",
  "Alloy Steel","Black Oxide","10.9","1.5–6 mm",
  [
    ["M2",4,0.20,600,"m2",0.4],["M2",6,0.22,550,"m2",0.4],["M2",8,0.25,500,"m2",0.4],
    ["M2",10,0.30,480,"m2",0.4],["M2",12,0.35,420,"m2",0.4],["M2",16,0.45,360,"m2",0.4],
    ["M2.5",4,0.28,300,"m25",0.45],["M2.5",6,0.33,280,"m25",0.45],["M2.5",8,0.36,240,"m25",0.45],
    ["M3",6,0.40,220,"m3",0.5],["M3",8,0.45,200,"m3",0.5],["M3",10,0.55,180,"m3",0.5],
    ["M3",12,0.65,160,"m3",0.5],["M3",16,0.95,120,"m3",0.5],["M3",20,1.10,100,"m3",0.5],
    ["M4",8,1.10,100,"m4",0.7],["M4",10,1.25,90,"m4",0.7],["M4",12,1.40,80,"m4",0.7],
    ["M4",16,1.85,60,"m4",0.7],["M4",20,2.20,50,"m4",0.7],
    ["M5",8,3.80,200,"m5",0.8],["M5",10,3.80,180,"m5",0.8],["M5",12,4.00,170,"m5",0.8],
    ["M5",16,4.40,150,"m5",0.8],["M5",20,5.00,130,"m5",0.8],["M5",25,5.80,110,"m5",0.8],
    ["M6",10,5.50,150,"m6",1.0],["M6",12,5.80,140,"m6",1.0],["M6",16,6.50,120,"m6",1.0],
    ["M6",20,7.20,100,"m6",1.0],["M6",25,8.00,90,"m6",1.0],["M6",30,9.50,80,"m6",1.0],
    ["M8",12,9.00,100,"m8",1.25],["M8",16,10.50,90,"m8",1.25],["M8",20,12.00,80,"m8",1.25],
    ["M8",25,14.00,70,"m8",1.25],["M8",30,16.00,60,"m8",1.25],["M8",40,20.00,50,"m8",1.25],
    ["M8",50,24.00,40,"m8",1.25],
  ]
);

// === ALLEN BUTTON HEAD (SS304) ===
const buttonHead = makeProducts(
  "button-head","Allen Button Head",IMG.button,
  "Low-profile button head cap screw with hex socket drive, SS304.",
  "SS304","Stainless Steel",undefined,"2–5 mm",
  [
    ["M3",6,1.40,300,"m3",0.5],["M3",8,1.60,280,"m3",0.5],["M3",10,1.80,260,"m3",0.5],
    ["M3",12,2.00,240,"m3",0.5],["M3",16,2.40,200,"m3",0.5],["M3",20,2.80,180,"m3",0.5],
    ["M4",8,2.40,250,"m4",0.7],["M4",10,2.60,230,"m4",0.7],["M4",12,2.80,210,"m4",0.7],
    ["M4",16,3.20,190,"m4",0.7],["M4",20,3.80,170,"m4",0.7],
    ["M5",8,3.60,200,"m5",0.8],["M5",10,3.80,180,"m5",0.8],["M5",12,4.20,160,"m5",0.8],
    ["M5",16,4.80,140,"m5",0.8],["M5",20,5.40,120,"m5",0.8],
    ["M6",10,6.00,150,"m6",1.0],["M6",12,6.50,130,"m6",1.0],["M6",16,7.50,110,"m6",1.0],
    ["M6",20,8.50,90,"m6",1.0],
    ["M8",16,15.00,80,"m8",1.25],["M8",20,18.00,70,"m8",1.25],["M8",25,20.00,60,"m8",1.25],
    ["M8",30,22.00,50,"m8",1.25],["M8",40,26.00,40,"m8",1.25],["M8",50,28.00,30,"m8",1.25],
  ]
);

// === ALLEN COUNTERSUNK (SS304) ===
const countersunk = makeProducts(
  "countersunk","Allen Countersunk (CSK)",IMG.csk,
  "Flat head countersunk screw with hex socket drive, SS304.",
  "SS304","Stainless Steel",undefined,"2.5–4 mm",
  [
    ["M3",6,1.60,300,"m3",0.5],["M3",8,1.80,280,"m3",0.5],["M3",10,2.00,260,"m3",0.5],
    ["M3",12,2.20,240,"m3",0.5],["M3",16,2.60,200,"m3",0.5],
    ["M4",8,2.60,250,"m4",0.7],["M4",10,2.80,230,"m4",0.7],["M4",12,3.00,210,"m4",0.7],
    ["M4",16,3.40,190,"m4",0.7],["M4",20,4.00,170,"m4",0.7],
    ["M5",8,4.00,200,"m5",0.8],["M5",10,4.20,180,"m5",0.8],["M5",12,4.60,160,"m5",0.8],
    ["M5",16,5.20,140,"m5",0.8],["M5",20,6.00,120,"m5",0.8],
  ]
);

// === PHILLIPS PAN HEAD (SS304) ===
const phillipsPan = makeProducts(
  "phillips-pan","Phillips Pan Head",IMG.phillips,
  "Pan head machine screw with Phillips cross drive, SS304.",
  "SS304","Stainless Steel",undefined,"Phillips #1–#2",
  [
    ["M2",4,1.80,400,"m2",0.4],["M2",6,2.00,380,"m2",0.4],["M2",8,2.20,360,"m2",0.4],
    ["M2",10,2.40,340,"m2",0.4],["M2",12,2.60,320,"m2",0.4],
    ["M3",6,1.60,350,"m3",0.5],["M3",8,1.80,330,"m3",0.5],["M3",10,2.00,310,"m3",0.5],
    ["M3",12,2.20,290,"m3",0.5],["M3",16,2.60,270,"m3",0.5],["M3",20,3.00,250,"m3",0.5],
    ["M4",8,2.20,300,"m4",0.7],["M4",10,2.40,280,"m4",0.7],["M4",12,2.60,260,"m4",0.7],
    ["M4",16,3.00,240,"m4",0.7],["M4",20,3.60,220,"m4",0.7],
    ["M5",8,3.00,250,"m5",0.8],["M5",10,3.20,230,"m5",0.8],["M5",12,3.60,210,"m5",0.8],
    ["M5",16,4.00,190,"m5",0.8],["M5",20,4.80,170,"m5",0.8],
  ]
);

// === PHILLIPS CSK (SS304) ===
const phillipsCSK = makeProducts(
  "phillips-csk","Phillips Countersunk",IMG.philcsk,
  "Countersunk machine screw with Phillips cross drive, SS304.",
  "SS304","Stainless Steel",undefined,"Phillips #1–#2",
  [
    ["M3",5,1.20,400,"m3",0.5],["M3",8,1.40,380,"m3",0.5],["M3",10,1.40,360,"m3",0.5],
    ["M3",12,1.60,340,"m3",0.5],["M3",16,2.00,300,"m3",0.5],
    ["M4",8,1.80,350,"m4",0.7],["M4",10,2.00,330,"m4",0.7],["M4",12,2.20,310,"m4",0.7],
    ["M4",16,2.60,280,"m4",0.7],["M4",20,3.20,260,"m4",0.7],
    ["M5",10,3.00,250,"m5",0.8],["M5",12,3.20,230,"m5",0.8],["M5",16,3.80,210,"m5",0.8],
    ["M5",20,4.40,190,"m5",0.8],
  ]
);

// === GRUB SCREWS (High Tensile 12.9) ===
const grubScrews = makeProducts(
  "grub-screw","Grub Screw (Set Screw)",IMG.grub,
  "Headless set screw with hex socket, high tensile 12.9, black oxide.",
  "Alloy Steel","Black Oxide","12.9","1.5–5 mm",
  [
    ["M3",3,1.20,500,"m3",0.5],["M3",4,1.40,480,"m3",0.5],["M3",5,1.40,460,"m3",0.5],
    ["M3",6,1.40,440,"m3",0.5],["M3",8,1.60,420,"m3",0.5],["M3",10,1.80,400,"m3",0.5],
    ["M4",4,1.40,400,"m4",0.7],["M4",5,1.60,380,"m4",0.7],["M4",6,1.60,360,"m4",0.7],
    ["M4",8,1.80,340,"m4",0.7],["M4",10,2.00,320,"m4",0.7],
    ["M5",4,1.40,350,"m5",0.8],["M5",5,1.60,330,"m5",0.8],["M5",6,1.60,310,"m5",0.8],
    ["M5",8,1.80,290,"m5",0.8],["M5",10,1.80,270,"m5",0.8],
    ["M6",6,2.20,250,"m6",1.0],["M6",8,2.40,230,"m6",1.0],["M6",10,2.80,210,"m6",1.0],
  ]
);

// === HEX NUTS (SS304) ===
const hexNuts = makeNuts(
  "hex-nut","Hex Nut",IMG.nut,
  "Standard hex nut, SS304 stainless steel.","SS304","Stainless Steel",
  [["M2",0.60,800],["M2.5",0.80,700],["M3",1.00,600],["M4",1.40,500],["M5",2.00,400],["M6",2.80,350],["M8",4.50,300]]
);

// === NYLOC NUTS (SS304) ===
const nylocNuts = makeNuts(
  "nyloc-nut","Nyloc Nut",IMG.nyloc,
  "Self-locking nylon insert hex nut, SS304.","SS304","Stainless Steel",
  [["M3",1.80,400],["M4",2.40,350],["M5",3.20,300],["M6",4.00,250],["M8",6.00,200]]
);

// === FLAT WASHERS (SS304) ===
const flatWashers = makeNuts(
  "flat-washer","Flat Washer",IMG.washer,
  "Standard flat washer, SS304 stainless steel.","SS304","Stainless Steel",
  [["M3",0.60,800],["M4",0.80,700],["M5",1.00,600],["M6",1.40,500],["M8",2.00,400]]
);

// === SPRING WASHERS (SS304) ===
const springWashers = makeNuts(
  "spring-washer","Spring Washer",IMG.spring,
  "Split lock spring washer, SS304 stainless steel.","SS304","Stainless Steel",
  [["M3",0.80,700],["M4",1.00,600],["M5",1.40,500],["M6",1.80,400],["M8",2.60,300]]
);

// === BRASS INSERTS ===
const brassInserts = makeNuts(
  "brass-insert","Brass Insert",IMG.brass,
  "Knurled brass threaded insert for plastic/3D prints.","Brass","Natural Brass",
  [["M2",3.00,500],["M2.5",3.50,450],["M3",4.00,400],["M4",5.00,350],["M5",6.50,300]]
);

// === NYLON SPACERS ===
const spacers = makeNuts(
  "spacer","Nylon Spacer",IMG.spacer,
  "Female-to-female nylon hex spacer standoff.","Nylon","White Nylon",
  [["M3",2.00,500],["M4",2.80,400]]
);

// Export all
export const allProducts: Product[] = [
  ...socketHead, ...buttonHead, ...countersunk,
  ...phillipsPan, ...phillipsCSK,
  ...grubScrews,
  ...hexNuts, ...nylocNuts,
  ...flatWashers, ...springWashers,
  ...brassInserts, ...spacers,
];

export const categories = [
  { id: "all", label: "All Products", count: allProducts.length },
  { id: "socket-head", label: "Allen Socket Head", count: socketHead.length },
  { id: "button-head", label: "Allen Button Head", count: buttonHead.length },
  { id: "countersunk", label: "Allen Countersunk", count: countersunk.length },
  { id: "phillips-pan", label: "Phillips Pan Head", count: phillipsPan.length },
  { id: "phillips-csk", label: "Phillips CSK", count: phillipsCSK.length },
  { id: "grub-screw", label: "Grub Screws", count: grubScrews.length },
  { id: "hex-nut", label: "Hex Nuts", count: hexNuts.length },
  { id: "nyloc-nut", label: "Nyloc Nuts", count: nylocNuts.length },
  { id: "flat-washer", label: "Flat Washers", count: flatWashers.length },
  { id: "spring-washer", label: "Spring Washers", count: springWashers.length },
  { id: "brass-insert", label: "Brass Inserts", count: brassInserts.length },
  { id: "spacer", label: "Nylon Spacers", count: spacers.length },
];
