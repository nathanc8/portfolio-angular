export class Tag {
    static readonly ANGULAR = new Tag('Angular', './assets/icons/angular.svg', 'Angular logo');
    static readonly JAVA = new Tag('Java', './assets/icons/java.svg', 'Java logo');
    static readonly PHP = new Tag('PHP', './assets/icons/php.svg', 'PHP logo');
    static readonly SPRINGBOOT = new Tag('Spring Boot', './assets/icons/spring.svg', 'Spring Framework logo');
    static readonly SQL = new Tag('SQL', './assets/icons/sql.png', 'SQL logo');
    static readonly RESTAPI = new Tag('Rest API', './assets/icons/api.svg', 'API logo');
    static readonly POSTMAN = new Tag('Postman', './assets/icons/postman.svg', 'POSTMAN logo');
    static readonly TYPESCRIPT = new Tag('Typescript', './assets/icons/typescript.svg', 'Typescript logo');
    static readonly JAVASCRIPT = new Tag('Javascript', './assets/icons/javascript.svg', 'Javascript logo');
    static readonly HTML5 = new Tag('HTML5', './assets/icons/html.svg', 'HTML5 logo');
    static readonly CSS = new Tag('CSS', './assets/icons/css.svg', 'CSS3 logo');
    static readonly BOOTSTRAP = new Tag('Bootstrap', './assets/icons/bootstrap.svg', 'Bootstrap logo');
    static readonly DOCKER = new Tag('Docker', './assets/icons/docker.svg', 'Docker logo');
    static readonly HIBERNATE = new Tag('Hibernate', './assets/icons/hibernate.svg', 'Hibernate logo');
    static readonly TAILWIND = new Tag('Tailwind', './assets/icons/tailwind.svg', 'Tailwind logo');
    static readonly LUA = new Tag('Lua', './assets/icons/lua.svg', 'LUA logo');
    static readonly OOP = new Tag('OOP', './assets/icons/oop.png', 'Object-oriented programming logo');
    static readonly JPA = new Tag('JPA', './assets/icons/jpa.png', 'Java Persistance logo');

    private constructor(
        private readonly key: string,
        public readonly image: string,
        public readonly tagAlt: string,
    ) {}

    toString() {
        return this.key;
    }
}
