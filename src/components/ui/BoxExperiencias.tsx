type Elementos = {
  children: React.ReactNode;
};
const BoxEperiencias = ({ children }: Elementos) => {
  return <div className="px-4 md:px-8 space-y-4 pb-2">{children}</div>;
};
export default BoxEperiencias;
