import Head from 'next/head';

const ListCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">{children}</div>
  );
};

export default ListCard;