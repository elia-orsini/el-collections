export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full mx-auto">
        {props.children}
      </main>
    </div>
  );
}
