const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WISDOM TRADING</h3>
            <p className="text-background/80">
              Conectando sua empresa ao mercado global com soluções completas em comércio exterior.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Importação</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Exportação</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Assessoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Equipe</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Carreira</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Wisdom Trading. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
