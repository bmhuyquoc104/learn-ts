type ListProps<T> = {
  items: T[];
};

const List = <T extends { id: number; name: string }>({
  items,
}: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default List;
