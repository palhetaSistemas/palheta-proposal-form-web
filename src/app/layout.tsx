import AuthProvider from "@/src/provider/auth.provider";
import DirectionProvider from "@/src/provider/direction.provider";
import Providers from "@/src/provider/providers";
import TanstackProvider from "@/src/provider/providers.client";
import "flatpickr/dist/themes/light.css";
import moment from "moment";
import "moment/locale/pt-br";
import { CookiesProvider } from "next-client-cookies/server";
import { Inter } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";
import { ProposalContextProvider } from "../context/Contex";
import "./assets/scss/globals.scss";
import "./assets/scss/theme.scss";
const inter = Inter({ subsets: ["latin"] });

moment.locale("pt-br");
export const metadata = {
  title: {
    default: "Palheta - Detalhes",
  },
  icons: {
    icon: "/icon.png",
  },
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
      <CookiesProvider>
        <AuthProvider>
          <TanstackProvider>
            <Providers>
              <DirectionProvider lang={lang}>
                <ProposalContextProvider>{children}</ProposalContextProvider>
              </DirectionProvider>
            </Providers>
          </TanstackProvider>
        </AuthProvider>
      </CookiesProvider>
    </html>
  );
}
