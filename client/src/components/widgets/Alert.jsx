import { useAlert } from "@/context/contextHooks";

export default function Alert() {
  const { open, msg, isError, closeAlert } = useAlert();
  
  const styles = {
    bg: isError ? "!bg-incorrect" : "!bg-correct",
    text: isError ? "!text-incorrect" : "!text-correct",
    title: isError ? "error" : "success",
    border: isError ? "!border-incorrect" : "!border-correct",
  };


  return open && (
    <aside className={`alert ${styles.border}`}>
      <button 
        onClick={closeAlert} 
        className="alert-close-icon"
      >
        x
      </button>

      <div className={`${styles.bg} w-fit px-3 rounded-md text-dark font-bold mb-3`}>{styles.title}</div>
      <p className={`${styles.text}`}>{msg}</p>
    </aside>
  );
}