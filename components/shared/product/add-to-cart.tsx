"use client";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {Plus} from "lucide-react";
import { addItemToCart } from "@/lib/actions/cart.action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from 'react-toastify';

const AddToCart = ({ item }: { item: CartItem }) => {

        const router = useRouter();

        // implement toast later
    const handleAddToCart = async () => {
        const res = await addItemToCart(item);
        if (res.success) {
            toast.success(`${res.message}`);
            console.log("success", res.message);
        }
        // handle success add to cart later
        else {
            toast.error(`${res.message}`);      
            console.log("error", res.message);
        }
    }

    return (
        <Button className="w-full" type="button" onClick={handleAddToCart}> <Plus /> Add to Cart</Button>
    );
}
 
export default AddToCart;