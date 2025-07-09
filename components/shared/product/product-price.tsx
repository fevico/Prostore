import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: number, className?: string}) => {
    // ensure to decimal places 
    const stringValue = value.toFixed(2);
    // get the int and the float 
    const [int, float] = stringValue.split('.');

    return (<p className={cn("text-2xl", className)}>
        <span className="text-xs align-supper">$</span>
        {int}
        <span className="text-xs align-supper">.{float}</span>
    </p>  );
}
 
export default ProductPrice;