var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-1.png',
        title: 'Филадельфия',
        description: 'Лосось, сыр "Филадельфия". 280г',
        price: 340
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-2.png',
        title: 'Калифорния с крабом',
        description: 'Краб, авокадо, майонез, икра тобико. 210г',
        price: 220
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-3.png',
        title: 'Принцесса',
        description: 'Креветка, сыр "Филадельфия", краб, огурец, икра тобико. 280г',
        price: 270
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-4.png',
        title: 'Филадельфия унаги с авокадо',
        description: 'Угорь, сыр "Филадельфия", авокадо. 310г',
        price: 340
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-5.png',
        title: 'Эби Тай',
        description: 'Угорь, креветка, огурец, икра тобико, соус "Спайси". 220г',
        price: 250
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-6.png',
        title: 'Бонито',
        description: 'Лосось, сыр "Филадельфия", огурец, стружка тунца. 200г',
        price: 230
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-7.png',
        title: 'Калифорния с лососем',
        description: 'Лосось, авокадо, икра тобико. 210г',
        price: 280
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-8.png',
        title: 'Эби Унаги',
        description: 'Креветка, угорь, икра тобико, кунжут, сыр "Филадельфия". 220г ',
        price: 295
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-9.png',
        title: 'Вулкан',
        description: 'Гребешок, икра тобико, майонез. 220г',
        price: 280
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-10.png',
        title: 'Планета',
        description: 'Лосось, огурец, маринованная редька. 250г',
        price: 240
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-11.png',
        title: 'Филадельфия макси',
        description: 'Лосось, сыр "Филадельфия", огурец. 350г',
        price: 475
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-12.png',
        title: 'Базука',
        description: 'Лосось, угорь, сыр "Филадельфия", огурец. 210г',
        price: 340
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-13.png',
        title: 'Кунсей',
        description: 'Копченый лосось, огурец, сыр "Филадельфия", кунжут. 210г',
        price: 250
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-14.png',
        title: 'Аризона',
        description: 'Лосось, тунец, окунь, огурец. 210г',
        price: 290
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-15.png',
        title: 'Филадельфия унаги с огурцом',
        description: 'Угорь, сыр "Филадельфия", огурец. 310г',
        price: 340
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-16.png',
        title: 'Цунами',
        description: 'Обжареный гребешок, икра тобико, соус "Спайси". 250г',
        price: 250
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-17.png',
        title: 'Самурай',
        description: 'Лосось, угорь, сыр "Филадельфия", огурец. 210г',
        price: 295
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-18.png',
        title: 'Токио',
        description: 'Лосось, икра лосося, огурец. 225г',
        price: 280
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-19.png',
        title: 'Таун',
        description: 'Угорь, лосось, икра тобико, икра лосося, огурец, сыр "Филадельфия". 260г',
        price: 295
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-20.png',
        title: 'Унаги Урамаки',
        description: 'Угорь, лосось, авокадо, огурец, икра тобико, сыр "Филадельфия". 280г',
        price: 300
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-21.png',
        title: 'Гурман',
        description: 'Краб, сыр "Филадельфия", авокадо, огурец, рыбная нарезка. 220г',
        price: 295
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-22.png',
        title: 'Филадельфия ясай',
        description: 'Лосось, сыр "Филадельфия", авокадо. 310г',
        price: 340
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-23.png',
        title: 'Сяке Темпура',
        description: 'Лосось, соус "Спайси", обжареная креветка, икра тобико, огурец. 235г',
        price: 300
    }),
    new Product({
        categoryId: 1,
        imagePath: '../images/rolls-24.png',
        title: 'Фудзи',
        description: 'Угорь, сыр "Филадельфия", огурец, икра тобико. 220г',
        price: 295
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Калифорния с тунцом',
        description: 'Тунец, авокадо, икра тобико. 210г',
        price: 250
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Радуга',
        description: 'Краб, авокадо, сыр "Филадельфия", икра тобико. 200г',
        price: 270
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Тека-Бом',
        description: 'Тунец, лосось, огурец, соус "Спайси". 250г',
        price: 250
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Сэлмон',
        description: 'Лосось, сыр "Филадельфия", огурец, краб, икра масаго, яки соус. 280г',
        price: 330
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Гейша',
        description: 'Икра лосося, сыр "Филадельфия", тамаго. 210г',
        price: 300
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Блэк Сальмон',
        description: 'Копченый лосось, салат, кунжут, сыр "Филадельфия". 180г',
        price: 260
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Дракон',
        description: 'Угорь, омлет, авокадо, сыр "Филадельфия", икра тобико. 220г',
        price: 275
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Рэд Сальмон',
        description: 'Лосось терияки, огурец, сыр "Филадельфия", икра масаго, кунжут. 260г',
        price: 250
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Динамит',
        description: '2 креветки в кляре, огурец, соус "Спайси". 240г',
        price: 240
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Штаты',
        description: 'Лосось, сыр "Филадельфия", краб, авокадо, огурец. 310г',
        price: 340
    }),
    new Product({
        categoryId: 100,
        imagePath: '../images/rolls-24.png',
        title: 'Шримп',
        description: 'Креветка, сыр "Филадельфия", помидор, салат, икра масаго. 220г',
        price: 230
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Огурец',
        description: '100г',
        price: 90
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Авокадо',
        description: '100г',
        price: 120
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Лосось',
        description: '100г',
        price: 180
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Угорь',
        description: '100г',
        price: 190
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Копченый лосось',
        description: '210г',
        price: 185
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Тунец',
        description: '100г',
        price: 175
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Маринованная редька',
        description: '100г',
        price: 90
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Краб',
        description: '100г',
        price: 180
    }),
    new Product({
        categoryId: 1001,
        imagePath: '../images/rolls-24.png',
        title: 'Креветка',
        description: '100г',
        price: 180
    }),
    new Product({
        categoryId: 2,
        imagePath: '../images/rolls-h-1.png',
        title: 'Тоттори',
        description: 'Лосось, краб, сыр "Филадельфия", авокадо. 290г',
        price: 295
    }),
    new Product({
        categoryId: 2,
        imagePath: '../images/rolls-h-2.png',
        title: 'Канадский',
        description: 'Лосось, угорь, соус "Спайси", огурец, авокадо. 310г',
        price: 305
    }),
    new Product({
        categoryId: 2,
        imagePath: '../images/rolls-h-3.png',
        title: 'Фурай',
        description: 'Лосось, угорь, майонез, огурец, авокадо. 280г',
        price: 300
    }),
    new Product({
        categoryId: 2,
        imagePath: '../images/rolls-h-4.png',
        title: 'Калифорния Хотто',
        description: 'Краб, авокадо, икра тобико. 300г',
        price: 275
    }),
    new Product({
        categoryId: 2,
        imagePath: '../images/rolls-h-5.png',
        title: 'Чикен',
        description: 'Сыр "Филадельфия", цыпленок, огурец. 310г',
        price: 275
    }),
    new Product({
        categoryId: 21,
        imagePath: '../images/rolls-h-5.png',
        title: 'Кукуй',
        description: 'Лосось, угорь, омлет, огурец, авокадо, сыр "Филадельфия". 320г',
        price: 300
    }),
    new Product({
        categoryId: 3,
        imagePath: '../images/rolls-b-1.png',
        title: 'Чиз',
        description: 'Соус "Пармезан", сыр "Филадельфия", цыпленок, кунжут, соус "Унаги". 320г',
        price: 320
    }),
    new Product({
        categoryId: 3,
        imagePath: '../images/rolls-b-2.png',
        title: 'Ното',
        description: 'Соус "Пармезан", лосось, краб, сыр "Филадельфия", икра тобико. 310г',
        price: 340
    }),
    new Product({
        categoryId: 3,
        imagePath: '../images/rolls-b-3.png',
        title: 'Сиракузы',
        description: 'Соус "Пармезан", цыпленок, сыр "Филадельфия, огурец, кунжут. 290г',
        price: 340
    }),
    new Product({
        categoryId: 31,
        imagePath: '../images/rolls-b-3.png',
        title: 'Калифорния Гриль',
        description: 'Лосось, краб, авокадо, соус "Унаги", кунжут. 250г',
        price: 300
    }),
    new Product({
        categoryId: 31,
        imagePath: '../images/rolls-b-3.png',
        title: 'Микс',
        description: 'Лосось, тигровая креветка, помидор, соус "Спайси", соус "Унаги". 270г',
        price: 320
    }),new Product({
        categoryId: 31,
        imagePath: '../images/rolls-b-3.png',
        title: 'Филадельфия',
        description: 'Лосось, сыр "Филадельфия", огурец, соус "Унаги", кунжут. 280г',
        price: 340
    }),
    new Product({
        categoryId: 31,
        imagePath: '../images/rolls-b-3.png',
        title: 'Фиш',
        description: 'Лосось, креветка, яки соус, сыр "Филадельфия", угорь, масаго. 300г',
        price: 340
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-1.png',
        title: 'Спайси окунь',
        description: '40г',
        price: 90
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-2.png',
        title: 'Инари Магуро',
        description: 'Тунец. 60г',
        price: 130
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-3.png',
        title: 'Тори Унаги',
        description: 'Цыпленок, угорь. 50г',
        price: 110
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-4.png',
        title: 'Спайси гребешок',
        description: '40г',
        price: 85
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-5.png',
        title: 'Краб',
        description: '40г',
        price: 85
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-6.png',
        title: 'Угорь',
        description: '40г',
        price: 100
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-7.png',
        title: 'Каппа Унаги',
        description: 'Угорь, икра тобико, огурец. 45г',
        price: 115
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-8.png',
        title: 'Тунец',
        description: '40г',
        price: 90
    }),
    new Product({
        categoryId: 4,
        imagePath: '../images/sushi-s-9.png',
        title: 'Лосось',
        description: '40г',
        price: 90
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Инари Кунсей',
        description: 'Копченый лосось. 60г',
        price: 130
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Инари Унаги',
        description: 'Копченый угорь. 60г',
        price: 140
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Инари Сяке',
        description: 'Лосось. 60г',
        price: 130
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Инари Хотатэ. 60г',
        description: 'Морской гребешок',
        price: 130
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Осьминог',
        description: '40г',
        price: 90
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Креветка',
        description: '40г',
        price: 90
    }),
    new Product({
        categoryId: 41,
        imagePath: '../images/sushi-s-9.png',
        title: 'Кальмар',
        description: '40г',
        price: 85
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Цезарь с курицей',
        description: 'Куриное филе, салат «Айсберг», сыр «Пармезан», соус «Цезарь», сухарики. 220г',
        price: 300
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Деликатесный',
        description: 'Язык говяжий, соленые и свежие огурцы. 200г',
        price: 330
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Нежность',
        description: 'Ветчина, сыр "Моцарелла", огурец, яйцо. 250г',
        price: 300
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Цезарь с креветками',
        description: 'Королевские креветки, салат "Айсберг", сыр "Пармезан", соус "Цезарь", сухарики. 220г',
        price: 330
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Руккола с креветками',
        description: 'Королевские креветки, руккола, соусы: соевый и бальзамический. 120г',
        price: 330
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Салат-коктейль с авокадо',
        description: 'Авокадо, креветки, краб, икра лосося. 150г',
        price: 350
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Греческий',
        description: 'Маслины, сыр "Фета", огурцы, томаты, болгарский перец, оливковое масло. 200г',
        price: 300
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Салат из битых огурцов с кинзой и кешью',
        description: 'Огурцы, кешью жареный, листья кинзы, соус "Донгу", рисовый уксус, масла: кунжутное и острое. 200г',
        price: 300
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Теплый салат из баклажан с помидорами',
        description: 'Баклажаны, помидоры, листья кинзы, соусы: кисло-сладкий, соевый, "Донгу". 260г',
        price: 330
    }),
    new Product({
        categoryId: 5,
        imagePath: '../images/sushi-s-9.png',
        title: 'Капрезе',
        description: 'Томаты, сыр "Моцарелла", руккола, соусы: бальзамический, "Песто". 250г',
        price: 330
    }),
    new Product({
        categoryId: 6,
        imagePath: '../images/sushi-s-9.png',
        title: 'Паста с курицей',
        description: 'Куриное филе, сливки, сыр "Пармезан". 250г',
        price: 300
    }),
    new Product({
        categoryId: 6,
        imagePath: '../images/sushi-s-9.png',
        title: 'Паста с грибами',
        description: 'Шампиньоны, сливки, сыр "Пармезан". 250г',
        price: 300
    }),
    new Product({
        categoryId: 6,
        imagePath: '../images/sushi-s-9.png',
        title: 'Паста карбонара',
        description: 'Бекон, сливки, сыр "Пармезан". 250г',
        price: 330
    }),
    new Product({
        categoryId: 6,
        imagePath: '../images/sushi-s-9.png',
        title: 'Паста с морепродуктами',
        description: 'Мидии, кальмар, креветки, осьминог, сливки, сыр "Пармезан". 250г',
        price: 330
    }),
    new Product({
        categoryId: 6,
        imagePath: '../images/sushi-s-9.png',
        title: 'Паста маринара',
        description: 'Томаты, соус "Маринара", сыр "Пармезан". 250г',
        price: 330
    }),
    new Product({
        categoryId: 7,
        imagePath: '../images/sushi-s-9.png',
        title: 'Селедочка',
        description: 'Селедка, отварной картофель, маринованная капуста. 250г',
        price: 300
    }),
    new Product({
        categoryId: 7,
        imagePath: '../images/sushi-s-9.png',
        title: 'Соленья',
        description: 'Огурцы, чеснок, томаты, черемша, маринованная капуста. 300г',
        price: 300
    }),
    new Product({
        categoryId: 7,
        imagePath: '../images/sushi-s-9.png',
        title: 'Язык говяжий с соленым огурцом',
        description: '100/50г',
        price: 300
    }),
    new Product({
        categoryId: 7,
        imagePath: '../images/sushi-s-9.png',
        title: 'Ассорти',
        description: 'Салями, пепперони, ветчина, сало, томаты, огурцы, болгарский перец. 500г',
        price: 500
    }),
    new Product({
        categoryId: 7,
        imagePath: '../images/sushi-s-9.png',
        title: 'Закуска от шеф-повара',
        description: 'Сало, селедка, картофель отварной, маринованная капуста. 300г',
        price: 300
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Яичница',
        description: 'Сосиски молочные, яйцо. 200г',
        price: 220
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Картофель с грибами и луком',
        description: 'Шампиньоны, картофель, лук. 250г',
        price: 300
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жареха по-охотничьи',
        description: 'Жареный картофель с охотничьими колбасками и яйцом. 300г',
        price: 300
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Хачапури по-аджарски',
        description: 'Сыр "Моцарелла", яйцо. 350г',
        price: 300
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жульен куриный с грибами',
        description: 'Шампиньоны, сливки, курица, сыр "Моцарелла". 130г',
        price: 250
    }),
    new Product({
        categoryId: 71,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жульен грибной',
        description: 'Шампиньоны, сливки, сыр "Моцарелла". 100г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Суп куриный с лапшой',
        description: 'Куриное филе, картофель, яичная лапша, морковь. 450г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Суп рыбный',
        description: 'Лосось, картофель, морковь. 450г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Окрошка на квасе',
        description: 'Ветчина, яйцо, огурец, картофель, хрен, горчица. 450г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Борщ',
        description: 'Свинина, капуста, картофель, свекла, лук, морковь. 450г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Солянка мясная',
        description: 'Сосиски, оливки, маслины, картофель, соленые огурцы. 450г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Крем-суп грибной',
        description: 'Шампиньоны, картофель, сливки. 350г',
        price: 250
    }),
    new Product({
        categoryId: 8,
        imagePath: '../images/sushi-s-9.png',
        title: 'Крем-суп с морепродуктами',
        description: 'Морепродукты, картофель, сливки. 350г',
        price: 300
    }),
    new Product({
        categoryId: 81,
        imagePath: '../images/sushi-s-9.png',
        title: 'Мисо',
        description: 'Грибы шитаки, тофу, морские водоросли, мисо паста. 500г',
        price: 150
    }),
    new Product({
        categoryId: 81,
        imagePath: '../images/sushi-s-9.png',
        title: 'Суимоно',
        description: 'Лосось, креветки, грибы шитаки, тофу, соевый соус, морские водоросли. 500г',
        price: 220
    }),
    new Product({
        categoryId: 81,
        imagePath: '../images/sushi-s-9.png',
        title: 'Суп со стеклянной лапшой',
        description: 'Лапша рисовая, свинина, овоши, грибы шитаки. 500г',
        price: 250
    }),
    new Product({
        categoryId: 81,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рамен со свининой',
        description: 'Лапша рамен, овощи, свинина, специи, грибы шитаки. 500г',
        price: 250
    }),
    new Product({
        categoryId: 81,
        imagePath: '../images/sushi-s-9.png',
        title: 'Том Ям',
        description: 'Креветки королевские, травы, специи, рис. 500/150г',
        price: 300
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Котлеты по-домашнему',
        description: 'Свиной фарш. 200г',
        price: 300
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Домашние пельмени',
        description: 'На выбор: жареные, отварные, с бульоном, без бульона. 230г',
        price: 300
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Свинина по-сычуаньски',
        description: 'Свинина, болгарский перец, цукини, огурец, томаты, соус "Терияки". 350г',
        price: 350
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Свиная корейка с соусом "Барбекю"',
        description: '250/50г',
        price: 400
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Куриное филе с сыром',
        description: 'Куриное филе, болгарский перец, плавленый сыр, сливки. 270г',
        price: 350
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Куриное филе с ананасами',
        description: 'Куриное филе, ананас, сливки. 250г',
        price: 350
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Свинина "Лефортово"',
        description: 'Свинина, шампиньоны, сыр "Моцарелла", картофель, томаты. 350г',
        price: 350
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жаркое по-домашнему',
        description: 'Свинина, картофель, цукини, болгарский перец, сметана. 350/30г',
        price: 350
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Манты',
        description: 'Свиной фарш, сметана. 250/50г',
        price: 330
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Цыпленок табака',
        description: 'Соусы: чесночный, "Кимчи"; маринованная капуста. 600/200г',
        price: 500
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Стейк из семги',
        description: '250г',
        price: 500
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Лосось со сливочным соусом и грибами',
        description: '300г',
        price: 550
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Хрустящая дорада',
        description: 'Соусы: кисло-сладкий, соевый, устричный. 300г',
        price: 550
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Морской окунь',
        description: 'На выбор: жареный/на пару. 300г',
        price: 400
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Ассорти из морепродуктов',
        description: 'Лосось, окунь, креветки, кальмар, гребешок. 250г',
        price: 450
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Эбитемпура',
        description: 'Креветки, овощи в кляре, соус "Спайси". 250г',
        price: 400
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Мидии запеченные',
        description: 'Икра летучей рыбы, соус "Васаби". 200г',
        price: 400
    }),
    new Product({
        categoryId: 9,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жареные овощи в соусе "Тонкацу"',
        description: 'Болгарский перец, баклажан, цукини, лук, соус "Тонкацу". 250г',
        price: 300
    }),
    new Product({
        categoryId: 91,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шашлычок из курицы',
        description: '120г',
        price: 200
    }),
    new Product({
        categoryId: 91,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шашлычок из лосося',
        description: '120г',
        price: 250
    }),
    new Product({
        categoryId: 91,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шашлычок из креветок',
        description: '120г',
        price: 250
    }),
    new Product({
        categoryId: 91,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шашлычок из гребешка',
        description: '120г',
        price: 250
    }),
    new Product({
        categoryId: 91,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шашлычок "Якитори"',
        description: 'Лосось, креветка, гребешок. 150г',
        price: 300
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рис тяхан с овощами',
        description: '200г',
        price: 200
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рис тяхан с курицей',
        description: '200г',
        price: 230
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рис тяхан с морепродуктами',
        description: '200г',
        price: 260
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пшеничная лапша удон с овощами',
        description: '200г',
        price: 200
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пшеничная лапша удон с курицей',
        description: '200г',
        price: 230
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пшеничная лапша удон с морепродуктами',
        description: '200г',
        price: 260
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гречневая лапша якисоба с овощами',
        description: '200г',
        price: 210
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гречневая лапша якисоба с курицей',
        description: '200г',
        price: 240
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гречневая лапша якисоба с морепродуктами',
        description: '200г',
        price: 270
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рисовая лапша хурасамэ с овощами',
        description: '200г',
        price: 220
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рисовая лапша хурасамэ с курицей',
        description: '200г',
        price: 250
    }),
    new Product({
        categoryId: 92,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рисовая лапша хурасамэ с морепродуктами',
        description: '200г',
        price: 280
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Рис',
        description: '150г',
        price: 120
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Картофельное пюре',
        description: '150г',
        price: 150
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Картофель "Пушкин" с чесночным соусом',
        description: '150/50г',
        price: 150
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Картофель фри',
        description: 'Соус на выбор: сырный, "Спайси", кетчуп. 150/50г',
        price: 200
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Цветная капуста',
        description: '150г',
        price: 200
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Овощи с грибами',
        description: '150г',
        price: 250
    }),
    new Product({
        categoryId: 93,
        imagePath: '../images/sushi-s-9.png',
        title: 'Хлеб',
        description: '1 кус.',
        price: 5
    }),
    new Product({
        categoryId: 10,
        imagePath: '../images/sushi-s-9.png',
        title: 'Клаб сэндвич с курицей и беконом',
        description: 'Куриное филе, бекон, помидоры, салат "Айсберг", сыр "Чеддер", картофиль фри с кетчупом. 250/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 10,
        imagePath: '../images/sushi-s-9.png',
        title: 'Клаб сэндвич с беконом и ветчиной',
        description: 'Бекон, ветчина, помидоры, свежие огурцы, салат "Айсберг", сыр "Чеддер", картофиль фри с кетчупом. 250/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 10,
        imagePath: '../images/sushi-s-9.png',
        title: 'Клаб сэндвич с семгой',
        description: 'Слабосоленая семга, свежие огурцы, свежие огурцы, салат "Айсберг", сыр "Чеддер", картофиль фри с кетчупом. 250/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 101,
        imagePath: '../images/sushi-s-9.png',
        title: 'Чикенбургер',
        description: 'Куриное филе, помидоры, кольца лука, соленые огурцы, салат "Айсберг", сыр "Чеддер", картофель фри с кетчупом. 275/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 101,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гамбургер',
        description: 'Свино-говяжья котлета, помидоры, кольца лука, соленые огурцы, салат "Айсберг", картофель фри с кетчупом. 260/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 101,
        imagePath: '../images/sushi-s-9.png',
        title: 'Чизбургер',
        description: 'Свино-говяжья котлета, кольца лука, соленые огурцы, салат "Айсберг", сыр "Чеддер", картофель фри с кетчупом. 275/75/50г',
        price: 300
    }),
    new Product({
        categoryId: 101,
        imagePath: '../images/sushi-s-9.png',
        title: 'Бейконбургер',
        description: 'Свино-говяжья котлета, обжаренный бекон, кольца лука, помидоры, соленые огурцы, салат "Айсберг", сыр "Чеддер", картофель фри с кетчупом. 295/75/50',
        price: 350
    }),
    new Product({
        categoryId: 101,
        imagePath: '../images/sushi-s-9.png',
        title: 'Кингбургер',
        description: '2 свино-говяжьи котлеты, кольца лука, помидоры, соленые огурцы, салат "Айсберг", сыр "Чеддер", картофель фри с кетчупом. 360/75/50',
        price: 400
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Маргарита',
        description: 'Сыр "Моцарелла", томаты',
        price: 300
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Четыре сыра',
        description: 'Сыры: "Эдам", "Тильзитер", "Дор-блю", "Моцарелла"',
        price: 500
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Ветчина с грибами',
        description: 'Шампиньоны, ветчина, томаты, сыр "Моцарелла"',
        price: 500
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пепперони',
        description: 'Колбаса неаполитанская, томаты, сыр "Моцарелла"',
        price: 500
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гавайская',
        description: 'Ветчина, ананасы, томаты, сыр "Моцарелла"',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Морская',
        description: 'Шампиньоны, морской коктейль, маслины, томаты, сыр "Моцарелла"',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Деревенская',
        description: 'Охотничьи колбаски, колбаски гриль, бекон, ветчина, шампиньоны, соленые огурцы, томаты',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Филадельфия',
        description: 'Лососы, сыр "Филадельфия", сыр "Моцарелла"',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Мексиканская',
        description: 'Говяжий фарш, охотничьи колбаски, колбаски гриль, кукуруза, шампиньоны, острый соус',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Капричоза',
        description: 'Куриное филе, шампиньоны, томаты, сыр "Моцарелла", соус "Песто"',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пицца-жульен',
        description: 'Шампиньоны, курица, сливки, сыр "Моцарелла"',
        price: 550
    }),
    new Product({
        categoryId: 11,
        imagePath: '../images/sushi-s-9.png',
        title: 'Тоскана',
        description: 'Томаты, руккола, шампиньоны, бальзамический соус, сыр "Моцарелла"',
        price: 550
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Маргарита',
        description: 'Сыр "Моцарелла", томаты',
        price: 400
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Четыре сыра',
        description: 'Сыры: "Эдам", "Тильзитер", "Дор-блю", "Моцарелла"',
        price: 600
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Ветчина с грибами',
        description: 'Шампиньоны, ветчина, томаты, сыр "Моцарелла"',
        price: 600
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пепперони',
        description: 'Колбаса неаполитанская, томаты, сыр "Моцарелла"',
        price: 600
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гавайская',
        description: 'Ветчина, ананасы, томаты, сыр "Моцарелла"',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Морская',
        description: 'Шампиньоны, морской коктейль, маслины, томаты, сыр "Моцарелла"',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Деревенская',
        description: 'Охотничьи колбаски, колбаски гриль, бекон, ветчина, шампиньоны, соленые огурцы, томаты',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Филадельфия',
        description: 'Лососы, сыр "Филадельфия", сыр "Моцарелла"',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Мексиканская',
        description: 'Говяжий фарш, охотничьи колбаски, колбаски гриль, кукуруза, шампиньоны, острый соус',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Капричоза',
        description: 'Куриное филе, шампиньоны, томаты, сыр "Моцарелла", соус "Песто"',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пицца-жульен',
        description: 'Шампиньоны, курица, сливки, сыр "Моцарелла"',
        price: 650
    }),
    new Product({
        categoryId: 12,
        imagePath: '../images/sushi-s-9.png',
        title: 'Тоскана',
        description: 'Томаты, руккола, шампиньоны, бальзамический соус, сыр "Моцарелла"',
        price: 650
    }),
    new Product({
        categoryId: 13,
        imagePath: '../images/sushi-s-9.png',
        title: 'Чизкейк "Нью-Йорк"',
        description: '120г',
        price: 170
    }),
    new Product({
        categoryId: 13,
        imagePath: '../images/sushi-s-9.png',
        title: 'Клубничный чизкейк',
        description: '120г',
        price: 170
    }),
    new Product({
        categoryId: 13,
        imagePath: '../images/sushi-s-9.png',
        title: 'Шоколадный чизкейк',
        description: '120г',
        price: 170
    }),
    new Product({
        categoryId: 13,
        imagePath: '../images/sushi-s-9.png',
        title: 'Торт "Наполеон"',
        description: '155г',
        price: 190
    }),
    new Product({
        categoryId: 13,
        imagePath: '../images/sushi-s-9.png',
        title: 'Яблочный штрудель',
        description: '120г',
        price: 170
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Киото',
        description: 'Роллы: филадельфия унаги, крабовая аляска, радуга. 900г',
        price: 800
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Сыроко',
        description: 'Суши: 3 суши с сыром. Роллы: филадельфия ясай, филадельфия унаги, калифорния с сыром. 500г',
        price: 1100
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Сакура',
        description: 'Роллы: ролл краб, ролл лосось, ролл огурец, калифорния с крабом, эби тай, базука, калифорния с лососем, филадельфия, катерпиллер, планета. 1115г',
        price: 2000
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Хот сет',
        description: 'Горячие роллы: тоттори, канадский, маунтен фрай, фурай. 1100г',
        price: 1100
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Королевское маки',
        description: 'Роллф(1/2): калифорния с тунцом, калифорния с лососем, венеция, ролл авокадо, ролл огурец, ролл маринованная редька, ролл лосось, аляска. 800г',
        price: 850
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Император',
        description: 'Суши (по 2 шт.): копченый лосось, тунец, угорь. Спайси суши: лосось, тунец, окунь. Роллы: калифорния (1/2), футомаки, бонито, планета, маринованная редька (1/2), авокадо (1/2). 1250г',
        price: 1750
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Вегетарианское',
        description: 'Суши: вакамэ чука, сарада (2 шт.). Роллы: гринривер, огурец, овощной, маринованная редька (1/2), авокадо (1/2). 760г',
        price: 550
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Дракон',
        description: 'Суши: лосось, тунец, окунь (2 шт.), угорь, кальмар, креветка. Сашими: угорь, лосось, осьминог. Роллы (1/2): авокадо, калифорния с лососем, калифорния с тунцом, огурец. 930г',
        price: 1700
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Таун',
        description: 'Суши: лосось, кальмар, креветка, окунь (2 шт.), тунец, угорь, икра лосося. Роллы: калифорния с крабом. 515г',
        price: 900
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Жемчужина',
        description: 'Суши (по 3 шт.): лосось, копченый лосось, тунец, угорь. Роллы: калифорния с крабом. 620г',
        price: 1150
    }),
    new Product({
        categoryId: 14,
        imagePath: '../images/sushi-s-9.png',
        title: 'Три самурая',
        description: 'Роллы: филадельфия, калифорния с угрем, вулкан, тамаго, овощной, футомаки, венеция, кунсей, украинский. Горячие роллы: фурай. Суши (по 3 шт.): лосось, креветка, угорь, тунец. 2640г',
        price: 3650
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Лосось',
        description: '35г',
        price: 85
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Тунец',
        description: '35г',
        price: 80
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Копченый лосось',
        description: '35г',
        price: 90
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Угорь',
        description: '35г',
        price: 95
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Креветка',
        description: '35г',
        price: 95
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Омлет',
        description: '35г',
        price: 55
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Кальмар',
        description: '35г',
        price: 90
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Мясо краба',
        description: '35г',
        price: 70
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Осьминог',
        description: '35г',
        price: 85
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Вакамэ Чука',
        description: '35г',
        price: 65
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Гребешок',
        description: '35г',
        price: 80
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Икра летучей рыбы',
        description: '35г',
        price: 75
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Лосось с икрой лосося',
        description: '40г',
        price: 165
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Икра лосося',
        description: '35г',
        price: 125
    }),
    new Product({
        categoryId: 15,
        imagePath: '../images/sushi-s-9.png',
        title: 'Тунец с черной тобико',
        description: '40г',
        price: 140
    }),
    new Product({
        categoryId: 16,
        imagePath: '../images/sushi-s-9.png',
        title: 'Хумус СЕ',
        description: 'Нут пророщенный, сок лимона, оливковое масло, соус тхина (кунжутный урбеч), соль, перец черный, кумин, зубчик чеснока, авокадо спелый, веточка кинзы/укропа. 200г',
        price: 230
    }),
    new Product({
        categoryId: 16,
        imagePath: '../images/sushi-s-9.png',
        title: 'Ананасовый квас “Тенпаче”',
        description: 'Ананас, мед, кардамон. 500мл',
        price: 160
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Алоха Мехико',
        description: 'Тесто из цельнозерновой муки, морковь, томаты, базилик, оливковое масло, чеснок, брокколи, кукуруза, веганский сыр, вяленые томаты. 950г',
        price: 550
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Без сыра',
        description: 'Семена льна, красный перец, кабачок, укроп, соль розовая, прованские/итальянские травы, пропрощенные семена подсолнечника, сок лимона, чеснок (по желанию), листья салата, вяленые помидоры с маслом, цветная капуста. 550г',
        price: 500
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Веган-гурман',
        description: 'Мука цельнозерновая, оливковое масло, томатная паста, соль, перец черный, карри, асафетида, кориандр молотый, копченая паприка, масло растительное, веганский сыр, цветная капуста, руккола, шампиньоны. 900г',
        price: 590
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'После шести не ем',
        description: 'Мука цельнозерновая, оливковое масло, соус, брокколи, цветная капуста, помидоры вяленые, шампиньоны (по желанию), базилик. 900г',
        price: 550
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'СЕ Красный дракон',
        description: 'Семена льна, перец красный сладкий, помидор, базилик, укрок, перец черный молотый, маринованные грибы, томаты черри, базилик. 900г',
        price: 550
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Пицца Моцарелла',
        description: 'Кедровый орех, итальянкие/прованские травы, семя подсолнечника сухое, молотый кориандр, красный перец сладкий, шампиньоны сушеные, тахини, оливковое масло, помидоры, томаты сушеные, сок лимона, чеснок, соус тахина, базилик, финики. 650г',
        price: 590
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Чао Вегги',
        description: 'Мука цельнозерновая, оливковое масло, нарезанные томаты в соке, веганский сыр, помидор, шампиньоны, руккола, томатная паста, прованские/итальянские травы, перец черный молотый, асафетида, молотый кориандр. 850г',
        price: 690
    }),
    new Product({
        categoryId: 161,
        imagePath: '../images/sushi-s-9.png',
        title: 'Греческий пир',
        description: 'Семена льна, листы нори, лук зеленый, укроп, зеленый базилик, кунжутная паста, руккола, томаты черри, оливки. 400г',
        price: 550
    }),
    new Product({
        categoryId: 162,
        imagePath: '../images/sushi-s-9.png',
        title: '"Копченый лосось"',
        description: 'Листья нори, свекла, кешью, семена подсолнечника, сельдерей, огурец длинный, красный сладкий перец, листья салата, копченая паприка, чеснок (по желанию). 270г',
        price: 360
    }),
    new Product({
        categoryId: 162,
        imagePath: '../images/sushi-s-9.png',
        title: 'Зеленый дракон',
        description: 'Цветная капуста, брокколи, авокадо, красный перец сладкий, листья салата, кешью, шпинат, перец черный, листья нори. 200г',
        price: 290
    }),
    new Product({
        categoryId: 162,
        imagePath: '../images/sushi-s-9.png',
        title: 'Маринара',
        description: 'Листья нори, семена подсолнечника, лимонный сок, листья салата, томат, огурец, перец черный. 150г',
        price: 180
    }),
    new Product({
        categoryId: 162,
        imagePath: '../images/sushi-s-9.png',
        title: '"Причем тут лосось"',
        description: 'Листья нори, пророщенные семена подсолнечника, сок лимона, чеснок (по желанию), красный перец, сельдерей. 350г',
        price: 660
    }),
    new Product({
        categoryId: 162,
        imagePath: '../images/sushi-s-9.png',
        title: 'Сделано в Корее',
        description: 'Листья нори, морковь, авокадо, огурец, руккола, водоросла вакамэ, кешью, сок лимона, перец Чили острый, семена чиа. 200г',
        price: 320
    })
];

var done=0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

// Product.insertMany(products, function(err, docs) {
//     if (err) {
//         console.log(err);
//     }
//     if (docs.length === products.length) {
//         exit();
//
//     console.log('Success!');
//     }
// });
//
// function exit() {
//     mongoose.disconnect();
// }