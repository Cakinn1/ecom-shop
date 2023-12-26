export default function TotalPrice({
  price,
  discountPercentage,
}: {
  price: number;
  discountPercentage: number;
}) {
  const totalPrice = price - (price * discountPercentage) / 100;
  return <h1 className="font-bold">${totalPrice.toFixed(2)}</h1>;
}
