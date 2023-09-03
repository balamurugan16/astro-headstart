import { addItemToCart } from '../store/cart';
import type { ShopItem } from '../types';

const AddToCart = ({ item }: { item: ShopItem }) => {
	return (
		<button class="big-link" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
};

export default AddToCart;
