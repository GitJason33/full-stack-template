export default function Footer() {
  return (
    <footer>
      Footer
      <Copyright />
    </footer>
  )
}



function Copyright() {
  return (
    <div className="p-3 bg-weak text-center text-dark">
      © 2023 Jason Dirany. All rights reserved.
    </div>
  )
}