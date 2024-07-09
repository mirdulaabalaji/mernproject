// backend/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');
const PetProduct = require('./models/PetProduct');
const Pet = require('./models/Pet');
const connectDB = require('./config/db');

const seedDB = async () => {
    await connectDB();

    await User.deleteMany({});
    await PetProduct.deleteMany({});
    await Pet.deleteMany({});

    // Seed Users
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.insertMany([
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: hashedPassword,
            phone: '1234567890',
            address: '123 Main St',
            purchasedProducts: [],
            adoptedPets: []
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: hashedPassword,
            phone: '0987654321',
            address: '456 Elm St',
            purchasedProducts: [],
            adoptedPets: []
        }
    ]);

    // Seed Pet Products
    await PetProduct.insertMany([
        {
            name: 'Dog Food',
            description: 'High quality dog food',
            price: 29.99,
            imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/5/YU/GC/BI/97348387/pedigree-dog-foods-500x500.jpg'
        },
        {
            name: 'Cat Toy',
            description: 'Interactive toy for cats',
            price: 15.99,
            imageUrl: 'https://headsupfortails.com/cdn/shop/files/TrixieWindUpMouseCatToy-7cm_AssortedColour.jpg?v=1687871100'
        },
        {
            name: 'Bird Cage',
            description: 'Spacious bird cage',
            price: 49.99,
            imageUrl: 'https://media.istockphoto.com/id/1073035654/photo/success-concept-open-birds-cell-isolation-on-a-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=gjv27rjaEPqjwAn08DbG0V4fW4IIeoJtDRL9eWwVlRs='
        },
        {
            name: 'Fish Tank',
            description: '50-gallon fish tank',
            price: 99.99,
            imageUrl: 'https://5.imimg.com/data5/VX/LY/MY-35834836/fish-tank-1.jpg'
        },
        {
            name: 'Hamster Wheel',
            description: 'Durable hamster wheel',
            price: 19.99,
            imageUrl: 'https://media.licdn.com/dms/image/D5612AQFFWnJ8FU5v9Q/article-cover_image-shrink_600_2000/0/1658154752684?e=2147483647&v=beta&t=VXvl6G-BnVTi7Q2hT6nfq4K30Dkd4Wp3TAFyOaMGq6s'
        },
        {
            name: 'Dog Leash',
            description: 'Strong and durable dog leash',
            price: 12.99,
            imageUrl: 'https://images-cdn.ubuy.co.in/651385c4f940a5761d6ea04c-flexi-retractable-dog-leash-cord-16-ft.jpg'
        },
        {
            name: 'Bird Feeder',
            description: 'Outdoor bird feeder',
            price: 14.99,
            imageUrl: 'https://images-cdn.ubuy.co.in/63ea4a2589eaac2918767213-bird-feeder-for-outside-hanging-bird.jpg'
        },
        {
            name: 'Dog Bed',
            description: 'Comfortable dog bed',
            price: 39.99,
            imageUrl: 'https://images-cdn.ubuy.co.in/64297ddb40fb46307d476f37-dog-bed-dog-beds-for-small-dogs.jpg'
        },
        {
            name: 'Cat Litter Box',
            description: 'Easy to clean litter box',
            price: 22.99,
            imageUrl: 'https://m.media-amazon.com/images/I/61TU6f4-AFL.jpg'
        },
        {
            name: 'Fish Food',
            description: 'Nutritious food for fish',
            price: 9.99,
            imageUrl: 'https://m.media-amazon.com/images/I/81SKaHpaaGL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            name: 'Bird Perch',
            description: 'Comfortable perch for birds',
            price: 11.99,
            imageUrl: 'https://m.media-amazon.com/images/I/51dQoaGof3L._AC_UF1000,1000_QL80_.jpg'
        },
        {
            name: 'Rabbit Hutch',
            description: 'Spacious hutch for rabbits',
            price: 89.99,
            imageUrl: 'https://oypla.com/images/products/3036-single-rabbit-hutch-820x390x700mm-10.jpg'
        },
        {
            name: 'Hamster Bedding',
            description: 'Soft and absorbent bedding',
            price: 14.99,
            imageUrl: 'https://storefeederimages.blob.core.windows.net/realaquaticsltd/Products/07c43a64-9ce6-4a20-81eb-57dbc6c56f85/Full/mw2wwpnxydb.jpg'
        },
        {
            name: 'Pet Shampoo',
            description: 'Gentle shampoo for pets',
            price: 7.99,
            imageUrl: 'https://furballstory.com/cdn/shop/files/1_28.jpg?v=1707195870'
        }
    ]);

    await Pet.insertMany([
        {
            name: 'Buddy',
            breed: 'Golden Retriever',
            age: 3,
            description: 'Friendly and energetic',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg'
        },
        {
            name: 'Mittens',
            breed: 'Siamese',
            age: 2,
            description: 'Affectionate and playful',
            imageUrl: 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1678934108.5188236/everything-you-need-to-know-about-siamese-cats.png'
        },
        {
            name: 'Tweety',
            breed: 'Canary',
            age: 1,
            description: 'Cheerful and sings beautifully',
            imageUrl: 'https://cdn.britannica.com/33/226533-050-404C15AF/Canary-on-pear-branch.jpg'
        },
        {
            name: 'Max',
            breed: 'Labrador Retriever',
            age: 4,
            description: 'Loyal and friendly',
            imageUrl: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NTE0NzI4ODc5NTk3NTM1/doggie-matchmaker-is-the-labrador-retriever-right-for-you.jpg'
        },
        {
            name: 'Bella',
            breed: 'Persian Cat',
            age: 3,
            description: 'Calm and affectionate',
            imageUrl: 'https://www.thesprucepets.com/thmb/5OSN_p9hUfPssKsJORQDGnAz_tQ=/1963x0/filters:no_upscale():strip_icc()/GettyImages-181861505-4e63227ed0a14dc9bfe86848ef54caf3.jpg'
        },
        {
            name: 'Charlie',
            breed: 'Parrot',
            age: 2,
            description: 'Colorful and talkative',
            imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBwYXJyb3R8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Daisy',
            breed: 'Rabbit',
            age: 1,
            description: 'Soft and cuddly',
            imageUrl: 'https://www.havahart.com/media/wysiwyg/hh/cms/lc/rabbits/hh-animals-rabbit-1.png'
        },
        {
            name: 'Rocky',
            breed: 'Bulldog',
            age: 5,
            description: 'Strong and gentle',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-154306987-1667315883.jpg?crop=0.752xw:1.00xh;0.0929xw,0&resize=1200:*'
        },
        {
            name: 'Luna',
            breed: 'Husky',
            age: 3,
            description: 'Energetic and friendly',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0535/2738/0144/files/shutterstock_610222331_1024x1024.jpg?v=1698186608'
        },
        {
            name: 'Molly',
            breed: 'Goldfish',
            age: 1,
            description: 'Bright and lively',
            imageUrl: 'https://finnkart.in/wp-content/uploads/2019/04/lg_39507_Fantail_Goldfish_Red.jpg'
        },
        {
            name: 'Simba',
            breed: 'Maine Coon',
            age: 4,
            description: 'Large and friendly',
            imageUrl: 'https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg'
        },
        {
            name: 'Oscar',
            breed: 'Beagle',
            age: 2,
            description: 'Curious and playful',
            imageUrl: 'https://cdn.britannica.com/80/29280-004-2162B4F7/Beagles-pets.jpg'
        },
        {
            name: 'Coco',
            breed: 'Poodle',
            age: 3,
            description: 'Intelligent and active',
            imageUrl: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2023/July/MiniaturePoodle_Hero.jpg'
        },
        {
            name: 'Shadow',
            breed: 'German Shepherd',
            age: 4,
            description: 'Loyal and protective',
            imageUrl: 'https://media-be.chewy.com/wp-content/uploads/2021/05/11162926/German-Shepherd-1358309706-1024x591.jpg'
        },
        {
            name: 'Whiskers',
            breed: 'Tabby Cat',
            age: 2,
            description: 'Playful and curious',
            imageUrl: 'https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg'
        }
    ]);

    console.log('Database seeded!');
    process.exit();
};

seedDB();
