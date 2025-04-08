import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

export default function Products() {
    const products = [
        {
            name: "Acoustic Guitar",
            description: "A classic acoustic guitar with a warm, rich tone.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/03/23110155/1742702514_780134-ctmusicshop.com-768x768.webp",
        },
        {
            name: "Electric Guitar",
            description: "Perfect for rock, metal, and blues performances.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/04/06174141/1743936101_309056-ctmusicshop.com-768x768.webp",
        },
        {
            name: "Piano",
            description: "Elegant upright piano ideal for home or stage.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2023/06/26035138/1-44-768x768.jpg",
        },
        {
            name: "Violin",
            description: "A well-crafted violin for beginners to professionals.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/03/23160707/1742720826_826489-ctmusicshop.com-768x768.webp",
        },
        {
            name: "Drum Set",
            description: "Complete drum kit for live or studio sessions.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/02/07124051/1738906850_646418-ctmusicshop.com-768x768.webp",
        },
        {
            name: "Flute",
            description: "A silver-plated flute with a sweet, bright tone.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2022/06/25210514/MIDIPLUS-WIND-2-WEB-768x768.webp",
        },
        {
            name: "Trumpet",
            description: "Brass trumpet suitable for jazz or orchestral music.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/03/23154407/1742719446_994461-ctmusicshop.com-768x768.webp",
        },
        {
            name: "Saxophone",
            description: "Alto saxophone with a smooth, expressive sound.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2023/06/26034927/1-48-768x768.jpg",
        },
        {
            name: "Cello",
            description: "Deep and resonant cello for solo or ensemble use.",
            image_url: "https://www.johnsonstring.com/images-for-products/instruments_bows/WEB-OFHAIDESTRAD-CE1-thumbnail.jpg",
        },
        {
            name: "Keyboard",
            description: "Portable electronic keyboard with multiple sounds.",
            image_url: "https://media.ctmusicshop.com/wp-content/uploads/2025/02/15154938/1739609378_045923-ctmusicshop.com-768x768.webp",
        },
    ];

    return (
        <div className="bg-slate-600">
            <h1 className="font-bold text-2xl text-center p-4 mb-4 bg-gray-900 text-white">Music Instruments</h1>
            <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded p-4 bg-slate-300 mb-6">
                {
                    products.map((product, index) => {
                        return (
                            <ProductItem
                                key={index}
                                index={index}
                                productName={product.name}
                                description={product.description}
                                image_url={product.image_url}
                            />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    );
}
