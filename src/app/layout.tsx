import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/components/provider/Provider';
import { ThemeProvider } from '@/components/provider/theme-provider';
import Navbar from '@/components/navigation/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="min-h-screen" lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-t from-lime-50 to-fuchsia-50 dark:from-[#181818] dark:to-[#4D4855]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Provider>
            <Navbar />
            <div className="mt-[72px] container max-w-7xl m-0 p-0 sm:mx-auto h-full">{children}</div>
          </Provider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
