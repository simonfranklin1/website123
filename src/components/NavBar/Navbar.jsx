import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
        <nav class="nav-tela-grande">
            <a href="#section1">INICIO</a>
            <a href="#section2">OFERECEMOS</a>
            <a href="#section3">RELATORIOS</a>
            <a href="#section4">WHATSAPP'S</a>
            <a href="#section5">AUTOMAÇÕES</a>
            <a href="#section6">API</a>
            <a href="#section7">SUPORTE ONLINE</a>
            <a href="#section8">PLANOS</a>
            <a href="#section9">CONTATO</a>
        </nav>
        <nav class="nav-tela-pequena">
            <div class="navbar">
                <div class="dropdown">
                    <button class="dropbtn">PAGINAS
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#section1">Início</a>
                        <a href="#section2">Sobre</a>
                        <a href="#section3">Recursos</a>
                        <a href="#section4">Integração</a>
                        <a href="#section5">Automações</a>
                        <a href="#section6">API</a>
                        <a href="#section7">Suporte</a>
                        <a href="#section8">Planos</a>
                        <a href="#section9">Contato</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar