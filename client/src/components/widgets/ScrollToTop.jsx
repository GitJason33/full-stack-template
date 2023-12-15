import { useEffect } from 'react';


export default function ScrollToTop() {
  useEffect(() => {
    const scrollBtn = document.querySelector('#scroll-top-btn');

    const showScrollButton = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        scrollBtn.style.display = 'flex';
      else 
        scrollBtn.style.display = 'none';
    };

    window.onscroll = showScrollButton;
  }, []);

  return (
    <button
      id='scroll-top-btn'
      className="
      hidden items-center justify-center 
      fixed bottom-3 right-3 z-50 
      w-12 h-12
      bg-weak/75 text-dark 
      rounded-full cursor-pointer
      !text-3xl font-bold 
      hover:brightness-75 focus:brightness-75
    "
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}
