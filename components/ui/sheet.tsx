const SheetTrigger = ({ onClick }: { onClick: any }) => { // Declaring onClick as any
  return (
    <SheetPrimitive.Trigger onClick={onClick} />
  );
};
