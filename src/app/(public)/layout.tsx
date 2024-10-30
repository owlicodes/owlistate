import { Header } from "@/features/common/components/header";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div>
      <Header />

      <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
