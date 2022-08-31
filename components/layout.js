export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full mx-auto pt-4">
        {props.children}
      </main>
    </div>
  );
}
