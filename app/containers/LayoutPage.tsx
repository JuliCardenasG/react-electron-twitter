import React from "react";
import Layout, { LayoutProps } from "../components/Layout/Layout";

export default function LayoutPage(props: LayoutProps) {
  return <Layout children={props.children}/>
}
