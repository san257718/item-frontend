import Dashboard from "./Dashboard/page";

export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
