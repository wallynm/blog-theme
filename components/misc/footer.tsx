const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-12 items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center">
            Ver todos posts por tag
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            #3dprint
            #webdev
            #gamedev
            #vidapessoal
            #literatura

          </div>

          <div className="text-sm mt-4 text-center">
            © 2024 Wallysson Nunes. Todos direitos reservadoss.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer