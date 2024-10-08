export const MintPrice = ({ mintPrice, chainSymbol }: any) => {
  return (
    <div className="flex relative">
      <p className="text-sm bg-black text-white font-owners p-1 rounded-lg items-center font-bold content-center text-center">
        {mintPrice}
        {chainSymbol}
      </p>
    </div>
  );
};
