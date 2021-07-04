import bcrypt from 'bcryptjs'

const data = {
    users : [
        {
            name: 'Ali',
            email: 'ali@pixel38.com',
            username: 'Ali123',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            phone: '03497489',
            address: 'beirut'
        },
        {
            name: 'Houssam',
            email: 'houssam@gmail.com',
            username: 'Hous123',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            phone: '71195396',
            address: 'beirut'
        },
        {
            name: 'Antoine',
            email: 'antoinedebes@gmail.com',
            username: 'Antoine123',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
            phone: '71876126',
            address: 'beirut'
        }
    ],

    products: [
        {
            name: 'Adidas short',
            category: 'shorts',
            sex: 'male',
            brand: 'Adidas',
            price: 23,
            description:'High quality product',
            rating: 4,
            numReviews: 12,
            stock: 14,
            size: 'Medium',
            image: './images/adidas-short.jpg'
        },
        {
            name: 'Adidas slim shirt',
            category: 'shirts',
            sex: 'male',
            brand: 'Adidas',
            price: 99,
            description:'High quality product',
            rating: 4.5,
            numReviews: 23,
            stock: 30,
            size: 'Large',
            image: './images/adidas-slim-shirt.jpg'
        },
        {
            name: 'Lacoste shirt',
            category: 'shirts',
            sex: 'male',
            brand: 'Lacoste',
            price: 58,
            description:'High quality product',
            rating: 5,
            numReviews: 33,
            stock: 10,
            size: 'Small',
            image: './images/Lacoste-shirt.jpg'
        },
        {
            name: 'H&M pants',
            category: 'pants',
            sex: 'male',
            brand: 'H&M',
            price: 120,
            description:'High quality product',
            rating: 4.5,
            numReviews: 20,
            stock: 3,
            size: 'Medium',
            image: './images/hm-pants.jpg'
        },
        {
            name: 'Jack&Jones shoes',
            category: 'shoes',
            sex: 'male',
            brand: 'Jack&Jones',
            price: 180,
            description:'High quality product',
            rating: 2.5,
            numReviews: 27,
            stock: 10,
            size: '33',
            image: './images/jack-shoes.jpg'
        },
    ]
}

export default data