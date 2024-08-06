const Product = require('../model/product')

const products = [
    {
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product1.jpg',
        quantity: 50
    },
    {
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/product2.jpg',
        quantity: 100
    },
    {
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 39.99,
        category: 'Furniture',
        imageUrl: 'https://example.com/product3.jpg',
        quantity: 30
    },
    {
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 49.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://example.com/product4.jpg',
        quantity: 70
    },
    {
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 14.99,
        category: 'Books',
        imageUrl: 'https://example.com/product5.jpg',
        quantity: 20
    },
    {
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 24.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product6.jpg',
        quantity: 80
    },
    {
        name: 'Product 7',
        description: 'Description for Product 7',
        price: 34.99,
        category: 'Toys & Games',
        imageUrl: 'https://example.com/product7.jpg',
        quantity: 90
    },
    {
        name: 'Product 8',
        description: 'Description for Product 8',
        price: 64.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/product8.jpg',
        quantity: 60
    },
    {
        name: 'Product 9',
        description: 'Description for Product 9',
        price: 54.99,
        category: 'Sports & Outdoors',
        imageUrl: 'https://example.com/product9.jpg',
        quantity: 40
    },
    {
        name: 'Product 10',
        description: 'Description for Product 10',
        price: 79.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product10.jpg',
        quantity: 25
    },
    {
        name: 'Product 11',
        description: 'Description for Product 11',
        price: 39.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://example.com/product11.jpg',
        quantity: 55
    },
    {
        name: 'Product 12',
        description: 'Description for Product 12',
        price: 19.99,
        category: 'Books',
        imageUrl: 'https://example.com/product12.jpg',
        quantity: 15
    },
    {
        name: 'Product 13',
        description: 'Description for Product 13',
        price: 29.99,
        category: 'Beauty',
        imageUrl: 'https://example.com/product13.jpg',
        quantity: 35
    },
    {
        name: 'Product 14',
        description: 'Description for Product 14',
        price: 44.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product14.jpg',
        quantity: 65
    },
    {
        name: 'Product 15',
        description: 'Description for Product 15',
        price: 22.99,
        category: 'Furniture',
        imageUrl: 'https://example.com/product15.jpg',
        quantity: 75
    },
    {
        name: 'Product 16',
        description: 'Description for Product 16',
        price: 34.99,
        category: 'Toys & Games',
        imageUrl: 'https://example.com/product16.jpg',
        quantity: 85
    },
    {
        name: 'Product 17',
        description: 'Description for Product 17',
        price: 59.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/product17.jpg',
        quantity: 45
    },
    {
        name: 'Product 18',
        description: 'Description for Product 18',
        price: 49.99,
        category: 'Sports & Outdoors',
        imageUrl: 'https://example.com/product18.jpg',
        quantity: 30
    },
    {
        name: 'Product 19',
        description: 'Description for Product 19',
        price: 17.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://example.com/product19.jpg',
        quantity: 10
    },
    {
        name: 'Product 20',
        description: 'Description for Product 20',
        price: 27.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product20.jpg',
        quantity: 95
    },
    {
        name: 'Product 21',
        description: 'Description for Product 21',
        price: 39.99,
        category: 'Beauty',
        imageUrl: 'https://example.com/product21.jpg',
        quantity: 50
    },
    {
        name: 'Product 22',
        description: 'Description for Product 22',
        price: 69.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/product22.jpg',
        quantity: 20
    },
    {
        name: 'Product 23',
        description: 'Description for Product 23',
        price: 24.99,
        category: 'Furniture',
        imageUrl: 'https://example.com/product23.jpg',
        quantity: 60
    },
    {
        name: 'Product 24',
        description: 'Description for Product 24',
        price: 14.99,
        category: 'Toys & Games',
        imageUrl: 'https://example.com/product24.jpg',
        quantity: 70
    },
    {
        name: 'Product 25',
        description: 'Description for Product 25',
        price: 32.99,
        category: 'Sports & Outdoors',
        imageUrl: 'https://example.com/product25.jpg',
        quantity: 40
    },
    {
        name: 'Product 26',
        description: 'Description for Product 26',
        price: 19.99,
        category: 'Books',
        imageUrl: 'https://example.com/product26.jpg',
        quantity: 30
    },
    {
        name: 'Product 27',
        description: 'Description for Product 27',
        price: 29.99,
        category: 'Electronics',
        imageUrl: 'https://example.com/product27.jpg',
        quantity: 25
    },
    {
        name: 'Product 28',
        description: 'Description for Product 28',
        price: 39.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://example.com/product28.jpg',
        quantity: 15
    },
    {
        name: 'Product 29',
        description: 'Description for Product 29',
        price: 49.99,
        category: 'Beauty',
        imageUrl: 'https://example.com/product29.jpg',
        quantity: 50
    },
    {
        name: 'Product 30',
        description: 'Description for Product 30',
        price: 24.99,
        category: 'Clothing',
        imageUrl: 'https://example.com/product30.jpg',
        quantity: 65
    }
];

async function saveProducts() {
    try {
        for (let productData of products) {
            const product = new Product(productData)
            await product.save()
            console.log(`Saved product: ${product.name}`)
        }
        console.log('All products saved successfully')
    } catch (err) {
        console.error('Error saving products:', err)
    }
}


const getPaginatedProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { category, minPrice, maxPrice } = req.query;

    const filter = {};

    if (category) {
        filter.category = category;
    }

    if (minPrice) {
        filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
    }
    if (maxPrice) {
        filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
    }
     
    try {
        const products = await Product.find(filter)
            .skip((page - 1) * limit)
            .limit(limit);

        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({
            products,
            page,
            totalPages,
            totalProducts,
        });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getPaginatedProducts, saveProducts };
