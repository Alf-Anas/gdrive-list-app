import { Layout as LayoutANTD, theme } from "antd";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { ROUTE } from "@/constant/route";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import Head from "next/head";
import Image from "next/image";

const { Header, Content } = LayoutANTD;

const layoutStyle: React.CSSProperties = {
  minHeight: "100vh",
};

export default function PublicLayout({ children }: Props) {
  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Head>
        <title>List Google Drive Files App</title>
        <meta name="description" content="Biodiesel 2023 - PTSI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutANTD style={layoutStyle}>
        <Header style={{ paddingInline: "16px" }} id="public-layout-header">
          <div style={{ display: "flex" }}>
            <div
              className="logo"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                marginRight: "12px",
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push(ROUTE.HOME.URL);
              }}
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={84}
                height={39}
                style={{
                  margin: "auto 4px auto 12px",
                }}
              />
              <span
                style={{
                  color: "whitesmoke",
                  opacity: "85%",
                }}
              >
                GDRIVE LIST APP
              </span>
            </div>
            <HeaderNav />
          </div>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
        <Footer />
      </LayoutANTD>
    </>
  );
}

interface Props {
  children?: ReactNode;
}
