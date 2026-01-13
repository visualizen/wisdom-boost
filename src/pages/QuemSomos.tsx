import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Award, Globe, Target, Users, Shield, Zap, Package, Ship, TrendingUp, Sparkles, Rocket, ChartBar, Network } from "lucide-react";
import heroImage from "@/assets/quem-somos-hero.jpg";
import teamImage from "@/assets/quem-somos-team.jpg";
import globalCommerceImage from "@/assets/global-commerce.jpg";
import techPatternImage from "@/assets/tech-pattern.jpg";
import portModernImage from "@/assets/port-modern.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";

const QuemSomos = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: 30, suffix: "+", label: t('aboutPage.stats.items.experience'), color: "from-primary-light via-primary to-primary-dark" },
    { icon: Globe, value: 50, suffix: "+", label: t('aboutPage.stats.items.countries'), color: "from-primary via-primary-dark to-primary" },
    { icon: Package, value: 1000, suffix: "+", label: t('aboutPage.stats.items.operations'), color: "from-primary-dark via-primary to-primary-light" },
    { icon: Ship, value: 500000, suffix: "+", label: t('aboutPage.stats.items.tonnage'), color: "from-primary via-primary-light to-primary-dark" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quem Somos"
        description="Conheça a Wisdom Trading, sua parceira estratégica em comércio exterior com mais de 30 anos de experiência conectando empresas ao mundo."
      />
      <Header />

      {/* Hero Section - Standardized */}
      <section className="relative min-h-[500px] pt-40 pb-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark Blue Overlay as requested for test - Darkened further */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-sky-900/80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-white font-semibold text-sm">{t('aboutPage.hero.badge')}</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white drop-shadow-2xl animate-fade-in-up pb-2">
              {t('aboutPage.hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-10 font-light">
              {t('aboutPage.hero.subtitle')} <span className="font-bold text-cyan-300">{t('aboutPage.hero.subtitleHighlight')}</span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white">+30</div>
                <div className="text-sm text-white/80">{t('aboutPage.hero.stats.experience')}</div>
              </div>
              <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white">+50</div>
                <div className="text-sm text-white/80">{t('aboutPage.hero.stats.countries')}</div>
              </div>
              <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">{t('aboutPage.hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas Coloridas */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${techPatternImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
              <ChartBar className="w-5 h-5 text-blue-500" />
              <span className="text-primary font-semibold">{t('aboutPage.stats.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-fade-in-up pb-2">
              {t('aboutPage.stats.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('aboutPage.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-sky-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative h-full bg-card/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-blue-500/30 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>

                    <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="relative">
                      <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value.toLocaleString('pt-BR')}
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-muted-foreground font-medium text-lg">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* História - Imagem Grande Colorida */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src={teamImage}
                  alt="Equipe Inovadora Wisdom Trading"
                  className="relative w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                <Rocket className="w-5 h-5 text-blue-500" />
                <span className="text-primary font-semibold">{t('aboutPage.history.badge')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent pb-2">
                {t('aboutPage.history.title')}
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-xl">
                  {t('aboutPage.history.p1')}
                </p>
                <p className="text-xl">
                  {t('aboutPage.history.p2')}
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 rounded-xl border border-cyan-500/20">
                    <Shield className="w-6 h-6 text-cyan-500" />
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">{t('aboutPage.history.pillars.trust')}</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
                    <Zap className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-blue-600 dark:text-blue-400">{t('aboutPage.history.pillars.innovation')}</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 rounded-xl border border-indigo-500/20">
                    <TrendingUp className="w-6 h-6 text-indigo-500" />
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{t('aboutPage.history.pillars.results')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
              {/* Icon removed as requested */}
              {t('aboutPage.video.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 pb-2">
              {t('aboutPage.video.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('aboutPage.video.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl bg-card">
                <video
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  poster={heroImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={heroVideo} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Comércio Global com Nova Imagem */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${globalCommerceImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-sky-900/90"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Network className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">{t('aboutPage.global.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {t('aboutPage.global.title')}
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              {t('aboutPage.global.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-cyan-400">50+</div>
                <div className="text-white/80">{t('aboutPage.global.stats.countries')}</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Ship className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-blue-400">1000+</div>
                <div className="text-white/80">{t('aboutPage.global.stats.operations')}</div>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Users className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2 text-sky-400">100%</div>
                <div className="text-white/80">{t('aboutPage.global.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Cards Coloridos */}
      <section className="py-32 relative overflow-hidden" >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${portModernImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="text-primary font-semibold">{t('aboutPage.mission.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
              {t('aboutPage.mission.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('aboutPage.mission.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-cyan-500/50">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{t('aboutPage.mission.mission.title')}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('aboutPage.mission.mission.desc')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/50">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t('aboutPage.mission.vision.title')}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('aboutPage.mission.vision.desc')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative h-full bg-card/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-3xl"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/50">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{t('aboutPage.mission.values.title')}</h3>
                <ul className="text-muted-foreground space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>{t('aboutPage.mission.values.items.integrity')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>{t('aboutPage.mission.values.items.excellence')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>{t('aboutPage.mission.values.items.commitment')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>{t('aboutPage.mission.values.items.innovation')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 mt-1 text-xl">▸</span>
                    <span>{t('aboutPage.mission.values.items.respect')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais - Grid Colorido */}
      <section className="py-32 relative overflow-hidden" >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20">
              <Sparkles className="w-5 h-5 text-cyan-500" />
              <span className="text-primary font-semibold">{t('aboutPage.differentials.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {t('aboutPage.differentials.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('aboutPage.differentials.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{t('aboutPage.differentials.items.experience.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPage.differentials.items.experience.desc')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('aboutPage.differentials.items.global.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPage.differentials.items.global.desc')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{t('aboutPage.differentials.items.security.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPage.differentials.items.security.desc')}
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative h-full p-8 bg-card/80 backdrop-blur-xl rounded-2xl border-2 border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">{t('aboutPage.differentials.items.agility.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPage.differentials.items.agility.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        title={t('aboutPage.contact.title')}
        subtitle={t('aboutPage.contact.subtitle')}
      />

      <Footer />
    </div>
  );
};

export default QuemSomos;
