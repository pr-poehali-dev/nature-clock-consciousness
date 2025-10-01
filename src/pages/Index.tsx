import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold text-primary">
              Психолог и Логотерапевт
            </h1>
            <div className="hidden md:flex gap-6 font-body">
              {["Главная", "Обо мне", "Услуги", "Методы работы", "Блог", "Отзывы", "Контакты"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => scrollToSection("контакты")}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
                Путь к осмысленной жизни
              </h2>
              <p className="text-xl font-body text-muted-foreground">
                Через логотерапию, работу с родовыми системами и внутренними частями 
                к глубокому пониманию себя и своего предназначения
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("контакты")}
                  className="font-body"
                >
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("услуги")}
                  className="font-body"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/c4c5491d-4b2e-4737-8d7e-4a0c96f263ac.jpg"
                alt="Природа, время и сознание"
                className="rounded-2xl shadow-2xl w-full animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="обо-мне" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Обо мне
          </h2>
          <div className="space-y-6 font-body text-lg text-foreground">
            <p>
              Я психолог и сертифицированный логотерапевт, посвятивший свою практику 
              помощи людям в поиске смысла жизни и преодолении экзистенциальных кризисов.
            </p>
            <p>
              Моя работа основана на интеграции классической логотерапии Виктора Франкла 
              с современными подходами работы с родовыми системами и внутренними частями личности.
            </p>
            <p>
              Я верю, что каждый человек несёт в себе уникальный смысл, как дерево несёт 
              в себе память о корнях, а часовой механизм — точность каждого мгновения.
            </p>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "TreePine",
                title: "Логотерапия",
                description: "Поиск смысла жизни и преодоление экзистенциальных кризисов через метод Виктора Франкла",
              },
              {
                icon: "Users",
                title: "Работа с родовыми системами",
                description: "Исследование семейных паттернов и их влияния на вашу жизнь",
              },
              {
                icon: "Brain",
                title: "Работа с внутренними частями",
                description: "Интеграция внутренних субличностей для гармонии личности",
              },
              {
                icon: "Briefcase",
                title: "Корпоративное консультирование",
                description: "Помощь командам и организациям в поиске общих смыслов и целей",
              },
              {
                icon: "TrendingUp",
                title: "Личностное развитие",
                description: "Раскрытие потенциала и движение к самореализации",
              },
              {
                icon: "Heart",
                title: "Психологическая поддержка",
                description: "Сопровождение в сложных жизненных ситуациях и кризисах",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="методы-работы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Методы работы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "Clock",
                title: "Логотерапевтический подход",
                points: [
                  "Сократический диалог",
                  "Парадоксальная интенция",
                  "Дерефлексия",
                  "Поиск личного смысла",
                ],
              },
              {
                icon: "Network",
                title: "Системный подход",
                points: [
                  "Расстановки",
                  "Генограмма семьи",
                  "Анализ семейных сценариев",
                  "Работа с лояльностью рода",
                ],
              },
              {
                icon: "Layers",
                title: "Работа с частями личности",
                points: [
                  "IFS-терапия",
                  "Диалог с субличностями",
                  "Интеграция внутренних конфликтов",
                  "Гармонизация внутренней системы",
                ],
              },
              {
                icon: "Target",
                title: "Корпоративные методы",
                points: [
                  "Фасилитация команд",
                  "Поиск организационных смыслов",
                  "Развитие лидерских качеств",
                  "Профилактика выгорания",
                ],
              },
            ].map((method, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={method.icon} className="text-accent" size={20} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary">
                    {method.title}
                  </h3>
                </div>
                <ul className="space-y-2 font-body text-muted-foreground ml-14">
                  {method.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="блог" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Блог
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Смысл жизни в современном мире",
                excerpt: "Как найти своё предназначение в эпоху бесконечных возможностей",
                date: "15 марта 2024",
              },
              {
                title: "Родовые паттерны и их влияние",
                excerpt: "Понимание семейных сценариев для освобождения от ненужных программ",
                date: "8 марта 2024",
              },
              {
                title: "Внутренний диалог как путь к себе",
                excerpt: "Техники работы с внутренними частями для обретения целостности",
                date: "1 марта 2024",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="h-48 bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/8991c5b1-40fa-42b1-81b8-3e04bb580767.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-body text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                  {post.title}
                </h3>
                <p className="font-body text-muted-foreground">{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Анна М.",
                text: "Работа с логотерапией помогла мне пережить сложный период и найти новый смысл жизни. Благодарна за профессионализм и чуткость.",
                rating: 5,
              },
              {
                name: "Дмитрий К.",
                text: "Расстановки открыли глаза на семейные паттерны, которые влияли на мои решения. Теперь чувствую себя свободнее.",
                rating: 5,
              },
              {
                name: "Елена С.",
                text: "Работа с внутренними частями помогла интегрировать внутренние конфликты. Я стала более целостной личностью.",
                rating: 5,
              },
              {
                name: "Михаил Р.",
                text: "Корпоративное консультирование изменило атмосферу в нашей команде. Мы нашли общие ценности и стали работать эффективнее.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <p className="font-body text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-display font-semibold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
            Контакты
          </h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-body font-semibold text-foreground">Имя</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-body font-semibold text-foreground">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-body font-semibold text-foreground">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите, что вас привело..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-body">
                Отправить запрос
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid md:grid-cols-2 gap-4 font-body text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span>info@psychologist.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center font-body text-muted-foreground">
          <p>© 2024 Психолог и Логотерапевт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
