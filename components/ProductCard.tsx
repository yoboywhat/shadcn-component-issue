const ProductCard: React.FC<productCardProps> = ({id, img, name, description, price, sale, stock, category}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [infOpen, setInfOpen] = useState(false)

    const handleMenu = () => {
        setInfOpen(!infOpen)
      }

    const addProductToCart = (e: React.FormEvent) => {
        e.stopPropagation();
        const payload = {
            id: id,
            name: name,
            img: img,
            price: price,
            quantity: 1,
        };

        dispatch(addToCart(payload));

    };

    return (
        <div 
        className="cursor-pointer group"
         onClick={() => SheetTrigger}
        >
            {infOpen && <ProdInf productData={{
                id: id,
                name: name,
                description: description,
                img: img,
                price: price,
                stock: stock,
                sale: sale,
                category: category,
            }} />}
            <div className="relative">
                <Image 
                    className="w-full"
                    src={img}
                    width={1000}
                    height={1142}
                    alt={name}
                />

                {sale && (
                    <div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4">
                        SALE
                    </div>
                )}

                <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0
                transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
                    <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
                        <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                            <AiOutlineHeart />
                        </div>
                        <div 
                            className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
                            onClick={addProductToCart}
                            >
                                <AiOutlineShoppingCart />
                            </div>
                    </div>
                </div>
            </div>

            <p className="text-gray-400 font-light">{category[0]}</p>
            <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
            <p className="text-gray-400 font-light">${price}.00</p>
        </div>
    )
}
