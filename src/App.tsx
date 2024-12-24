// @deno-types="@types/react"

import { useEffect } from "react";
import { useNdk } from "nostr-hooks";
import ProductGrid from "@/layouts/ProductGrid.tsx";

function App() {
  const { initNdk, ndk } = useNdk();

  useEffect(() => {
    initNdk({
      explicitRelayUrls: [
        "ws://localhost:7777",
      ],
    });
  }, [initNdk]);

  useEffect(() => {
    ndk?.connect();
  }, [ndk]);

  return (
    <>
      <ProductGrid />
    </>
  );
}

export default App;
