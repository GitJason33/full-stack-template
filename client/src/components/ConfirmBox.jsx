import { useConfirm } from "@/state/contextHooks";


export default function ConfirmBox() {
  const { confirm, closeConfirm } = useConfirm();

  const handleCancel = () => closeConfirm();
  const handleConfirm = () => {
    confirm.callback_OK();
    closeConfirm();
  }

  return confirm.open && (
    <aside className="p-3 is-modal center-it">
      <section className="max-w-[500px] w-full bg-dark p-3 my-rounding border border-weak">
        <h2 className="text-center text-prime mb-6">{confirm.msg}</h2>

        <div className="flex justify-between gap-3">
          <button 
            className="btn grow w-1/2 bg-weak/20" 
            onClick={handleCancel}
          >CANCEL
          </button>

          <button 
            className="btn bg-second text-dark font-bold grow w-1/2" 
            onClick={handleConfirm}
          >CONFIRM
          </button>
        </div>
      </section>
    </aside>
  )
}
