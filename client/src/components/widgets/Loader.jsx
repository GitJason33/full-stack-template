import { useLoading } from "@/context/contextHooks"


export default function Loader() {
  const { isLoading } = useLoading(); 

  return isLoading && (
    <aside className="is-modal center-it">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </aside>
  )
}
