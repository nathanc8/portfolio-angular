export class Tag {
    // @Todo modifier les tags et éventuellement changer intégralement cette classe pour ajouter des images
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly PHP = new Tag('PHP', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS = new Tag('CSS', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly TAILWIND = new Tag('Tailwind', '#192129');
    static readonly LUA = new Tag('Lua', '#192129');
    static readonly OOP = new Tag('OOP', '#192129');

    private constructor(
        private readonly key: string,
        public readonly color: string,
    ) {}

    toString() {
        return this.key;
    }
}
