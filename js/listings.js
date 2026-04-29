/* ========================================
   Global Marketing Real Estate
   Listings Renderer — listings.js
   ======================================== */

/**
 * LISTINGS DATA ARRAY
 * -------------------
 * Populate this array with data from Excel.
 * Each object shape:
 * {
 *   page        : 'commercial' | 'mivida' | 'cairo-festival',
 *   unitType    : 'مكتب',           // used for filter pills
 *   title       : 'اسم الوحدة',
 *   projectName : 'اسم المشروع',
 *   description : 'وصف مختصر',
 *   price       : '20,000 جنيه / شهر',
 *   image       : 'assets/unit-1.jpg'  // optional, fallback shown if empty
 * }
 */
const LISTINGS = [
  {
    page: 'mivida',
    unitType: 'شقة',
    title: 'Apartment for Rent in Mivida Blue Views',
    specs: ['3 Bedrooms', '3 Bathrooms'],
    description: 'First floor · First use · Semi-furnished · Located in Blue Views. Contact us to arrange a viewing.',
    price: '75,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=14-xollA4mq3rSkECXHFvPVoKLTVmryXR&sz=w1600',
      'https://drive.google.com/thumbnail?id=1P4EyYj5zGsuSj6dnuMe0OOxu6Na72E3P&sz=w1600',
      'https://drive.google.com/thumbnail?id=1bmqNDyZmf8eGZFwqwGokYomTTtUEDDes&sz=w1600',
      'https://drive.google.com/thumbnail?id=1oFokUyBygq4eoaeVKrScz1woR3Cu8oai&sz=w1600',
      'https://drive.google.com/thumbnail?id=1TzbFXrXPW0waKcMp5mcDyFmt63vFTaDT&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'شقة',
    title: 'Apartment for Rent in Mivida Boulevard',
    specs: ['3 Bedrooms', '3 Bathrooms'],
    description: 'First floor · Fully furnished · Nanny room · Located in Boulevard. Move-in ready — inquire now.',
    price: '159,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1Fhy6oFs2a-B_pczYPPEIQJ37eupUSBm-&sz=w1600',
      'https://drive.google.com/thumbnail?id=1RYz-thFYQndbDfvuQ7laH0Lfd8wzEEXl&sz=w1600',
      'https://drive.google.com/thumbnail?id=1TBudDHa9moMqcMotFoSkznCysH-DEQdv&sz=w1600',
      'https://drive.google.com/thumbnail?id=16tUF_ZAYmAlMvzSoeb6lLe4k-OX0gomh&sz=w1600',
      'https://drive.google.com/thumbnail?id=17evVPHnRdSf747nUReNn2ApB3eFFZolk&sz=w1600',
      'https://drive.google.com/thumbnail?id=1yE0a1SAjcElq8X2npH5GiXffyNkpxDSX&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'فيلا مستقلة',
    title: 'Standalone Villa for Rent in Mivida - BUA 391',
    specs: ['BUA 391 sqm', '4 Bedrooms', '4 Bathrooms'],
    description: 'Large garden · Nanny room with bathroom · Semi-furnished · Kitchen & ACs included. A rare opportunity — get in touch today.',
    price: '185,500 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1v7SkfQzl5bS2ib8X54eGiTb8Tsrm_y5W&sz=w1600',
      'https://drive.google.com/thumbnail?id=1Y7f509kYmdf-BRVmmdybcKlsmuS0IWjn&sz=w1600',
      'https://drive.google.com/thumbnail?id=14-nbsNxmaO_zptz4QH4M32Tnq0dgYg-4&sz=w1600',
      'https://drive.google.com/thumbnail?id=1q6bRlis87LvIg0j5fbCslhjl7LID9dG8&sz=w1600',
      'https://drive.google.com/thumbnail?id=1aSMsqgVpRaz6gI8UlxuptxENZyPlSMg4&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'فيلا مستقلة',
    title: 'Standalone for Rent in Mivida',
    specs: ['BUA 356 sqm', 'Land 500 sqm', '5 Bedrooms', '5 Bathrooms'],
    description: 'Prime Bahary location · Overlooking landscape valley · Semi-furnished · ACs & kitchen included · Nanny room.',
    price: '200,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1QtK7ufWVJtIGF9XMMzxlIyolJNwV5-B1&sz=w1600',
      'https://drive.google.com/thumbnail?id=1zeIjWt8o-1vbur7oWG4XgvPdsh_OMYYN&sz=w1600',
      'https://drive.google.com/thumbnail?id=1Yat5RAvCkI6UHvKJEZpufGfngjio9FjG&sz=w1600',
      'https://drive.google.com/thumbnail?id=1TKOpGVHuW-h0LQ6IXJdbnxIdrqmzJIQI&sz=w1600',
      'https://drive.google.com/thumbnail?id=1KW8qHaMTnwL2Pvt94-ZZCKpXeYjG9J3j&sz=w1600',
      'https://drive.google.com/thumbnail?id=1mGtp7EkW49dhIFmRcgHyc7lgw7iMLOpj&sz=w1600',
      'https://drive.google.com/thumbnail?id=1iN70sK_2ToI72cNlomcMlYUeaQwt-E7n&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'فيلا مستقلة',
    title: 'Stand-alone Villa for Rent in Cairo Festival City',
    specs: ['BUA 370 sqm', '5 Master Bedrooms'],
    description: 'Ground + First + Roof floors · Nanny & driver rooms · Concealed ACs · Kitchen with appliances · Landscape. Schedule a tour now.',
    price: '265,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1pz3qzSv59IckM9lyvSBaORJxJaijTkkX&sz=w1600',
      'https://drive.google.com/thumbnail?id=1IwNhCjz723hdRcTJLfVDZywZw-gCHlsZ&sz=w1600',
      'https://drive.google.com/thumbnail?id=1BI-LZFVR2eOFF9LfyGSaqqS3EG2oU7af&sz=w1600',
      'https://drive.google.com/thumbnail?id=1aO305lmYxuCdINebTJY23RpJ9SrSvYdU&sz=w1600',
      'https://drive.google.com/thumbnail?id=1R6HzET-WAlq_f_0uzEmtsPqN-8PtYclu&sz=w1600',
      'https://drive.google.com/thumbnail?id=1gtN_XtdIyt5idp17DSKv8jkqcUxmPd45&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'فيلا مستقلة',
    title: 'Stand Alone for Rent in Mivida',
    specs: ['Land 435 sqm', 'BUA 355 sqm', '4 Bedrooms', '4 Bathrooms'],
    description: 'Fully finished modern · Private swimming pool · Brand new condition · ACs included · Nanny room.',
    price: '344,500 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1gqQsonb2OTjcoLzbm5Y40XzWY69DpDmr&sz=w1600',
      'https://drive.google.com/thumbnail?id=1-USpukp0UdNluyOu1X7TpvPSG28LcEep&sz=w1600',
      'https://drive.google.com/thumbnail?id=14XJfkn8H1NPraWxL7Qm6yVvt9KK843aL&sz=w1600',
      'https://drive.google.com/thumbnail?id=1_4w7OoAMwTwDjT3BgppbpHScF7lsLRmr&sz=w1600',
      'https://drive.google.com/thumbnail?id=1WryaXzBfgCRiJz6SBr84tQUhpXICyT9t&sz=w1600',
      'https://drive.google.com/thumbnail?id=1_6SjgbD8OzG7v8S5Ox0bVv9fMrL-pniH&sz=w1600',
      'https://drive.google.com/thumbnail?id=1VzVPCO3BMcIgBrDWkY7rFlZcakuVu8GJ&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'شقة',
    title: 'Apartment for Rent in CFC Living',
    specs: ['188 sqm', '3 Bedrooms en-suite'],
    description: 'Private garden 80m² · Guest bathroom · Fully furnished · Terrace · First use. Contact us to book a viewing.',
    price: '110,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1oUvPjVFefjdKOzlsVP1L3XGrxUviaESq&sz=w1600',
      'https://drive.google.com/thumbnail?id=1tqIAlVEVJMlyjB1tkhgdbTudSwc4Kb6w&sz=w1600',
      'https://drive.google.com/thumbnail?id=1eO8lQ226PGlrmwih4A1J1lyHTIZ3ssiW&sz=w1600',
      'https://drive.google.com/thumbnail?id=1eGIjYjeS94R7Jj1LzbcrsYALNrjp4cFE&sz=w1600',
      'https://drive.google.com/thumbnail?id=12zb8xaJM6ufbTqFml6JxYgsiIl4kz4JC&sz=w1600',
      'https://drive.google.com/thumbnail?id=1LH6tkycLrEMAyUrkLbJ0Z23Cq0dA1vDr&sz=w1600',
      'https://drive.google.com/thumbnail?id=17mJtX-1Y1mflgqtvSjv2bpqL_bEyJyz-&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'فيلا مستقلة',
    title: 'Standalone Villa for Rent in Cairo Festival City - First Use',
    specs: ['500 sqm', '7 Bedrooms (4 Masters)', '6 Bathrooms'],
    description: 'Private pool · Ground + First + Roof floors · Maid & driver rooms · Elevator · Kitchen appliances. First use — inquire now.',
    price: '424,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1D4ghdONImABj8f_Y_tQ8bZROJLgvgUtC&sz=w1600',
      'https://drive.google.com/thumbnail?id=17pDE9ccobp1i-gSp4NG4JHsN-UM5plc0&sz=w1600',
      'https://drive.google.com/thumbnail?id=1avJXo-CIhcq7HnMUVhG1Vg2H5-52wWio&sz=w1600',
      'https://drive.google.com/thumbnail?id=1tvGmHJ-T7ga2YDAtIvXFBF1vHcSYABUZ&sz=w1600',
      'https://drive.google.com/thumbnail?id=1jC2qefbl7U4EpgHM_0YPoqpTw3VevWlU&sz=w1600',
      'https://drive.google.com/thumbnail?id=1Rtu_yQf890sVBz0ed4heAiKRF8zSbXDc&sz=w1600',
      'https://drive.google.com/thumbnail?id=1yTIIGwuB3VkF4jZx4J8L9NSzLUohl2F6&sz=w1600',
      'https://drive.google.com/thumbnail?id=1m6WQeInpqePuyuTUSYd8mqdtSblDxi3X&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'فيلا مستقلة',
    title: 'Villa Stand Alone for Rent in CFC',
    specs: ['Land 500 sqm', 'BUA 375 sqm', '5 Bedrooms', '5 Bathrooms'],
    description: 'Semi-furnished · 200m² garden · Rooftop · Garage · Internal elevator · Central AC · Driver & maid rooms.',
    price: '318,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1EA19xVNlIX8n47bMuhTBiQC0CceTUALg&sz=w1600',
      'https://drive.google.com/thumbnail?id=1b0ZMDXPUCXKBtb0fHNKr4qk-pQ0ESL-g&sz=w1600',
      'https://drive.google.com/thumbnail?id=1Kqp9HiFnwTh9SEpBK7Wxv9_zjDenA4rn&sz=w1600',
      'https://drive.google.com/thumbnail?id=1uf-Uv8_YrVnXddWbXjYESCDuGZuEV0xW&sz=w1600',
      'https://drive.google.com/thumbnail?id=1GJ5RxqjiPzNCZ9J0k0yCcYqQ5n-qXAR1&sz=w1600',
      'https://drive.google.com/thumbnail?id=1m8rlP2xQ1eP4nbPce-7r_Be7JmLsPyYU&sz=w1600',
      'https://drive.google.com/thumbnail?id=1b0ZMDXPUCXKBtb0fHNKr4qk-pQ0ESL-g&sz=w1600',
      'https://drive.google.com/thumbnail?id=13vicGBOeGx20QhGfHBuOub3LCF0wXXC6&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'شقة',
    title: 'Apartments cfc oura 10',
    specs: ['164 sqm', '2 Bedrooms', '3 Bathrooms'],
    description: 'Fully furnished · First use. Ready to move in — get in touch today.',
    price: '116,600 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1D56-XddzlOBLLnqzXtLsYDdeCywqh5Wr&sz=w1600',
      'https://drive.google.com/thumbnail?id=1kQ1lUQ-D42SyrpDggiWZD7bC3LTYm6Ba&sz=w1600',
      'https://drive.google.com/thumbnail?id=1hwU9q0OhZkPvO6AIutDGN5UkVB3QuqZD&sz=w1600',
      'https://drive.google.com/thumbnail?id=1ew6B062LzgA7wYOQm1K5k5tjAAMcMVZX&sz=w1600',
      'https://drive.google.com/thumbnail?id=1xJFNnKUsn1EY3jvlfYYmxf-yWgJ6393h&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'توين هاوس',
    title: 'Luxury Furnished Twinhouse for Rent in Mivida',
    specs: ['BUA 356 sqm', 'Land 429 sqm', '4 Bedrooms', '4 Bathrooms'],
    description: 'Ultra-modern finishing · Branded furniture · Electrical shutters · Heating system · Security cameras. A premium lifestyle awaits.',
    price: '265,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1GU4Y8wgl3bR3G_ePpBZ8VyIxkuEuNuoH&sz=w1600',
      'https://drive.google.com/thumbnail?id=1h4LBZNuzg-LU10t9JrI6f_OYQxAyJ6EL&sz=w1600',
      'https://drive.google.com/thumbnail?id=19qe2zUlYasHrPW0ynpH_9AvMkvoyZsYE&sz=w1600',
      'https://drive.google.com/thumbnail?id=1awSkrwMzyaeL0ZFItDOCgNY5etHCsXcN&sz=w1600',
      'https://drive.google.com/thumbnail?id=1P12XAvasflFQrGVJRjgx9TyZaBJu8UcE&sz=w1600',
      'https://drive.google.com/thumbnail?id=1wlltsSe5xBApkdeoRyfEbTxNmX9Y6tH4&sz=w1600',
      'https://drive.google.com/thumbnail?id=1_p4Ga-myk5c4J4p-FFp7pdK0s_klPOWZ&sz=w1600'
    ]
  },
  {
    page: 'cairo-festival',
    unitType: 'شقة',
    title: 'Apartment for Rent in CFC',
    specs: ['220 sqm', '3 Bedrooms (2 Masters)', '4 Bathrooms'],
    description: 'Maid room with bathroom · Fully equipped kitchen · Private parking · Semi-furnished · Chandeliers & curtains.',
    price: '90,000 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=18XYTgAnoB_idqyyxuNS-afuPoAruzLeH&sz=w1600',
      'https://drive.google.com/thumbnail?id=1vnDdXGVLZvneSyCxwv2GRi9ezJF5OLG7&sz=w1600',
      'https://drive.google.com/thumbnail?id=1HLwmIyjnKsmshwCIs3qzb_fgbjnZ4rne&sz=w1600',
      'https://drive.google.com/thumbnail?id=1TLmvFabFETneVUwryaEeimbiUZppkYP2&sz=w1600',
      'https://drive.google.com/thumbnail?id=1x6NMQiyAw-fL7PQKyT009yaJrjrPR4NG&sz=w1600',
      'https://drive.google.com/thumbnail?id=1HLwmIyjnKsmshwCIs3qzb_fgbjnZ4rne&sz=w1600'
    ]
  },
  {
    page: 'mivida',
    unitType: 'فيلا مستقلة',
    title: 'Standalone for Rent in Mivida with Private Pool',
    specs: ['BUA 500 sqm', 'Land 640 sqm', '6 Bedrooms', '5 Bathrooms'],
    description: 'Private swimming pool · Nanny room · Kitchen & ACs included · Prime location. Contact us to arrange a visit.',
    price: '344,500 EGP / Month',
    images: [
      'https://drive.google.com/thumbnail?id=1syZuA6fsc4dMNPRY6r4HPE4oh5touPgo&sz=w1600',
      'https://drive.google.com/thumbnail?id=1GCHUUhCNoWydfPQZkVKdtgJORM3DtNLu&sz=w1600',
      'https://drive.google.com/thumbnail?id=1qaUicIOxdJtdhYKrR85cmMSycwjjAEqR&sz=w1600',
      'https://drive.google.com/thumbnail?id=1DRt489gb0GFsogrsOwUwWDGde9Jn--XG&sz=w1600',
      'https://drive.google.com/thumbnail?id=1fbLHp5SFukIL7phLrkbRu_MCrLFC0GwL&sz=w1600',
      'https://drive.google.com/thumbnail?id=1SPeD-ZqNJngRzK8AIv5J_vN4SSFtFE7u&sz=w1600'
    ]
  }
];

/* ── Placeholder image used when no image is provided ── */
const PLACEHOLDER_IMAGE = 'assets/listing-placeholder.svg';

/* ── WhatsApp / Call number by page ── */
const CONTACT_INFO = {
  default: {
    phone: '+201006140168',
    whatsapp: '201006140168'
  },
  commercial: {
    phone: '+201111424611',
    whatsapp: '201111424611'
  },
  mivida: {
    phone: '+201550621242',
    whatsapp: '201550621242'
  },
  'cairo-festival': {
    phone: '+201550621242',
    whatsapp: '201550621242'
  }
};

let COMMERCIAL_LISTINGS_CACHE = null;

const LISTINGS_UI_STRINGS = {
  ar: {
    all: 'الكل',
    priceLabel: 'الإيجار:',
    callNow: 'اتصل الآن',
    whatsapp: 'واتساب',
    emptyState: 'لا توجد وحدات متاحة في هذه الفئة حالياً. تواصل معنا للاستفسار.',
    waTemplate: item => `مرحبا، أنا مهتم بالوحدة:\n${item.title}\nالنوع: ${item.unitType}\nالسعر: ${item.price}`
  },
  en: {
    all: 'All',
    priceLabel: 'Rent:',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    emptyState: 'No units are currently available in this category. Contact us for inquiries.',
    waTemplate: item => `Hello, I am interested in this unit:\n${item.title}\nType: ${item.unitType}\nPrice: ${item.price}`
  }
};

const UNIT_TYPE_TRANSLATIONS = {
  'شقة': { ar: 'شقة', en: 'Apartment' },
  'فيلا مستقلة': { ar: 'فيلا مستقلة', en: 'Standalone Villa' },
  'توين هاوس': { ar: 'توين هاوس', en: 'Twinhouse' }
};

const DESCRIPTION_TRANSLATIONS_AR = {
  'First floor · First use · Semi-furnished · Located in Blue Views. Contact us to arrange a viewing.': 'الدور الأول · أول استخدام · نصف مفروشة · تقع في بلو فيوز. تواصل معنا لتحديد موعد المعاينة.',
  'First floor · Fully furnished · Nanny room · Located in Boulevard. Move-in ready — inquire now.': 'الدور الأول · مفروشة بالكامل · غرفة مربية · تقع في البوليفارد. جاهزة للسكن فوراً - تواصل الآن.',
  'Large garden · Nanny room with bathroom · Semi-furnished · Kitchen & ACs included. A rare opportunity — get in touch today.': 'حديقة كبيرة · غرفة مربية بحمام · نصف مفروشة · المطبخ والتكييفات متضمنة. فرصة نادرة - تواصل معنا اليوم.',
  'Prime Bahary location · Overlooking landscape valley · Semi-furnished · ACs & kitchen included · Nanny room.': 'موقع بحري مميز · إطلالة على لاندسكيب فالي · نصف مفروشة · التكييفات والمطبخ متضمنان · غرفة مربية.',
  'Ground + First + Roof floors · Nanny & driver rooms · Concealed ACs · Kitchen with appliances · Landscape. Schedule a tour now.': 'أرضي + أول + روف · غرفتا مربية وسائق · تكييفات مخفية · مطبخ بالأجهزة · لاندسكيب. احجز جولة الآن.',
  'Fully finished modern · Private swimming pool · Brand new condition · ACs included · Nanny room.': 'تشطيب مودرن كامل · مسبح خاص · حالة زيرو · التكييفات متضمنة · غرفة مربية.',
  'Private garden 80m² · Guest bathroom · Fully furnished · Terrace · First use. Contact us to book a viewing.': 'حديقة خاصة 80 م² · حمام ضيوف · مفروشة بالكامل · تراس · أول استخدام. تواصل معنا لحجز معاينة.',
  'Private pool · Ground + First + Roof floors · Maid & driver rooms · Elevator · Kitchen appliances. First use — inquire now.': 'مسبح خاص · أرضي + أول + روف · غرفتا خادمة وسائق · مصعد · أجهزة مطبخ. أول استخدام - تواصل الآن.',
  'Semi-furnished · 200m² garden · Rooftop · Garage · Internal elevator · Central AC · Driver & maid rooms.': 'نصف مفروشة · حديقة 200 م² · روف · جراج · مصعد داخلي · تكييف مركزي · غرفتا سائق وخادمة.',
  'Fully furnished · First use. Ready to move in — get in touch today.': 'مفروشة بالكامل · أول استخدام. جاهزة للسكن فوراً - تواصل معنا اليوم.',
  'Ultra-modern finishing · Branded furniture · Electrical shutters · Heating system · Security cameras. A premium lifestyle awaits.': 'تشطيب فائق الحداثة · أثاث من علامات تجارية · شتر كهربائي · نظام تدفئة · كاميرات مراقبة. أسلوب حياة فاخر بانتظارك.',
  'Maid room with bathroom · Fully equipped kitchen · Private parking · Semi-furnished · Chandeliers & curtains.': 'غرفة خادمة بحمام · مطبخ مجهز بالكامل · موقف خاص · نصف مفروشة · نجف وستائر.',
  'Private swimming pool · Nanny room · Kitchen & ACs included · Prime location. Contact us to arrange a visit.': 'مسبح خاص · غرفة مربية · المطبخ والتكييفات متضمنة · موقع مميز. تواصل معنا لترتيب زيارة.'
};

function _resolveLanguage(pageKey) {
  if (pageKey === 'commercial') {
    return 'ar';
  }

  return _getSavedSiteLanguage();
}

function _getSavedSiteLanguage() {
  try {
    const lang = localStorage.getItem('siteLang');
    return lang === 'ar' ? 'ar' : 'en';
  } catch (error) {
    return 'en';
  }
}

function _resolveUiStrings(pageKey) {
  const lang = _resolveLanguage(pageKey);
  return lang === 'ar' ? LISTINGS_UI_STRINGS.ar : LISTINGS_UI_STRINGS.en;
}

/**
 * initListingsPage
 * ----------------
 * Called from each listing page's inline <script>.
 * @param {string[]} unitTypes  - Array of unit type labels e.g. ['مكتب','محل']
 *                                Pass [] to auto-detect from LISTINGS data.
 * @param {string}   pageKey   - One of: 'commercial' | 'mivida' | 'cairo-festival'
 */
async function initListingsPage(unitTypes, pageKey) {
  const grid       = document.getElementById('listings-grid');
  const filterBar  = document.getElementById('listings-filter');
  const emptyState = document.getElementById('listings-empty');

  if (!grid || !filterBar) return;

  /* ── Collect listings for this page ── */
  let pageListings = [];

  try {
    pageListings = await _getPageListings(pageKey);
  } catch (error) {
    console.error('Failed to load listings for page:', pageKey, error);
  }

  filterBar.innerHTML = '';

  /* ── Resolve unit types ── */
  const resolvedTypes = unitTypes.length
    ? unitTypes
    : [...new Set(pageListings.map(l => l.unitType).filter(Boolean))];

  let currentLang = _resolveLanguage(pageKey);
  let uiStrings = _resolveUiStrings(pageKey);
  let activeType = null;

  const renderFilters = () => {
    filterBar.innerHTML = '';

    const allBtn = _makeFilterBtn(uiStrings.all, true, null);
    filterBar.appendChild(allBtn);

    resolvedTypes.forEach(type => {
      filterBar.appendChild(_makeFilterBtn(_localizeUnitType(type, currentLang, pageKey), false, type));
    });
  };

  const renderCards = () => {
    const filtered = activeType
      ? pageListings.filter(l => l.unitType === activeType)
      : pageListings;

    _renderCards(filtered, grid, emptyState, uiStrings, currentLang, pageKey);
  };

  renderFilters();
  renderCards();

  /* ── Wire filter clicks ── */
  filterBar.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeType = btn.dataset.type || null;
    renderCards();
  });

  if (pageKey !== 'commercial') {
    document.addEventListener('siteLanguageChanged', function() {
      currentLang = _resolveLanguage(pageKey);
      uiStrings = _resolveUiStrings(pageKey);
      renderFilters();

      if (activeType) {
        const activeBtn = Array.from(filterBar.querySelectorAll('.filter-btn'))
          .find(button => button.dataset.type === activeType);

        if (activeBtn) {
          filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          activeBtn.classList.add('active');
        }
      }

      renderCards();
    });
  }
}

/* ── Internal helpers ── */

function _makeFilterBtn(label, isActive, type) {
  const btn = document.createElement('button');
  btn.className = 'filter-btn' + (isActive ? ' active' : '');
  btn.textContent = label;
  if (type) btn.dataset.type = type;
  return btn;
}

function _renderCards(listings, grid, emptyState, uiStrings, currentLang, pageKey) {
  /* clear existing cards but keep empty-state element */
  grid.querySelectorAll('.listing-card').forEach(c => c.remove());

  if (!listings.length) {
    if (emptyState) {
      emptyState.style.display = 'block';
      const textNode = emptyState.childNodes[2];
      if (textNode) {
        textNode.textContent = ` ${uiStrings.emptyState}`;
      } else {
        emptyState.appendChild(document.createTextNode(` ${uiStrings.emptyState}`));
      }
    }
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  listings.forEach(item => {
    grid.insertBefore(_buildCard(item, uiStrings, currentLang, pageKey), emptyState);
  });
}

function _buildCard(item, uiStrings, currentLang, pageKey) {
  const article = document.createElement('article');
  article.className = 'project-card listing-card';

  const hasMultipleImages = Array.isArray(item.images) && item.images.length > 0;
  const images = hasMultipleImages ? item.images : [item.image || PLACEHOLDER_IMAGE];
  const contactInfo = CONTACT_INFO[item.page] || CONTACT_INFO.default;
  const localizedUnitType = _localizeUnitType(item.unitType, currentLang, pageKey);
  const localizedTitle = _localizeTitle(item.title, currentLang, pageKey);
  const localizedDescription = _localizeDescription(item.description, currentLang, pageKey);
  const waText = encodeURIComponent(uiStrings.waTemplate({
    title: localizedTitle,
    unitType: localizedUnitType,
    price: item.price
  }));
  const projectLabelHtml = item.projectName
    ? `<span class="listing-project-label"><i class="fa-solid fa-building"></i> ${_esc(item.projectName)}</span>`
    : '';

  /* ── Primary specs (area, bedrooms, bathrooms) ── */
  const specs = Array.isArray(item.specs) ? item.specs : _splitDescription(item.specs || '');
  const localizedSpecs = specs.map(spec => _localizeSpec(spec, currentLang, pageKey));
  const specsHtml = specs.length
    ? `<ul class="listing-features">${localizedSpecs.map(spec => {
        const meta = _getDetailMeta(spec);
        return `<li><i class="${meta.icon}"></i><span>${_esc(spec)}</span></li>`;
      }).join('')}</ul>`
    : '';

  /* ── Secondary description as plain text ── */
  const descHtml = localizedDescription
    ? `<p class="listing-desc">${_esc(localizedDescription)}</p>`
    : '';

  /* ── Build gallery or single image ── */
  let galleryHtml = '';
  if (hasMultipleImages && images.length > 1) {
    const dotsHtml = images.map((_, idx) => 
      `<button class="gallery-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>`
    ).join('');
    galleryHtml = `
      <div class="gallery-container">
        <div class="gallery-wrapper">
          ${images.map((src, idx) => `
            <img class="gallery-image ${idx === 0 ? 'active' : ''}" src="${_esc(src)}" alt="${_esc(localizedTitle)} - Image ${idx + 1}" loading="lazy"
                 onerror="this.src='${PLACEHOLDER_IMAGE}'" data-index="${idx}">
          `).join('')}
        </div>
        <div class="gallery-controls">
          <button class="gallery-prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="gallery-next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div class="gallery-dots">${dotsHtml}</div>
      </div>
    `;
  } else {
    galleryHtml = `<img class="project-image" src="${_esc(images[0])}" alt="${_esc(localizedTitle)}" loading="lazy"
         onerror="this.src='${PLACEHOLDER_IMAGE}'">`;
  }

  article.innerHTML = `
    ${galleryHtml}
    <span class="listing-badge"><i class="fa-solid fa-tag"></i> ${_esc(localizedUnitType)}</span>
    ${projectLabelHtml}
    <h3 class="listing-title" dir="auto">${_esc(localizedTitle)}</h3>
    ${specsHtml}
    ${descHtml}
    <p class="project-detail listing-price" dir="auto"><strong>${_esc(uiStrings.priceLabel)}</strong> ${_esc(item.price)}</p>
    <div class="project-actions">
      <a href="tel:${contactInfo.phone}" class="btn-call">
        <i class="fa-solid fa-phone"></i> ${_esc(uiStrings.callNow)}
      </a>
      <a href="https://wa.me/${contactInfo.whatsapp}?text=${waText}" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp"></i> ${_esc(uiStrings.whatsapp)}
      </a>
    </div>
  `;

  /* ── Attach gallery event handlers ── */
  if (hasMultipleImages && images.length > 1) {
    _attachGalleryHandlers(article, images.length);
  }

  return article;
}

function _localizeUnitType(unitType, lang, pageKey) {
  if (pageKey === 'commercial') {
    return unitType;
  }

  const normalized = _cleanCell(unitType);
  const byArabicKey = UNIT_TYPE_TRANSLATIONS[normalized];
  if (byArabicKey) {
    return byArabicKey[lang] || byArabicKey.en;
  }

  const byEnglishValue = Object.values(UNIT_TYPE_TRANSLATIONS).find(entry => entry.en === normalized);
  if (byEnglishValue) {
    return byEnglishValue[lang] || normalized;
  }

  return normalized;
}

function _localizeTitle(title, lang, pageKey) {
  if (pageKey === 'commercial' || lang !== 'ar') {
    return title;
  }

  return String(title || '')
    .replace('Apartment for Rent in ', 'شقة للإيجار في ')
    .replace('Standalone Villa for Rent in ', 'فيلا مستقلة للإيجار في ')
    .replace('Stand-alone Villa for Rent in ', 'فيلا مستقلة للإيجار في ')
    .replace('Stand Alone for Rent in ', 'فيلا مستقلة للإيجار في ')
    .replace('Standalone for Rent in ', 'فيلا مستقلة للإيجار في ')
    .replace('Villa Stand Alone for Rent in ', 'فيلا مستقلة للإيجار في ')
    .replace('Luxury Furnished Twinhouse for Rent in ', 'توين هاوس فاخر مفروش للإيجار في ')
    .replace('with Private Pool', 'مع مسبح خاص')
    .replace('First Use', 'أول استخدام')
    .replace('Cairo Festival City', 'كايرو فيستفال سيتي')
    .replace('Mivida', 'ميفيدا')
    .replace('Blue Views', 'بلو فيوز')
    .replace('Boulevard', 'بوليفارد')
    .replace('Living', 'ليفينج')
    .replace('Apartments cfc oura', 'شقة سي اف سي أورا')
    .replace('cfc', 'سي اف سي')
    .replace('Oura', 'أورا');
}

function _localizeDescription(description, lang, pageKey) {
  if (pageKey === 'commercial' || lang !== 'ar') {
    return description;
  }

  const normalized = _cleanCell(description);
  return DESCRIPTION_TRANSLATIONS_AR[normalized] || normalized;
}

function _localizeSpec(spec, lang, pageKey) {
  if (pageKey === 'commercial' || lang !== 'ar') {
    return spec;
  }

  return String(spec || '')
    .replace(/(\d+)\s*Master Bedrooms?/i, '$1 غرف نوم ماستر')
    .replace(/(\d+)\s*Bedrooms?\s*\((\d+)\s*Masters?\)/i, '$1 غرف نوم ($2 ماستر)')
    .replace(/(\d+)\s*Bedrooms?\s*en-suite/i, '$1 غرف نوم ماستر')
    .replace(/(\d+)\s*Bedrooms?/i, '$1 غرف نوم')
    .replace(/(\d+)\s*Bathrooms?/i, '$1 حمامات')
    .replace(/BUA\s*(\d+)\s*sqm/i, 'مساحة المباني $1 م²')
    .replace(/Land\s*(\d+)\s*sqm/i, 'مساحة الأرض $1 م²')
    .replace(/(\d+)\s*sqm/i, '$1 م²');
}

async function _getPageListings(pageKey) {
  if (pageKey === 'commercial') {
    return _loadCommercialListings();
  }

  return LISTINGS.filter(listing => listing.page === pageKey);
}

async function _loadCommercialListings() {
  if (COMMERCIAL_LISTINGS_CACHE) {
    return COMMERCIAL_LISTINGS_CACHE;
  }

  if (Array.isArray(window.COMMERCIAL_INVENTORY_DATA) && window.COMMERCIAL_INVENTORY_DATA.length) {
    COMMERCIAL_LISTINGS_CACHE = window.COMMERCIAL_INVENTORY_DATA.map(item => ({
      ...item,
      image: item.image || PLACEHOLDER_IMAGE
    }));

    return COMMERCIAL_LISTINGS_CACHE;
  }

  return [];
}

function _normalizeInventoryRow(row) {
  return Object.entries(row || {}).reduce((normalizedRow, [key, value]) => {
    normalizedRow[_cleanCell(key)] = value;
    return normalizedRow;
  }, {});
}

function _mapInventoryRowToListing(row) {
  const projectName = _cleanCell(row['Project Name'] || row['Porject name']);
  const title = _cleanCell(row['العنوان']) || projectName;
  const price = _formatCommercialPrice(row['Prices per Month'] || row['price per month'] || row['Price per Month']);
  const unitType = _mapCommercialType(row.Type);
  const location = _cleanCell(row.Location);
  const space = _cleanCell(row.Space);
  const image = _cleanCell(row['الصور']) || PLACEHOLDER_IMAGE;

  if (!title && !projectName && !price) {
    return null;
  }

  const specs = [space, location].filter(Boolean);

  return {
    page: 'commercial',
    unitType: unitType || 'تجاري',
    title: title || 'وحدة تجارية متاحة',
    projectName,
    specs,
    description: '',
    price: price || 'السعر عند الطلب',
    image
  };
}

function _mapCommercialType(value) {
  const normalizedValue = _cleanCell(value).toLowerCase();

  if (!normalizedValue) {
    return 'تجاري';
  }

  if (normalizedValue.includes('admin') || normalizedValue.includes('office')) {
    return 'إداري';
  }

  if (normalizedValue.includes('clinic') || normalizedValue.includes('medical')) {
    return 'عيادة';
  }

  if (normalizedValue.includes('commercial') || normalizedValue.includes('retail') || normalizedValue.includes('shop')) {
    return 'تجاري';
  }

  return _cleanCell(value);
}

function _formatCommercialPrice(value) {
  const normalizedValue = _cleanCell(value);
  if (!normalizedValue) {
    return '';
  }

  const sanitizedValue = normalizedValue
    .replace(/egp/ig, '')
    .replace(/جنيه|جنيهًا|جنيه شهريًا|شهريا|شهريا/ig, '')
    .replace(/per\s*month|monthly|month|\/\s*month|شهر(?:يا)?/ig, '')
    .trim();

  const compactMatch = sanitizedValue.match(/^([\d.,]+)\s*([kmb])$/i);
  if (compactMatch) {
    const numericPart = compactMatch[1].replace(/,/g, '');
    const suffix = compactMatch[2].toUpperCase();
    return `${numericPart}${suffix} EGP / Month`;
  }

  const numberValue = Number(sanitizedValue.replace(/,/g, ''));
  if (!Number.isNaN(numberValue) && numberValue > 0) {
    return `${numberValue.toLocaleString('en-US')} EGP / Month`;
  }

  return `${sanitizedValue || normalizedValue} EGP / Month`;
}

function _cleanCell(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function _splitDescription(description) {
  return String(description || '')
    .replace(/\s*\n\s*/g, ', ')
    .replace(/\.\s+/g, ', ')
    .split(/\s*,\s*/)
    .map(part => part.trim())
    .filter(Boolean);
}

function _getDetailMeta(detail) {
  const value = detail.toLowerCase();

  if (value.includes('bedroom') || value.includes('master')) {
    return { icon: 'fa-solid fa-bed' };
  }

  if (value.includes('bathroom') || value.includes('guest bathroom')) {
    return { icon: 'fa-solid fa-bath' };
  }

  if (value.includes('garden') || value.includes('landscape') || value.includes('pool')) {
    return { icon: 'fa-solid fa-tree' };
  }

  if (value.includes('kitchen') || value.includes('appliances')) {
    return { icon: 'fa-solid fa-kitchen-set' };
  }

  if (value.includes('furnished') || value.includes('finishing') || value.includes('fully finished')) {
    return { icon: 'fa-solid fa-couch' };
  }

  if (value.includes('first floor') || value.includes('ground floor') || value.includes('roof') || value.includes('floor')) {
    return { icon: 'fa-solid fa-stairs' };
  }

  if (value.includes('parking') || value.includes('garage') || value.includes('driver')) {
    return { icon: 'fa-solid fa-car-side' };
  }

  if (value.includes('elevator')) {
    return { icon: 'fa-solid fa-elevator' };
  }

  if (value.includes('ac') || value.includes('air')) {
    return { icon: 'fa-regular fa-snowflake' };
  }

  if (value.includes('sqm') || value.includes('m²') || value.includes(' m') || /\d+m/.test(value)) {
    return { icon: 'fa-solid fa-ruler-combined' };
  }

  if (value.includes('location') || value.includes('boulevard') || value.includes('views') || value.includes('valley')) {
    return { icon: 'fa-solid fa-location-dot' };
  }

  if (value.includes('first use') || value.includes('brand new')) {
    return { icon: 'fa-solid fa-star' };
  }

  return { icon: 'fa-solid fa-circle-check' };
}

function _esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Gallery Navigation Handlers ── */
function _attachGalleryHandlers(card, imageCount) {
  let currentSlide = 0;

  const updateSlide = (index) => {
    // Normalize index
    currentSlide = (index + imageCount) % imageCount;

    // Update images
    const images = card.querySelectorAll('.gallery-image');
    images.forEach((img, idx) => {
      img.classList.toggle('active', idx === currentSlide);
    });

    // Update dots
    const dots = card.querySelectorAll('.gallery-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  };

  // Next button
  const nextBtn = card.querySelector('.gallery-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));
  }

  // Previous button
  const prevBtn = card.querySelector('.gallery-prev');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
  }

  // Dot buttons
  const dots = card.querySelectorAll('.gallery-dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      updateSlide(slideIndex);
    });
  });
}
