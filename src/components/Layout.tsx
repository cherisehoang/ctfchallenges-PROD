import Head from 'next/head';
import SubmitButton from './SubmitButton'
import Header from '~/components/Header';

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        {/* Add other head meta tags, links, and scripts here */}
      </Head>

      {/* <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
      </header> */}
      <Header title={title}/>

      <main className="container mx-auto p-4">{children}
        <div className="flex items-center">
        </div>
      </main>
    </div>
  );
};

export default Layout;