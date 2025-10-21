// menu-data.js
// Each item: section, en, ar, price, img (relative to static/images/menu/)
const MENU = [
  // Breakfast
  {section: "Breakfast", en: "Shakshuka", ar: "شكشوكة", desc_en: "Scrambled eggs with bell peppers, onion, tomato, and a serving of bread", desc_ar: "بيض مخفوق مع الفلفل الحلو والبصل والطماطم وحصة من الخبز", price: "$9", img: "shakshuka.jpg"},
  {section: "Breakfast", en: "Kibbdeh Hamsa (Kibbeh - liver)", ar: "حمسه كبده", desc_en: "Kibbeh (lamb liver) with bell pepper, onion, tomato, and a serving of bread", desc_ar: "كبة (كبده خروف) مع الفلفل الحلو والبصل والطماطم وطبق من الخبز", price: "$14", img: "kibbeh_liver.jpg"},
  {section: "Breakfast", en: "Lamb Hamsa", ar: "حمسه لحم", desc_en: "Marinated lamb pieces, bell pepper, onion, tomato, with a serving of bread", desc_ar: "قطع لحم ضأن متبلة، فلفل رومي، بصل، طماطم، مع حصة من الخبز", price: "$16", img: "lamb_hamsa.jpg"},
  {section: "Breakfast", en: "Veggie Hamsa (Vegan)", ar: "حمسه خضروات (نباتي)", desc_en: "Bell pepper, potato, eggplant, carrot, onion, olive oil, fresh cilantro", desc_ar: "فلفل رومي، بطاطس، باذنجان، جزر، بصل، زيت زيتون، كزبرة طازجة", price: "$11", img: "veggie_hamsa.jpg"},
  {section: "Breakfast", en: "Falafel", ar: "فلافل", desc_en: "Chickpea blend, tahini sauce, herbs, served with bread (5 pieces)", desc_ar: "مزيج الحمص، صلصة الطحينة، الأعشاب، يقدم مع الخبز (5 قطع)", price: "$7", img: "falafel.jpg"},
  {section: "Breakfast", en: "Foule Mudammas", ar: "فول مدمس", desc_en: "Cooked foule beans with blended vegetables, served with bread", desc_ar: "فول مطبوخ مع خضار مشكلة، يقدم مع الخبز", price: "$11", img: "foule.jpg"},
  {section: "Breakfast", en: "Labnah", ar: "لبنة", desc_en: "Strained yogurt, olive oil, and zaatar, served with a serving of bread", desc_ar: "لبنه تقدم مع زيت زيتون وخبز", price: "$6", img: "labneh.jpg"},
  {section: "Breakfast", en: "Breakfast Platter", ar: "طبق الإفطار", desc_en: "Contains shakshuka, foule, cheese/labnah mixes, honey/jam", desc_ar: "يحتوي على شكشوكة، فول، مزيج من الجبن واللبنة حسب المتوفر، عسل/مربى", price: "$30", img: "breakfast_platter.jpg"},

  // Appetizers
  {section: "Appetizers", en: "Strawberry Salad", ar: "سلطة الفراولة", desc_en: "Green mix, pecans, feta, strawberries, red onion, Italian vinaigrette", desc_ar: "مزيج أخضر، جوز البقان، جبنة الفيتا، الفراولة، البصل الأحمر، والخل الإيطالي", price: "$15", img: "straw_salad.jpg"},
  {section: "Appetizers", en: "Fatoosh Salad", ar: "سلطة فتوش", desc_en: "Lettuce, red onion, radish, cucumbers, bell peppers, fried bread, mint, pomegranate molasses", desc_ar: "خس، بصل أحمر، فجل، خيار، فلفل رومي، خبز مقلي، نعناع، دبس الرمان", price: "$13", img: "fatoosh.jpg"},
  {section: "Appetizers", en: "Taboola", ar: "تبولة", desc_en: "Thinly sliced parsley, red onion, tomato, bulgur", desc_ar: "بقدونس مقطع إلى شرائح رفيعة، بصل أحمر، طماطم، برغل", price: "$15", img: "taboola.jpg"},
  {section: "Appetizers", en: "Stuffed Grape Leaves", ar: "أوراق العنب المحشية", desc_en: "Rice, tomato, parsley, mint", desc_ar: "أرز، طماطم، بقدونس، نعناع", price: "$8", img: "grape_leaves.jpg"},
  {section: "Appetizers", en: "Sambosa Feta Cheese and Mint (3pcs)", ar: "سمبوسة جبنة فيتا ونعناع", desc_en: "Feta cheese and Mint (3 pieces)", desc_ar: "جبنة فيتا بالنعناع (3 قطع)", price: "$6", img: "sambosa_feta.jpg"},
  {section: "Appetizers", en: "Sambosa Cream Cheese (3pcs)", ar: "سمبوسة بالجبنة الكريمية", desc_en: "Cream Cheese (3 pieces)", desc_ar: "جبنة كريمية (3 قطع)", price: "$6", img: "sambosa_cream.jpg"},
  {section: "Appetizers", en: "Kibbeh (3 pcs)", ar: "كبة", desc_en: "Minced beef meat in bulgur shell (3 pieces)", desc_ar: "لحم بقري مفروم بقشرة البرغل (3 قطع)", price: "$9", img: "kibbeh.jpg"},
  {section: "Appetizers", en: "Hummus", ar: "حمص", desc_en: "Creamy chickpea blend with tahini, garlic, lemon juice, served with warm bread", desc_ar: "مزيج كريمي من الحمص مع الطحينة والثوم وعصير الليمون، يقدم مع الخبز الدافئ", price: "$11", img: "hummus.jpg"},
  {section: "Appetizers", en: "Baba Ghanoush", ar: "بابا غنوج", desc_en: "Smoky roasted eggplant blended with tahini, garlic, lemon and olive oil, served with warm bread", desc_ar: "باذنجان مشوي مدخن ممزوج بالطحينة والثوم وعصير الليمون وزيت الزيتون، يقدم مع الخبز الدافئ", price: "$13", img: "baba_ghanoush.jpg"},
  {section: "Appetizers", en: "Sambosa (Veggie)", ar: "سمبوسة (خضروات)", desc_en: "Veggie option (3 pieces)", desc_ar: "خيار نباتي (3 قطع)", price: "$6", img: "sambosa_veg.jpg"},
  {section: "Appetizers", en: "Sambosa (Chicken)", ar: "سمبوسة (دجاج)", desc_en: "Chicken option (3 pieces)", desc_ar: "خيار الدجاج (3 قطع)", price: "$7", img: "sambosa_chicken.jpg"},
  {section: "Appetizers", en: "Appetizer Platter", ar: "طبق المقبلات", desc_en: "Fatoosh, taboula, stuffed grape leaves, hummus, baba ghanoush, kibbeh, sambosa", desc_ar: "فتوش، تبولة، ورق عنب محشي، حمص، بابا غنوج، كبة، سمبوسة خليط من جميع النكهات", price: "$35", img: "app_platter.jpg"},
  {section: "Appetizers", en: "Sambosa (Meat) (3pcs)", ar: "سمبوسة (لحم)", desc_en: "Beef, onion, spices (3 pieces)", desc_ar: "لحم بقري، بصل، بهارات (3 قطع)", price: "$8", img: "sambosa_meat.jpg"},

  // Soups & Extras
  {section: "Soups", en: "Maraq", ar: "مرق", desc_en: "Lamb broth with aromatic herbs and spices", desc_ar: "مرق لحم الضأن مع الأعشاب العطرية والتوابل", price: "$3", img: "maraq.jpg"},
  {section: "Soups", en: "Lentil Soup", ar: "شوربة العدس", desc_en: "Lentil soup, caramelized onions & fresh spices", desc_ar: "شوربة العدس والبصل المكرمل والتوابل الطازجة", price: "$5", img: "lentil_soup.jpg"},
  {section: "Extras", en: "Home Fries", ar: "بطاطس منزلية", desc_en: "Home fries", desc_ar: "بطاطس مقلية منزلية", price: "$5", img: "home_fries.jpg"},
  {section: "Extras", en: "Bread", ar: "خبز", desc_en: "Bread", desc_ar: "خبز", price: "$2", img: "bread.jpg"},
  {section: "Extras", en: "Side Salad", ar: "سلطة جانبية", desc_en: "Extra side salad", desc_ar: "سلطة جانبية إضافية", price: "$5", img: "side_salad.jpg"},
  {section: "Extras", en: "Yogurt Cucumber Salad", ar: "سلطة زبادي بالخيار", desc_en: "Yogurt Cucumber Salad", desc_ar: "سلطة زبادي مع خيار", price: "$4", img: "yogurt_cuke.jpg"},

  // Seafood & Entrees
  {section: "Seafood", en: "Masgouf (Friday only)", ar: "مسكوف", desc_en: "Grilled fish seasoned Iraqi style sauce with lemon & spices, served with rice (available only Fridays)", desc_ar: "سمك مشوي متبل بصلصة عراقية مع الليمون والبهارات، يقدم مع الأرز (متوفر فقط أيام الجمعة)", price: "$30", img: "masgouf.jpg"},
  {section: "Seafood", en: "Muttaback Zubaidi", ar: "مطبق زبيدي", desc_en: "Pan-fried fish stuffed with spices and dried lemons (loomi), served with rice and dagoos, a spicy tamarind sauce", desc_ar: "سمك مقلي محشو بالبهارات والليمون المجفف (لومي)، يقدم مع الأرز والداجو وصلصة التمر الهندي الحارة", price: "$33", img: "zubaidi.jpg"},
  {section: "Seafood", en: "Hamsa Shrimp", ar: "حمسه روبيان", desc_en: "Sautéed shrimp stew cooked in a rich tomato base, served with rice or bread", desc_ar: "يخنة الروبيان المطبوخة في قاعدة طماطم غنية، والتوابل، تقدم مع الأرز أو الخبز", price: "$20", img: "shrimp.jpg"},
  {section: "Seafood", en: "Bronzini with Fries", ar: "برونزيني مع بطاطس", desc_en: "Grilled bronzini fish seasoned with lemon & herbs served over fries", desc_ar: "سمك برونزيني مشوي متبل بالليمون والأعشاب ويقدم مع البطاطس المقلية", price: "$32", img: "bronzini.jpg"},

  {section: "Entrees", en: "Chicken Mechbous", ar: "مجبوس دجاج", desc_en: "Roasted half chicken served over saffron rice with golden raisins, nuts, & onions", desc_ar: "نصف دجاجة مشوية تقدم مع أرز الزعفران مع الزبيب الذهبي والمكسرات والبصل", price: "$18", img: "chicken_mechbous.jpg"},
  {section: "Entrees", en: "Lamb Mechbous", ar: "مجبوس لحم", desc_en: "Roasted lamb chunks served over saffron rice with golden raisins, nuts, & onions", desc_ar: "قطع لحم ضأن مشوية تقدم فوق أرز بالزعفران مع الزبيب الذهبي والمكسرات والبصل", price: "$23", img: "lamb_mechbous.jpg"},
  {section: "Entrees", en: "Chicken Mandi", ar: "دجاج مندي", desc_en: "Roasted marinated half chicken served over seasoned saffron rice", desc_ar: "نصف دجاجة متبلة مشوية تقدم فوق أرز الزعفران المتبل", price: "$18", img: "chicken_mandi.jpg"},
  {section: "Entrees", en: "Lamb Mandi", ar: "لحم مندي", desc_en: "Marinated lamb chunks served over seasoned saffron rice", desc_ar: "قطع لحم ضأن متبلة تقدم فوق أرز الزعفران المتبل", price: "$21", img: "lamb_mandi.jpg"},
  {section: "Entrees", en: "Haneeth", ar: "حنيذ", desc_en: "Slow-cooked roasted lamb chunks served over saffron rice, aromatic herbs, cilantro and laban", desc_ar: "قطع لحم ضأن مشوية مطهوة ببطء تقدم مع أرز بالزعفران وأعشاب عطرية وكزبرة ولبن", price: "$23", img: "haneeth.jpg"},
  {section: "Entrees", en: "Meat Kabob (3 pcs)", ar: "كباب لحم", desc_en: "Grilled and seasoned to perfection, served with bread (3 pieces)", desc_ar: "مشوي ومتبل بشكل مثالي، يقدم مع الخبز (3 قطع)", price: "$21", img: "meat_kabob.jpg"},
  {section: "Entrees", en: "Chicken Kabob (3 pcs)", ar: "كباب دجاج", desc_en: "Marinated chicken, skewered & grilled, served with bread (3 pieces)", desc_ar: "دجاج متبل، مشوي على أسياخ، يقدم مع الخبز (3 قطع)", price: "$19", img: "chicken_kabob.jpg"},
  {section: "Entrees", en: "Chicken Tikka", ar: "تكة دجاج", desc_en: "Grilled chicken pieces marinated in spices, served with bread", desc_ar: "قطع دجاج مشوية متبلة بالبهارات، تقدم مع الخبز", price: "$16", img: "chicken_tikka.jpg"},
  {section: "Entrees", en: "Mix Grill (feeds 2-3)", ar: "مشاوي مشكلة", desc_en: "Lamb chops, meat kabob, chicken kabob, meat tikka, chicken tikka (feeds 2-3 guests)", desc_ar: "شرائح لحم الضأن، كباب لحم، كباب دجاج، لحم تيكا، دجاج تيكا (يكفي 2-3 ضيوف)", price: "$45", img: "mix_grill.jpg"},

  // Kids & Beverages
  {section: "Kids", en: "Chicken Nuggets & Fries", ar: "ناجتس دجاج وبطاطس", desc_en: "", desc_ar: "", price: "$8", img: "nuggets.jpg"},
  {section: "Kids", en: "Hummus & Pita Plate", ar: "طبق حمص وخبز بيتا", desc_en: "", desc_ar: "", price: "$7", img: "hummus_pita.jpg"},
  {section: "Kids", en: "Kids Mango Smoothie", ar: "عصير مانجو للأطفال", desc_en: "", desc_ar: "", price: "$5", img: "kids_mango.jpg"},
  {section: "Kids", en: "Quarter Chicken Mandi", ar: "ربع دجاج مندي", desc_en: "", desc_ar: "", price: "$11", img: "quarter_mandi.jpg"},

  {section: "Beverages (Cold)", en: "Mango Smoothie", ar: "عصير مانجو", desc_en: "", desc_ar: "", price: "$7", img: "mango_smoothie.jpg"},
  {section: "Beverages (Cold)", en: "Lemon Mint Frozen", ar: "ليمون بالنعناع مثلج", desc_en: "", desc_ar: "", price: "$6", img: "lemon_mint.jpg"},
  {section: "Beverages (Hot)", en: "Arabic Gahwa", ar: "قهوة عربية", desc_en: "Arabic coffee, thermos option available", desc_ar: "قهوة عربية، خيار الترمس متوفر", price: "$2", img: "gahwa.jpg"},
  {section: "Beverages (Hot)", en: "Mariam Latte (Iced only)", ar: "لاتيه مريم", desc_en: "Salted caramel whipped coffee, only iced", desc_ar: "قهوة مخفوقة بالكراميل المملح، مثلجة فقط", price: "M: $7.75 S: $5", img: "mariam_latte.jpg"},
  // ... add more items similarly if you want every beverage variant
];
