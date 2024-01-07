import { Header } from "@/components/Header";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Header title="This is the header component" />
      <Button variant="filled" color="red">
        Button
      </Button>
    </main>
  );
}
