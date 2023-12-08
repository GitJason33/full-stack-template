export default function NotFound({ thing }) {
  return (
    <main className="py-6 px-3">
      <h1 className="text-second">404 Not Found</h1>
      <p>
        Unfortunately, the {thing} {"you're"} looking for {"is "}
        <span className="text-prime">lost in another galaxy</span>
        , searching for other life forms.
      </p>
    </main>
  )
}
