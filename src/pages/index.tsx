import Head from "next/head";
import Image from "next/image";
import Quotes from "../components/presentation/Quotes";
import Flex from "../components/structure/Flex";

export default function Home() {
  return (
    <Flex direction="column">
      <Quotes />
      <Quotes />
      <Quotes />
      <Quotes />
      <Quotes />
    </Flex>
  );
}
