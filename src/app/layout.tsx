import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
import { Inter } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import Providers from "@/src/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/src/provider/providers.client";
import AuthProvider from "@/src/provider/auth.provider";
import "flatpickr/dist/themes/light.css";
import DirectionProvider from "@/src/provider/direction.provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <AuthProvider>
        <TanstackProvider>
          <Providers>
            <DirectionProvider lang={lang}>{children}</DirectionProvider>
          </Providers>
        </TanstackProvider>
      </AuthProvider>
    </html>
  );
}
