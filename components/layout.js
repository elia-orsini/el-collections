export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "websiteFont" }}>
      <main className="flex w-full mx-auto min-h-screen flex-col">
        {props.children}
      </main>
    </div>
  );
}
